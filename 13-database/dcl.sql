-- DCL
-- 사용자 권한 부여 명령어
-- GRANT permission_type ON dbname.table_name TO username@host IDENTIFIED BY 'my_password'
-- [with grant option];

-- 호스트: 로컬 호스트
-- grant all privileges on *.* to 'user'@'local host' identified by '4321' with grant option;

-- 권한 확인
show grants;

-- 1. 계정 생성
create user 'user'@'localhost' identified by '4321';
select * from mysql.user; -- 존재하는 계정 확인
flush privileges;  -- 캐시 비우기

grant all privileges on *.* to 'user'@'localhost';
grant all privileges on *.* to 'user'@'%';

-- "%" 권한을 가진 계정 먼저 생성
create user 'user3'@'%' identified by '4321';

-- 권한 삭제
revoke privileges on *.* from 'user'@'localhost';

-- 계정 삭제
drop user 'user'@'localhost';

-- 계정 수정(비밀번호 변경)
alter user 'user'@'localhost' identified by '1234';

-- 저장
flush privileges;