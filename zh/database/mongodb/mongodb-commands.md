# Commands

[Command Helpers](https://docs.mongodb.com/manual/reference/mongo-shell/#command-helpers)

```sh
mongo
db.version()

show dbs
use <db>
show collections

db.help()
db.<collection>.help()

db.stats()
db.<collection>.stats()
```

```sh
# 查询集合
db.collection.find()
# 集合数目
db.collection.count()
db.collection.find().count()
# 分页
db.collection.find().limit(10).skip(1)
# 条件查询
db.buckets.find({ _id: ObjectId("5fa0c50274af09562c7e9992") })
db.getCollection("ddd.fileInfos").find({ _id: JUUID("ab8a6a00-f22d-4cfa-9a19-510d9935e0a1") })
```

```sh
# 建立文本索引
db.collection.createIndex({
    "describe": "text"
},{
    name: "text_describe"
})

# Like (mongoDB 支持正则表达式)
select * from users where name like "%hurry%";
db.users.find({name:/hurry/}); 

select * from users where name like "hurry%";
db.users.find({name:/^hurry/}); 
```