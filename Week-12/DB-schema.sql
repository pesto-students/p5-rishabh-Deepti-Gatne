create database warehousass;
use warehousass;
CREATE TABLE cities (
    city CHAR(20) PRIMARY KEY,
    state CHAR(20)
);
create table warehouse(
	wid INTEGER primary key,
    wname CHAR(30),
    location CHAR(20),
    EXTRA json,
    constraint foreign key(location) references cities(city)
);
CREATE TABLE stores (
    sid INTEGER PRIMARY KEY,
    sname CHAR(20),
    location CHAR(20),
    wwid INTEGER,
    CONSTRAINT FOREIGN KEY (location)
        REFERENCES cities (city),
    CONSTRAINT FOREIGN KEY (wwid)
        REFERENCES warehouse (wid)
);
CREATE TABLE customer (
    cno INTEGER PRIMARY KEY,
    cname CHAR(50),
    caddr VARCHAR(50),
    ccity CHAR(20)
);
CREATE TABLE orders (
    ono INT PRIMARY KEY,
    odate DATE,
    cno INTEGER,
    CONSTRAINT FOREIGN KEY (cno)
        REFERENCES customer (cno)
);
CREATE TABLE items (
    ino INTEGER PRIMARY KEY,
    descr TEXT,
    weight DECIMAL(5 , 2 ),
    cost DECIMAL(5 , 2 )
);
CREATE TABLE orderitem (
    ono INTEGER,
    ino INTEGER,
    CONSTRAINT FOREIGN KEY (ono)
        REFERENCES orders (ono),
    CONSTRAINT FOREIGN KEY (ino)
        REFERENCES items (ino),
    UNIQUE (ono , ino)
);
CREATE TABLE storeitem (
    sid INTEGER,
    ino INTEGER,
    CONSTRAINT FOREIGN KEY (sid)
        REFERENCES stores (sid),
    CONSTRAINT FOREIGN KEY (ino)
        REFERENCES items (ino),
    UNIQUE (sid , ino)
);