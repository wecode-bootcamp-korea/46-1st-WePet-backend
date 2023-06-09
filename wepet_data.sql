-- MySQL dump 10.13  Distrib 8.0.33, for macos13.3 (arm64)
--
-- Host: localhost    Database: wepet
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `address_1` varchar(500) NOT NULL,
  `address_2` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `extra_product_images`
--

DROP TABLE IF EXISTS `extra_product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `extra_product_images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int NOT NULL,
  `extra_product_image` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `extra_product_images_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `extra_product_images`
--

LOCK TABLES `extra_product_images` WRITE;
/*!40000 ALTER TABLE `extra_product_images` DISABLE KEYS */;
/*!40000 ALTER TABLE `extra_product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `orders_id` int NOT NULL,
  `product_id` int NOT NULL,
  `order_item_status_id` int DEFAULT NULL,
  `order_item_price` decimal(8,2) NOT NULL,
  `order_item_quantity` int NOT NULL,
  `item_total` decimal(12,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `orders_id` (`orders_id`),
  KEY `order_item_status_id` (`order_item_status_id`),
  CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`orders_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`order_item_status_id`) REFERENCES `order_items_status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=103 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items`
--

LOCK TABLES `order_items` WRITE;
/*!40000 ALTER TABLE `order_items` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_items_status`
--

DROP TABLE IF EXISTS `order_items_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_items_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_item_status_code` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_items_status`
--

LOCK TABLES `order_items_status` WRITE;
/*!40000 ALTER TABLE `order_items_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_items_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_status`
--

DROP TABLE IF EXISTS `order_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `order_status_code` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_status`
--

LOCK TABLES `order_status` WRITE;
/*!40000 ALTER TABLE `order_status` DISABLE KEYS */;
/*!40000 ALTER TABLE `order_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `order_status_id` int DEFAULT NULL,
  `order_number` varchar(600) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `order_total` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `order_status_id` (`order_status_id`),
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`order_status_id`) REFERENCES `order_status` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pets`
--

DROP TABLE IF EXISTS `pets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pets`
--

LOCK TABLES `pets` WRITE;
/*!40000 ALTER TABLE `pets` DISABLE KEYS */;
/*!40000 ALTER TABLE `pets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(200) DEFAULT NULL,
  `product_price` decimal(8,2) DEFAULT NULL,
  `product_description` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `product_category_id` int DEFAULT NULL,
  `quantity` int DEFAULT '0',
  `main_image_thumbnail` varchar(1000) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (69,'풀어도 끝이 없는 실타래',7000.00,NULL,3,70,'https://github.com/AGNESBAEK/wepet_img/blob/main/1/playdough-art-with-cat-and-yarn-ball-shapes.jpg?raw=true','2023-06-07 04:55:38',NULL),(70,'아이 맛있다 개껌',8000.00,NULL,2,50,'https://github.com/AGNESBAEK/wepet_img/blob/main/2/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%205.15.08.png?raw=true','2023-06-07 04:55:53',NULL),(71,'맛있는 사료다옹',28000.00,NULL,1,60,'https://github.com/AGNESBAEK/wepet_img/blob/main/3/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%204.52.11.png?raw=true','2023-06-07 04:57:50',NULL),(72,'시리얼보다 맛있는 간식',18000.00,NULL,2,90,'https://github.com/AGNESBAEK/wepet_img/blob/main/4/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%205.34.22.png?raw=true','2023-06-07 04:59:45',NULL),(73,'고냥이의 건식사료',23000.00,NULL,1,80,'https://github.com/AGNESBAEK/wepet_img/blob/main/5/19430940.jpg?raw=true','2023-06-07 04:59:58',NULL),(74,'이곳은 나의 아지트',35000.00,NULL,3,20,'https://github.com/AGNESBAEK/wepet_img/blob/main/6/beautiful-pet-portrait-of-cat%20(1).jpg?raw=true','2023-06-07 05:00:25',NULL),(75,'쏙 들어가고 싶은 장난감',36000.00,NULL,3,30,'https://github.com/AGNESBAEK/wepet_img/blob/main/7/close-up-on-beautiful-cat-with-the-owner%20(1).jpg?raw=true','2023-06-07 05:01:14',NULL),(76,'방울방울 캣타워',37000.00,NULL,3,30,'https://github.com/AGNESBAEK/wepet_img/blob/main/8/cute-scottish-straight-gray-cat-hunting-and-playing%20(2).jpg?raw=true','2023-06-07 05:01:33',NULL),(77,'비타민이 듬뿍 강아지사료',26000.00,NULL,1,50,'https://github.com/AGNESBAEK/wepet_img/blob/main/9/still-life-pet-food-arrangement.jpg?raw=true','2023-06-07 05:01:54',NULL),(78,'견과류 콕콕 강아지사료 ',24000.00,NULL,1,60,'https://github.com/AGNESBAEK/wepet_img/blob/main/10/dog-food.jpg?raw=true','2023-06-07 05:02:15',NULL),(79,'소화가 잘되는 강아지사료 ',24000.00,NULL,1,100,'https://github.com/AGNESBAEK/wepet_img/blob/main/11/5653708.jpg?raw=true','2023-06-07 05:02:30',NULL),(80,'개껌아니에요 사료에요 ',21000.00,NULL,1,30,'https://github.com/AGNESBAEK/wepet_img/blob/main/12/domestic-pet-food-assortment.jpg?raw=true','2023-06-07 05:02:55',NULL),(81,'무농약 옥수수 간식',19000.00,NULL,2,40,'https://github.com/AGNESBAEK/wepet_img/blob/main/13/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%205.25.08.png?raw=true','2023-06-07 05:03:14',NULL),(82,'우리 냐옹이 밥을 시간',22000.00,NULL,1,50,'https://github.com/AGNESBAEK/wepet_img/blob/main/14/still-life-pet-food-assortment.jpg?raw=true','2023-06-07 05:03:38',NULL),(83,'참치는 못참취 ',21000.00,NULL,2,20,'https://github.com/AGNESBAEK/wepet_img/blob/main/15/2558008.jpg?raw=true','2023-06-07 05:04:02',NULL),(84,'한가지 사료에 세가지 맛을',30000.00,NULL,1,30,'https://github.com/AGNESBAEK/wepet_img/blob/main/16/60135.jpg?raw=true','2023-06-07 05:04:22',NULL),(85,'잡아봐라 못잡겠쥐',21000.00,NULL,3,40,'https://github.com/AGNESBAEK/wepet_img/blob/main/17/top-view-arrangement-with-sponge-and-toy.jpg?raw=true','2023-06-07 05:05:21',NULL),(86,'풀어도 끝이 없는 실타래~',12000.00,NULL,3,10,'https://github.com/AGNESBAEK/wepet_img/blob/main/1/playdough-art-with-cat-and-yarn-ball.jpg?raw=true','2023-06-07 05:05:41',NULL),(87,'아이 맛있다 개껌~',18000.00,NULL,2,20,'https://github.com/AGNESBAEK/wepet_img/blob/main/2/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%205.15.26.png?raw=true','2023-06-07 05:05:57',NULL),(88,'맛있는 사료다옹~',20000.00,NULL,1,70,'https://github.com/AGNESBAEK/wepet_img/blob/main/3/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%204.50.40.png?raw=true','2023-06-07 05:06:16',NULL),(89,'시리얼보다 맛있는 간식~',24000.00,NULL,2,80,'https://github.com/AGNESBAEK/wepet_img/blob/main/4/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%205.37.20.png?raw=true','2023-06-07 05:06:31',NULL),(90,'고냥이의 건식사료~',27000.00,NULL,1,20,'https://github.com/AGNESBAEK/wepet_img/blob/main/5/7980974.jpg?raw=true','2023-06-07 05:06:50',NULL),(91,'이곳은 나의 아지트~',40000.00,NULL,3,30,'https://github.com/AGNESBAEK/wepet_img/blob/main/6/beautiful-pet-portrait-of-cat.jpg?raw=true','2023-06-07 05:07:13',NULL),(92,'쏙 들어가고 싶은 장난감~',35000.00,NULL,3,10,'https://github.com/AGNESBAEK/wepet_img/blob/main/7/close-up-on-beautiful-cat-with-the-owner.jpg?raw=true','2023-06-07 05:07:28',NULL),(93,'방울방울 캣타워~',37000.00,NULL,3,40,'https://github.com/AGNESBAEK/wepet_img/blob/main/8/cute-scottish-straight-gray-cat-hunting-and-playing.jpg?raw=true','2023-06-07 05:07:44',NULL),(94,'비타민이 듬뿍 강아지사료~',23000.00,NULL,1,50,'https://github.com/AGNESBAEK/wepet_img/blob/main/9/still-life-pet-food-composition.jpg?raw=true','2023-06-07 05:08:03',NULL),(95,'견과류 콕콕 강아지사료~',24000.00,NULL,1,10,'https://github.com/AGNESBAEK/wepet_img/blob/main/10/water-healthy-rawhide-white-treats.jpg?raw=true','2023-06-07 05:08:20',NULL),(96,'소화가 잘되는 강아지사료~ ',25000.00,NULL,1,20,'https://github.com/AGNESBAEK/wepet_img/blob/main/11/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%205.20.07.png?raw=true','2023-06-07 05:08:40',NULL),(97,'개껌아니에요 사료에요~',27000.00,NULL,1,30,'https://github.com/AGNESBAEK/wepet_img/blob/main/12/57794.jpg?raw=true','2023-06-07 05:08:56',NULL),(98,'무농약 옥수수 간식~',19000.00,NULL,2,40,'https://github.com/AGNESBAEK/wepet_img/blob/main/13/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%205.26.20.png?raw=true','2023-06-07 05:09:10',NULL),(99,'우리 냐옹이 밥을 시간~',23000.00,NULL,1,60,'https://github.com/AGNESBAEK/wepet_img/blob/main/14/top-view-on-cat-food-in-the-color-of-the-year-2022.jpg?raw=true','2023-06-07 05:09:24',NULL),(100,'참치는 못참취~',20000.00,NULL,2,80,'https://github.com/AGNESBAEK/wepet_img/blob/main/15/open-tuna-can-seen-from-above.jpg?raw=true','2023-06-07 05:09:38',NULL),(101,'한가지 사료에 세가지 맛을~',26000.00,NULL,1,40,'https://github.com/AGNESBAEK/wepet_img/blob/main/16/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%205.33.57.png?raw=true','2023-06-07 05:09:52',NULL),(102,'잡아봐라 못잡겠쥐~',21000.00,NULL,3,20,'https://github.com/AGNESBAEK/wepet_img/blob/main/17/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%205.45.45.png?raw=true','2023-06-07 05:10:09',NULL),(103,'맛있는 사료다옹~~',23000.00,NULL,1,40,'https://github.com/AGNESBAEK/wepet_img/blob/main/still-life-domestic-animal-food-composition.jpg?raw=true','2023-06-07 05:10:24',NULL),(104,'동글동글 건식사료~',25000.00,NULL,1,50,'https://github.com/AGNESBAEK/wepet_img/blob/main/P2PETB0.jpg?raw=true','2023-06-07 05:10:37',NULL),(105,'비타민이 듬뿍 강아지사료~~',29000.00,NULL,1,10,'https://github.com/AGNESBAEK/wepet_img/blob/main/food-and-chewing-bones-near-bowl.jpg?raw=true','2023-06-07 05:10:52',NULL),(106,'고냥이의 건식사료~~~',28000.00,NULL,1,20,'https://github.com/AGNESBAEK/wepet_img/blob/main/4997846.jpg?raw=true','2023-06-07 05:11:06',NULL),(107,'강아지모양 강아지사료~',30000.00,NULL,1,30,'https://github.com/AGNESBAEK/wepet_img/blob/main/pet-accessories-still-life-concept-with-bone-shaped-dry-food.jpg?raw=true','2023-06-07 05:11:20',NULL),(108,'놓치지 않을거에요 개껌~~',18000.00,NULL,2,34,'https://github.com/AGNESBAEK/wepet_img/blob/main/cute-little-dog-isolated-on-yellow%20(3).jpg?raw=true','2023-06-07 05:11:32',NULL),(109,'골라골라 개껌3종세트~',19000.00,NULL,2,25,'https://github.com/AGNESBAEK/wepet_img/blob/main/pet-accessories-still-life-with-food-bowl-and-lots-of-chew-bones-for-dogs.jpg?raw=true','2023-06-07 05:11:45',NULL),(110,'겉바속촉 사료~~',19000.00,NULL,1,60,'https://github.com/AGNESBAEK/wepet_img/blob/main/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202023-06-03%20%EC%98%A4%ED%9B%84%205.30.16.png?raw=true','2023-06-07 05:12:00',NULL),(111,'시리얼보다 맛있는 간식~',25000.00,NULL,2,20,'https://github.com/AGNESBAEK/wepet_img/blob/main/bowl-and-pet-daities-on-green-background.jpg?raw=true','2023-06-07 05:12:12',NULL),(112,'사료 4종세트 파격세일!',31000.00,NULL,1,10,'https://github.com/AGNESBAEK/wepet_img/blob/main/4774189.jpg?raw=true','2023-06-07 05:12:23',NULL),(113,'우리 아가가 제일 좋아하는 뾱뾱이 ',6000.00,NULL,3,20,'https://github.com/AGNESBAEK/wepet_img/blob/main/main1.jpeg?raw=true','2023-06-08 11:00:12',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_colors`
--

DROP TABLE IF EXISTS `products_colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_colors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `product_color` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `product_color` (`product_color`),
  CONSTRAINT `products_colors_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `products_colors_ibfk_2` FOREIGN KEY (`product_color`) REFERENCES `colors` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_colors`
--

LOCK TABLES `products_colors` WRITE;
/*!40000 ALTER TABLE `products_colors` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_pets`
--

DROP TABLE IF EXISTS `products_pets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_pets` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `pet_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `pet_id` (`pet_id`),
  CONSTRAINT `products_pets_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `products_pets_ibfk_2` FOREIGN KEY (`pet_id`) REFERENCES `pets` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_pets`
--

LOCK TABLES `products_pets` WRITE;
/*!40000 ALTER TABLE `products_pets` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_pets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products_sizes`
--

DROP TABLE IF EXISTS `products_sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products_sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `product_size` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `product_id` (`product_id`),
  KEY `product_size` (`product_size`),
  CONSTRAINT `products_sizes_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `products_sizes_ibfk_2` FOREIGN KEY (`product_size`) REFERENCES `sizes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products_sizes`
--

LOCK TABLES `products_sizes` WRITE;
/*!40000 ALTER TABLE `products_sizes` DISABLE KEYS */;
/*!40000 ALTER TABLE `products_sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schema_migrations`
--

DROP TABLE IF EXISTS `schema_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `schema_migrations` (
  `version` varchar(128) NOT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schema_migrations`
--

LOCK TABLES `schema_migrations` WRITE;
/*!40000 ALTER TABLE `schema_migrations` DISABLE KEYS */;
INSERT INTO `schema_migrations` VALUES ('20230531063547'),('20230531063818'),('20230531063831'),('20230531063958'),('20230531064009'),('20230531064208'),('20230531064228'),('20230531064422'),('20230531064426'),('20230531064432'),('20230531064445'),('20230531064450'),('20230531064453'),('20230531064455'),('20230531064501'),('20230531120341'),('20230601050150'),('20230601053106'),('20230601053809'),('20230605024756'),('20230605025135'),('20230607115935'),('20230607122912');
/*!40000 ALTER TABLE `schema_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shopping_carts`
--

DROP TABLE IF EXISTS `shopping_carts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `shopping_carts` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `product_id` int DEFAULT NULL,
  `quantity` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `my_uniq_cart_id` (`user_id`,`product_id`),
  KEY `product_id` (`product_id`),
  CONSTRAINT `shopping_carts_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `shopping_carts_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shopping_carts`
--

LOCK TABLES `shopping_carts` WRITE;
/*!40000 ALTER TABLE `shopping_carts` DISABLE KEYS */;
INSERT INTO `shopping_carts` VALUES (1,60,113,3);
/*!40000 ALTER TABLE `shopping_carts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `password` varchar(200) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `points` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'dog@dog.com','good boy','1234','2023-06-01 07:45:16',NULL,NULL),(2,'cat@cat.com','meow','4321','2023-06-01 07:45:16',NULL,NULL),(3,'horse@horse.com','big boy','1111','2023-06-02 02:23:00',NULL,NULL),(4,'coolmail@coolgrease.com','Coolio','$2b$10$c8n83RG0xN11Hc/MAHy0IeG7cdr19AY6LVXtTG9whnSDswikoQSR2','2023-06-06 08:06:38',NULL,NULL),(5,'wow@wowowowow.com','wowow','$2b$10$TBP9UtWNDqZynjsTUXiiUOFcmt/rxnuBgGQoOkQ1N8bvKjEI8oGvO','2023-06-07 05:09:11',NULL,NULL),(60,'hello@naver.com','김지연','$2b$10$70xFklKonAmJQadJA6jL6eXckskntPQgx2i/OF9/u/Z3ITpFhCUr2','2023-06-08 11:42:36',NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_payment`
--

DROP TABLE IF EXISTS `users_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_payment` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `points` decimal(8,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `users_payment_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_payment`
--

LOCK TABLES `users_payment` WRITE;
/*!40000 ALTER TABLE `users_payment` DISABLE KEYS */;
INSERT INTO `users_payment` VALUES (1,4,500000.00),(2,5,500000.00);
/*!40000 ALTER TABLE `users_payment` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-06-08 21:44:39
