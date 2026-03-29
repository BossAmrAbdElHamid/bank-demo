CREATE DATABASE  IF NOT EXISTS `bank_demo` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `bank_demo`;
-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bank_demo
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `logs`
--

DROP TABLE IF EXISTS `logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logs` (
  `idlogs` varchar(36) NOT NULL,
  `service_name` varchar(100) DEFAULT NULL,
  `level` varchar(20) DEFAULT NULL,
  `message` text,
  `correlation_id` varchar(36) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idlogs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logs`
--

LOCK TABLES `logs` WRITE;
/*!40000 ALTER TABLE `logs` DISABLE KEYS */;
INSERT INTO `logs` VALUES ('017ce29d-f637-491b-b100-29bbe7c3cd49','order-service','INFO','Order created',NULL,'2026-03-24 20:41:45'),('07cd0acf-8db2-4b9d-84f1-2e2f71b9c053','order-service','INFO','Order created',NULL,'2026-03-23 11:48:39'),('2611811f-a4df-4cc4-ae47-f6a9f4f91aed','payment-service','INFO','Payment processed for order ced7c676-164f-4fd9-865d-e829ddcb8b0b',NULL,'2026-03-23 11:48:33'),('26a82d14-0790-4f0d-8921-49a01dcebd0c','payment-service','INFO','Payment processed for order d0766efc-f66a-412f-b062-9a5fd709ca47',NULL,'2026-03-23 11:39:02'),('2ba22d61-058f-434d-8487-5f8a701b5285','payment-service','INFO','Payment processed for order d8d32083-69b8-4302-a3d3-a34441127786',NULL,'2026-03-23 11:48:54'),('3db2bbe6-6c61-47f0-a486-26fde8935910','payment-service','INFO','Payment processed for order 70c883e1-9f8b-4de7-b1c4-a10baa8f36fb',NULL,'2026-03-23 11:48:44'),('3fcbade9-d705-4ddc-8ccc-9f3cefe367c1','order-service','INFO','Order created',NULL,'2026-03-23 11:48:44'),('495c8fe5-02ba-490b-a0e7-de05b28db678','order-service','INFO','Order created',NULL,'2026-03-23 11:43:12'),('4adada66-bc8a-4525-b34a-78f480c68ac4','notification-service','INFO','Notification sent | Channel EMAIL | Order# ced7c676-164f-4fd9-865d-e829ddcb8b0b to user 1',NULL,'2026-03-23 11:48:33'),('4cf2dc6e-8b3d-488e-bba1-d0001ea1720b','order-service','INFO','Order created',NULL,'2026-03-23 11:39:02'),('59c051f2-b5fd-45d8-88c6-e955932ca36c','notification-service','INFO','Notification sent | Channel EMAIL | Order# d8d32083-69b8-4302-a3d3-a34441127786 to user 1',NULL,'2026-03-23 11:48:54'),('6db99392-b199-4107-8d5b-73f773314d81','order-service','INFO','Order created',NULL,'2026-03-23 11:48:50'),('79470b33-c3fa-46a9-95c6-2ae3c0289776','payment-service','INFO','Payment processed for order fd045554-a268-46b0-a8ae-df1315f7d682',NULL,'2026-03-23 11:37:41'),('a006dc5e-1bde-4e0a-b4ea-0fa110cd4880','notification-service','INFO','Notification sent for order 0f5475fb-c1ab-4a98-8179-5b588cb96ee5 to user 1',NULL,'2026-03-23 11:43:12'),('ad6c49f4-0d2c-4a50-ba6c-883692470bcd','notification-service','INFO','Notification sent | Channel EMAIL | Order# 70c883e1-9f8b-4de7-b1c4-a10baa8f36fb to user 1',NULL,'2026-03-23 11:48:44'),('b6e71cc0-49cc-46c9-92a6-f5f337afd41f','order-service','INFO','Order created',NULL,'2026-03-23 11:37:40'),('c3b7d914-5693-41c1-a704-978fe93166ba','notification-service','INFO','Notification sent | Channel EMAIL | Order# 1d7a69e7-07c7-4bd4-b299-4060dfacee6f to user 1',NULL,'2026-03-23 11:48:50'),('c9a9c9e9-0d16-4ab4-90ff-3bc9770f2e30','payment-service','INFO','Payment processed for order 1d7a69e7-07c7-4bd4-b299-4060dfacee6f',NULL,'2026-03-23 11:48:50'),('cb916811-3c6b-4bc7-a578-965fa3f38285','payment-service','INFO','Payment processed for order 0f5475fb-c1ab-4a98-8179-5b588cb96ee5',NULL,'2026-03-23 11:43:12'),('cd1031d3-29ff-4048-854b-21b07decf708','order-service','INFO','Order created',NULL,'2026-03-23 11:48:54'),('d7283f58-7500-4adf-aa65-88bc87a32ec6','payment-service','INFO','Payment processed for order 81dc6ef9-1ffc-41bc-91d9-702b354e03d1',NULL,'2026-03-23 11:48:39'),('e9352bc5-8c85-463f-9a06-09b77cae54e0','order-service','INFO','Order created',NULL,'2026-03-24 20:52:36'),('ef14ccf1-f2f0-41c1-8d84-219ed4ea9562','notification-service','INFO','Notification sent | Channel EMAIL | Order# 81dc6ef9-1ffc-41bc-91d9-702b354e03d1 to user 1',NULL,'2026-03-23 11:48:39'),('ff29d634-0fc7-4ab6-8a9e-14ad188eed0a','order-service','INFO','Order created',NULL,'2026-03-23 11:48:32');
/*!40000 ALTER TABLE `logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `idnotifications` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `type` varchar(50) DEFAULT NULL,
  `message` text,
  `status` varchar(50) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idnotifications`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES ('1731cd69-92ef-4483-91ab-b8c7d85b057c','1','EMAIL','Order 1d7a69e7-07c7-4bd4-b299-4060dfacee6f has been created for $1200000','SENT','2026-03-23 11:48:50'),('17bda739-a422-47ba-9b83-3dd7f3d9525b','1','EMAIL','Your order has been processed','SENT','2026-03-23 11:39:02'),('1c56f984-37ef-47b5-a3b5-8b89945d0ad2','1','EMAIL','Order ced7c676-164f-4fd9-865d-e829ddcb8b0b has been created for $300000','SENT','2026-03-23 11:48:33'),('298e6b7a-27a8-4e08-8dd0-167212187012','1','EMAIL','Order 70c883e1-9f8b-4de7-b1c4-a10baa8f36fb has been created for $900000','SENT','2026-03-23 11:48:44'),('7d8750f6-2d83-4bbc-863e-11190d53cf2a','1','EMAIL','Order 81dc6ef9-1ffc-41bc-91d9-702b354e03d1 has been created for $600000','SENT','2026-03-23 11:48:39'),('a9624d33-bda5-4c36-bcdb-50ef8b4567d5','1','EMAIL','Order 0f5475fb-c1ab-4a98-8179-5b588cb96ee5 has been created for $3000000','SENT','2026-03-23 11:43:12'),('e8f2bf1d-2b75-4c44-8676-065300de6f61','1','EMAIL','Your order has been processed','SENT','2026-03-23 11:37:41'),('ed49bd4c-7ae3-4cea-a96d-ae66f80f5ec4','1','EMAIL','Order d8d32083-69b8-4302-a3d3-a34441127786 has been created for $1500000','SENT','2026-03-23 11:48:54');
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `idorders` varchar(36) NOT NULL,
  `user_id` varchar(36) NOT NULL,
  `product_id` varchar(36) NOT NULL,
  `quantity` int NOT NULL,
  `unitprice` decimal(10,2) NOT NULL,
  `totalprice` decimal(10,2) NOT NULL,
  `status` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idorders`),
  KEY `idx_user_id` (`user_id`),
  KEY `idx_product_id` (`product_id`),
  KEY `idx_status` (`status`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES ('0f5475fb-c1ab-4a98-8179-5b588cb96ee5','1','cd4aa23d-2605-11f1-a8b2-d481d7bd3d33',10,300000.00,3000000.00,'PAID','2026-03-23 11:43:12'),('1d7a69e7-07c7-4bd4-b299-4060dfacee6f','1','cd4aa23d-2605-11f1-a8b2-d481d7bd3d33',4,300000.00,1200000.00,'PAID','2026-03-23 11:48:49'),('3cc95309-8d7b-41ed-88d3-3e63d0e4698b','1','cd4aa23d-2605-11f1-a8b2-d481d7bd3d33',5,300000.00,1500000.00,'CREATED','2026-03-24 20:52:36'),('5bb96a6a-b3f9-461e-a6a3-a107f4f30f4e','1','cd4aa23d-2605-11f1-a8b2-d481d7bd3d33',5,300000.00,1500000.00,'CREATED','2026-03-24 20:41:43'),('70c883e1-9f8b-4de7-b1c4-a10baa8f36fb','1','cd4aa23d-2605-11f1-a8b2-d481d7bd3d33',3,300000.00,900000.00,'PAID','2026-03-23 11:48:44'),('81dc6ef9-1ffc-41bc-91d9-702b354e03d1','1','cd4aa23d-2605-11f1-a8b2-d481d7bd3d33',2,300000.00,600000.00,'PAID','2026-03-23 11:48:39'),('ced7c676-164f-4fd9-865d-e829ddcb8b0b','1','cd4aa23d-2605-11f1-a8b2-d481d7bd3d33',1,300000.00,300000.00,'PAID','2026-03-23 11:48:32'),('d0766efc-f66a-412f-b062-9a5fd709ca47','1','cd4aa23d-2605-11f1-a8b2-d481d7bd3d33',10,300000.00,3000000.00,'PAID','2026-03-23 11:39:02'),('d8d32083-69b8-4302-a3d3-a34441127786','1','cd4aa23d-2605-11f1-a8b2-d481d7bd3d33',5,300000.00,1500000.00,'PAID','2026-03-23 11:48:54'),('fd045554-a268-46b0-a8ae-df1315f7d682','1','cd4aa23d-2605-11f1-a8b2-d481d7bd3d33',10,300000.00,3000000.00,'PAID','2026-03-23 11:37:40');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `processed_events`
--

DROP TABLE IF EXISTS `processed_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `processed_events` (
  `id` int NOT NULL AUTO_INCREMENT,
  `event_id` varchar(36) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `event_id` (`event_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `processed_events`
--

LOCK TABLES `processed_events` WRITE;
/*!40000 ALTER TABLE `processed_events` DISABLE KEYS */;
INSERT INTO `processed_events` VALUES (5,'c0fabc33-bd1f-4faa-9c87-b14b1a833734','2026-03-22 23:11:39'),(6,'ae6a1a5b-69dd-48af-8fac-919e44cf1b4f','2026-03-22 23:17:04'),(7,'bd06fa7f-4087-4d0c-acf8-753bd0dd0b89','2026-03-22 23:18:20'),(8,'83e5ed80-f8b6-4753-a809-942fd945251d','2026-03-22 23:18:52'),(9,'496fae6b-59e2-4b93-9133-f1af4e3cfc44','2026-03-22 23:19:43'),(10,'315e8fd3-f319-43e7-a2e7-e2f27dbba798','2026-03-23 11:37:41'),(11,'50eba3b0-0bef-49cb-ac7a-280ffc6dc05b','2026-03-23 11:39:02'),(12,'ab7314a1-90fd-4c72-b284-58eaf3851049','2026-03-23 11:43:12'),(13,'8ce1a160-2cb4-4de4-aef9-c4573d859570','2026-03-23 11:48:32'),(14,'4e69c9cc-3e25-4d96-bf22-9b0bfdf60df8','2026-03-23 11:48:39'),(15,'b77d723a-bd93-4bd8-9d2f-b7dac9482c67','2026-03-23 11:48:44'),(16,'488cd4f6-b1f0-48fd-a412-87df4c761ba0','2026-03-23 11:48:50'),(17,'2b49d75c-21f7-444e-81f6-21f3c37288c2','2026-03-23 11:48:54');
/*!40000 ALTER TABLE `processed_events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `idproducts` char(36) NOT NULL DEFAULT (uuid()),
  `productname` varchar(512) DEFAULT NULL,
  `productdesc` varchar(1024) DEFAULT NULL,
  `productprice` float DEFAULT NULL,
  `isinstock` tinyint(1) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idproducts`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('cd4aa23d-2605-11f1-a8b2-d481d7bd3d33','1 Ounce','Gold 24K',300000,1,'2026-03-22 15:42:58');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idusers` char(36) NOT NULL DEFAULT (uuid()),
  `username` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password_hash` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'bank_demo'
--

--
-- Dumping routines for database 'bank_demo'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-29 14:39:17
