-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 06, 2019 at 02:54 PM
-- Server version: 5.7.27-0ubuntu0.16.04.1
-- PHP Version: 7.0.33-0ubuntu0.16.04.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--
CREATE DATABASE IF NOT EXISTS `test` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `test`;

-- --------------------------------------------------------

--
-- Table structure for table `Anfrage`
--

CREATE TABLE `Anfrage` (
  `KID` varchar(100) NOT NULL,
  `Start` varchar(100) DEFAULT NULL,
  `Ziel` varchar(100) DEFAULT NULL,
  `Datum` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Anfrage`
--

INSERT INTO `Anfrage` (`KID`, `Start`, `Ziel`, `Datum`) VALUES
('K2', 'S4', 'S5', '2011-07-05'),
('K2', 'S4', 'S5', '2011-07-08'),
('K3', 'S2', 'S3', '2011-07-08'),
('K2', 'S5', 'S4', '2011-07-10'),
('K3', 'S3', 'S2', '2011-07-10'),
('K2', 'S5', 'S4', '2011-07-17');

-- --------------------------------------------------------

--
-- Table structure for table `Angebot`
--

CREATE TABLE `Angebot` (
  `KID` varchar(100) NOT NULL,
  `Start` varchar(100) DEFAULT NULL,
  `Ziel` varchar(100) DEFAULT NULL,
  `Datum` date NOT NULL,
  `Plätze` int(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Angebot`
--

INSERT INTO `Angebot` (`KID`, `Start`, `Ziel`, `Datum`, `Plätze`) VALUES
('K1', 'S1', 'S5', '2011-07-08', 3),
('K4', 'S4', 'S5', '2011-07-08', 3),
('K1', 'S5', 'S4', '2011-07-09', 2),
('K4', 'S5', 'S4', '2011-07-10', 3),
('K3', 'S2', 'S3', '2011-07-15', 1),
('K4', 'S4', 'S1', '2011-07-15', 3);

-- --------------------------------------------------------

--
-- Table structure for table `Kunde`
--

CREATE TABLE `Kunde` (
  `KID` varchar(100) NOT NULL,
  `Name` varchar(100) DEFAULT NULL,
  `Vorname` varchar(100) DEFAULT NULL,
  `Stadt` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Kunde`
--

INSERT INTO `Kunde` (`KID`, `Name`, `Vorname`, `Stadt`) VALUES
('K1', 'Meier', 'Stefan', 'S3'),
('K2', 'Müller', 'Petra', 'S3'),
('K3', 'Schmidt', 'Christine', 'S2'),
('K4', 'Schulz', 'Michael', 'S4');

-- --------------------------------------------------------

--
-- Table structure for table `Stadt`
--

CREATE TABLE `Stadt` (
  `SID` varchar(100) NOT NULL,
  `SName` varchar(100) NOT NULL,
  `Bundesland` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Stadt`
--

INSERT INTO `Stadt` (`SID`, `SName`, `Bundesland`) VALUES
('S1', 'Berlin', 'Berlin'),
('S2', 'Nürnberg', 'Bayern'),
('S3', 'Köln', 'NRW'),
('S4', 'Stuttgart', 'BW'),
('S5', 'München', 'Bayern');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Anfrage`
--
ALTER TABLE `Anfrage`
  ADD PRIMARY KEY (`Datum`,`KID`),
  ADD KEY `Start` (`Start`),
  ADD KEY `Ziel` (`Ziel`);

--
-- Indexes for table `Angebot`
--
ALTER TABLE `Angebot`
  ADD PRIMARY KEY (`Datum`,`KID`),
  ADD KEY `Start` (`Start`),
  ADD KEY `Ziel` (`Ziel`);

--
-- Indexes for table `Kunde`
--
ALTER TABLE `Kunde`
  ADD PRIMARY KEY (`KID`),
  ADD KEY `Stadt` (`Stadt`);

--
-- Indexes for table `Stadt`
--
ALTER TABLE `Stadt`
  ADD PRIMARY KEY (`SID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Anfrage`
--
ALTER TABLE `Anfrage`
  ADD CONSTRAINT `Anfrage_ibfk_1` FOREIGN KEY (`Start`) REFERENCES `Stadt` (`SID`),
  ADD CONSTRAINT `Anfrage_ibfk_2` FOREIGN KEY (`Ziel`) REFERENCES `Stadt` (`SID`);

--
-- Constraints for table `Angebot`
--
ALTER TABLE `Angebot`
  ADD CONSTRAINT `Angebot_ibfk_1` FOREIGN KEY (`Start`) REFERENCES `Stadt` (`SID`),
  ADD CONSTRAINT `Angebot_ibfk_2` FOREIGN KEY (`Ziel`) REFERENCES `Stadt` (`SID`);

--
-- Constraints for table `Kunde`
--
ALTER TABLE `Kunde`
  ADD CONSTRAINT `Kunde_ibfk_1` FOREIGN KEY (`Stadt`) REFERENCES `Stadt` (`SID`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
