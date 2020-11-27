CREATE TABLE Dienststelle(
DSID INT PRIMARY KEY,
Name VARCHAR (30),
Strasse VARCHAR (30),
HausNr VARCHAR (30),
Stadt VARCHAR (30));

INSERT INTO Dienststelle VALUES
(10, 'Stadt Mitte', NULL, NULL, 'Muenchen'),
(11, 'Stadt Mitte', NULL, NULL, 'Nuernberg'),
(12, 'Stadt Mitte', NULL, NULL, 'Augsburg');

CREATE TABLE Polizist(
PersNr INT Primary KEY,
DSID INT REFERENCES Dienststelle(DSID),
Vorname VARCHAR (30),
Nachname VARCHAR (30),
Dienstgrad VARCHAR (30),
Gehalt INT);

INSERT INTO Polizist
VALUES
(1, 10, 'Hans', 'Müller', 'Polizeimeister', 40000),
(2, 11, 'Josef', 'Fischer', 'Polizeihauptmeister', 45000),
(3, 10, 'Andreas', 'Schmidt', 'Polizeikommisar', 50000),
(4, 12, 'Stefan', 'Hoffmann', 'Polizeidirektor', 70000),
(5, 11, 'Sebastian', 'Wagner', 'Polizeioberkommisar', 60000);

CREATE TABLE Fall(
AkZ VARCHAR (30) PRIMARY KEY,
Titel VARCHAR (30),
Beschreibung VARCHAR (50),
Status VARCHAR (30));

INSERT INTO Fall
VALUES
('VR30932', 'Mord im Fussballstadion', 'Toter BVB-Fan', 'bearbeitet');

CREATE TABLE Arbeitet_An(
PersNr INT References Polizist(PersNr),
AkZ VARCHAR (30) References Fall(AkZ),
Von DATE,
Bis DATE,
PRIMARY KEY (PersNr, AkZ));

INSERT INTO Arbeitet_An VALUES
(1, 'VR30932', '2012-02-15', '2012-04-12'),
(2, 'VR30932', '2012-02-15', '2012-04-12');

CREATE TABLE Vorgesetzte(
PersNr INT References Polizist(PersNr),
PersNr_Vorgesetzter INT References Polizist(PersNr),
PRIMARY KEY (PersNr, PersNr_Vorgesetzter));

INSERT INTO Vorgesetzte VALUES
(1,3),
(1,4),
(2,5),
(2,4);
