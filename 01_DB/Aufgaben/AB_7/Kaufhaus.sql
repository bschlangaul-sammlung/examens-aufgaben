-- AB 2 AB 7

-- sudo mysql  < Kaufhaus.sql
-- DROP DATABASE IF EXISTS Kaufhaus;
-- CREATE DATABASE Kaufhaus;
-- USE Kaufhaus;

CREATE TABLE Artikel (
  ArtNr INTEGER PRIMARY KEY NOT NULL,
  Bezeichnung VARCHAR(100) NOT NULL,
  Verkaufspreis FLOAT(2),
  Einkaufspreis FLOAT(2)
);

CREATE TABLE Abteilung (
  Abteilungsname VARCHAR(60) NOT NULL,
  Stockwerk VARCHAR(10) NOT NULL,
  Abteilungsleiter VARCHAR(100),
  PRIMARY KEY (Abteilungsname, Stockwerk)
);

CREATE TABLE Bestand (
  Abteilungsname VARCHAR(100) REFERENCES Abteilung(Abteilungsname),
  ArtNr INTEGER REFERENCES Artikel(ArtNr),
  Vorrat INTEGER,
  PRIMARY KEY (Abteilungsname, ArtNr)
);

-- Artikel

INSERT INTO Artikel VALUES (95, 'Kamm', 1.25, 0.80);
INSERT INTO Artikel VALUES (97, 'Kamm', 0.99, 0.75);
INSERT INTO Artikel VALUES (507, 'Seife', 3.93, 2.45);
INSERT INTO Artikel VALUES (1056, 'Zwieback', 1.20, 0.90);
INSERT INTO Artikel VALUES (1401, 'Räucherlachs', 4.90, 3.60);
INSERT INTO Artikel VALUES (2045, 'Herrenhose', 37.25, 24.45);
INSERT INTO Artikel VALUES (2046, 'Herrenhose', 20.00, 17.00);
INSERT INTO Artikel VALUES (2340, 'Sommerkleid', 94.60, 71.50);

-- Abteilung

INSERT INTO Abteilung VALUES ('Lebensmittel', 'I', 'Josef Kunz');
INSERT INTO Abteilung VALUES ('Lebensmittel', 'EG', 'Monika Stiehl');
INSERT INTO Abteilung VALUES ('Textilien', 'II', 'Monika Stiehl');

-- Bestand

INSERT INTO Bestand VALUES ('Lebensmittel', 1056, 129);
INSERT INTO Bestand VALUES ('Lebensmittel', 1401, 200);
INSERT INTO Bestand VALUES ('Textilien', 2045, 14);
