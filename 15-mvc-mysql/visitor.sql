create table visitor (
	id int not null primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext
);

desc visitor;

insert into visitor
values ('1', '홍길동', '내가 왔다.'),
('2', '이찬혁', '으라차차');

select * from visitor;

select * from mysql.user;

-- user 생성
create user 'user'@'localhost' identified by '1234';
-- user 계정에 DB 권한 부여 (모든 DB에 덥근 가능하도록)
grant all privileges on *.* to 'user'@'localhost' with grant option;
-- 현재 사용중인 MySQL 캐시 지우고 새로운 설정 적용
flush privileges;
