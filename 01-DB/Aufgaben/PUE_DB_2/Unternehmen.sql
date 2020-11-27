-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 27. Okt 2019 um 22:37
-- Server-Version: 10.4.8-MariaDB
-- PHP-Version: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `unternehmen`
--

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `abteilung`
--

CREATE TABLE `abteilung` (
  `Nummer` int(11) NOT NULL,
  `Name` varchar(20) DEFAULT NULL,
  `Budget` float DEFAULT NULL,
  `Manager` varchar(20) NOT NULL,
  `UntNr` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `abteilung`
--

INSERT INTO `abteilung` (`Nummer`, `Name`, `Budget`, `Manager`, `UntNr`) VALUES
(1, 'Personal_Care', 20000, 'Huber', 1),
(11, 'Tequilla_Mix', 50000, 'Taylor', 2),
(21, 'Nerds', 500, 'Gates', 3);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `mitarbeiter`
--

CREATE TABLE `mitarbeiter` (
  `Nummer` int(11) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Alter` int(11) NOT NULL,
  `Gehalt` float NOT NULL,
  `AbtNr` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `mitarbeiter`
--

INSERT INTO `mitarbeiter` (`Nummer`, `Name`, `Alter`, `Gehalt`, `AbtNr`) VALUES
(1, 'Müller', 30, 30000, 1),
(2, 'Huber', 45, 80000, 1),
(3, 'Habermeier', 62, 40000, 1),
(4, 'Leifsson', 27, 50000, 1),
(5, 'Taylor', 37, 85000, 11),
(6, 'Smith', 61, 34000, 11),
(7, 'Pitt', 36, 40000, 11),
(8, 'Thompson', 54, 52000, 11),
(9, 'Gates', 69, 15000000, 21),
(10, 'Zuckerberg', 36, 10000000, 21),
(11, 'Jobs', 99, 14000000, 21),
(12, 'Nakamoto', 66, 5000000, 21);

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `unternehmen`
--

CREATE TABLE `unternehmen` (
  `Nummer` int(11) NOT NULL,
  `Name` varchar(20) DEFAULT NULL,
  `Adresse` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `unternehmen`
--

INSERT INTO `unternehmen` (`Nummer`, `Name`, `Adresse`) VALUES
(1, 'Test.com', 'Alter Hafen 11'),
(2, 'Party.de', 'Technostraße 3'),
(3, 'IT.ch', 'Sequelweg 1');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `abteilung`
--
ALTER TABLE `abteilung`
  ADD PRIMARY KEY (`Nummer`),
  ADD KEY `UntNr` (`UntNr`);

--
-- Indizes für die Tabelle `mitarbeiter`
--
ALTER TABLE `mitarbeiter`
  ADD PRIMARY KEY (`Nummer`),
  ADD KEY `AbtNr` (`AbtNr`);

--
-- Indizes für die Tabelle `unternehmen`
--
ALTER TABLE `unternehmen`
  ADD PRIMARY KEY (`Nummer`);

--
-- Constraints der exportierten Tabellen
--

--
-- Constraints der Tabelle `abteilung`
--
ALTER TABLE `abteilung`
  ADD CONSTRAINT `abteilung_ibfk_1` FOREIGN KEY (`UntNr`) REFERENCES `unternehmen` (`Nummer`);

--
-- Constraints der Tabelle `mitarbeiter`
--
ALTER TABLE `mitarbeiter`
  ADD CONSTRAINT `mitarbeiter_ibfk_1` FOREIGN KEY (`AbtNr`) REFERENCES `abteilung` (`Nummer`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
