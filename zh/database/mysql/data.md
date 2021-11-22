# 基础数据

## Sakila

>下载地址：
[https://dev.mysql.com/doc/index-other.html](https://dev.mysql.com/doc/index-other.html)

## Oracle Scott

```sql
DROP SCHEMA IF EXISTS scott;
CREATE SCHEMA scott;
USE scott;

-- DROP TABLE IF EXISTS emp;
-- DROP TABLE IF EXISTS dept;
-- DROP TABLE IF EXISTS salgrade;
-- DROP TABLE IF EXISTS bonus;

CREATE TABLE IF NOT EXISTS dept (
    deptno INT(4) NOT NULL,
    dname VARCHAR(14) DEFAULT NULL,
    loc VARCHAR(13) DEFAULT NULL, 
    PRIMARY KEY (deptno)
);

CREATE TABLE IF NOT EXISTS emp (
    empno INT(4) NOT NULL,
    ename VARCHAR(10) DEFAULT NULL,
    job VARCHAR(9) DEFAULT NULL,
    mgr INT(4) DEFAULT NULL,
    hiredate DATE DEFAULT NULL,
    sal DECIMAL(7,2) DEFAULT NULL,
    comm DECIMAL(7,2) DEFAULT NULL,
    deptno INT(2) DEFAULT NULL, 
    PRIMARY KEY (empno), KEY fk_deptno (deptno), 
    CONSTRAINT fk_deptno FOREIGN KEY (deptno) REFERENCES dept (deptno)
);

CREATE TABLE IF NOT EXISTS salgrade (
    grade INT(1) DEFAULT NULL,
    losal DECIMAL(7,2) DEFAULT NULL,
    hisal DECIMAL(7,2) DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS bonus (
    ename VARCHAR(10) DEFAULT NULL,
    job VARCHAR(9) DEFAULT NULL,
    sal DECIMAL(7,2) DEFAULT NULL,
    comm DECIMAL(7,2) DEFAULT NULL
);

INSERT IGNORE INTO dept (deptno, dname, loc) VALUES
	(10, 'ACCOUNTING', 'NEW YORK'),
	(20, 'RESEARCH', 'DALLAS'),
	(30, 'SALES', 'CHICAGO'),
	(40, 'OPERATIONS', 'BOSTON');
	
INSERT IGNORE INTO emp (empno, ename, job, mgr, hiredate, sal, comm, deptno) VALUES
	(7369, 'SMITH', 'CLERK', 7902, '1980-12-17', 800.00, NULL, 20),
	(7499, 'ALLEN', 'SALESMAN', 7698, '1981-02-20', 1600.00, 300.00, 30),
	(7521, 'WARD', 'SALESMAN', 7698, '1981-02-22', 1250.00, 500.00, 30),
	(7566, 'JONES', 'MANAGER', 7839, '1981-04-02', 2975.00, NULL, 20),
	(7654, 'MARTIN', 'SALESMAN', 7698, '1981-09-28', 1250.00, 1400.00, 30),
	(7698, 'BLAKE', 'MANAGER', 7839, '1981-05-01', 2850.00, NULL, 30),
	(7782, 'CLARK', 'MANAGER', 7839, '1981-06-09', 2450.00, NULL, 10),
	(7788, 'SCOTT', 'ANALYST', 7566, '1987-04-19', 3000.00, NULL, 20),
	(7839, 'KING', 'PRESIDENT', NULL, '1981-11-17', 5000.00, NULL, 10),
	(7844, 'TURNER', 'SALESMAN', 7698, '1981-09-08', 1500.00, 0.00, 30),
	(7876, 'ADAMS', 'CLERK', 7788, '1987-05-23', 1100.00, NULL, 20),
	(7900, 'JAMES', 'CLERK', 7698, '1981-12-03', 950.00, NULL, 30),
	(7902, 'FORD', 'ANALYST', 7566, '1981-12-03', 3000.00, NULL, 20),
	(7934, 'MILLER', 'CLERK', 7782, '1982-01-23', 1300.00, NULL, 10);

INSERT IGNORE INTO salgrade (grade, losal, hisal) VALUES
	(1, 700.00, 1200.00),
	(2, 1201.00, 1400.00),
	(3, 1401.00, 2000.00),
	(4, 2001.00, 3000.00),
	(5, 3001.00, 9999.00);
```