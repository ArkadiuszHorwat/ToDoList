-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 22 Kwi 2021, 16:57
-- Wersja serwera: 10.4.17-MariaDB
-- Wersja PHP: 8.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `todolist`
--
CREATE DATABASE IF NOT EXISTS `todolist` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `todolist`;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `item`
--

DROP TABLE IF EXISTS `item`;
CREATE TABLE IF NOT EXISTS `item` (
  `item_id` int(11) NOT NULL AUTO_INCREMENT,
  `item_description` text NOT NULL,
  `item_status` tinyint(1) NOT NULL,
  `user_O_id` int(11) NOT NULL,
  PRIMARY KEY (`item_id`),
  KEY `user_O_id` (`user_O_id`)
) ENGINE=InnoDB AUTO_INCREMENT=66 DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `item`
--

INSERT INTO `item` (`item_id`, `item_description`, `item_status`, `user_O_id`) VALUES
(24, 'test1', 0, 26),
(26, 'test2', 0, 26),
(49, 'zakupy', 0, 11),
(50, 'projekt', 0, 11),
(53, 'sdsdf', 0, 28),
(55, 'sdfssdf', 0, 28),
(56, 'asdasd', 0, 28),
(59, 'przebrac sie', 0, 25),
(60, 'sciagnac pranie', 0, 25),
(61, 'spakowac sie', 0, 25),
(62, 'zawiesic pranie', 0, 25),
(63, 'pojechac do domu', 0, 25);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(256) NOT NULL,
  `user_login` varchar(256) NOT NULL,
  `user_passwd` varchar(256) NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_login` (`user_login`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`user_id`, `user_name`, `user_login`, `user_passwd`) VALUES
(11, 'arkadiusz', 'arek17', '1234'),
(12, 'arkadiusz horwat', 'arkadiusz1', 'arek1234'),
(25, 'gabu', 'gabu1', '123'),
(26, 'test', 'test', 'test'),
(28, 'Bartosz', 'Bartosz', 'Bartosz');

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `item_ibfk_1` FOREIGN KEY (`user_O_id`) REFERENCES `user` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
