-- sudo mysql < Musik.sql
DROP DATABASE IF EXISTS Musik;
CREATE DATABASE Musik;
USE Musik;

CREATE TABLE Album (
  ANr int(11) PRIMARY KEY,
  Titel varchar(20) NOT NULL,
  Typ varchar(20),
  Firma varchar(20),
  Preis decimal(5,0)
);

CREATE TABLE Band (
  BName varchar(20) PRIMARY KEY,
  Musikrichtung varchar(20),
  Gruendungsjahr int(11),
  Aktiv tinyint(1)
);

CREATE TABLE herausgegeben (
  ANr int(11) REFERENCES Album(ANr),
  BName varchar(20) REFERENCES Band(BName),
  Jahr int(11),
  PRIMARY KEY (ANr, BName)
);

CREATE TABLE Musiker (
  ID int(11) PRIMARY KEY,
  Vorname varchar(20),
  Name varchar(20),
  GebJahr int(11),
  BName varchar(20) REFERENCES Band(BName)
);

INSERT INTO Album (ANr, Titel, Typ, Firma, Preis) VALUES
(1, 'Sin after sin', NULL, 'CBS', '16'),
(2, 'Highway to hell', NULL, 'Atlantic Records', '20'),
(3, 'Metallica', NULL, 'Electra Records', '17'),
(4, 'Paranoid', NULL, 'Vertigo Records', '15'),
(5, 'High Hopes', NULL, 'Col', '14'),
(6, 'Tyr', NULL, 'I.R.S. Records', '9');

INSERT INTO Band (BName, Musikrichtung, Gruendungsjahr, Aktiv) VALUES
('ACDC', 'Hardrock', 1973, 1),
('Black Sabbath', 'Hardrock', 1969, 0),
('Bruce Springsteen', 'Rock', 1971, 1),
('Judas Priest', 'Heavy Metal', 1969, 1),
('Lynyrd Skynyrd', 'Southern Rock', 1964, 1),
('Metallica', 'Heavy Metal', 1981, 1);

INSERT INTO herausgegeben (ANr, BName, Jahr) VALUES
(1, 'Judas Priest', 1977),
(2, 'ACDC', 1979),
(3, 'Metallica', 1999),
(4, 'Black Sabbath', 1970),
(6, 'Black Sabbath', 1990);

INSERT INTO Musiker (ID, Vorname, Name, GebJahr, BName) VALUES
(1, 'Ozzy', 'Osbourne', 1948, 'Black Sabbath'),
(2, 'Bruce', 'Springsteen', 1949, 'Bruce Springsteen'),
(3, 'Matt', 'Chamberlain', 1967, 'Bruce Springsteen'),
(4, 'Angus', 'Young', 1955, 'ACDC'),
(5, 'Kirk', 'Hammett', 1962, 'Metallica'),
(6, 'Malcom', 'Young', 1953, 'ACDC'),
(7, 'Robert', 'Trujillo', 1964, 'Metallica');
