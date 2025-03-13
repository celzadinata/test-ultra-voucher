
-- DDL Nya
create table keluarga(
    id serial primary key, 
    name varchar(100), 
    parent_id int null references keluarga(id)
    );

insert into keluarga (id, name, parent_id) values (1, 'Zaki', 2), (2, 'Ilham', null), (3, 'Irwan', 2), (4, 'Arka', 3);


-- Jawaban DML/SQL nya
select kp.id, kp.name, kf.name 
from keluarga kp 
left join keluarga kf on kp.parent_id = kf.id;