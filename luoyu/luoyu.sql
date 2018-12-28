-- MySQL dump 10.13  Distrib 5.7.24, for Linux (x86_64)
--
-- Host: localhost    Database: luoyu
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alembic_version`
--

DROP TABLE IF EXISTS `alembic_version`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alembic_version`
--

LOCK TABLES `alembic_version` WRITE;
/*!40000 ALTER TABLE `alembic_version` DISABLE KEYS */;
INSERT INTO `alembic_version` VALUES ('4e4c030f8c32');
/*!40000 ALTER TABLE `alembic_version` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mei_zhuang`
--

DROP TABLE IF EXISTS `mei_zhuang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `mei_zhuang` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(256) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `img` (`img`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mei_zhuang`
--

LOCK TABLES `mei_zhuang` WRITE;
/*!40000 ALTER TABLE `mei_zhuang` DISABLE KEYS */;
INSERT INTO `mei_zhuang` VALUES (1,'1-1.jpg','99.00',1,'花飛草人生潤澤滋養乳'),(2,'1-2.jpg','99.00',1,'花飛草人生潤澤滋養乳'),(3,'1-3.jpg','99.00',1,'花飛草人生潤澤滋養乳'),(4,'1-4.jpg','99.00',1,'花飛草人生潤澤滋養乳'),(5,'1-5.jpg','99.00',1,'花飛草人生潤澤滋養乳');
/*!40000 ALTER TABLE `mei_zhuang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nan_zhuang1`
--

DROP TABLE IF EXISTS `nan_zhuang1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nan_zhuang1` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(256) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `img` (`img`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nan_zhuang1`
--

LOCK TABLES `nan_zhuang1` WRITE;
/*!40000 ALTER TABLE `nan_zhuang1` DISABLE KEYS */;
INSERT INTO `nan_zhuang1` VALUES (1,'2-left.jpg',2),(2,'2-right.jpg',2);
/*!40000 ALTER TABLE `nan_zhuang1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nan_zhuang2`
--

DROP TABLE IF EXISTS `nan_zhuang2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `nan_zhuang2` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `img` varchar(256) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `category` int(11) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `img` (`img`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nan_zhuang2`
--

LOCK TABLES `nan_zhuang2` WRITE;
/*!40000 ALTER TABLE `nan_zhuang2` DISABLE KEYS */;
INSERT INTO `nan_zhuang2` VALUES (1,'2-1.jpg','333.00',3,'蒙蒂埃莫簡約百搭淨色'),(2,'2-2.jpg','333.00',3,'蒙蒂埃莫簡約百搭淨色'),(3,'2-3.jpg','333.00',3,'蒙蒂埃莫簡約百搭淨色'),(4,'2-4.jpg','333.00',3,'蒙蒂埃莫簡約百搭淨色'),(5,'2-5.jpg','333.00',3,'蒙蒂埃莫簡約百搭淨色'),(6,'2-6.jpg','333.00',3,'蒙蒂埃莫簡約百搭淨色'),(7,'2-7.jpg','333.00',3,'蒙蒂埃莫簡約百搭淨色'),(8,'2-8.jpg','333.00',3,'蒙蒂埃莫簡約百搭淨色'),(9,'2-9.jpg','333.00',3,'蒙蒂埃莫簡約百搭淨色'),(10,'2-10.jpg','333.00',3,'蒙蒂埃莫簡約百搭淨色');
/*!40000 ALTER TABLE `nan_zhuang2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` varchar(256) NOT NULL,
  `name` varchar(30) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `is_check` tinyint(1) DEFAULT NULL,
  `token` varchar(256) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('0b6e6cf4-ab84-48d2-8c89-5e7d6146c7ba','13812345678','pbkdf2:sha256:50000$WWkDA4MW$eb75e943d91343d7232dbfae12c261e5d1ea9ca113d40a8a0aeec1f10142b8fd','1056497498@qq.com',1,'9fae675dacf0cfb31cd36a75173dd9a2');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-28 19:26:38
