
create table MapData(
	ID int identity(1,1) primary key,
	GPSN decimal(9,6),
	GPSW decimal(9,6),
	City nchar(30),
	Address nchar(60),
	State nchar(40),
  CONSTRAINT chk_location CHECK((GPSN IS NOT NULL AND GPSW IS NOT NULL) OR (CITY IS NOT NULL AND STATE IS NOT NULL)) 
);

create table Users(
	ID int primary key 
  Loc INT foreign key references MapData(ID),
	UserName nchar(30) unique not null,
	Password nchar(30) not null,
	FName nchar(30) not null,
	LName nchar(30),
	Phone decimal(15,0),
	Email nchar(50)
);

create table GenericResource(
	ID int IDENTITY primary key foreign key references MapData(ID),
	Title nchar(40) unique not null,
	Comment nchar(500)
);



create table ConsumableResource(
	ID int identity(1,1) primary key,
  Loc_ID FOREIGN KEY REFERENCES MapData(ID) not null,
  Price MONEY,
  Quantity INT NOT NULL CHECK (Quantity>0)
);

create table HealthResource(
	ID int IDENTITY primary key,
  Resource_ID FOREIGN KEY REFERENCES GenericResource(ID) not null,
	ProvidesTests bit not null DEFAULT false,
	TestPrice money
);

CREATE TABLE HealthResourceServices(
  ID INT IDENTITY PRIMARY KEY,
  HealthRes INT IDENTITY FOREIGN KEY REFERENCES HealthResource(id) not null,
  ServiceName VARCHAR(50) NOT NULL,
  ServiceDesc VARCHAR(50) NOT NULL,
  AvgWaitHours INT,
  EstCost Money NOT NULL DEFAULT 0
);

CREATE TABLE ShelterResource(
  ID INT IDENTITY PRIMARY KEY,
  Resource_ID FOREIGN KEY REFERENCES GenericResource(ID) not null,
  Vacancy INT NOT NULL CHECK (Vacancy>0),
  Rating tinyint not null,
	IsSafe bit not null
);
  
