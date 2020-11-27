-- sudo mysql  < Personalverwaltung.sql
DROP DATABASE IF EXISTS Personalverwaltung;
CREATE DATABASE Personalverwaltung;
USE Personalverwaltung;

CREATE TABLE Mitarbeiter(
MitarbeiterID Integer PRIMARY KEY,
Vorname VARCHAR(30),
Nachname VARCHAR(30),
Vorgesetzter Integer REFERENCES Mitarbeiter(MitarbeiterID),
AbteilungsID Integer REFERENCES Abteilung(AbteilungsID),
Telefonnummer Long,
Gehalt Double
);

CREATE TABLE Abteilung(
AbteilungsID Integer PRIMARY KEY,
Bezeichnung VARCHAR(30)
);

INSERT INTO Abteilung VALUES (1,"Buchhaltung");
INSERT INTO Abteilung VALUES (2,'Geschaeftemacher');
INSERT INTO Abteilung VALUES (3,"Buchhaltung");
INSERT INTO Abteilung VALUES (4, "Qualitaetskontrolle");
INSERT INTO Abteilung VALUES (5, "Qualitaetskontrolle");

INSERT INTO Mitarbeiter VALUES (1,"Hans", 'Meier', 11, 1, 2313432, 12345);
INSERT INTO Mitarbeiter VALUES (2,"Fred", 'Maier', 11, 2, 233413432, 1233);
INSERT INTO Mitarbeiter VALUES (11,"Hans", 'Mueller', NULL,3, 3432, 1230454);
INSERT INTO Mitarbeiter VALUES (3,"Hans", 'Fuchs', 2, 1, 2313344, 2345);
INSERT INTO Mitarbeiter VALUES (4,"Fred", 'Hase', 11, 2, 432, 12334);
INSERT INTO Mitarbeiter VALUES (12,"Gerd", 'Mueller', NULL,3, 345552, 154);
INSERT INTO Mitarbeiter VALUES (5, "Josef", "Huber", 12, 4, 786787, 3443);
INSERT INTO Mitarbeiter VALUES (6, "Juergen", "Schmidt", 12, 5, 97854, 6654);