
create table MapData(
	ID int identity(1,1) primary key,
	GPSN decimal(9,6) not null,
	GPSW decimal(9,6) not null,
	City nchar(30) not null,
	Address nchar(60),
	State nchar(40) not null
);

create table Users(
	ID int primary key foreign key references MapData(ID),
	UserName nchar(30) unique not null,
	Password nchar(30) not null,
	FName nchar(30) not null,
	LName nchar(30),
	Phone decimal(15,0),
	Email nchar(50)
);

create table Locations(
	ID int primary key foreign key references MapData(ID),
	Title nchar(40) unique not null,
	Comment nchar(500)
);

create table Items(
	ID int identity(1,1) primary key,
	LocID int foreign key references MapData(ID),
	Name nchar(30) not null,
	Price money,
	Availibility tinyint not null
);

create table CareCenter(
	ID int primary key foreign key references MapData(ID),
	ProvidesTests bit not null,
	TestPrice money
);

create table Zone(
	ID int primary key foreign key references MapData(ID),
	Rating tinyint not null,
	IsSafe bit not null
);
