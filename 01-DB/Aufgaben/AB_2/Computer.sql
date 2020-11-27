-- AB 2 Einstieg Sql

-- Aufgabe 3: SQL-Anfragen auf einer Tabelle & Relationale Algebra

-- sudo mysql  < Computer.sql
-- DROP DATABASE IF EXISTS Computer;
-- CREATE DATABASE Computer;
-- USE Computer;

CREATE TABLE Computer (
    IP VARCHAR(15) PRIMARY KEY NOT NULL,
    Name VARCHAR(30),
    Hersteller VARCHAR(30),
    Modell VARCHAR(30),
    Standort VARCHAR(30)
);

INSERT INTO Computer VALUES ('10.11.12.1', 'Chiemsee', 'HP', 'Spectre', 'Büro1');
INSERT INTO Computer VALUES ('10.11.12.2', 'Computer2', 'HP', 'Elite', 'Büro1');
INSERT INTO Computer VALUES ('10.11.12.3', 'Computer3', 'HP', 'Spectre', 'Büro1');
INSERT INTO Computer VALUES ('10.11.12.4', 'Computer4', 'HP', 'Elite', 'Büro1');
INSERT INTO Computer VALUES ('10.11.12.5', 'Computer5', 'HP', 'Spectre', 'Büro1');
INSERT INTO Computer VALUES ('10.11.12.6', 'Computer6', 'HP', 'Elite', 'Büro1');
INSERT INTO Computer VALUES ('10.11.12.7', 'Computer7', 'HP', 'Envy', 'Büro1');
INSERT INTO Computer VALUES ('10.11.12.8', 'Computer8', 'DELL', 'G3', 'Büro2');
INSERT INTO Computer VALUES ('10.11.12.9', 'Computer9', 'DELL', 'G7', 'Büro2');
INSERT INTO Computer VALUES ('10.11.12.10', 'Computer10', 'DELL', 'Latitude', 'Büro2');
INSERT INTO Computer VALUES ('10.11.12.11', 'Computer11', 'DELL', 'Alienware', 'Büro2');
INSERT INTO Computer VALUES ('10.11.12.12', 'Computer12', 'DELL', 'Inspirion', 'Büro2');
INSERT INTO Computer VALUES ('10.11.12.13', 'Computer13', 'DELL', 'XPS', 'Büro2');
INSERT INTO Computer VALUES ('10.11.12.14', 'Computer14', 'Apple', 'MacBook Air', 'Büro2');
INSERT INTO Computer VALUES ('10.11.12.15', 'Computer15', 'Apple', 'MacBook Air', 'Büro2');
INSERT INTO Computer VALUES ('10.11.12.16', 'Computer16', 'Apple', 'MacBook Air', 'Büro3');
INSERT INTO Computer VALUES ('10.11.12.17', 'Computer17', 'Apple', 'MacBook Air', 'Büro3');
INSERT INTO Computer VALUES ('10.11.12.18', 'Computer18', 'Apple', 'MacBook Air', 'Büro3');
INSERT INTO Computer VALUES ('10.11.12.19', 'Computer19', 'Apple', 'MacBook Air', 'Büro3');
INSERT INTO Computer VALUES ('10.11.12.20', 'Computer20', 'Apple', 'MacBook Air', 'Büro3');
INSERT INTO Computer VALUES ('10.11.12.21', 'Computer21', 'Apple', 'MacBook Air', 'Büro3');
INSERT INTO Computer VALUES ('10.11.12.22', 'Computer22', 'Apple', 'MacBook Air', 'Büro3');
INSERT INTO Computer VALUES ('10.11.12.23', 'Computer23', 'Apple', 'MacBook Air', 'Büro3');
