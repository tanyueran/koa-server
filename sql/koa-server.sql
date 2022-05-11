/*
 Navicat Premium Data Transfer

 Source Server         : 本地hydra
 Source Server Type    : MySQL
 Source Server Version : 50737
 Source Host           : localhost:3306
 Source Schema         : koa-server

 Target Server Type    : MySQL
 Target Server Version : 50737
 File Encoding         : 65001

 Date: 11/05/2022 17:53:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(255) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10026 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` VALUES (9999, 'root', '123456');
INSERT INTO `user` VALUES (10001, 'test', '123456');
INSERT INTO `user` VALUES (10002, 'test2', '123456');
INSERT INTO `user` VALUES (10003, 'test3', '123456');
INSERT INTO `user` VALUES (10009, 'test4', '123456');
INSERT INTO `user` VALUES (10010, 'test5', '123456');
INSERT INTO `user` VALUES (10012, 'test6', '123456');
INSERT INTO `user` VALUES (10021, 'test7', '123456');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
