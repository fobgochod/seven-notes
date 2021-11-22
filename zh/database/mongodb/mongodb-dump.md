# 备份恢复

## 文档

[The MongoDB Database Tools Documentation](https://docs.mongodb.com/database-tools)

## Sample Data

[Import Data into MongoDB¶](https://docs.mongodb.com/guides/server/import/#procedure)

inventory.crud.json

```sh
use test

db.dept.drop();
db.dept.insert({ deptno: 10, dname: 'ACCOUNTING', loc: 'NEW YORK' });
db.dept.insert({ deptno: 20, dname: 'RESEARCH', loc: 'DALLAS' });
db.dept.insert({ deptno: 30, dname: 'SALES', loc: 'CHICAGO' });
db.dept.insert({ deptno: 40, dname: 'OPERATIONS', loc: 'BOSTON' });

db.emp.drop();
db.emp.insert({ empno: 7369, ename: 'SMITH', job: 'CLERK', mgr: '7902', hiredate: '1980-12-17', sal: 800.00, comm: null, deptno: 20 });
db.emp.insert({ empno: 7499, ename: 'ALLEN', job: 'SALESMAN', mgr: 7698, hiredate: '1981-02-20', sal: 1600.00, comm: 300.00, deptno: 30 });
db.emp.insert({ empno: 7521, ename: 'WARD', job: 'SALESMAN', mgr: 7698, hiredate: '1981-02-22', sal: 1250.00, comm: 500.00, deptno: 30 });
db.emp.insert({ empno: 7566, ename: 'JONES', job: 'MANAGER', mgr: 7839, hiredate: '1981-04-02', sal: 2975.00, comm: null, deptno: 20 });
db.emp.insert({ empno: 7654, ename: 'MARTIN', job: 'SALESMAN', mgr: 7698, hiredate: '1981-09-28', sal: 1250.00, comm: 1400.00, deptno: 30 });
db.emp.insert({ empno: 7698, ename: 'BLAKE', job: 'MANAGER', mgr: 7839, hiredate: '1981-05-01', sal: 2850.00, comm: null, deptno: 30 });
db.emp.insert({ empno: 7782, ename: 'CLARK', job: 'MANAGER', mgr: 7839, hiredate: '1981-06-09', sal: 2450.00, comm: null, deptno: 10 });
db.emp.insert({ empno: 7788, ename: 'SCOTT', job: 'ANALYST', mgr: 7566, hiredate: '1987-04-19', sal: 3000.00, comm: null, deptno: 20 });
db.emp.insert({ empno: 7839, ename: 'KING', job: 'PRESIDENT', mgr: null, hiredate: '1981-11-17', sal: 5000.00, comm: null, deptno: 10 });
db.emp.insert({ empno: 7844, ename: 'TURNER', job: 'SALESMAN', mgr: 7698, hiredate: '1981-09-08', sal: 1500.00, comm: 0.00, deptno: 30 });
db.emp.insert({ empno: 7876, ename: 'ADAMS', job: 'CLERK', mgr: 7788, hiredate: '1987-05-23', sal: 1100.00, comm: null, deptno: 20 });
db.emp.insert({ empno: 7900, ename: 'JAMES', job: 'CLERK', mgr: 7698, hiredate: '1981-12-03', sal: 950.00, comm: null, deptno: 30 });
db.emp.insert({ empno: 7902, ename: 'FORD', job: 'ANALYST', mgr: 7566, hiredate: '1981-12-03', sal: 3000.00, comm: null, deptno: 20 });
db.emp.insert({ empno: 7934, ename: 'MILLER', job: 'CLERK', mgr: 7782, hiredate: '1982-01-23', sal: 1300.00, comm: null, deptno: 10 });
```

## 备份

```sh
# 备份数据库test到/DAP/DB/MongoDB/
mongodump --db=test --out=/DAP/DB/MongoDB/
# 备份数据库test下的表emp到/DAP/DB/MongoDB/
mongodump --db=test --collection=emp --out=/DAP/DB/MongoDB/
```

## 恢复

```sh
# 恢复数据到原库
mongorestore /DAP/DB/MongoDB/

# 恢复数据库test中的表emp
mongorestore --nsInclude=test.emp /DAP/DB/MongoDB/

# 通过json文件恢复数据到指定数据库、指定表
mongorestore --db=testStore --collection=empStore /DAP/DB/MongoDB/test/emp.bson
```

## FAQ

```sh
# 阿里云MongoDB快照恢复数据

# 1. 删除dbpath目录下的mongod.lock
rm -f /var/lib/mongo/mongod.lock
# 2. 将data目录下所有文件授权给当前用户 root忽略， 
chown -R user:user
# 3. 清除log下目录
rm -rf /var/log/mongodb/*
# 4. 修复数据
./mongod --repair --dbpath /var/lib/mongo/
# 5. 按配置启动服务端
./mongod --config mongodb.config
6. 启动客户端
mongo
```