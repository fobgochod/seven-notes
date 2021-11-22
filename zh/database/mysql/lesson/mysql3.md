# mysql调优--索引基本实现原理及索引优化

## 索引基本实现原理

### 数据结构演讲

- 哈希表
- 二叉树
  - 进行数据插入时候，会造成一条腿长一条腿短
  - 树节点过深（IO次数多，瓶颈）
- BST树、二叉搜索树
  - 1
- AVL树
  - 最短子树和最长子树不超过1）
  - 1到N次旋转
  - 插入删除效率低、查询高
  - 节点过深
- 红黑树
  - 最短子树和最长子树不超过2倍
  - 任何一个单分支不能出现两个同色节点
  - 节点过深
- B树
- B+树

## 索引优化

### 索引基本知识

#### 索引的优点
1. 大大减少了服务器需要扫描的数据量
2. 帮助服务器避免排序和临时表
3. 将随机io变成顺序io

#### 索引的用处
1. 快速查找匹配WHERE子句的行
2. 从consideration中消除行,如果可以在多个索引之间进行选择，mysql通常会使用找到最少行的索引
3. 如果表具有多列索引，则优化器可以使用索引的任何最左前缀来查找行
4. 当有表连接的时候，从其他表检索行数据
5. 查找特定索引列的min或max值
6. 如果排序或分组时在可用索引的最左前缀上完成的，则对表进行排序和分组
7. 在某些情况下，可以优化查询以检索值而无需查询数据行

#### 索引的分类
- 主键索引
- 唯一索引
- 普通索引
- 全文索引
- 组合索引

#### 面试技术名词
- 回表
  - 根据辅助索引查询到主键，再根据主键查询整行记录，`回表`表示回到主键这课B+树查找数据
- 覆盖索引
  - 直接通过辅助索引就得到了所有数据，没有回表的过程
  - Using index
- 最左匹配
  - 组合索引才有的概念
- 索引下推
  - 组合索引才有的概念
```sql
select * from table where name = ? and age = ?
# mysql架构：client->server->存储引擎
# 1、没有索引下推（老版本）：首先根据name从存储引擎把符合条件的数据拉取回来，然后在server层再过滤age
# 2、有索引下推后（新版本）：根据name、age两个列的值去匹配对应的记录，直接返回数据 
Using index condition
```

- 谓词下推
- 索引合并
- 索引页分裂、页合并

#### 索引采用的数据结构
- 哈希表(MEMORY)
- B+树(InnoDB、MyISAM)

#### 索引匹配方式
```sql
create table staffs(
    id int primary key auto_increment,
    name varchar(24) not null default '' comment '姓名',
    age int not null default 0 comment '年龄',
    pos varchar(20) not null default '' comment '职位',
    add_time timestamp not null default current_timestamp comment '入职时间'
) charset utf8 comment '员工记录表';
alter table staffs add index idx_nap(name, age, pos);
```

- 全值匹配
>全值匹配指的是和索引中的所有列进行匹配
```sql
explain select * from staffs where name = 'July' and age = '23' and pos = 'dev';
```

- 匹配最左前缀
>只匹配前面的几列
```sql
explain select * from staffs where name = 'July' and age = '23';
explain select * from staffs where name = 'July';
```

- 匹配列前缀
>可以匹配某一列的值的开头部分
```sql
explain select * from staffs where name like 'J%';
explain select * from staffs where name like '%y';
```

- 匹配范围值
>可以查找某一个范围的数据
```sql
explain select * from staffs where name > 'Mary';
```

- 精确匹配某一列并范围匹配另外一列
>可以查询第一列的全部和第二列的部分
```sql
explain select * from staffs where name = 'July' and age > 25;
```

- 只访问索引的查询
>查询的时候只需要访问索引，不需要访问数据行，本质上就是覆盖索引
```sql
explain select name,age,pos from staffs where name = 'July' and age = 25 and pos = 'dev';
```

### 哈希索引

- 基于哈希表的实现，只有精确匹配索引所有列的查询才有效
- 在mysql中，只有memory的存储引擎显式支持哈希索引
- 哈希索引自身只需存储对应的hash值，所以索引的结构十分紧凑，这让哈希索引查找的速度非常快
- 哈希索引的限制
  1. 哈希索引只包含哈希值和行指针，而不存储字段值，索引不能使用索引中的值来避免读取行
  2. 哈希索引数据并不是按照索引值顺序存储的，所以无法进行排序
  3. 哈希索引不支持部分列匹配查找，哈希索引是使用索引列的全部内容来计算哈希值
  4. 哈希索引支持等值比较查询，也不支持任何范围查询
  5. 访问哈希索引的数据非常快，除非有很多哈希冲突，当出现哈希冲突的时候，存储引擎必须遍历链表中的所有行指针，逐行进行比较，直到找到所有符合条件的行
  6. 哈希冲突比较多的话，维护的代价也会很高

- 案例
  - 当需要存储大量的URL，并且根据URL进行搜索查找，如果使用B+树，存储的内容就会很大
  - select id from url where url=""
  - 也可以利用将url使用CRC32做哈希，可以使用以下查询方式：
  - select id fom url where url="" and url_crc=CRC32("")
  - 此查询性能较高原因是使用体积很小的索引来完成查找
  - CRC32: 循环冗余校验

### 组合索引

- 当包含多个列作为索引，需要注意的是正确的顺序依赖于该索引的查询，同时需要考虑如何更好的满足排序和分组的需要
- 案例，建立组合索引a,b,c
  - 不同SQL语句使用索引情况
  ![](/images/mysql/mysql-5.png)

### 聚簇索引与非聚簇索引

- 聚簇索引(InnoDB)
  - 不是单独的索引类型，而是一种数据存储方式，指的是数据行跟相邻的键值紧凑的存储在一起
	- 优点
      1. 可以把相关数据保存在一起
      2. 数据访问更快，因为索引和数据保存在同一个树中
      3. 使用覆盖索引扫描的查询可以直接使用页节点中的主键值
	- 缺点
      1. 聚簇数据最大限度地提高了IO密集型应用的性能，如果数据全部在内存，那么聚簇索引就没有什么优势
      2. 插入速度严重依赖于插入顺序，按照主键的顺序插入是最快的方式
      3. 更新聚簇索引列的代价很高，因为会强制将每个被更新的行移动到新的位置
      4. 基于聚簇索引的表在插入新行，或者主键被更新导致需要移动行的时候，可能面临页分裂的问题
      5. 聚簇索引可能导致全表扫描变慢，尤其是行比较稀疏，或者由于页分裂导致数据存储不连续的时候
- 非聚簇索引(MyISAM)
  - 数据文件跟索引文件分开存放

### 覆盖索引

- 基本介绍
  1. 如果一个索引包含所有需要查询的字段的值，我们称之为覆盖索引
  2. 不是所有类型的索引都可以称为覆盖索引，覆盖索引必须要存储索引列的值
  3. 不同的存储实现覆盖索引的方式不同，不是所有的引擎都支持覆盖索引，memory不支持覆盖索引
- 优势
  1. 索引条目通常远小于数据行大小，如果只需要读取索引，那么mysql就会极大的较少数据访问量
  2. 因为索引是按照列值顺序存储的，所以对于IO密集型的范围查询会比随机从磁盘读取每一行数据的IO要少的多
  3. 一些存储引擎如MYISAM在内存中只缓存索引，数据则依赖于操作系统来缓存，因此要访问数据需要一次系统调用，这可能会导致严重的性能问题
  4. 由于INNODB的聚簇索引，覆盖索引对INNODB表特别有用
- 案例演示
  1. 当发起一个被索引覆盖的查询时，在explain的extra列可以看到using index的信息，此时就使用了覆盖索引
```sql
mysql> explain select store_id,film_id from inventory\G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: inventory
   partitions: NULL
         type: index
possible_keys: NULL
          key: idx_store_id_film_id
      key_len: 3
          ref: NULL
         rows: 4581
     filtered: 100.00
        Extra: Using index
1 row in set, 1 warning (0.01 sec)
```

  2. 在大多数存储引擎中，覆盖索引只能覆盖那些只访问索引中部分列的查询。不过，可以进一步的进行优化，可以使用innodb的二级索引来覆盖查询。  
>例如：actor使用innodb存储引擎，并在last_name字段又二级索引，虽然该索引的列不包括主键actor_id，但也能够用于对actor_id做覆盖查询
```sql
mysql> explain select actor_id,last_name from actor where last_name='HOPPER'\G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: actor
   partitions: NULL
         type: ref
possible_keys: idx_actor_last_name
          key: idx_actor_last_name
      key_len: 137
          ref: const
         rows: 2
     filtered: 100.00
        Extra: Using index
1 row in set, 1 warning (0.00 sec)
```
