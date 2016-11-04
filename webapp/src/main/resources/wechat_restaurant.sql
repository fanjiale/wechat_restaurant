/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50015
Source Host           : localhost:3306
Source Database       : wechat_restaurant

Target Server Type    : MYSQL
Target Server Version : 50015
File Encoding         : 65001

Date: 2016-11-04 17:04:29
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for sys_access_token
-- ----------------------------
DROP TABLE IF EXISTS `sys_access_token`;
CREATE TABLE `sys_access_token` (
  `server_ip` varchar(20) default NULL,
  `server_port` varchar(10) default NULL,
  `access_token` varchar(500) default NULL,
  `last_date` datetime default NULL,
  `token_type` varchar(10) default NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_access_token
-- ----------------------------
INSERT INTO `sys_access_token` VALUES (null, null, null, null, '1');

-- ----------------------------
-- Table structure for s_login_log
-- ----------------------------
DROP TABLE IF EXISTS `s_login_log`;
CREATE TABLE `s_login_log` (
  `pkid` varchar(40) NOT NULL,
  `user_name` varchar(20) default NULL,
  `login_time` datetime default NULL,
  `ip_address` varchar(20) default NULL,
  PRIMARY KEY  (`pkid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_login_log
-- ----------------------------

-- ----------------------------
-- Table structure for s_user
-- ----------------------------
DROP TABLE IF EXISTS `s_user`;
CREATE TABLE `s_user` (
  `pkid` varchar(40) NOT NULL,
  `user_name` varchar(20) default NULL,
  `password` varchar(40) default NULL,
  PRIMARY KEY  (`pkid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of s_user
-- ----------------------------
INSERT INTO `s_user` VALUES ('785c72e3-c1e3-4741-bb87-0ae8238b22a1', 'admin', 'c4ca4238a0b923820dcc509a6f75849b');
