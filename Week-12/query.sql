select MIN(weight) as MinWt,ino  from items;
select * from warehouse where location='Pune';
select * from  orders where cno=(select cno from customer where cname='Mr.Patil');
select max(scount) from (select count(sid) as scount from stores group by wwid) as t;
select ino from orderitem group by ino having count(ino)=(select max(scount) from (select count(ino) as scount from orderitem group by ino) as t) ;
select ono,orders.cno,odate from  orders,customer where orders.cno=customer.cno;