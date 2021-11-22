# mysql调优--mysql索引优化实现细节

## 优化小细节

#### Cardinality、
 - 基数
 - 评估索引是否合理
 - 估计索引中不重复记录，如果这个相对值很小，可能就要评估索引是否有意义

#### HyperLogLog
- 算法
- 统计某一字段的Distinct Value

::: tip 基数
基数就是指一个集合中不同值的数目，比如[a,b,c,d]的基数就是4，[a,b,c,d,a]的基数还是4，因为a重复了一个，不算。  
基数也可以称之为Distinct Value，简称DV。HyperLogLog算法就是用来计算基数的。  
**基数估计**就是在误差可接受的范围内，快速计算基数。
:::

#### 1、当使用索引列进行查询的时候尽量不要使用表达式，把计算放到业务层而不是数据库层
```sql
select actor_id from actor where actor_id+1=5;
select actor_id from actor where actor_id=4;
```

#### 2、尽量使用主键查询，而不是其他索引，因此主键查询不会触发回表查询

#### 3、使用前缀索引
- 有时候需要索引很长的字符串，这会让索引变的大且慢，通常情况下可以使用某个列开始的部分字符串，这样大大的节约索引空间，从而提高索引效率，但这会降低索引的选择性，索引的选择性是指不重复的索引值和数据表记录总数的比值，范围从1/#T到1之间。索引的选择性越高则查询效率越高，因为选择性更高的索引可以让mysql在查找的时候过滤掉更多的行。
- 一般情况下某个列前缀的选择性也是足够高的，足以满足查询的性能，但是对应BLOB,TEXT,VARCHAR类型的列，必须要使用前缀索引，因为mysql不允许索引这些列的完整长度，使用该方法的诀窍在于要选择足够长的前缀以保证较高的选择性，通过又不能太长。
- 案例演示：
```sql
--创建数据表
create table citydemo(city varchar(50) not null);
insert into citydemo(city) select city from city;

--重复执行5次下面的sql语句
insert into citydemo(city) select city from citydemo;

--更新城市表的名称
update citydemo set city=(select city from city order by rand() limit 1);

--查找最常见的城市列表，发现每个值都出现45-65次，
select count(*) as cnt,city from citydemo group by city order by cnt desc limit 10;

--查找最频繁出现的城市前缀，先从3个前缀字母开始，发现比原来出现的次数更多，可以分别截取多个字符查看城市出现的次数
select count(*) as cnt,left(city,3) as pref from citydemo group by pref order by cnt desc limit 10;
select count(*) as cnt,left(city,7) as pref from citydemo group by pref order by cnt desc limit 10;
--此时前缀的选择性接近于完整列的选择性

--还可以通过另外一种方式来计算完整列的选择性，可以看到当前缀长度到达7之后，再增加前缀长度，选择性提升的幅度已经很小了
select count(distinct left(city,3))/count(*) as sel3,
count(distinct left(city,4))/count(*) as sel4,
count(distinct left(city,5))/count(*) as sel5,
count(distinct left(city,6))/count(*) as sel6,
count(distinct left(city,7))/count(*) as sel7,
count(distinct left(city,8))/count(*) as sel8 
from citydemo;

--计算完成之后可以创建前缀索引
alter table citydemo add key(city(7));

--注意：前缀索引是一种能使索引更小更快的有效方法，但是也包含缺点：mysql无法使用前缀索引做order by 和 group by。 
```


#### 4、使用索引扫描来排序

1. Mysql有两种方式可以生成有序的结果：通过排序操作或者按索引顺序扫描，如果explain出来的type列的值为index,则说明mysql使用了索引扫描来做排序

​2. 扫描索引本身是很快的，因为只需要从一条索引记录移动到紧接着的下一条记录。但如果索引不能覆盖查询所需的全部列，那么就不得不每扫描一条索引记录就得回表查询一次对应的行，这基本都是随机IO，因此按索引顺序读取数据的速度通常要比顺序地全表扫描慢

3. Mysql可以使用同一个索引即满足排序，又用于查找行，如果可能的话，设计索引时应该尽可能地同时满足这两种任务。

​4. 只有当索引的列顺序和order by子句的顺序完全一致，并且所有列的排序方式都一样时，mysql才能够使用索引来对结果进行排序，如果查询需要关联多张表，则只有当orderby子句引用的字段全部为第一张表时，才能使用索引做排序。order by子句和查找型查询的限制是一样的，需要满足索引的最左前缀的要求，否则，mysql都需要执行顺序操作，而无法利用索引排序

```sql
--sakila数据库中rental表在rental_date,inventory_id,customer_id上有rental_date的索引
--使用rental_date索引为下面的查询做排序
explain select rental_id,staff_id from rental where rental_date='2005-05-25' order by inventory_id,customer_id\G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: rental
   partitions: NULL
         type: ref
possible_keys: rental_date
          key: rental_date
      key_len: 5
          ref: const
         rows: 1
     filtered: 100.00
        Extra: Using index condition
1 row in set, 1 warning (0.00 sec)
--order by子句不满足索引的最左前缀的要求，也可以用于查询排序，这是因为所以你的第一列被指定为一个常数

--该查询为索引的第一列提供了常量条件，而使用第二列进行排序，将两个列组合在一起，就形成了索引的最左前缀
explain select rental_id,staff_id from rental where rental_date='2005-05-25' order by inventory_id desc\G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: rental
   partitions: NULL
         type: ref
possible_keys: rental_date
          key: rental_date
      key_len: 5
          ref: const
         rows: 1
     filtered: 100.00
        Extra: Using where
1 row in set, 1 warning (0.00 sec)

--下面的查询不会利用索引
explain select rental_id,staff_id from rental where rental_date>'2005-05-25' order by rental_date,inventory_id\G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: rental
   partitions: NULL
         type: ALL
possible_keys: rental_date
          key: NULL
      key_len: NULL
          ref: NULL
         rows: 16005
     filtered: 50.00
        Extra: Using where; Using filesort

--该查询使用了两中不同的排序方向，但是索引列都是正序排序的
explain select rental_id,staff_id from rental where rental_date>'2005-05-25' order by inventory_id desc,customer_id asc\G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: rental
   partitions: NULL
         type: ALL
possible_keys: rental_date
          key: NULL
      key_len: NULL
          ref: NULL
         rows: 16005
     filtered: 50.00
        Extra: Using where; Using filesort
1 row in set, 1 warning (0.00 sec)

--该查询中引用了一个不再索引中的列
explain select rental_id,staff_id from rental where rental_date>'2005-05-25' order by inventory_id,staff_id\G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: rental
   partitions: NULL
         type: ALL
possible_keys: rental_date
          key: NULL
      key_len: NULL
          ref: NULL
         rows: 16005
     filtered: 50.00
        Extra: Using where; Using filesort
1 row in set, 1 warning (0.00 sec)
```


#### 5、union all,in,or都能够使用索引，但是推荐使用in
```sql
explain select * from actor where actor_id = 1 union all select * from actor where actor_id = 2;
explain select * from actor where actor_id in (1,2);
explain select * from actor where actor_id = 1 or actor_id =2;
```

#### 6、范围列可以用到索引
- 范围条件是：<、<=、>、>=、between
- 范围列可以用到索引，但是范围列后面的列无法用到索引，索引最多用于一个范围列

#### 7、强制类型转换会全表扫描
```sql
create table user(id int,name varchar(10),phone varchar(11));
alter table user add index idx_1(phone);

# 不会触发索引
explain select * from user where phone=13800001234;
# 触发索引
explain select * from user where phone='13800001234';
```

#### 8、更新十分频繁，数据区分度不高的字段上不宜建立索引
- 更新会变更B+树，更新频繁的字段建议索引会大大降低数据库性能
- 类似于性别这类区分不大的属性，建立索引是没有意义的，不能有效的过滤数据，
- 一般区分度在80%以上的时候就可以建立索引，区分度可以使用 count(distinct(列名))/count(*) 来计算

#### 9、创建索引的列，不允许为null，可能会得到不符合预期的结果

#### 10、当需要进行表连接的时候，最好不要超过三张表，因为需要join的字段，数据类型必须一致
- Simple Nested-Loop Join
  ![](/images/mysql/mysql-6.png)
- Index Nested-Loop Join
  ![](/images/mysql/mysql-7.png)
- Block Nested-Loop Join
  ![](/images/mysql/mysql-8.png)

#### 11、能使用limit的时候尽量使用limit

#### 12、单表索引建议控制在5个以内

#### 13、单索引字段数不允许超过5个（组合索引）

#### 14、创建索引的时候应该避免以下错误概念
- 索引越多越好
- 过早优化，在不了解系统的情况下进行优化


## 索引监控

- show status like 'Handler_read%';
- 参数解释
  - Handler_read_first：读取索引第一个条目的次数
  - Handler_read_key：通过index获取数据的次数
  - Handler_read_last：读取索引最后一个条目的次数
  - Handler_read_next：通过索引读取下一条数据的次数
  - Handler_read_prev：通过索引读取上一条数据的次数
  - Handler_read_rnd：从固定位置读取数据的次数
  - Handler_read_rnd_next：从数据节点读取下一条数据的次数

## 简单案例

>预先准备好数据
```sql
SET FOREIGN_KEY_CHECKS=0;
DROP TABLE IF EXISTS `itdragon_order_list`;
CREATE TABLE `itdragon_order_list` (
  `id` bigint(11) NOT NULL AUTO_INCREMENT COMMENT '主键id，默认自增长',
  `transaction_id` varchar(150) DEFAULT NULL COMMENT '交易号',
  `gross` double DEFAULT NULL COMMENT '毛收入(RMB)',
  `net` double DEFAULT NULL COMMENT '净收入(RMB)',
  `stock_id` int(11) DEFAULT NULL COMMENT '发货仓库',
  `order_status` int(11) DEFAULT NULL COMMENT '订单状态',
  `descript` varchar(255) DEFAULT NULL COMMENT '客服备注',
  `finance_descript` varchar(255) DEFAULT NULL COMMENT '财务备注',
  `create_type` varchar(100) DEFAULT NULL COMMENT '创建类型',
  `order_level` int(11) DEFAULT NULL COMMENT '订单级别',
  `input_user` varchar(20) DEFAULT NULL COMMENT '录入人',
  `input_date` varchar(20) DEFAULT NULL COMMENT '录入时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10003 DEFAULT CHARSET=utf8;

INSERT INTO itdragon_order_list VALUES ('10000', '81X97310V32236260E', '6.6', '6.13', '1', '10', 'ok', 'ok', 'auto', '1', 'itdragon', '2017-08-28 17:01:49');
INSERT INTO itdragon_order_list VALUES ('10001', '61525478BB371361Q', '18.88', '18.79', '1', '10', 'ok', 'ok', 'auto', '1', 'itdragon', '2017-08-18 17:01:50');
INSERT INTO itdragon_order_list VALUES ('10002', '5RT64180WE555861V', '20.18', '20.17', '1', '10', 'ok', 'ok', 'auto', '1', 'itdragon', '2017-09-08 17:01:49');
```

逐步开始进行优化：

>第一个案例：
```sql
select * from itdragon_order_list where transaction_id = "81X97310V32236260E";
--通过查看执行计划发现type=all,需要进行全表扫描
explain select * from itdragon_order_list where transaction_id = "81X97310V32236260E";

--优化一、为transaction_id创建唯一索引
 create unique index idx_order_transaID on itdragon_order_list (transaction_id);
--当创建索引之后，唯一索引对应的type是const，通过索引一次就可以找到结果，普通索引对应的type是ref，表示非唯一性索引赛秒，找到值还要进行扫描，直到将索引文件扫描完为止，显而易见，const的性能要高于ref
 explain select * from itdragon_order_list where transaction_id = "81X97310V32236260E";
 
 --优化二、使用覆盖索引，查询的结果变成 transaction_id,当extra出现using index,表示使用了覆盖索引
 explain select transaction_id from itdragon_order_list where transaction_id = "81X97310V32236260E";
```

>第二个案例
```sql
--创建复合索引
create index idx_order_levelDate on itdragon_order_list (order_level,input_date);

--创建索引之后发现跟没有创建索引一样，都是全表扫描，都是文件排序
explain select * from itdragon_order_list order by order_level,input_date;

--可以使用force index强制指定索引
explain select * from itdragon_order_list force index(idx_order_levelDate) order by order_level,input_date;
--其实给订单排序意义不大，给订单级别添加索引意义也不大，因此可以先确定order_level的值，然后再给input_date排序
explain select * from itdragon_order_list where order_level=3 order by input_date;
```
