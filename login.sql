# Host: localhost  (Version: 5.5.53)
# Date: 2020-11-19 20:05:04
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "login"
#

DROP TABLE IF EXISTS `login`;
CREATE TABLE `login` (
  `name` varchar(20) DEFAULT NULL,
  `pass` char(4) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "login"
#

/*!40000 ALTER TABLE `login` DISABLE KEYS */;
INSERT INTO `login` VALUES ('大黄','666'),('小明','777'),('萨达阿萨德啊','666'),('123萨达','asd'),('撒的','阿萨德'),('阿萨德阿萨','啊飒飒的'),('123','123'),('123123123','1231'),('1231233213213213','哇'),('呐呐呐','777'),('asdsd','asd'),('asdasd','asda'),('啊实打实的','666'),('123456','666'),('sasdaDD','sad'),('我去饿','asd'),('大黄撒旦','123');
/*!40000 ALTER TABLE `login` ENABLE KEYS */;
