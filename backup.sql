SET FOREIGN_KEY_CHECKS = 0;
-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: mydb.cjq8sqoc4g1e.eu-north-1.rds.amazonaws.com    Database: webdeveloper
-- ------------------------------------------------------
-- Server version	8.0.42
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!50503 SET NAMES utf8mb4 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN = 0;
--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED =
  /*!80000 '+'*/
  '';
--
-- Table structure for table `BankDetail`
--

DROP TABLE IF EXISTS `BankDetail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `BankDetail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bankName` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accountNumber` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `accountHolder` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ifscCode` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `branch` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `isVerified` tinyint(1) NOT NULL DEFAULT '0',
  `isActive` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `walletId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `BankDetail_walletId_fkey` (`walletId`),
  CONSTRAINT `BankDetail_walletId_fkey` FOREIGN KEY (`walletId`) REFERENCES `FreelancerWallet` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `BankDetail`
--

LOCK TABLES `BankDetail` WRITE;
/*!40000 ALTER TABLE `BankDetail` DISABLE KEYS */
;
INSERT INTO `BankDetail`
VALUES (
    1,
    '1111111111111111111111111111',
    '87b354594fd5529aca4089bf0b4dd80a:5735795d72197d27b90a55d2912ebfc5c9c8206d0c39c1096800acdc:14954ae3e838bd1838b7d5531db397be',
    '3fdb66e509ac717ce156da5e8ed6d107:3ecb039ab96ad0a243c43d73ee03950b3d2a0f23ee879a8cc373d51e:06821db6b350c9b55dd84ae96090c666',
    'e09a2de89ff5bf5ae9a343f2f2ac95c8:4b4545b5d501f25ee4894976a40d4c6d68321a78d07edf3264689124:36855a918cbef6f50c44cb4ceb2dee7b',
    'baf316bc8db8ddd4948ab39e4b681a2d:3a49351f4ab8ccb84e55609ad0729850e55d42659f61f68d47a12f90:26c063c59060fff7d095cc42703c2647',
    0,
    1,
    '2025-10-16 14:34:29.246',
    '2025-10-16 14:34:29.246',
    7
  ),
  (
    2,
    'federal bank',
    'ce09380c66c5139d18196690dff2b1e6:edf96703f1a3f55a113ea1d49c2f:7d453bef4d34bd5e8dbf30d6633ee92f',
    '909dcc515910b405dd9fac83e1c1599d:c39c2656c9a59e11a320a5:9360b8c427b2faeb286c87ce6b65c41c',
    '0387cc7f42aec464b781de0bc2cef40d:45454cdba7fd2628295d40:091a8a8bf9adbbd96bbaef7535ee49d8',
    '2585908eafd1b8daa4391c264183fdfa:ded046453b3282:bc1a435ef2445b6b9727e25c348e13bd',
    0,
    1,
    '2025-10-17 06:52:44.206',
    '2025-10-17 06:52:44.206',
    22
  ),
  (
    3,
    'India Post Payments Bank',
    'f2817d544c9a76b0d9a16f3905839dbd:b06a24d40411190472555f0c:098733a9ee741635c78c753917e409c2',
    '799e52deb6e1287041b70b6c51570eeb:575cb7926c6d30f3:94df199a1505bbdbf72f5f24a0e8d197',
    'fbe546a68389b8e9b7ce63a73881bdeb:cb7b8f6d5846b06196d2:fdce63a6ca15596e08400f5bd38c3efc',
    '8dddc18cb536830b18f0f18195ddf99b:8c09a27fd9dd:6c1737f0cb553c5532147e9398db37d5',
    0,
    1,
    '2025-10-19 06:04:37.627',
    '2025-10-19 06:04:37.627',
    56
  ),
  (
    4,
    'State Bank Of India',
    '1f9557fcefa689361c2dedadde3e5cc3:189ebdef7fa0a68bec40dd:5ceec50083da796fcff70558bd355ac1',
    '01e1f7dcaa8b1a6ec2e9cb9d67a0e5cf:064f3470de9eef54:9a880acb7b6a6938e9aef25e9be712fc',
    '3012c5562302a68e4d43575aba689362:eab7a2e11032afc3423ede:c0398581f68276a697186d387d389e0f',
    '756e7783c03ac53c296195350c260cd7:ff61bb9d:6488a8e367ebc370745691fbfd4668f5',
    0,
    1,
    '2025-10-19 06:06:38.784',
    '2025-10-19 06:06:38.784',
    56
  );
/*!40000 ALTER TABLE `BankDetail` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `Conversation`
--

DROP TABLE IF EXISTS `Conversation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `Conversation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `clientId` int NOT NULL,
  `freelancerId` int NOT NULL,
  `projectId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Conversation_clientId_freelancerId_projectId_key` (`clientId`, `freelancerId`, `projectId`),
  KEY `Conversation_freelancerId_fkey` (`freelancerId`),
  KEY `Conversation_projectId_fkey` (`projectId`),
  CONSTRAINT `Conversation_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Conversation_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Conversation_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `Conversation`
--

LOCK TABLES `Conversation` WRITE;
/*!40000 ALTER TABLE `Conversation` DISABLE KEYS */
;
INSERT INTO `Conversation`
VALUES (
    1,
    '2025-10-14 12:04:34.654',
    '2025-10-16 15:29:18.742',
    19,
    2,
    1
  ),
  (
    2,
    '2025-10-16 15:25:57.833',
    '2025-10-16 15:32:19.789',
    19,
    41,
    2
  ),
  (
    3,
    '2025-10-18 07:59:35.077',
    '2025-10-18 08:01:54.186',
    183,
    3,
    3
  );
/*!40000 ALTER TABLE `Conversation` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `FreelancerWallet`
--

DROP TABLE IF EXISTS `FreelancerWallet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `FreelancerWallet` (
  `id` int NOT NULL AUTO_INCREMENT,
  `balance` double NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `FreelancerWallet_userId_key` (`userId`),
  CONSTRAINT `FreelancerWallet_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 64 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `FreelancerWallet`
--

LOCK TABLES `FreelancerWallet` WRITE;
/*!40000 ALTER TABLE `FreelancerWallet` DISABLE KEYS */
;
INSERT INTO `FreelancerWallet`
VALUES (
    1,
    0,
    '2025-10-14 07:37:04.488',
    '2025-10-14 07:37:04.488',
    3
  ),
  (
    2,
    0,
    '2025-10-15 04:16:00.518',
    '2025-10-15 04:16:00.518',
    33
  ),
  (
    3,
    0,
    '2025-10-15 15:15:14.704',
    '2025-10-15 15:15:14.704',
    2
  ),
  (
    4,
    0,
    '2025-10-15 15:34:24.677',
    '2025-10-15 15:34:24.677',
    41
  ),
  (
    5,
    0,
    '2025-10-16 07:12:46.014',
    '2025-10-16 07:12:46.014',
    97
  ),
  (
    6,
    0,
    '2025-10-16 13:26:20.459',
    '2025-10-16 13:26:20.459',
    8
  ),
  (
    7,
    0,
    '2025-10-16 14:29:02.164',
    '2025-10-16 14:29:02.164',
    11
  ),
  (
    8,
    0,
    '2025-10-16 15:28:37.259',
    '2025-10-16 15:28:37.259',
    19
  ),
  (
    9,
    0,
    '2025-10-16 15:56:29.385',
    '2025-10-16 15:56:29.385',
    139
  ),
  (
    10,
    0,
    '2025-10-16 16:16:06.917',
    '2025-10-16 16:16:06.917',
    1
  ),
  (
    11,
    0,
    '2025-10-16 17:39:54.031',
    '2025-10-16 17:39:54.031',
    120
  ),
  (
    12,
    0,
    '2025-10-16 19:05:14.562',
    '2025-10-16 19:05:14.562',
    154
  ),
  (
    13,
    0,
    '2025-10-16 21:11:20.167',
    '2025-10-16 21:11:20.167',
    157
  ),
  (
    14,
    0,
    '2025-10-16 21:56:01.345',
    '2025-10-16 21:56:01.345',
    158
  ),
  (
    15,
    0,
    '2025-10-17 03:18:02.280',
    '2025-10-17 03:18:02.280',
    162
  ),
  (
    16,
    0,
    '2025-10-17 03:51:30.070',
    '2025-10-17 03:51:30.070',
    36
  ),
  (
    17,
    0,
    '2025-10-17 04:36:43.496',
    '2025-10-17 04:36:43.496',
    16
  ),
  (
    18,
    0,
    '2025-10-17 04:39:01.281',
    '2025-10-17 04:39:01.281',
    164
  ),
  (
    19,
    0,
    '2025-10-17 05:09:18.985',
    '2025-10-17 05:09:18.985',
    165
  ),
  (
    20,
    0,
    '2025-10-17 05:55:50.620',
    '2025-10-17 05:55:50.620',
    167
  ),
  (
    21,
    0,
    '2025-10-17 06:02:55.965',
    '2025-10-17 06:02:55.965',
    170
  ),
  (
    22,
    0,
    '2025-10-17 06:46:30.667',
    '2025-10-17 06:46:30.667',
    171
  ),
  (
    23,
    0,
    '2025-10-17 07:03:51.878',
    '2025-10-17 07:03:51.878',
    70
  ),
  (
    24,
    0,
    '2025-10-17 07:03:57.777',
    '2025-10-17 07:03:57.777',
    173
  ),
  (
    25,
    0,
    '2025-10-17 07:10:45.738',
    '2025-10-17 07:10:45.738',
    79
  ),
  (
    26,
    0,
    '2025-10-17 07:11:20.932',
    '2025-10-17 07:11:20.932',
    131
  ),
  (
    27,
    0,
    '2025-10-17 08:00:01.122',
    '2025-10-17 08:00:01.122',
    85
  ),
  (
    28,
    0,
    '2025-10-17 08:37:19.716',
    '2025-10-17 08:37:19.716',
    107
  ),
  (
    29,
    0,
    '2025-10-17 08:38:07.178',
    '2025-10-17 08:38:07.178',
    168
  ),
  (
    30,
    0,
    '2025-10-17 09:58:32.994',
    '2025-10-17 09:58:32.994',
    182
  ),
  (
    31,
    0,
    '2025-10-17 10:29:33.507',
    '2025-10-17 10:29:33.507',
    186
  ),
  (
    32,
    0,
    '2025-10-17 10:51:32.928',
    '2025-10-17 10:51:32.928',
    187
  ),
  (
    33,
    0,
    '2025-10-17 12:49:02.036',
    '2025-10-17 12:49:02.036',
    179
  ),
  (
    34,
    0,
    '2025-10-17 14:44:29.864',
    '2025-10-17 14:44:29.864',
    192
  ),
  (
    35,
    0,
    '2025-10-17 16:07:51.237',
    '2025-10-17 16:07:51.237',
    193
  ),
  (
    36,
    0,
    '2025-10-17 21:28:40.692',
    '2025-10-17 21:28:40.692',
    196
  ),
  (
    37,
    0,
    '2025-10-18 04:36:27.831',
    '2025-10-18 04:36:27.831',
    198
  ),
  (
    38,
    0,
    '2025-10-18 05:26:16.824',
    '2025-10-18 05:26:16.824',
    200
  ),
  (
    39,
    0,
    '2025-10-18 05:40:10.142',
    '2025-10-18 05:40:10.142',
    201
  ),
  (
    40,
    0,
    '2025-10-18 05:44:44.747',
    '2025-10-18 05:44:44.747',
    73
  ),
  (
    41,
    0,
    '2025-10-18 05:50:11.418',
    '2025-10-18 05:50:11.418',
    62
  ),
  (
    42,
    0,
    '2025-10-18 08:45:47.744',
    '2025-10-18 08:45:47.744',
    207
  ),
  (
    43,
    0,
    '2025-10-18 09:45:49.609',
    '2025-10-18 09:45:49.609',
    212
  ),
  (
    44,
    0,
    '2025-10-18 10:41:17.200',
    '2025-10-18 10:41:17.200',
    143
  ),
  (
    45,
    0,
    '2025-10-18 14:30:45.422',
    '2025-10-18 14:30:45.422',
    219
  ),
  (
    46,
    0,
    '2025-10-18 14:45:27.883',
    '2025-10-18 14:45:27.883',
    221
  ),
  (
    47,
    0,
    '2025-10-18 15:07:37.243',
    '2025-10-18 15:07:37.243',
    191
  ),
  (
    48,
    0,
    '2025-10-18 15:36:35.995',
    '2025-10-18 15:36:35.995',
    222
  ),
  (
    49,
    0,
    '2025-10-18 17:00:59.448',
    '2025-10-18 17:00:59.448',
    202
  ),
  (
    50,
    0,
    '2025-10-18 17:30:56.774',
    '2025-10-18 17:30:56.774',
    183
  ),
  (
    51,
    0,
    '2025-10-18 19:33:24.125',
    '2025-10-18 19:33:24.125',
    224
  ),
  (
    52,
    0,
    '2025-10-18 23:01:45.093',
    '2025-10-18 23:01:45.093',
    166
  ),
  (
    53,
    0,
    '2025-10-19 04:06:30.824',
    '2025-10-19 04:06:30.824',
    211
  ),
  (
    54,
    0,
    '2025-10-19 04:31:23.671',
    '2025-10-19 04:31:23.671',
    232
  ),
  (
    55,
    0,
    '2025-10-19 05:30:30.799',
    '2025-10-19 05:30:30.799',
    234
  ),
  (
    56,
    0,
    '2025-10-19 06:02:09.801',
    '2025-10-19 06:02:09.801',
    238
  ),
  (
    57,
    0,
    '2025-10-19 06:11:40.721',
    '2025-10-19 06:11:40.721',
    239
  ),
  (
    58,
    0,
    '2025-10-19 07:30:59.015',
    '2025-10-19 07:30:59.015',
    240
  ),
  (
    59,
    0,
    '2025-10-19 08:00:17.148',
    '2025-10-19 08:00:17.148',
    242
  ),
  (
    60,
    0,
    '2025-10-19 08:24:32.817',
    '2025-10-19 08:24:32.817',
    243
  ),
  (
    61,
    0,
    '2025-10-19 10:15:25.083',
    '2025-10-19 10:15:25.083',
    246
  ),
  (
    62,
    0,
    '2025-10-19 10:31:34.824',
    '2025-10-19 10:31:34.824',
    229
  ),
  (
    63,
    0,
    '2025-10-19 15:19:28.409',
    '2025-10-19 15:19:28.409',
    249
  );
/*!40000 ALTER TABLE `FreelancerWallet` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `JobPost`
--

DROP TABLE IF EXISTS `JobPost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `JobPost` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skills` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `budget` double NOT NULL,
  `deadline` datetime(3) NOT NULL,
  `experienceLevel` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'intermediate',
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `JobPost_userId_fkey` (`userId`),
  CONSTRAINT `JobPost_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 37 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `JobPost`
--

LOCK TABLES `JobPost` WRITE;
/*!40000 ALTER TABLE `JobPost` DISABLE KEYS */
;
INSERT INTO `JobPost`
VALUES (
    1,
    'Need Web Developer',
    'Need to design Health care website',
    'web-development',
    '[\"React\"]',
    1000,
    '2025-12-30 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-13 17:07:51.498',
    '2025-10-13 17:07:51.498',
    4
  ),
  (
    2,
    'Need Data Analyst',
    'Hi there! \n\nI’m looking for a data analyst who can help me make sense of our business data. We have a mix of data in Excel, SQL, and a few online tools, and I’d love someone who can organize ',
    'data-science',
    '[\"Data Science\",\"Power BI\",\"Dashboard\"]',
    500,
    '2025-10-31 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-14 03:11:50.839',
    '2025-10-14 03:11:50.839',
    4
  ),
  (
    4,
    'Need Virtual Assistant',
    'Hi there! 👋\n\nI’m looking for a Virtual Assistant who can help me stay organized and handle a variety of daily tasks. I run a small business and need someone who’s dependable, detail-oriented,',
    'business',
    '[\"Virtual Assistant\"]',
    100,
    '2025-10-31 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-14 10:33:54.800',
    '2025-10-14 10:33:54.800',
    15
  ),
  (
    5,
    'I need a react developer',
    'I’m looking for a skilled React.js developer to help build and maintain a modern, responsive web application. The developer should have strong knowledge of React hooks, component-based archit',
    'web-development',
    '[\"React.JS\"]',
    500,
    '2025-10-30 00:00:00.000',
    'expert',
    'active',
    '2025-10-14 12:02:52.942',
    '2025-10-14 12:02:52.942',
    19
  ),
  (
    6,
    'Data Analyst for Business Insights',
    'We’re looking for an experienced Data Analyst to help us collect, clean, and analyze business data to improve decision-making. You’ll work with sales and marketing data, create dashboards (Excel, Power BI, or Google Data Studio), and present actionable insights.',
    'data-science',
    '[\"Data Analysis, Power BI, Excel, SQL, Visualization, Reporting.\"]',
    1000,
    '2025-10-21 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 06:50:20.000',
    '2025-10-17 06:50:20.000',
    172
  ),
  (
    7,
    'Virtual Assistant for Daily Business Tasks',
    'Seeking a reliable Virtual Assistant to help with scheduling, email management, data entry, and online research. Must be detail-oriented and communicate well in English.',
    'web-development',
    '[\"HTML, CSS, JavaScript, PHP, Shopify/WooCommerce, API integration.\"]',
    500,
    '2025-10-19 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 06:52:38.265',
    '2025-10-17 06:52:38.265',
    172
  ),
  (
    8,
    'Social Media Manager for Brand Growth',
    'Looking for a creative Social Media Manager to handle Instagram, Facebook, and LinkedIn. You’ll create engaging posts, manage daily interactions, and grow followers organically.',
    'digital-marketing',
    '[\"Social Media Strategy, Canva, Copywriting, Scheduling Tools.\"]',
    2500,
    '2025-10-20 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 06:54:16.374',
    '2025-10-17 06:54:16.374',
    172
  ),
  (
    9,
    'Graphic Designer for Branding and Marketing Materials',
    'We need a talented Graphic Designer to design logos, brochures, and social media creatives. Should have a strong eye for detail and be familiar with brand identity design.',
    'graphic-design',
    '[\"Adobe Photoshop, Illustrator, Canva, Creativity.\"]',
    100,
    '2025-10-22 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 06:56:46.633',
    '2025-10-17 06:56:46.633',
    172
  ),
  (
    10,
    'SEO Specialist for Website Optimization',
    'Hiring an SEO Expert to improve our website ranking on Google. You’ll perform keyword research, on-page and off-page optimization, and deliver monthly SEO performance reports.',
    'web-development',
    '[\"SEO, Keyword Research, Google Analytics, Backlink Strategy.\"]',
    100,
    '2025-10-22 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 07:58:32.349',
    '2025-10-17 07:58:32.349',
    172
  ),
  (
    11,
    'Content Writer for Blogs and Product Descriptions',
    'We’re looking for a skilled Content Writer to produce engaging blog posts and product descriptions that align with our brand voice.',
    'writing-translation',
    '[\"SEO Writing, Copywriting, Research, Editing.\"]',
    300,
    '2025-10-20 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 07:59:54.674',
    '2025-10-17 07:59:54.674',
    172
  ),
  (
    12,
    'Mobile App Developer for Android/iOS',
    'Seeking an experienced Mobile App Developer to create a cross-platform app for our service-based business. App should include login, booking, and payment features.',
    'mobile-development',
    '[\"Flutter/React Native, Firebase, UI/UX Design, API Integration.\"]',
    1000,
    '2025-10-21 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 08:00:50.925',
    '2025-10-17 08:00:50.925',
    172
  ),
  (
    13,
    'Accountant / Bookkeeper for Small Business',
    'Need a professional Accountant or Bookkeeper to manage our monthly financial reports, reconcile transactions, and handle invoicing.',
    'business',
    '[\"QuickBooks, Excel, Financial Reporting, Data Entry. Experience Level: Intermediate\"]',
    500,
    '2025-10-19 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 08:57:22.523',
    '2025-10-17 08:57:22.523',
    172
  ),
  (
    14,
    'Customer Support Representative (Remote)',
    'We’re hiring a Customer Support Representative to handle chat and email support for our online store. You’ll assist customers with order tracking, returns, and general inquiries.',
    'business',
    '[\"Communication, CRM Tools, Problem Solving, Empathy.\"]',
    100,
    '2025-10-23 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 08:59:09.745',
    '2025-10-17 08:59:09.745',
    172
  ),
  (
    15,
    'Web Developer for E-Commerce Website',
    'We need a Full Stack Web Developer to build an e-commerce website for our clothing brand. The site should include product customization (e.g., upload image on t-shirt, choose color, preview mockup), shopping cart, and secure payment gateway integration.',
    'web-development',
    '[\"HTML, CSS, JavaScript, PHP, Shopify/WooCommerce, API integration.\"]',
    2500,
    '2025-10-22 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 09:00:34.103',
    '2025-10-17 09:00:34.103',
    172
  ),
  (
    16,
    'UI/UX Designer for Modern Web & Mobile App',
    'We’re looking for a passionate UI/UX Designer to design clean, user-friendly interfaces for our upcoming web and mobile app. You should be able to create wireframes, prototypes, and design systems that align with our brand.',
    'graphic-design',
    '[\"Figma, Adobe XD, Wireframing, User Research, Prototyping.\"]',
    500,
    '2025-10-23 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 09:04:42.875',
    '2025-10-17 09:04:42.875',
    180
  ),
  (
    17,
    'Video Editor for Social Media and Ads',
    'Seeking a creative Video Editor to produce engaging content for Instagram Reels, YouTube, and Facebook Ads. Must understand pacing, transitions, and storytelling.',
    'video-animation',
    '[\"Adobe Premiere Pro, After Effects, Storytelling, Motion Graphics.\"]',
    1000,
    '2025-10-25 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 09:06:01.202',
    '2025-10-17 09:06:01.202',
    180
  ),
  (
    18,
    'WordPress Developer for Company Website',
    'We need an experienced WordPress Developer to redesign our company website with a professional, modern look. Must have experience with Elementor or Divi, and SEO best practices.',
    'writing-translation',
    '[\"WordPress, PHP, Elementor, CSS, SEO Optimization.\"]',
    500,
    '2025-10-23 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 09:07:02.467',
    '2025-10-17 09:07:02.467',
    180
  ),
  (
    19,
    'Email Marketing Specialist',
    'Looking for an Email Marketing Expert to design, write, and automate email campaigns that boost conversions and customer engagement.',
    'digital-marketing',
    '[\"Mailchimp, Klaviyo, Copywriting, Campaign Strategy, A/B Testing.\"]',
    1000,
    '2025-10-23 00:00:00.000',
    'entry',
    'active',
    '2025-10-17 09:08:05.585',
    '2025-10-17 09:08:05.585',
    180
  ),
  (
    20,
    'Copywriter for Ad Campaigns & Landing Pages',
    'We’re hiring a Copywriter who can write high-converting ad copy and landing page content. You should understand customer psychology and brand tone.',
    'writing-translation',
    '[\"Copywriting, Marketing, Conversion Optimization, Storytelling.\"]',
    1000,
    '2025-10-23 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 09:08:56.710',
    '2025-10-17 09:08:56.710',
    180
  ),
  (
    21,
    'Shopify Expert for Online Store Setup',
    'Need a Shopify Expert to build and customize an online store for our clothing and accessories business. Must include payment gateway setup, theme customization, and SEO optimization.',
    'web-development',
    '[\"Shopify, Liquid, Theme Customization, Payment Integration.\"]',
    1000,
    '2025-10-29 00:00:00.000',
    'entry',
    'active',
    '2025-10-17 09:09:52.844',
    '2025-10-17 09:09:52.844',
    180
  ),
  (
    22,
    '3D Mockup Designer for Product Visualization',
    'We’re looking for a 3D Designer to create realistic mockups of our t-shirts, hoodies, and other apparel items. The visuals will be used for our website and marketing materials.',
    'graphic-design',
    '[\"Blender, Photoshop, Adobe Dimension, 3D Rendering.\"]',
    1000,
    '2025-10-22 00:00:00.000',
    'entry',
    'active',
    '2025-10-17 09:10:48.428',
    '2025-10-17 09:10:48.428',
    180
  ),
  (
    23,
    'Digital Marketing Manager',
    'We’re seeking a results-driven Digital Marketing Manager to manage online campaigns across Google Ads, Meta Ads, and social media platforms. Must know how to track performance and optimize ROI.',
    'digital-marketing',
    '[\"Google Ads, Meta Ads, Analytics, Strategy, SEO/SEM.\"]',
    500,
    '2025-10-29 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 09:11:45.160',
    '2025-10-17 09:11:45.160',
    180
  ),
  (
    24,
    'Project Manager for Remote Team Coordination',
    'We need an organized Project Manager to oversee multiple freelance teams, set deadlines, manage tasks, and ensure timely delivery of projects.',
    'business',
    '[\"Trello/Asana, Communication, Time Management, Leadership.\"]',
    100,
    '2025-10-23 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 09:12:44.108',
    '2025-10-17 09:12:44.108',
    180
  ),
  (
    25,
    'Customer Experience Designer',
    'We’re hiring a Customer Experience Designer to map customer journeys, identify pain points, and improve our brand’s user experience from first contact to post-purchase.',
    'graphic-design',
    '[\"CX Design, Research, Journey Mapping, UX Strategy, Analytics.\"]',
    1000,
    '2025-10-30 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 09:13:38.114',
    '2025-10-17 09:13:38.114',
    180
  ),
  (
    26,
    'Product Photographer for Apparel & Accessories',
    'We’re looking for a talented Product Photographer to capture high-quality images of our t-shirts and merchandise for our online store. The goal is to showcase texture, fit, and design clearly.',
    'graphic-design',
    '[\"Photography, Lighting, Photo Editing, Photoshop, Product Styling.\"]',
    300,
    '2025-10-24 00:00:00.000',
    'entry',
    'active',
    '2025-10-17 10:08:36.962',
    '2025-10-17 10:08:36.962',
    183
  ),
  (
    27,
    'Print File Designer (T-Shirt & Merchandise)',
    'We need a creative Graphic Designer who can prepare print-ready designs for t-shirts, mugs, and other merchandise. Should understand printing file standards and color management.',
    'graphic-design',
    '[\"Adobe Illustrator, Photoshop, CMYK Setup, Mockups, Creativity.\"]',
    1000,
    '2025-10-30 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 10:10:14.803',
    '2025-10-17 10:10:14.803',
    183
  ),
  (
    28,
    'E-Commerce Store Manager (Shopify/WooCommerce)',
    'We’re hiring a detail-oriented E-Commerce Manager to manage our online store, update product listings, handle customer queries, and track sales performance.',
    'web-development',
    '[\"Shopify/WooCommerce, Excel, SEO, Marketing, Communication. Experience Level: Intermediate\"]',
    1000,
    '2025-10-30 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 10:11:13.276',
    '2025-10-17 10:11:13.276',
    183
  ),
  (
    29,
    'Branding Specialist for Apparel Company',
    'We’re looking for a Branding Expert to refine our brand identity, including logo, tone of voice, color palette, and visual consistency across platforms.',
    'digital-marketing',
    '[\"Brand Strategy, Design, Marketing, Storytelling, Research.\"]',
    2500,
    '2025-10-30 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 10:12:06.805',
    '2025-10-17 10:12:06.805',
    183
  ),
  (
    30,
    'Facebook & Instagram Ads Specialist',
    'We need an experienced Ads Manager to set up and optimize Facebook and Instagram campaigns that drive traffic and sales for our clothing business.',
    'digital-marketing',
    '[\"Meta Ads Manager, Pixel Setup, Targeting, Analytics, A/B Testing.\"]',
    1000,
    '2025-10-30 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 10:13:08.739',
    '2025-10-17 10:13:08.739',
    183
  ),
  (
    31,
    'Customer Retention & Email Flow Specialist',
    'Hiring a Customer Retention Specialist to create automated email flows for abandoned carts, post-purchase follow-ups, and promotions.',
    'business',
    '[\"Klaviyo, Mailchimp, Copywriting, Analytics, Marketing Strategy.\"]',
    500,
    '2025-10-31 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 10:13:57.449',
    '2025-10-17 10:13:57.449',
    183
  ),
  (
    32,
    'Motion Graphic Designer for Promo Videos',
    'We need a Motion Graphics Designer to create short animated videos for product ads, website banners, and social media.',
    'graphic-design',
    '[\"After Effects, Premiere Pro, Animation, Storyboarding, Branding.\"]',
    500,
    '2025-10-29 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 10:15:05.398',
    '2025-10-17 10:15:05.398',
    183
  ),
  (
    33,
    'Product Listing Specialist (Amazon, Etsy, etc.)',
    'We’re seeking a Product Listing Expert to upload our t-shirts and merchandise to marketplaces like Amazon, Etsy, and Flipkart with optimized titles and keywords.',
    'business',
    '[\"Amazon Seller Central, SEO, Keyword Research, Excel.\"]',
    2500,
    '2025-10-31 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 10:16:12.243',
    '2025-10-17 10:16:12.243',
    183
  ),
  (
    34,
    'Content Strategist for Fashion Brand',
    'Looking for a creative Content Strategist to plan monthly content calendars, social campaigns, and storytelling ideas that connect with fashion audiences.',
    'writing-translation',
    '[\"Strategy, Copywriting, Research, Social Media, Branding.\"]',
    1000,
    '2025-10-30 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 10:17:13.506',
    '2025-10-17 10:17:13.506',
    183
  ),
  (
    35,
    'Quality Control Specialist for Print Production',
    'We’re hiring a Quality Control Specialist to review printed apparel for design accuracy, color consistency, and print alignment before shipping.',
    'business',
    '[\"Attention to Detail, Printing Knowledge, Quality Assurance, Reporting.\"]',
    1000,
    '2025-10-31 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-17 10:18:09.095',
    '2025-10-17 10:18:09.095',
    183
  ),
  (
    36,
    'Need Help',
    'Website technical Issue',
    'web-development',
    '[\"Website\"]',
    50,
    '2025-10-22 00:00:00.000',
    'intermediate',
    'active',
    '2025-10-18 07:57:29.621',
    '2025-10-18 07:57:29.621',
    183
  );
/*!40000 ALTER TABLE `JobPost` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `Message`
--

DROP TABLE IF EXISTS `Message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `Message` (
  `id` int NOT NULL AUTO_INCREMENT,
  `content` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `messageType` enum(
    'TEXT',
    'IMAGE',
    'FILE',
    'PAYMENT_REQUEST',
    'PAYMENT_COMPLETED',
    'PAYMENT_FAILED',
    'SYSTEM',
    'PROJECT_UPDATE'
  ) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'TEXT',
  `fileUrl` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` double DEFAULT NULL,
  `paymentStatus` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'USD',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `senderId` int NOT NULL,
  `jobId` int DEFAULT NULL,
  `proposalId` int DEFAULT NULL,
  `parentId` int DEFAULT NULL,
  `conversationId` int DEFAULT NULL,
  `paymentRequestId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Message_senderId_fkey` (`senderId`),
  KEY `Message_jobId_fkey` (`jobId`),
  KEY `Message_proposalId_fkey` (`proposalId`),
  KEY `Message_parentId_fkey` (`parentId`),
  KEY `Message_conversationId_fkey` (`conversationId`),
  KEY `Message_paymentRequestId_fkey` (`paymentRequestId`),
  CONSTRAINT `Message_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `Conversation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Message_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `JobPost` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Message_parentId_fkey` FOREIGN KEY (`parentId`) REFERENCES `Message` (`id`) ON DELETE
  SET NULL ON UPDATE CASCADE,
    CONSTRAINT `Message_paymentRequestId_fkey` FOREIGN KEY (`paymentRequestId`) REFERENCES `PaymentRequest` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `Message_proposalId_fkey` FOREIGN KEY (`proposalId`) REFERENCES `Proposal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `Message_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 17 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `Message`
--

LOCK TABLES `Message` WRITE;
/*!40000 ALTER TABLE `Message` DISABLE KEYS */
;
INSERT INTO `Message`
VALUES (
    1,
    'Congratulations! Your proposal for \"I need a react developer\" has been accepted. The project budget is $450.',
    'SYSTEM',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-14 12:04:34.722',
    19,
    NULL,
    NULL,
    NULL,
    1,
    NULL
  ),
  (
    2,
    'Project \"I need a react developer\" has been marked as completed by the freelancer.',
    'PROJECT_UPDATE',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-15 15:15:26.801',
    2,
    NULL,
    NULL,
    NULL,
    1,
    NULL
  ),
  (
    3,
    'Congratulations! Your proposal for \"I need a react developer\" has been accepted. The project budget is $500.',
    'SYSTEM',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-16 15:25:57.904',
    19,
    NULL,
    NULL,
    NULL,
    2,
    NULL
  ),
  (
    4,
    'Hi',
    'TEXT',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-16 15:28:18.199',
    19,
    NULL,
    NULL,
    NULL,
    2,
    NULL
  ),
  (
    5,
    'Hiii',
    'TEXT',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-16 15:28:58.038',
    19,
    NULL,
    NULL,
    NULL,
    2,
    NULL
  ),
  (
    6,
    'hii',
    'TEXT',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-16 15:29:18.727',
    2,
    NULL,
    NULL,
    NULL,
    1,
    NULL
  ),
  (
    7,
    'Payment Request: hh - Amount: $100.00',
    'PAYMENT_REQUEST',
    NULL,
    100,
    NULL,
    'USD',
    '2025-10-16 15:32:19.769',
    41,
    NULL,
    NULL,
    NULL,
    2,
    1
  ),
  (
    8,
    'Project \"I need a react developer\" has been marked as completed. Note: Some payments are still pending.',
    'PROJECT_UPDATE',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-16 15:33:34.658',
    41,
    NULL,
    NULL,
    NULL,
    2,
    NULL
  ),
  (
    9,
    'Congratulations! Your proposal for \"Need Help\" has been accepted. The project budget is $50.',
    'SYSTEM',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-18 07:59:35.148',
    183,
    NULL,
    NULL,
    NULL,
    3,
    NULL
  ),
  (
    10,
    'Hi',
    'TEXT',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-18 08:00:02.094',
    3,
    NULL,
    NULL,
    NULL,
    3,
    NULL
  ),
  (
    11,
    'your work is done',
    'TEXT',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-18 08:00:55.697',
    3,
    NULL,
    NULL,
    NULL,
    3,
    NULL
  ),
  (
    12,
    'Thank you',
    'TEXT',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-18 08:01:14.131',
    183,
    NULL,
    NULL,
    NULL,
    3,
    NULL
  ),
  (
    13,
    'Payment Request: Please release the payment - Amount: $50.00',
    'PAYMENT_REQUEST',
    NULL,
    50,
    NULL,
    'USD',
    '2025-10-18 08:01:54.165',
    3,
    NULL,
    NULL,
    NULL,
    3,
    2
  ),
  (
    14,
    'Payment request approved by client',
    'SYSTEM',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-18 08:05:04.581',
    183,
    NULL,
    NULL,
    NULL,
    3,
    NULL
  ),
  (
    15,
    'Payment request approved by client',
    'SYSTEM',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-18 08:05:10.515',
    183,
    NULL,
    NULL,
    NULL,
    3,
    NULL
  ),
  (
    16,
    'Project \"Need Help\" has been marked as completed by the freelancer.',
    'PROJECT_UPDATE',
    NULL,
    NULL,
    NULL,
    'USD',
    '2025-10-18 08:44:13.667',
    3,
    NULL,
    NULL,
    NULL,
    3,
    NULL
  );
/*!40000 ALTER TABLE `Message` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `PaymentRequest`
--

DROP TABLE IF EXISTS `PaymentRequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `PaymentRequest` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `dueDate` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'USD',
  `razorpayOrderId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `razorpayPaymentId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `freelancerName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `clientName` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `projectTitle` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `conversationId` int NOT NULL,
  `clientId` int NOT NULL,
  `freelancerId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `PaymentRequest_conversationId_fkey` (`conversationId`),
  KEY `PaymentRequest_clientId_fkey` (`clientId`),
  KEY `PaymentRequest_freelancerId_fkey` (`freelancerId`),
  CONSTRAINT `PaymentRequest_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `PaymentRequest_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `Conversation` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `PaymentRequest_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `PaymentRequest`
--

LOCK TABLES `PaymentRequest` WRITE;
/*!40000 ALTER TABLE `PaymentRequest` DISABLE KEYS */
;
INSERT INTO `PaymentRequest`
VALUES (
    1,
    100,
    'hh',
    'pending',
    NULL,
    '2025-10-16 15:32:19.754',
    '2025-10-16 15:32:19.754',
    'USD',
    NULL,
    NULL,
    'Rohan',
    'priyasingh',
    'I need a react developer',
    2,
    19,
    41
  ),
  (
    2,
    50,
    'Please release the payment',
    'failed',
    NULL,
    '2025-10-18 08:01:54.067',
    '2025-10-18 08:05:10.532',
    'USD',
    NULL,
    NULL,
    'Neeraj Baghel',
    'James',
    'Need Help',
    3,
    183,
    3
  );
/*!40000 ALTER TABLE `PaymentRequest` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `PayoutRequest`
--

DROP TABLE IF EXISTS `PayoutRequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `PayoutRequest` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adminNotes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `walletId` int NOT NULL,
  `bankDetailId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `PayoutRequest_walletId_fkey` (`walletId`),
  KEY `PayoutRequest_bankDetailId_fkey` (`bankDetailId`),
  CONSTRAINT `PayoutRequest_bankDetailId_fkey` FOREIGN KEY (`bankDetailId`) REFERENCES `BankDetail` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `PayoutRequest_walletId_fkey` FOREIGN KEY (`walletId`) REFERENCES `FreelancerWallet` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `PayoutRequest`
--

LOCK TABLES `PayoutRequest` WRITE;
/*!40000 ALTER TABLE `PayoutRequest` DISABLE KEYS */
;
/*!40000 ALTER TABLE `PayoutRequest` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `Project`
--

DROP TABLE IF EXISTS `Project`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `Project` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `budget` double NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `completedAt` datetime(3) DEFAULT NULL,
  `clientId` int NOT NULL,
  `freelancerId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Project_clientId_fkey` (`clientId`),
  KEY `Project_freelancerId_fkey` (`freelancerId`),
  CONSTRAINT `Project_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Project_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 4 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `Project`
--

LOCK TABLES `Project` WRITE;
/*!40000 ALTER TABLE `Project` DISABLE KEYS */
;
INSERT INTO `Project`
VALUES (
    1,
    'I need a react developer',
    'I’m looking for a skilled React.js developer to help build and maintain a modern, responsive web application. The developer should have strong knowledge of React hooks, component-based archit',
    450,
    'completed',
    '2025-10-14 12:04:34.671',
    '2025-10-15 15:15:26.776',
    '2025-10-15 15:15:26.776',
    19,
    2
  ),
  (
    2,
    'I need a react developer',
    'I’m looking for a skilled React.js developer to help build and maintain a modern, responsive web application. The developer should have strong knowledge of React hooks, component-based archit',
    500,
    'completed',
    '2025-10-16 15:25:57.848',
    '2025-10-16 15:33:34.632',
    '2025-10-16 15:33:34.632',
    19,
    41
  ),
  (
    3,
    'Need Help',
    'Website technical Issue',
    50,
    'completed',
    '2025-10-18 07:59:35.094',
    '2025-10-18 08:44:13.639',
    '2025-10-18 08:44:13.639',
    183,
    3
  );
/*!40000 ALTER TABLE `Project` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `Proposal`
--

DROP TABLE IF EXISTS `Proposal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `Proposal` (
  `id` int NOT NULL AUTO_INCREMENT,
  `coverLetter` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bidAmount` double NOT NULL,
  `timeframe` int NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `jobId` int NOT NULL,
  `freelancerId` int NOT NULL,
  `conversationId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Proposal_jobId_freelancerId_key` (`jobId`, `freelancerId`),
  KEY `Proposal_freelancerId_fkey` (`freelancerId`),
  KEY `Proposal_conversationId_fkey` (`conversationId`),
  CONSTRAINT `Proposal_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `Conversation` (`id`) ON DELETE
  SET NULL ON UPDATE CASCADE,
    CONSTRAINT `Proposal_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT `Proposal_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `JobPost` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 130 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `Proposal`
--

LOCK TABLES `Proposal` WRITE;
/*!40000 ALTER TABLE `Proposal` DISABLE KEYS */
;
INSERT INTO `Proposal`
VALUES (
    1,
    'Tips for a great cover letter:\nAddress the client by name\nShow you understand their needs\nHighlight relevant experience\nExplain your approach\nBe professional and enthusiastic',
    450,
    30,
    'rejected',
    '2025-10-14 07:44:46.566',
    '2025-10-14 12:50:47.997',
    2,
    2,
    NULL
  ),
  (
    2,
    'Dear neeraja,\n\nI am excited to submit my proposal for your needed data analyst project.\n\n\n I am a good fit for this role because I have strong analytical skills, knowledge of tools like Excel',
    450,
    30,
    'pending',
    '2025-10-14 10:45:23.483',
    '2025-10-14 10:45:23.483',
    2,
    14,
    NULL
  ),
  (
    3,
    'Hi Neeraj,\n\nI saw that you’re looking for a web developer I’d love to help!\nI specialize in building modern, responsive, and high-performing websites\nLet’s connect to discuss your project det',
    1000,
    30,
    'pending',
    '2025-10-14 11:42:41.992',
    '2025-10-14 11:42:41.992',
    1,
    18,
    NULL
  ),
  (
    4,
    'Tips for a great cover letter:\nAddress the client by name\nShow you understand their needs\nHighlight relevant experience\nExplain your approach\nBe professional and enthusiastic',
    450,
    30,
    'accepted',
    '2025-10-14 12:03:26.122',
    '2025-10-14 12:04:34.705',
    5,
    2,
    1
  ),
  (
    5,
    'I available for your project. Let\'s get in touch to discuss your specifications.',
    450,
    30,
    'pending',
    '2025-10-14 12:04:19.509',
    '2025-10-14 12:04:19.509',
    5,
    20,
    NULL
  ),
  (
    6,
    'Project Overview\n\nWe will design and develop a professional website for Neeraj that includes:\n\nA clean, modern, and responsive design compatible with all devices (desktop, tablet, mobile).\n\nC',
    900,
    15,
    'pending',
    '2025-10-14 12:33:46.191',
    '2025-10-14 12:33:46.191',
    1,
    22,
    NULL
  ),
  (
    7,
    'Dear Neeraj,\n\nI\'m excited to submit my proposal for your Data analytics and visualization challenge\n\nI understand you need to draw relevant insights for your business growth by gathering data',
    500,
    30,
    'pending',
    '2025-10-15 01:30:05.621',
    '2025-10-15 01:30:05.621',
    2,
    26,
    NULL
  ),
  (
    8,
    'Hi Neeraj,\n\nI hope you’re doing well! I’ve carefully read your requirement for a healthcare website, and I’d love to help you create something modern, clean, and easy to use that builds trust',
    700,
    15,
    'pending',
    '2025-10-15 02:00:28.825',
    '2025-10-15 02:00:28.825',
    1,
    27,
    NULL
  ),
  (
    9,
    'Dear Raman,\n\nI am writing to express my interest in your project seeking a Virtual Assistant with a business background. With over two years of hands-on experience in procurement operations, ',
    100,
    30,
    'pending',
    '2025-10-15 03:09:03.210',
    '2025-10-15 03:09:03.210',
    4,
    29,
    NULL
  ),
  (
    10,
    'Hello,\nI’m excited to apply for your Data Analyst role. I understand you need help organizing and making sense of data from Excel, SQL, and online tools. With proven expertise in Data Science',
    600,
    30,
    'pending',
    '2025-10-15 03:14:14.120',
    '2025-10-15 03:14:14.120',
    2,
    30,
    NULL
  ),
  (
    11,
    'Hi Priya,\n\nI understand you are looking for a skilled React.js developer to build and maintain a modern, responsive web application and I would be glad to help. From what you’ve shared, you n',
    450,
    30,
    'pending',
    '2025-10-15 04:12:58.603',
    '2025-10-15 04:12:58.603',
    5,
    33,
    NULL
  ),
  (
    12,
    'Hello Neeraj,\nI came across your post “Need Web Developer” and would be glad to work with you on this project.\n\nI’m an experienced Web Developer with strong expertise in React.js and advanced',
    900,
    30,
    'pending',
    '2025-10-15 04:35:59.645',
    '2025-10-15 04:35:59.645',
    1,
    34,
    NULL
  ),
  (
    13,
    'Hi Priya Singh,\n\nI hope you\'re doing well! I’m Nishant Verma, a passionate React Developer with hands-on experience in building fast, responsive, and user-friendly web applications. I special',
    450,
    30,
    'pending',
    '2025-10-15 04:54:40.468',
    '2025-10-15 04:54:40.468',
    5,
    35,
    NULL
  ),
  (
    14,
    'Dear Neeraj,\nI am Aazim Quazi, a Certified Data Analyst currently working in the field. I understand you need an analyst to transform your data into clear, actionable insights, and my experti',
    400,
    30,
    'pending',
    '2025-10-15 07:47:22.439',
    '2025-10-15 07:47:22.439',
    2,
    42,
    NULL
  ),
  (
    15,
    'Amitkumar Singh\nVapi, Gujarat\n📞 +91-9916219513\n✉️ Amitkumarkishor.11@com\n\nSubject: Application for  Data Analyst Position\n\nDear Neeraj,\n\nI am writing to express my interest in the Project Dat',
    450,
    30,
    'pending',
    '2025-10-15 08:43:40.536',
    '2025-10-15 08:43:40.536',
    2,
    45,
    NULL
  ),
  (
    16,
    'Hi Neeraj,\n\nI hope you’re doing well. I’m Gulnaaz Ali, a certified Data Analyst with hands-on experience in Python, SQL, Power BI, Tableau, and Advanced Excel. I’ve worked on projects involvi',
    450,
    30,
    'pending',
    '2025-10-15 13:16:47.759',
    '2025-10-15 13:16:47.759',
    2,
    51,
    NULL
  ),
  (
    17,
    'Hi Please accept my proposal',
    500,
    9,
    'pending',
    '2025-10-16 15:19:06.427',
    '2025-10-16 15:19:06.427',
    5,
    1,
    NULL
  ),
  (
    18,
    'HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII',
    500,
    8,
    'accepted',
    '2025-10-16 15:24:20.993',
    '2025-10-16 15:25:57.886',
    5,
    41,
    2
  ),
  (
    19,
    'Dear Hiring Manager\nI am writing to express my enthusiastic interest in the Business Analyst position at Aroliya. With a strong foundation in business analysis and a passion for driving busin',
    500,
    45,
    'pending',
    '2025-10-16 15:54:45.349',
    '2025-10-16 15:54:45.349',
    2,
    139,
    NULL
  ),
  (
    20,
    'I have already internship experience so I can help you on this.',
    500,
    6,
    'pending',
    '2025-10-16 18:10:14.832',
    '2025-10-16 18:10:14.832',
    2,
    135,
    NULL
  ),
  (
    21,
    'Hi Neeraj\nI have a 11 + years of experience on working with complex power bi reports with multiple data sources like sql excel apis blob storage etc',
    500,
    45,
    'pending',
    '2025-10-16 18:30:58.412',
    '2025-10-16 18:30:58.412',
    2,
    151,
    NULL
  ),
  (
    22,
    'I have over 10  years of experience as a Full-Stack developer specialized in MERN Stack, Next.js, AWS. I specialize in building high-performance, scalable, and responsive web applications and',
    500,
    35,
    'pending',
    '2025-10-16 18:39:46.426',
    '2025-10-16 18:39:46.426',
    5,
    131,
    NULL
  ),
  (
    23,
    'I have over 10  years of experience as a Full-Stack developer specialized in MERN Stack, Next.js, AWS. I specialize in building high-performance, scalable, and responsive web applications and',
    1000,
    4,
    'pending',
    '2025-10-16 18:44:32.115',
    '2025-10-16 18:44:32.115',
    1,
    131,
    NULL
  ),
  (
    24,
    'Hello Priya Singh,\n\nI came across your LinkedIn post and was instantly excited to reach out. I’m Divya Gonja a full stack developer with over a year of corporate experience and a strong freel',
    330,
    12,
    'pending',
    '2025-10-16 19:03:04.891',
    '2025-10-16 19:03:04.891',
    5,
    154,
    NULL
  ),
  (
    25,
    'Hello Neeraj,\n\nI came across your LinkedIn post and was instantly excited to reach out. I’m Divya Gonja a full stack developer with over a year of corporate experience and a strong freelance ',
    760,
    15,
    'pending',
    '2025-10-16 19:05:00.663',
    '2025-10-16 19:05:00.663',
    1,
    154,
    NULL
  ),
  (
    26,
    'Dear Hiring Manager, \n\nHere is my expression of interest.\n\nQuick Note about me:\nI have completed my MBA in Finance (60%) with statistics, maths, and quantitative subjects from IGNOU and a Bac',
    350,
    20,
    'pending',
    '2025-10-16 20:00:07.197',
    '2025-10-16 20:00:07.197',
    2,
    145,
    NULL
  ),
  (
    27,
    'Dear Neeraj,\n\nI hope you’re doing great. I’m reaching out to express my interest in the Freelance Data Analyst opportunity. I’ve spent over 5 years in the corporate world, with 4 years focuse',
    421.6867469879518,
    14,
    'pending',
    '2025-10-16 21:55:46.446',
    '2025-10-16 21:55:46.446',
    2,
    158,
    NULL
  ),
  (
    28,
    'Dear Hiring Manager,\n\nI am Sagar C S, a Statistics graduate passionate about data analysis and skilled in Python, R, SQL, and Excel. Through academic projects, I have gained experience in dat',
    400,
    13,
    'pending',
    '2025-10-17 02:04:00.776',
    '2025-10-17 02:04:00.776',
    2,
    159,
    NULL
  ),
  (
    29,
    'Hi my name is Hardik and I am front-end developer having  6+ years of experience.\n\nI have worked on lots of healthcare projects and have idea of Hippa compliance.',
    12.04819277108434,
    14,
    'pending',
    '2025-10-17 04:38:47.434',
    '2025-10-17 04:38:47.434',
    1,
    164,
    NULL
  ),
  (
    30,
    'Hi Neeraj,\nI came across your project and would love the opportunity to collaborate. With strong experience in SQL, Excel, and Power BI, I specialize in turning raw, scattered data into clear',
    450,
    59,
    'pending',
    '2025-10-17 05:09:04.783',
    '2025-10-17 05:09:04.783',
    2,
    165,
    NULL
  ),
  (
    31,
    'Hi Raman,\n\nI came across your posting for a Virtual Assistant and would love the opportunity to support your business. With a strong background in analytics, data management, and project coor',
    100,
    44,
    'pending',
    '2025-10-17 05:26:28.937',
    '2025-10-17 05:26:28.937',
    4,
    165,
    NULL
  ),
  (
    32,
    'We are listed partner with shopify and have helped many business to grow globally. We are listed partner with Shopify. We have got more than 450 plus clients across the Globe and have been de',
    1000,
    32,
    'pending',
    '2025-10-17 05:43:51.352',
    '2025-10-17 05:43:51.352',
    1,
    166,
    NULL
  ),
  (
    33,
    'we have been a trusted name in the filed of website development and digital marketing and have worked with various clients globally. We have a team working 24/7 for our clients. Please let me',
    500,
    20,
    'pending',
    '2025-10-17 05:46:46.527',
    '2025-10-17 05:46:46.527',
    5,
    166,
    NULL
  ),
  (
    34,
    '6+ years of experience as a Software Engineer specializing in Node.js, Nest.js, PHP and Laravel, delivering high-performance, scalable, and secure web applications. Adept at designing and dev',
    1000,
    69,
    'pending',
    '2025-10-17 05:55:37.850',
    '2025-10-17 05:55:37.850',
    1,
    167,
    NULL
  ),
  (
    35,
    'I am a results-driven Data Analyst and Power BI Developer with a strong foundation in data\nanalysis, visualization, and predictive modeling. My academic background in Information\nTechnology a',
    400,
    14,
    'pending',
    '2025-10-17 06:02:06.168',
    '2025-10-17 06:02:06.168',
    2,
    169,
    NULL
  ),
  (
    36,
    'hi, \nI am a software developer with experience working with startups and multiple clients. \n\ni have adequate experience in the requirement you shared and would be happy to work with you.\nLook',
    500,
    14,
    'pending',
    '2025-10-17 06:02:40.831',
    '2025-10-17 06:02:40.831',
    5,
    170,
    NULL
  ),
  (
    37,
    'hi, \nI am samar kumar, a software developer. I came across your post regarding your need of an web developer to build an health care website.\n\ni have adequate experience in this and have alre',
    1000,
    32,
    'pending',
    '2025-10-17 06:05:59.691',
    '2025-10-17 06:05:59.691',
    1,
    170,
    NULL
  ),
  (
    38,
    'Hello Neeraj,\n\nI’m excited to apply for your Data Analyst project. With a B.Tech in Information Technology and hands-on experience in data analytics, machine learning, and dashboard developme',
    6.024096385542169,
    13,
    'pending',
    '2025-10-17 06:24:11.381',
    '2025-10-17 06:24:11.381',
    2,
    168,
    NULL
  ),
  (
    39,
    'Hi Neeraj,\n\nI can work with you to use React to create a streamlined, responsive healthcare website. I concentrate on developing professional, user-friendly, and quickly loading interfaces th',
    1000,
    22,
    'pending',
    '2025-10-17 06:38:04.741',
    '2025-10-17 06:38:04.741',
    1,
    171,
    NULL
  ),
  (
    40,
    'Dear Richard,\n\nI am excited to apply for the Virtual Assistant position at your organization. With over 13 years of experience in operations, client success, and executive support roles, I ha',
    500,
    1,
    'pending',
    '2025-10-17 07:03:26.164',
    '2025-10-17 07:03:26.164',
    7,
    173,
    NULL
  ),
  (
    41,
    'Hello,\n\nI’m excited to apply for the React.js developer position. With hands-on experience in building and maintaining modern, responsive web applications using React.js, I specialize in crea',
    500,
    8,
    'pending',
    '2025-10-17 07:03:38.713',
    '2025-10-17 07:03:38.713',
    5,
    70,
    NULL
  ),
  (
    42,
    'Hi,This is kowsalya i am looking for job as a digital marketing',
    2500,
    8,
    'pending',
    '2025-10-17 07:59:44.949',
    '2025-10-17 07:59:44.949',
    8,
    177,
    NULL
  ),
  (
    43,
    'I am looking for job as a SEO developer',
    100,
    6,
    'pending',
    '2025-10-17 08:01:52.076',
    '2025-10-17 08:01:52.076',
    10,
    177,
    NULL
  ),
  (
    44,
    'I am a full stack developer having 5+ years of experience in react js. Let\'s connect to discuss more about the project.',
    500,
    8,
    'pending',
    '2025-10-17 08:02:39.360',
    '2025-10-17 08:02:39.360',
    5,
    85,
    NULL
  ),
  (
    45,
    'Hi,i am looking for job as a website developer',
    1000,
    10,
    'pending',
    '2025-10-17 08:03:34.275',
    '2025-10-17 08:03:34.275',
    1,
    177,
    NULL
  ),
  (
    46,
    'I am a full stack developer with 5+ years of experience in both front end and backend alone. I can guarantee to build website as per your needs. Hopefully we connect to discuss more about pro',
    1000,
    65,
    'pending',
    '2025-10-17 08:06:44.198',
    '2025-10-17 08:06:44.198',
    1,
    85,
    NULL
  ),
  (
    47,
    'Hey Richard,\nI am Manash, a data analyst. I enjoy playing around with data to find useful insights for decision making and presenting my findings in a concise manner. I have worked on similia',
    1000,
    14,
    'pending',
    '2025-10-17 08:52:57.745',
    '2025-10-17 08:52:57.745',
    6,
    179,
    NULL
  ),
  (
    48,
    'Hey Neeraj,\nI\'m Manash. I have worked on similiar projects and tools as required by you. I am comfortable working Excel, SQL, Power BI and R to analyse data and present findings in a concise ',
    500,
    14,
    'pending',
    '2025-10-17 08:57:39.618',
    '2025-10-17 08:57:39.618',
    2,
    179,
    NULL
  ),
  (
    49,
    'Hello, I’m Dharini Sharma, a data and business analyst experienced in transforming raw data from Excel, SQL, and online tools into clear insights and interactive Power BI dashboards. I’ve hel',
    500,
    14,
    'pending',
    '2025-10-17 09:58:24.469',
    '2025-10-17 09:58:24.469',
    2,
    182,
    NULL
  ),
  (
    50,
    'Hello, I’m Dharini Sharma, a data and business analyst experienced in transforming raw data from Excel, SQL, and online tools into clear insights and interactive Power BI dashboards. I’ve hel',
    1000,
    14,
    'pending',
    '2025-10-17 09:59:23.375',
    '2025-10-17 09:59:23.375',
    6,
    182,
    NULL
  ),
  (
    51,
    'I am samar kumar, a software developer. I came across your post regarding your need of an E-Commerce developer.\n\nI have adequate experience working with multiple startups and clients and woul',
    2500,
    36,
    'pending',
    '2025-10-17 10:00:15.061',
    '2025-10-17 10:00:15.061',
    15,
    170,
    NULL
  ),
  (
    52,
    'I am samar kumar, a software developer. I came across your post regarding your need of an Mobile app developer.\n\ni have adequate experience in this and would be happy to work with you.\nLookin',
    1000,
    36,
    'pending',
    '2025-10-17 10:01:30.987',
    '2025-10-17 10:01:30.987',
    12,
    170,
    NULL
  ),
  (
    53,
    'I am an analytics professional with over six years of experience in business intelligence and reporting. My work\nspans retail, healthcare, and manufacturing. I build reliable dashboards, stre',
    1000,
    7,
    'pending',
    '2025-10-17 10:29:25.789',
    '2025-10-17 10:29:25.789',
    6,
    186,
    NULL
  ),
  (
    54,
    'I am an analytics professional with over six years of experience in business intelligence and reporting. My work\nspans retail, healthcare, and manufacturing. I build reliable dashboards, stre',
    500,
    8,
    'pending',
    '2025-10-17 10:30:47.107',
    '2025-10-17 10:30:47.107',
    2,
    186,
    NULL
  ),
  (
    55,
    'Hi \n\nhow are you\nI can help you create an amazing logo for your Brand\nIts been 7 years i am into same space and designed more than 600+ logos and \nI strongly believe that i can add value and ',
    2500,
    8,
    'pending',
    '2025-10-17 10:49:50.601',
    '2025-10-17 10:49:50.601',
    29,
    188,
    NULL
  ),
  (
    56,
    'Hi Richard,\n\nI’m excited to apply for your Data Analyst project! I have 5+ years of experience in analytics, currently working as an Analytics Manager at Zepto, where I lead data-driven initi',
    1000,
    4,
    'pending',
    '2025-10-17 10:51:20.926',
    '2025-10-17 10:51:20.926',
    6,
    187,
    NULL
  ),
  (
    57,
    'Hi Neeraj,\n\nI’m excited to apply for your Data Analyst project! I have 5+ years of experience in analytics, currently working as an Analytics Manager at Zepto, where I lead data-driven initia',
    500,
    8,
    'pending',
    '2025-10-17 10:54:50.357',
    '2025-10-17 10:54:50.357',
    2,
    187,
    NULL
  ),
  (
    58,
    'I’m a Mobile App Developer specialized in Android & iOS apps. I’ve built and launched apps using React Native / Flutter / Kotlin / Swift / Java.\nI focus on clean UI/UX design, seamless API in',
    1000,
    44,
    'pending',
    '2025-10-17 10:59:53.567',
    '2025-10-17 10:59:53.567',
    12,
    131,
    NULL
  ),
  (
    59,
    'Hi,\n\nI came across your post regarding the Freelance Website Developer opening and wanted to express my interest in collaborating.\n\nI’m a freelance web developer and digital marketing expert ',
    500,
    29,
    'pending',
    '2025-10-17 12:55:22.776',
    '2025-10-17 12:55:22.776',
    5,
    8,
    NULL
  ),
  (
    60,
    'Hi,\n\nI came across your post regarding the Freelance Website Developer opening and wanted to express my interest in collaborating.\n\nI’m a freelance web developer and digital marketing expert ',
    1000,
    29,
    'pending',
    '2025-10-17 12:57:29.388',
    '2025-10-17 12:57:29.388',
    1,
    8,
    NULL
  ),
  (
    61,
    'Dear Richard,\n\nI’m excited to submit our proposal on behalf of Legacyforge Marketing Pvt. Ltd., a young and energetic startup passionate about crafting high-performing digital experiences. We',
    2500,
    44,
    'pending',
    '2025-10-17 13:44:50.992',
    '2025-10-17 13:44:50.992',
    15,
    191,
    NULL
  ),
  (
    62,
    'Dear Priya Singh,\n\nI’m excited to submit our proposal on behalf of Legacyforge Marketing Pvt. Ltd. We are a dynamic and energetic startup passionate about building modern, responsive web appl',
    500,
    44,
    'pending',
    '2025-10-17 13:48:53.370',
    '2025-10-17 13:48:53.370',
    5,
    191,
    NULL
  ),
  (
    63,
    'Dear Jhon,\n\nI’m excited to submit our proposal on behalf of Legacyforge Marketing Pvt. Ltd. We are a young and energetic startup with a strong focus on delivering measurable results in digita',
    500,
    15,
    'pending',
    '2025-10-17 13:50:55.067',
    '2025-10-17 13:50:55.067',
    23,
    191,
    NULL
  ),
  (
    64,
    'Dear James,\n\nI’m excited to submit our proposal on behalf of Legacyforge Marketing Pvt. Ltd. We are a young and energetic startup passionate about driving results through Facebook and Instagr',
    1000,
    15,
    'pending',
    '2025-10-17 13:53:24.250',
    '2025-10-17 13:53:24.250',
    30,
    191,
    NULL
  ),
  (
    65,
    'Hello James,\n\nI’m Raj Kharat, founder of Da Creations, a creative agency specializing in motion graphics, video editing, and animated promo content for brands across industries. We help busin',
    600,
    15,
    'pending',
    '2025-10-17 14:44:19.618',
    '2025-10-17 14:44:19.618',
    32,
    192,
    NULL
  ),
  (
    66,
    'Hello John,\n\nI’m Raj Kharat, founder of Da Creations, a creative agency specializing in motion graphics, video editing, and animated promo content for brands across industries. We help busine',
    1000,
    15,
    'pending',
    '2025-10-17 14:47:35.723',
    '2025-10-17 14:47:35.723',
    17,
    192,
    NULL
  ),
  (
    67,
    'Hello Richard,\n\nI’m Raj Kharat from Da Creations, a creative agency specializing in video editing, brand storytelling, and digital content marketing. While our core strength lies in high-qual',
    2500,
    15,
    'pending',
    '2025-10-17 14:50:59.267',
    '2025-10-17 14:50:59.267',
    8,
    192,
    NULL
  ),
  (
    68,
    'Digirocket has been a premium choice in the E commerce space. We are listed partner with Shopify and have helped many retails business to experience emense growth.',
    2000,
    62,
    'pending',
    '2025-10-17 15:22:12.813',
    '2025-10-17 15:22:12.813',
    33,
    166,
    NULL
  ),
  (
    69,
    'Who We Are?\nWith over three years of industry experience and a proven track record of working with 300+ clients, we have become a trusted partner in turning visions into powerful brands.',
    900,
    35,
    'pending',
    '2025-10-17 15:27:02.998',
    '2025-10-17 15:27:02.998',
    30,
    166,
    NULL
  ),
  (
    70,
    'Dear John,\nI’m excited to submit my proposal for redesigning your company website to give it a professional, modern, and user-focused look. With over 4 years of experience in WordPress design',
    500,
    14,
    'pending',
    '2025-10-17 16:07:10.030',
    '2025-10-17 16:07:10.030',
    18,
    193,
    NULL
  ),
  (
    71,
    'Subject: Application for Freelance Email Marketing Role\n\nDear Recruiter,\n\nI’m writing to express my interest in the Freelance Email Marketing position. With hands-on experience in Mailchimp a',
    700,
    2,
    'pending',
    '2025-10-17 21:27:45.949',
    '2025-10-17 21:27:45.949',
    19,
    196,
    NULL
  ),
  (
    72,
    'Subject: Application for Quality Control Specialist – Print Production (JOB-000035)\n\nDear James,\n\nI’m excited to apply for the Quality Control Specialist role. With hands-on experience managi',
    980,
    1,
    'pending',
    '2025-10-17 21:36:27.150',
    '2025-10-17 21:36:27.150',
    35,
    196,
    NULL
  ),
  (
    73,
    'Hi James,\n\nI’m really excited about your project! As someone who has created fashion-focused content both for online platforms and physical clothing stores, I understand what truly connects w',
    1000,
    2,
    'pending',
    '2025-10-17 21:40:43.783',
    '2025-10-17 21:40:43.783',
    34,
    196,
    NULL
  ),
  (
    74,
    'Hi James,\n\nI’m genuinely excited about this opportunity — fashion branding is something I’ve lived and built from experience, not just studied.\n\nI come from a strong fashion retail background',
    2500,
    3,
    'pending',
    '2025-10-17 21:44:39.960',
    '2025-10-17 21:44:39.960',
    29,
    196,
    NULL
  ),
  (
    75,
    'Dear Neeraj,\n\nI am excited to submit my proposal for the Data Analyst project. With a Post Graduate Diploma in Data Science and Engineering from Great Lakes Institute of Management, and a B.S',
    400,
    5,
    'pending',
    '2025-10-18 04:35:39.518',
    '2025-10-18 04:35:39.518',
    2,
    198,
    NULL
  ),
  (
    76,
    'Dear Richard,\n\nI am excited to submit my proposal for the Data Analyst project. With a Post Graduate Diploma in Data Science and Engineering from Great Lakes Institute of Management, and a B.',
    1000,
    6,
    'pending',
    '2025-10-18 04:37:45.373',
    '2025-10-18 04:37:45.373',
    6,
    198,
    NULL
  ),
  (
    77,
    'Hi! I came across your post for a React.js developer position. I have 3 years of hands-on experience building modern, responsive web applications with React.\nI\'m proficient in:\n\nReact Hooks &',
    500,
    43,
    'pending',
    '2025-10-18 05:39:56.267',
    '2025-10-18 05:39:56.267',
    5,
    201,
    NULL
  ),
  (
    78,
    'Palak Jain\n📧 palak.jain140795@gmail.com | 📞 +91 9971813457 | https://www.linkedin.com/in/palakjainanalyst/ | \n\nDate: 10/18/2025\n\nSubject: Application for Data Analyst Position\n\nDear Richard, ',
    1000,
    9,
    'pending',
    '2025-10-18 05:44:21.802',
    '2025-10-18 05:44:21.802',
    6,
    73,
    NULL
  ),
  (
    79,
    'Palak Jain\n📧 palak.jain140795@gmail.com | 📞 +91 9971813457 | https://www.linkedin.com/in/palakjainanalyst/ | \n\nDate: 10/18/2025\n\nSubject: Application for Data Analyst Position\n\nDear Sir, \n\nI ',
    500,
    13,
    'pending',
    '2025-10-18 06:01:54.109',
    '2025-10-18 06:01:54.109',
    2,
    73,
    NULL
  ),
  (
    80,
    'Hi there \nI’m a React.js developer with 5+ years of experience building modern, responsive and scalable web apps using React Hooks, Context API, Redux, and component-based architecture. I wri',
    500,
    12,
    'pending',
    '2025-10-18 06:02:47.402',
    '2025-10-18 06:02:47.402',
    5,
    62,
    NULL
  ),
  (
    81,
    'Hi \nI can design a modern, clean, and professional health care website that builds trust and delivers a smooth user experience. I focus on responsive design, fast loading speed, and clear lay',
    1000,
    18,
    'pending',
    '2025-10-18 06:04:33.889',
    '2025-10-18 06:04:33.889',
    1,
    62,
    NULL
  ),
  (
    82,
    'I can Help you',
    50,
    2,
    'accepted',
    '2025-10-18 07:58:17.979',
    '2025-10-18 07:59:35.133',
    36,
    3,
    3
  ),
  (
    83,
    'I have experience managing digital campaigns from start to finish — from planning and coordination to tracking and optimizing performance. As an Account Executive in a marketing agency, I’ve ',
    500,
    12,
    'pending',
    '2025-10-18 08:45:30.996',
    '2025-10-18 08:45:30.996',
    23,
    207,
    NULL
  ),
  (
    84,
    'I can help you in fixing the bug',
    50,
    4,
    'pending',
    '2025-10-18 09:00:25.953',
    '2025-10-18 09:00:25.953',
    36,
    208,
    NULL
  ),
  (
    85,
    'Hi Richard,\n\nI’d love to help you turn your business data into clear and actionable insights. I have strong experience working with **Power BI, Excel, and SQL**, building dashboards and repor',
    1000,
    7,
    'pending',
    '2025-10-18 09:44:17.737',
    '2025-10-18 09:44:17.737',
    6,
    211,
    NULL
  ),
  (
    86,
    'Hi Richard,\n\nI hope this message finds you well. I have thoroughly reviewed your requirement of a Web Developer for eCommerce website and I will provide you WordPress + wooCommerce based webs',
    2000,
    13,
    'pending',
    '2025-10-18 09:45:39.544',
    '2025-10-18 09:45:39.544',
    15,
    212,
    NULL
  ),
  (
    87,
    'Hi,\nI hope this message finds you well. I have thoroughly reviewed your requirement of a WordPress Developer with experience in Elementor, Divi, SEO and Custom development too. I am confident',
    500,
    6,
    'pending',
    '2025-10-18 09:49:27.610',
    '2025-10-18 09:49:27.610',
    18,
    212,
    NULL
  ),
  (
    88,
    'Hi,\nI hope this message finds you well. I have thoroughly reviewed your requirement of designing a Health care website and I will provide you WordPress as a Backend so taht it will be easy fo',
    1000,
    9,
    'pending',
    '2025-10-18 09:51:46.520',
    '2025-10-18 09:51:46.520',
    1,
    212,
    NULL
  ),
  (
    89,
    'I’m Rajendra Bargaiya, a WordPress and web developer with 4+ years of experience, specializing in debugging, performance optimization, and fixing complex technical issues. Over the years, I’v',
    40,
    2,
    'pending',
    '2025-10-18 10:18:02.888',
    '2025-10-18 10:18:02.888',
    36,
    202,
    NULL
  ),
  (
    90,
    'I’m excited to apply for the role of Full Stack Web Developer to build your clothing brand’s e-commerce website. With over 4 years of experience in developing custom WordPress, WooCommerce, a',
    2000,
    21,
    'pending',
    '2025-10-18 10:23:20.373',
    '2025-10-18 10:23:20.373',
    15,
    202,
    NULL
  ),
  (
    91,
    'Hi,\n\nI came across your project regarding the technical issue on your website and would be glad to help you resolve it efficiently. With 8+ years of experience in full-stack development and h',
    50,
    4,
    'pending',
    '2025-10-18 10:43:22.022',
    '2025-10-18 10:43:22.022',
    36,
    143,
    NULL
  ),
  (
    92,
    'I’d love to help build your clothing brand’s e-commerce website. With 7+ years of experience in full-stack development (React.js, Node.js, MongoDB, AWS), I’ve delivered similar custom product',
    2500,
    32,
    'pending',
    '2025-10-18 10:46:12.081',
    '2025-10-18 10:46:12.081',
    15,
    143,
    NULL
  ),
  (
    93,
    'Hi Richard, \nI can build your cross-platform mobile app in Flutter with features like login, booking, and payments. I prefer Flutter because it lets me deliver smooth performance, native look',
    1000,
    40,
    'pending',
    '2025-10-18 12:40:42.170',
    '2025-10-18 12:40:42.170',
    12,
    33,
    NULL
  ),
  (
    94,
    'I’d love to help your brand create content that doesn’t just look good—but builds a loyal fashion audience and converts attention into results.\n\nWith over two years of experience in social me',
    1000,
    67,
    'pending',
    '2025-10-18 15:30:59.130',
    '2025-10-18 15:30:59.130',
    34,
    222,
    NULL
  ),
  (
    95,
    'I’d love to help you transform your social media presence into a consistent source of engagement, community, and growth.\n\nAs a Social Media Manager with over two years of experience, I specia',
    2500,
    73,
    'pending',
    '2025-10-18 15:36:08.358',
    '2025-10-18 15:36:08.358',
    8,
    222,
    NULL
  ),
  (
    96,
    'We are a start-up organisation with experience in providing web development solutions and we specialise in health care website.',
    800,
    39,
    'pending',
    '2025-10-18 15:44:29.815',
    '2025-10-18 15:44:29.815',
    1,
    217,
    NULL
  ),
  (
    97,
    'Hello,\n\nI’m a WordPress Developer with 3 years of hands-on experience building, customizing, and optimizing WordPress websites for performance, speed, and SEO. I specialize in developing cust',
    2500,
    14,
    'pending',
    '2025-10-18 16:03:56.404',
    '2025-10-18 16:03:56.404',
    15,
    223,
    NULL
  ),
  (
    98,
    'Hello,\n\nI’m a WordPress Developer with 3 years of hands-on experience building, customizing, and optimizing WordPress websites for performance, speed, and SEO. I specialize in developing cust',
    500,
    7,
    'pending',
    '2025-10-18 16:05:40.662',
    '2025-10-18 16:05:40.662',
    18,
    223,
    NULL
  ),
  (
    99,
    'Hi Neeraj,\n\nI came across your posting for a Web Developer to design a healthcare website — I’d love to help bring your vision to life.\n\nI’m an experienced React developer specializing in bui',
    1000,
    28,
    'pending',
    '2025-10-18 16:15:59.177',
    '2025-10-18 16:15:59.177',
    1,
    224,
    NULL
  ),
  (
    100,
    'Hey John,\n\nI saw you’re looking for a Shopify developer — I’d love to help! I build responsive, SEO-optimized Shopify stores with payment integration and custom themes.\n\nPortfolio: https://sa',
    1000,
    43,
    'pending',
    '2025-10-18 16:51:46.711',
    '2025-10-18 16:51:46.711',
    21,
    224,
    NULL
  ),
  (
    101,
    'Hi Richard,\n\nI’d love to help you build your e-commerce website for your clothing brand. I’m a Full Stack Web Developer with 3+ years of experience creating custom e-commerce solutions using ',
    2500,
    43,
    'pending',
    '2025-10-18 20:56:30.446',
    '2025-10-18 20:56:30.446',
    15,
    224,
    NULL
  ),
  (
    102,
    'Senior analytics professional with 6+ years of experience in building scalable BI solutions, automating data workflows, and turning\r\ncomplex data into actionable insights. Skilled in data eng',
    800,
    8,
    'pending',
    '2025-10-18 21:14:54.365',
    '2025-10-18 21:14:54.365',
    6,
    229,
    NULL
  ),
  (
    103,
    'Senior analytics professional with 6+ years of experience in building scalable BI solutions, automating data workflows, and turning\ncomplex data into actionable insights. Skilled in data engi',
    500,
    13,
    'pending',
    '2025-10-18 21:16:11.384',
    '2025-10-18 21:16:11.384',
    2,
    229,
    NULL
  ),
  (
    104,
    'Why Partner with DigiRocket Technologies\n50+ skilled professionals under a single roof covering front-end, back-end, UI/UX, and digital strategy\n\n300+ successful projects in the US alone over',
    1000,
    34,
    'pending',
    '2025-10-18 23:06:37.457',
    '2025-10-18 23:06:37.457',
    21,
    166,
    NULL
  ),
  (
    105,
    'Why Partner with DigiRocket Technologies\n50+ skilled professionals under a single roof covering front-end, back-end, UI/UX, and digital strategy\n\n300+ successful projects in the US alone over',
    2500,
    32,
    'pending',
    '2025-10-18 23:07:39.305',
    '2025-10-18 23:07:39.305',
    15,
    166,
    NULL
  ),
  (
    106,
    '\"Business Analyst / Data Analyst | Expertise in Eliciting Requirements, Creating BRD/FRD, Data-Driven Decision Making.\n4.3+ Years Experience Turning Raw Data into Actionable Insights | Chenna',
    1000,
    5,
    'pending',
    '2025-10-19 02:11:56.159',
    '2025-10-19 02:11:56.159',
    6,
    230,
    NULL
  ),
  (
    107,
    'Dear Hiring Manager,\n\nI hope you\'re doing well.\n\nI am excited to apply for the E-Commerce Store Manager (Shopify/WooCommerce) position you recently posted. With hands-on experience in managin',
    800,
    12,
    'pending',
    '2025-10-19 03:59:36.077',
    '2025-10-19 03:59:36.077',
    28,
    231,
    NULL
  ),
  (
    108,
    'I’m excited to apply for the Video Editor role focused on social media and advertising content. I have solid experience creating engaging videos for Instagram Reels, YouTube, and Facebook Ads',
    500,
    6,
    'pending',
    '2025-10-19 04:31:16.047',
    '2025-10-19 04:31:16.047',
    17,
    232,
    NULL
  ),
  (
    109,
    'Hi there! 👋\n\nI’d love to help you with your branding and marketing materials. I specialize in logo design, brochures, and social media creatives that are clean, modern, and aligned with brand',
    50,
    4,
    'pending',
    '2025-10-19 04:34:01.782',
    '2025-10-19 04:34:01.782',
    9,
    232,
    NULL
  ),
  (
    110,
    'I\'m frontend developer which primarily working on react, next js, tailwind, shadecn . I had 3 years of experience where I developed many project for my client like crm, e commerce',
    12.04819277108434,
    99,
    'pending',
    '2025-10-19 05:18:07.434',
    '2025-10-19 05:18:07.434',
    1,
    233,
    NULL
  ),
  (
    111,
    'Hi Neeraj,\n\nI came across your requirement for a Data Analyst and I’d love to help you achieve your goals.\nI specialize in turning raw data into clear, meaningful insights that drive better b',
    440,
    12,
    'pending',
    '2025-10-19 05:30:12.382',
    '2025-10-19 05:30:12.382',
    2,
    234,
    NULL
  ),
  (
    112,
    'I’m excited to apply for the Data Analyst position. With strong analytical skills and hands-on experience working with Excel, SQL, and data visualization tools, I am confident in my ability t',
    200,
    42,
    'pending',
    '2025-10-19 05:59:11.443',
    '2025-10-19 05:59:11.443',
    2,
    236,
    NULL
  ),
  (
    113,
    'Dear James\nI am writing to express my interest in collaborating on your upcoming project. As a freelance Web Developer with a strong background in front-end and back-end development, I bring ',
    50,
    17,
    'pending',
    '2025-10-19 06:08:56.360',
    '2025-10-19 06:08:56.360',
    36,
    239,
    NULL
  ),
  (
    114,
    'I am writing to express my interest in collaborating on your upcoming project. As a freelance Web Developer with a strong background in front-end and back-end development, I bring both techni',
    1000,
    30,
    'pending',
    '2025-10-19 06:11:15.265',
    '2025-10-19 06:11:15.265',
    28,
    239,
    NULL
  ),
  (
    115,
    'I am writing to express my interest in collaborating on your upcoming project. As a freelance Web Developer with a strong background in front-end and back-end development, I bring both techni',
    500,
    32,
    'pending',
    '2025-10-19 06:13:41.635',
    '2025-10-19 06:13:41.635',
    7,
    239,
    NULL
  ),
  (
    116,
    'I am writing to express my interest in collaborating on your upcoming project. As a freelance Web Developer with a strong background in front-end and back-end development, I bring both techni',
    100,
    7,
    'pending',
    '2025-10-19 06:14:55.093',
    '2025-10-19 06:14:55.093',
    10,
    239,
    NULL
  ),
  (
    117,
    'I’ve resolved the website’s technical issues and ensured everything is running smoothly now. I carefully analyzed the problem, identified the root cause, and implemented a stable fix to resto',
    50,
    11,
    'pending',
    '2025-10-19 07:02:03.015',
    '2025-10-19 07:02:03.015',
    36,
    131,
    NULL
  ),
  (
    118,
    'Hi, I’m interested in the E-Commerce Manager role. I have experience managing Shopify/WooCommerce stores, handling product listings, customer support, and tracking sales performance. Could yo',
    530,
    22,
    'pending',
    '2025-10-19 07:25:05.051',
    '2025-10-19 07:25:05.051',
    28,
    240,
    NULL
  ),
  (
    119,
    'Hi,\nI\'m reaching out to share the profile of a promising freelancer Video Editor | Ad & Content Specialist | UGC • Reels • YouTube • Trailers - who is currently seeking opportunities to grow ',
    1000,
    8,
    'pending',
    '2025-10-19 08:04:02.442',
    '2025-10-19 08:04:02.442',
    17,
    242,
    NULL
  ),
  (
    120,
    'Hi Raman,\nI’m reaching out to express my interest in exploring freelance opportunities, particularly in roles that involve assisting and supporting operations. With my background as an HR pro',
    100,
    8,
    'pending',
    '2025-10-19 08:08:16.997',
    '2025-10-19 08:08:16.997',
    4,
    242,
    NULL
  ),
  (
    121,
    'Application for Social Media Manager Role\n\nDear Sir\n\nI am excited to apply for the Social Media Manager position. With 1 year of experience in managing and growing social media presence, I sp',
    2500,
    31,
    'pending',
    '2025-10-19 08:23:49.291',
    '2025-10-19 08:23:49.291',
    8,
    243,
    NULL
  ),
  (
    122,
    'I hope you’re doing well! I’m a freelance social media manager with 1.5 years of experience in client handling and content strategy. I’d love the opportunity to handle your social media and h',
    2500,
    3,
    'pending',
    '2025-10-19 08:39:45.319',
    '2025-10-19 08:39:45.319',
    8,
    244,
    NULL
  ),
  (
    123,
    'Durga S\nThanjavur, Tamil Nadu\n📧 md29092004@gmail.com\n | 📱 +91 8148297838\n\nSubject: Application for Customer Support Representative\n\nDear Hiring Manager,\n\nI’m writing to express my interest in',
    100,
    32,
    'pending',
    '2025-10-19 08:52:30.871',
    '2025-10-19 08:52:30.871',
    14,
    60,
    NULL
  ),
  (
    124,
    'Durga S\nThanjavur, Tamil Nadu\n📧 md29092004@gmail.com\n | 📱 +91 8148297838\n\nSubject: Application for Project Manager Position\n\nDear Hiring Manager,\n\nI’m excited to apply for the Project Manager',
    100,
    32,
    'pending',
    '2025-10-19 08:55:46.864',
    '2025-10-19 08:55:46.864',
    24,
    60,
    NULL
  ),
  (
    125,
    'Hi Richard,\n\nI came across your post about needing a Data Analyst, and I’d love to help you achieve your goals.\nI specialize in transforming raw, scattered data into meaningful dashboards and',
    900,
    20,
    'pending',
    '2025-10-19 09:07:01.001',
    '2025-10-19 09:07:01.001',
    6,
    234,
    NULL
  ),
  (
    126,
    'I’m excited to apply for the Data Analyst project. With a strong background in data collection, cleaning, visualization, and business analytics, I specialize in turning raw data into meaningf',
    750,
    8,
    'pending',
    '2025-10-19 10:04:38.266',
    '2025-10-19 10:04:38.266',
    6,
    221,
    NULL
  ),
  (
    127,
    'Hi, I’m Yash Dahiya, a Data Analyst skilled in Python, SQL, Excel, Power BI, ML, DL, and NLP. I specialize in data cleaning, visualization, and business insights using tools like Pandas, NumP',
    750,
    11,
    'pending',
    '2025-10-19 10:37:15.803',
    '2025-10-19 10:37:15.803',
    6,
    246,
    NULL
  ),
  (
    128,
    'Hi Neeraj,\n\nI’m a Data Science graduate with hands-on experience in Python (Pandas, NumPy, Matplotlib, Seaborn), SQL, Excel, Power BI, and ML/DL/NLP. I specialize in data cleaning, analysis, ',
    400,
    10,
    'pending',
    '2025-10-19 10:45:06.329',
    '2025-10-19 10:45:06.329',
    2,
    246,
    NULL
  ),
  (
    129,
    'Hi Neeraj,\n\nI’d love to help you organize and analyze your business data. I’m a postgraduate in Data Science with over 3 years of experience as a Data Analyst, working with tools like Excel, ',
    6.024096385542169,
    11,
    'pending',
    '2025-10-19 15:31:59.677',
    '2025-10-19 15:31:59.677',
    2,
    249,
    NULL
  );
/*!40000 ALTER TABLE `Proposal` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `Review`
--

DROP TABLE IF EXISTS `Review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `Review` (
  `id` int NOT NULL AUTO_INCREMENT,
  `rating` int NOT NULL,
  `comment` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `reviewerId` int NOT NULL,
  `revieweeId` int NOT NULL,
  `jobId` int DEFAULT NULL,
  `aspects` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `projectId` int DEFAULT NULL,
  `type` enum('CLIENT_TO_FREELANCER', 'FREELANCER_TO_CLIENT') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'CLIENT_TO_FREELANCER',
  PRIMARY KEY (`id`),
  KEY `Review_reviewerId_fkey` (`reviewerId`),
  KEY `Review_revieweeId_fkey` (`revieweeId`),
  KEY `Review_jobId_fkey` (`jobId`),
  KEY `Review_projectId_type_idx` (`projectId`, `type`),
  CONSTRAINT `Review_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `JobPost` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Review_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `Project` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Review_revieweeId_fkey` FOREIGN KEY (`revieweeId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `Review_reviewerId_fkey` FOREIGN KEY (`reviewerId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `Review`
--

LOCK TABLES `Review` WRITE;
/*!40000 ALTER TABLE `Review` DISABLE KEYS */
;
/*!40000 ALTER TABLE `Review` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `Transaction`
--

DROP TABLE IF EXISTS `Transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `Transaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'completed',
  `paymentId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `orderId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `Transaction_userId_fkey` (`userId`),
  CONSTRAINT `Transaction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 3 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `Transaction`
--

LOCK TABLES `Transaction` WRITE;
/*!40000 ALTER TABLE `Transaction` DISABLE KEYS */
;
INSERT INTO `Transaction`
VALUES (
    1,
    1,
    'credit',
    'completed',
    'pay_RUrauEKVCxGlfD',
    'order_RUrZWRWd5fgKPG',
    'Wallet recharge - INR 1',
    '2025-10-18 08:04:58.301',
    '2025-10-18 08:04:58.301',
    183
  ),
  (
    2,
    0.02,
    'credit',
    'completed',
    'pay_RUvnc97dwhnSXR',
    'order_RUvnFQyf53JzGT',
    'Wallet recharge - INR 0.02',
    '2025-10-18 12:11:51.499',
    '2025-10-18 12:11:51.499',
    9
  );
/*!40000 ALTER TABLE `Transaction` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `User` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'user',
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'active',
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `wallet` double NOT NULL DEFAULT '0',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'USD',
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE = InnoDB AUTO_INCREMENT = 252 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */
;
INSERT INTO `User`
VALUES (
    1,
    'Super Admin',
    'admin@aroliya.com',
    '$2b$10$.vKGIlIs3oP3YTF/Ryl0xOROiYlLcYsejy4lLbMUOQmTEnRMYNGP.',
    'admin',
    'active',
    NULL,
    0,
    '2025-10-13 16:08:24.785',
    '2025-10-13 16:08:24.785',
    'USD'
  ),
  (
    2,
    'Pranjit Biswas',
    'pranjitviswas@gmail.com',
    '$2b$10$7lTUGU6ktlXv4Kzphw4t1Oz2eN4viKYCd3zoXrxQT/Uqh0mdQ4GXe',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-13 16:23:13.333',
    '2025-10-13 16:23:13.333',
    'USD'
  ),
  (
    3,
    'Neeraj Baghel',
    'neerajkumar5280@gmail.com',
    '$2b$10$k2i.GiMDOTTv4Vk1KH/WouwypuyB1UZfjVe.kaEOyMthFASeI.eaC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-13 16:27:42.032',
    '2025-10-13 16:27:42.032',
    'USD'
  ),
  (
    4,
    'Neeraj',
    'neeraj_baghel@yahoo.com',
    '$2b$10$MiLm9nSvYW1aIogMPUcmxekde1nCai6V2iixf6aZImDQk/g1qUpae',
    'client',
    'active',
    NULL,
    0,
    '2025-10-13 16:43:10.293',
    '2025-10-13 16:43:10.293',
    'USD'
  ),
  (
    5,
    'Pranjit',
    'pranjitboswas404@gmail.com',
    '$2b$10$VE.aoqoXA/HQeUejdw3R3eJCpDBPgQGmK233vcwEX75BG37/XjL7e',
    'client',
    'active',
    NULL,
    0,
    '2025-10-13 16:48:46.452',
    '2025-10-13 16:48:46.452',
    'USD'
  ),
  (
    6,
    'Priyanshu kaushik',
    'priyanshu11kaushik@gmail.com',
    '$2b$10$rSOiu/seEraMfxTssjHNCuLCwom.L.uqZLgOoBCB.ggbrevC2JZLK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-13 16:59:23.282',
    '2025-10-13 16:59:23.282',
    'USD'
  ),
  (
    7,
    'Sujithra Jayan',
    'jayansujithra@gmail.com',
    '$2b$10$JJJvStXCqVDicsW4lQGUZuTl2B8aeECFHUHl6.MbS0qczW71Irgxi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 03:26:10.153',
    '2025-10-14 03:26:10.153',
    'USD'
  ),
  (
    8,
    'Vinay battu',
    'vinaybattu892@gmail.com',
    '$2b$10$RmkCR2L/046.SmQbHX8h5u2dQl7/WLQkR8EZ0So7KZf0Oj2IIYDTy',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 03:33:09.511',
    '2025-10-14 03:33:09.511',
    'USD'
  ),
  (
    9,
    'testing@gmaio.com',
    'testing@gmaio.com',
    '$2b$10$Hbb7LI.GF9I8opcQU/yxj.s9rwnIr.uYY0bpuF5jjiv0LcM5j3wti',
    'client',
    'active',
    NULL,
    0.02,
    '2025-10-14 06:35:18.734',
    '2025-10-18 12:11:48.618',
    'USD'
  ),
  (
    10,
    'Lilly Pushpam',
    'lilly24pushpam94@gmail.com',
    '$2b$10$UozoBvphpzokIZ/9Q5Q16u.m3MJ21pN2waIrLwy2AxbdmOqJvGZ9K',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 07:30:16.910',
    '2025-10-14 07:30:16.910',
    'USD'
  ),
  (
    11,
    'Nandita Razdan',
    'razdannandita@gmail.com',
    '$2b$10$bzGYhHQ7UtmGro7YrCweU.PiMHq8N9m0LWKtu6Oalw03xcW4mLkAa',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 07:33:11.271',
    '2025-10-14 07:33:11.271',
    'USD'
  ),
  (
    12,
    'Netra',
    'netraprasad609@gmail.com',
    '$2b$10$D9efucqZdWHwEr5fNZbDWeWDobGq/0xGD.e8/NmCNxjzUyXf4iQ1K',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 09:46:54.381',
    '2025-10-14 09:46:54.381',
    'USD'
  ),
  (
    13,
    'Rahulsitaula',
    'Rahulsitaula@gmail.com',
    '$2b$10$UWoXqP6zlVXutA2XeSUeV.ZbOlVff.ElT6/gidcgg0VL1bm5pW2c.',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 10:01:20.180',
    '2025-10-14 10:01:20.180',
    'USD'
  ),
  (
    14,
    'Akhila Gunji',
    'akhilagunji099@gmail.com',
    '$2b$10$l5lO2YZZtsoVhfXMs7mgz.3iXmrI/qHaVVQ1ClDOxqcMWIZULNzR6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 10:28:35.404',
    '2025-10-14 10:28:35.404',
    'USD'
  ),
  (
    15,
    'Raman',
    'testing@gmail.com',
    '$2b$10$NKV5t3K0NImkNV2TO1K0FO123TRwT1eS4nL4dyIGeVNVH4Xs7OqwK',
    'client',
    'active',
    NULL,
    0,
    '2025-10-14 10:31:13.877',
    '2025-10-14 10:31:13.877',
    'USD'
  ),
  (
    16,
    'Sudeb Chakraborty',
    'sudeb@dextechlabs.com',
    '$2b$10$MJtqh1S/ElN4IVdetIdQyOeinhrVAXJiWyJHKBTgPmZEy.tSHn65m',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 11:03:22.199',
    '2025-10-14 11:03:22.199',
    'USD'
  ),
  (
    17,
    'Akash Maiti',
    'akash1maiti@gmail.com',
    '$2b$10$pA4GXgX0e0IQ9a0SdgMETupYRNqpyNgu4CxM0AgWCuM/AI8WzN/Ty',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 11:28:22.552',
    '2025-10-14 11:28:22.552',
    'USD'
  ),
  (
    18,
    'Sarthak Mayani',
    'sarthakwork2202@gmail.com',
    '$2b$10$3qY1FDhMa3NkfWw3Czfk9OPVzpTFp/M0c/SlIeF0JBDW3NPIxgfhK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 11:35:48.891',
    '2025-10-14 11:35:48.891',
    'USD'
  ),
  (
    19,
    'priyasingh',
    'priyasingh@gmail.com',
    '$2b$10$ROIlFxXudgToJh96gNvt.Ova7OSsc60tOn1azY0m1AVONMmDQi4su',
    'client',
    'active',
    NULL,
    0,
    '2025-10-14 12:00:57.509',
    '2025-10-14 12:00:57.509',
    'USD'
  ),
  (
    20,
    'Andrei Lazar',
    'andrei.lazar.1397@gmail.com',
    '$2b$10$cTqgrelzpMhW1wc8t3Ma6eqRr89ScX8jJ23ekxtMsRo4vkFmH1dj2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 12:02:41.946',
    '2025-10-14 12:02:41.946',
    'USD'
  ),
  (
    21,
    'JD',
    'ab@yopmail.com',
    '$2b$10$RJ4R54S9AE4Vc9IVa7Z4qeIJXflZ46/ZqIWf6jKFYnfmCl8k.71NW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 12:02:55.134',
    '2025-10-14 12:02:55.134',
    'USD'
  ),
  (
    22,
    'Aaditya Kumar',
    'aaditya01.svimt@gmail.com',
    '$2b$10$qzpxDCZK1xHyDeKujzmfQ.v2epgMvuxl6y2Fc1.Ovd6Uw.CR5IWRu',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 12:23:12.247',
    '2025-10-14 12:23:12.247',
    'USD'
  ),
  (
    23,
    'Harikesh Singh',
    'harikeshkushwaha1305@gmail.com',
    '$2b$10$SktiBKlOTaaYb2ecjMi2XuBRk8Cw.TrXOItj72kGf2INupxyKOiJu',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 16:40:15.813',
    '2025-10-14 16:40:15.813',
    'USD'
  ),
  (
    24,
    'Aditya Kumar Singh',
    'adityapksingh2014@gmail.com',
    '$2b$10$HjoEbmjUXRNMc7Pj1bdrLOtvBcSInmHdUnQam/z0K6fzHCFVQX1kK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 17:45:03.324',
    '2025-10-14 17:45:03.324',
    'USD'
  ),
  (
    25,
    'Bharti Srivastava',
    'Bhartisrivastava4@gmail.com',
    '$2b$10$Co4WVSkkvAgHJ9KQaRZFgOxEpzKVwIs6Fq.DGaRLAAMGPSr2gL9fC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-14 18:56:06.893',
    '2025-10-14 18:56:06.893',
    'USD'
  ),
  (
    26,
    'Immaculate Okoro',
    'Ermmaculate97@gmail.com',
    '$2b$10$fQQq9ZxgUIvZCiG.i/GS1OOQgUMHqfZD2XVaeskBtEliPv1Uoh/me',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 01:16:22.124',
    '2025-10-15 01:16:22.124',
    'USD'
  ),
  (
    27,
    'Sawan Gaira',
    'sawangaira2@gmail.com',
    '$2b$10$zQaoZsP6AYex58j6n3jb4uRfvZaC.SuR9LVU3kOY/X6tTTSYrDM/a',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 01:48:58.737',
    '2025-10-15 01:48:58.737',
    'USD'
  ),
  (
    28,
    'Elizabeth Olatunji',
    'diamod4praise@gmail.com',
    '$2b$10$DlpxKZQplZscl8/j72i.XuxcqtSnTWERRyXeR6gRduptzBuLP557W',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 02:08:21.791',
    '2025-10-15 02:08:21.791',
    'USD'
  ),
  (
    29,
    'Ritesh Kumar',
    'ritesh.tsr@gmail.com',
    '$2b$10$1XC/gHX1DtsiBxSJfOqDwuibWPjJsa.lKQueOvsFVLKDmI8UC8aau',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 03:02:14.250',
    '2025-10-15 03:02:14.250',
    'USD'
  ),
  (
    30,
    'Santosh Kumar Pradhan',
    'santoshpradhan1996@gmail.com',
    '$2b$10$Oste5rEoQdO7VR4CgTaRVug8j.MPLSyS.w1LFAAaj4vU0hRS3jvWm',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 03:06:16.473',
    '2025-10-15 03:06:16.473',
    'USD'
  ),
  (
    31,
    'Jeetendra Kumar',
    'jeeten.kr108@gmail.com',
    '$2b$10$7/rcpvrN/AKdoJPF5dnuneaKK1Ktdx9qgYH2Cx5bVz0pZBqoD89pu',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 03:27:20.229',
    '2025-10-15 03:27:20.229',
    'USD'
  ),
  (
    32,
    'Rajiv Kumar',
    'rajivkum2021@gmail.com',
    '$2b$10$SqdJfWROGjpCHIOQa5OVre36gpHRm8mPKn.poUET61c7mBlCu1C3.',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 03:46:15.068',
    '2025-10-15 03:46:15.068',
    'USD'
  ),
  (
    33,
    'Shahid Alam',
    'afrozhashmi@hotmail.com',
    '$2b$10$i0HolUppgNITPVNcx0kI5O5E.a77kHMxypB7xOGq6cgSUCTU834A6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 04:00:45.563',
    '2025-10-15 04:00:45.563',
    'USD'
  ),
  (
    34,
    'Rohan Shinde',
    'rohanshinde50650@gmail.com',
    '$2b$10$QaYTI0Y9gEArtgZWY0h3Zez1gKQFuzQcP3ZYr1wD5KRy4d/aW3lXW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 04:23:17.280',
    '2025-10-15 04:23:17.280',
    'USD'
  ),
  (
    35,
    'Nishant Verma',
    'nishant4510@gmail.com',
    '$2b$10$minO3x88.w0FkMIFuU1cyOpPeJ.YXpA3cKsgyYE.a8Gzo63G1R4I6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 04:30:48.904',
    '2025-10-15 04:30:48.904',
    'USD'
  ),
  (
    36,
    'Ravi Dave',
    'raviddave88@gmail.com',
    '$2b$10$tIoK2Bcv5Im1gVy2spXRT.znjwH3VzYs8V6QVasW9F2yLJVb3WmIe',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 05:48:11.829',
    '2025-10-15 05:48:11.829',
    'USD'
  ),
  (
    37,
    'KRITI CHADHA',
    'kriti196@yahoo.com',
    '$2b$10$gkRK.fUs6v27rPoWn5fM8.BXJYzk4ssuVn9lzZykPEBEtf3Hw.94a',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 05:48:43.295',
    '2025-10-15 05:48:43.295',
    'USD'
  ),
  (
    38,
    'Diksha Rajgarhia',
    'rajgarhiadiksha@gmail.con',
    '$2b$10$reQz.woNh4CEdGmdGabAo.M4exOVIG6IJtmLNaYE/vSe/JFwwMnqC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 06:16:12.740',
    '2025-10-15 06:16:12.740',
    'USD'
  ),
  (
    39,
    'Diksha Rajgarhia',
    'rajgarhiadiksha@gmail.com',
    '$2b$10$krcl4aV912xgCMT/pTbgo.rC9FCoPMYFd1iNqSB5rch3x98ti7XyO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 06:16:52.725',
    '2025-10-15 06:16:52.725',
    'USD'
  ),
  (
    40,
    'Susmita Roy',
    'susmitaroy23@gmail.com',
    '$2b$10$U5hb/0Iaf3DC/oVX0CbcXu/lGHvGAuGsmvWj89hN8fEs1I6vKjIu.',
    'client',
    'active',
    NULL,
    0,
    '2025-10-15 07:30:31.673',
    '2025-10-15 07:30:31.673',
    'USD'
  ),
  (
    41,
    'Rohan',
    'Rohan@gmail.com',
    '$2b$10$xxq6pGYIBwBy.3atkq25neaA9IpazidbcRUt5xEo0AfNOkDxBaZNy',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 07:37:24.316',
    '2025-10-16 07:12:58.576',
    'INR'
  ),
  (
    42,
    'Aazim Quazi',
    'furqanquazi@gmail.com',
    '$2b$10$/gqrWXo.38UjO/Nsi2SWYuTJkNdD4iYPM9Dm7FVFG.Xsr2aUNx5OS',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 07:38:33.066',
    '2025-10-15 07:38:33.066',
    'USD'
  ),
  (
    43,
    'Shobhit Sahai',
    'sshobhitsahai@gmail.com',
    '$2b$10$qgiN4uv69ijfD73KGGuDoOpf6rYXd2/D.hERqZoMuWUQkmk.W6HgO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 07:44:41.808',
    '2025-10-15 07:44:41.808',
    'USD'
  ),
  (
    44,
    'Dharvi singhal',
    'singhaldharvi25@gmail.com',
    '$2b$10$3ZRONIMibicX0xcCNHow5uJoQpT/aMc77ztJ/uEF/CDFojqZ4kLnW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 07:55:13.441',
    '2025-10-15 07:55:13.441',
    'USD'
  ),
  (
    45,
    'Amit Kumar Singh',
    'amitkumarkishor.11@gmail.com',
    '$2b$10$gmJa7.0xVz95fwi6qatwhOqidXaEADsUoC0.sMYeqmoecOPIU97YO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 08:36:20.343',
    '2025-10-15 08:36:20.343',
    'USD'
  ),
  (
    46,
    'Sai Ganesh',
    'palatlasaiganesh@gmail.com',
    '$2b$10$LqBbBK/pXUP2V.HJrhOfKuIJ45GQZpZnsLjCTRvB4zdi5vOvetaYa',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 08:54:00.759',
    '2025-10-15 08:54:00.759',
    'USD'
  ),
  (
    47,
    'Akash Yadav',
    'sparkyakash0710@gmail.com',
    '$2b$10$aIisH2NRUR1dXNW0liBKmesU8XIMebKs5OOeGZBCQZ7JvxVpuvE/G',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 09:39:34.253',
    '2025-10-15 09:39:34.253',
    'USD'
  ),
  (
    48,
    'Murari Jha',
    'murarij8368@gmail.com',
    '$2b$10$6V0/lla..WIl6l2VESBvr.ccia/DaERixE0mGuV89CeklF0v7ALve',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 10:01:48.340',
    '2025-10-15 10:01:48.340',
    'USD'
  ),
  (
    49,
    'Sanjay',
    'sanjayforbi@gmail.com',
    '$2b$10$tQ0g7I.n0XU91i828d3SdOECM0WrOM9hkF.Z6OWRhREJ8GsMjE/eK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 10:09:52.108',
    '2025-10-15 10:09:52.108',
    'USD'
  ),
  (
    50,
    'Blessan',
    'blessanjjj7@gmail.com',
    '$2b$10$/ciELZ5PvcXxTQfPG/k6qOXBG8mqFkfr20/gbq1rLJXvMnZzGwBNO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 11:48:54.284',
    '2025-10-15 11:48:54.284',
    'USD'
  ),
  (
    51,
    'Gulnaaz Ali',
    'gulnaaz.data.analyst@gmail.com',
    '$2b$10$21bA35XDOP.wjJifzyTZLutkaOTVBYEbwp44SHRG9plLhIcn01.P2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 13:11:30.368',
    '2025-10-15 13:11:30.368',
    'USD'
  ),
  (
    52,
    'Harshit Khandelwal',
    'harshitkhandelwal0705@gmail.com',
    '$2b$10$31o21ggyDDvtx6QZWfTlXOAHiCEqNxHwEf4PwQXHSKV8dOjf8di6K',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 15:20:49.115',
    '2025-10-15 15:20:49.115',
    'USD'
  ),
  (
    53,
    'Gadana Mani Meghana',
    'meghana.9g@gmail.com',
    '$2b$10$8QNhg.zUFNKLhE8EDOzl3efOwSX.ZLYurCtniWP0/EFuceSMBj8Ki',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 16:32:40.389',
    '2025-10-15 16:32:40.389',
    'USD'
  ),
  (
    54,
    'Nazar Mohammed',
    'nazarchess14@gmail.com',
    '$2b$10$4Ca9Bz9hcMTySEn5lpaStOTxYlPGM2PN3S0Ws5GreG59xQzLDwWzK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 19:08:42.111',
    '2025-10-15 19:08:42.111',
    'USD'
  ),
  (
    55,
    'Letiscia Onuselogu',
    'letisciaonuselogu@gmail.com',
    '$2b$10$z0H9JvGcCCYlxBZxVzAB0.IUYCp53kc6h0QQriMP6gR7v/9diGqXm',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-15 20:58:10.227',
    '2025-10-15 20:58:10.227',
    'USD'
  ),
  (
    56,
    'jash prajapati',
    'max432700@gmail.com',
    '$2b$10$PbDpIIibV8n6ok38N5YvxePScYtvJq5Y8VnfDDZtpRxOjjjzDI.4.',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 03:43:00.951',
    '2025-10-16 03:43:00.951',
    'USD'
  ),
  (
    57,
    'A Rohith',
    'rohithallu10@gmail.com',
    '$2b$10$wderQDgFvfUswPzILW3V1.LfcRFPEXtKu/QUumMQGYZpPKVHQ70f2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 03:48:44.125',
    '2025-10-16 03:48:44.125',
    'USD'
  ),
  (
    58,
    'Yasin Memon',
    'memonyasin2007@gmail.com',
    '$2b$10$YEGc3J2F3Y/syKaMDh6OEORWaszxpMngudUi5Y6YWMEj70CbQ4tGi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 03:52:59.321',
    '2025-10-16 03:52:59.321',
    'USD'
  ),
  (
    59,
    'Pratham Shetty',
    'prathamshetty71@gmail.com',
    '$2b$10$NXvBg2rB3KOAB0ftE8N6pujrW.aB.tMUJKzSQGO96nsPSVratr/hO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 03:53:03.693',
    '2025-10-16 03:53:03.693',
    'USD'
  ),
  (
    60,
    'Durga S',
    'md29092004@gmail.com',
    '$2b$10$ic7CODVxGfyzgCHsaavuUOKbu/fSpgwRT9yOoDqTeB50c82xTT.SW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 03:53:41.888',
    '2025-10-16 03:53:41.888',
    'USD'
  ),
  (
    61,
    'Vinishia Boniface',
    'vinishiakarun@gmail.com',
    '$2b$10$VLgtFYZIgPk4KHBelcm6O.jSphW1EvyDnfh3ezmFUt58wvxum4h3K',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 03:55:23.678',
    '2025-10-16 03:55:23.678',
    'USD'
  ),
  (
    62,
    'Ramesh kumar Gurjar',
    'gurjarramesh390@gmail.com',
    '$2b$10$nhsXMBrGmwF11AZw6IuLnuxTIZ8hta1nubN69djFMR1Pouh4V45ZG',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 03:56:33.786',
    '2025-10-16 03:56:33.786',
    'USD'
  ),
  (
    63,
    'Harshit Porwal',
    'porwal1996harshit@gmail.com',
    '$2b$10$xmFo7Lh7/yCAq3kcruxRh.oyttZV0u5kO5j9sPEiFyM8RaYsdD2eW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 03:59:18.672',
    '2025-10-16 03:59:18.672',
    'USD'
  ),
  (
    64,
    'Sachin Navarkar',
    'sach.navarkar51@gmail.com',
    '$2b$10$r0zx6cGU0BCsS9SUqUSjF.QJ67bnN5dT3wBElLGJ7M6YzOO7cwlF2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:04:15.382',
    '2025-10-16 04:04:15.382',
    'USD'
  ),
  (
    65,
    'Mayur Gurule',
    'mayurgurule012@gmail.com',
    '$2b$10$17jtx5iNBroup8Hzld2stOhyu53XfkLWgj/0g4Z6pZUQcJ0xgxjWW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:14:55.390',
    '2025-10-16 04:14:55.390',
    'USD'
  ),
  (
    66,
    'Aman Verma',
    'amanav0682@gmail.com',
    '$2b$10$domuBNwx.SB9U8fsiT.RMuQxZSboXMLoN4/wEM7urWBtvG1nuzyWe',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:19:49.618',
    '2025-10-16 04:19:49.618',
    'USD'
  ),
  (
    67,
    'HARINI M',
    'harinimadhankumar2003@gmail.com',
    '$2b$10$LPgRlfUbOQSf2kmgCSdm8.CLJmRqI/faofvpQMV2klnZQ/Z0Cs3g2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:20:11.557',
    '2025-10-16 04:20:11.557',
    'USD'
  ),
  (
    68,
    'Vandita Nandal',
    'vanditanandal3016@gmail.com',
    '$2b$10$gWrn6GmGP7BLegMUu1KSMOjf82G2LtiKTNJG2QPtaoHcSLHnEOHwm',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:24:58.609',
    '2025-10-16 04:24:58.609',
    'USD'
  ),
  (
    69,
    'TAUHEED PROLTA',
    'toheedprolta123@gmail.com',
    '$2b$10$sdGXaFtFxpcu1TdvOI.nyeKnYg.2gRPP/Q5wAzzFcov2rYULB38M6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:27:49.956',
    '2025-10-16 04:27:49.956',
    'USD'
  ),
  (
    70,
    'Pavan Kyada',
    'kyadapavan0016@gmail.com',
    '$2b$10$QdCdSvmJcIh9wU/EqS3QIeRatERlHYZ.Glfz./FEPLek2MoE.1ZY2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:29:11.965',
    '2025-10-16 04:29:11.965',
    'USD'
  ),
  (
    71,
    'JITENDRA SINGH RAWAT',
    'jitendrasingh101010@gmail.com',
    '$2b$10$wXmCcQIIMPUlM/3/A7/MIOzRnPHBsVrR7vpyE0jjVvp6ZGpYoEsiC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:39:01.926',
    '2025-10-16 04:39:01.926',
    'USD'
  ),
  (
    72,
    'NALLA SRAVAN KUMAR',
    'sravankumar044@gmail.com',
    '$2b$10$c/dew18LHEVUzsynVpmM4O6CcMdb/XAf8.dDl9jwsVZ73cUUrsRNO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:40:35.964',
    '2025-10-16 04:40:35.964',
    'USD'
  ),
  (
    73,
    'Palak jain',
    'palak.jain140795@gmail.com',
    '$2b$10$HzMCJLH5r/97TjvHFamlwufC6w8NA1lnQCip5WBtgQUTl06PJSAVi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:42:47.518',
    '2025-10-16 04:42:47.518',
    'USD'
  ),
  (
    74,
    'Harsha Handu',
    'harsha8188@gmail.com',
    '$2b$10$2oMiU0SRK3lTzLaF0q5OB.KG/8Nqa.pnmLENVCqoMlAa1udqBbv9W',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:48:40.056',
    '2025-10-16 04:48:40.056',
    'USD'
  ),
  (
    75,
    'dharmit hapani',
    'hapanidharmit2625@gmail.com',
    '$2b$10$.mQjUWOFDLVQUuhKS/Jo2.Ivo9qZY3zLriRlRY3x9B1Hrc9jXxK8K',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:58:06.484',
    '2025-10-16 04:58:06.484',
    'USD'
  ),
  (
    76,
    'Rahul Singh',
    'iasinghrahul@gmail.com',
    '$2b$10$PAn4lAsyi7nY1YzN1tu3Hekq4vFFz7OE/RZKj20yZns6qM45BemEO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 04:59:04.429',
    '2025-10-16 04:59:04.429',
    'USD'
  ),
  (
    77,
    'Maddula VIjayalakshmi Tirupatamma',
    'vmaddula441@gmail.com',
    '$2b$10$hi6GMBwy1ru2gnCHnb//yevOR88SAKt5kw8IZXMDIOGgn6Krw9dKy',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 05:08:53.080',
    '2025-10-16 05:08:53.080',
    'USD'
  ),
  (
    78,
    'Mohd Noman Qadri',
    'nomanqadri34@gmail.com',
    '$2b$10$.VBcEhj5ZezyNWPJt0egHeL/1jFDwMQy11O8ltj/4st6X4EIN/zVm',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 05:16:13.464',
    '2025-10-16 05:16:13.464',
    'USD'
  ),
  (
    79,
    'chintan Rabadiya',
    'chintanrabadiya5942@gmail.com',
    '$2b$10$qJvJzXo1jauAO6y2oPVuOeevYxheAFeWURywQ4MpGDP.MCowIpqNy',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 05:17:02.532',
    '2025-10-16 05:17:02.532',
    'USD'
  ),
  (
    80,
    'Gaurav singh',
    'chauhangaurav9090@gmail.com',
    '$2b$10$O1cdVjFuhy/ExZGcpDRRguxx8HjRgTOd/2/6N2Ow/ZF6zGIGVhnma',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 05:19:20.212',
    '2025-10-16 05:19:20.212',
    'USD'
  ),
  (
    81,
    'Vivek Shrivastava',
    'vivek.s@raysteedsinfotech.com',
    '$2b$10$hXhw8tbDwaZVP91My2LlquHVazzvt/jtzzIRndUOb41qtMJuIcMSi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 05:25:01.674',
    '2025-10-16 05:25:01.674',
    'USD'
  ),
  (
    82,
    'Sethuraman C',
    'sethuelango1614@gmail.com',
    '$2b$10$mqIKnRiwzVQeVAFoMtVxNODU/0kXmM0FmeANAd0rWmVflzUBtncIS',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 05:29:12.280',
    '2025-10-16 05:29:12.280',
    'USD'
  ),
  (
    83,
    'Roshan chithika',
    'chithikaroshan@gmail.com',
    '$2b$10$vYBHVIlbyXy4ekzl07RZn.DR7v.bSeBvs2jO3/oD2EGK5vXnP6HxG',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 05:36:10.937',
    '2025-10-16 05:36:10.937',
    'USD'
  ),
  (
    84,
    'Manan',
    'manan8rana@gmail.com',
    '$2b$10$IvHrhi7bpfOGK7R/npQrEOV9CLcQhWcH5ee7i5jJm2aKSLHSP4sW6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 05:40:56.272',
    '2025-10-16 05:40:56.272',
    'USD'
  ),
  (
    85,
    'Narendra',
    'balaganarendra@gmail.com',
    '$2b$10$JAWSWPnumYEdS.J0jCoYsexiAQo1qwgSrPHVcJ/NENEuNT7ZQPeiG',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 05:44:50.421',
    '2025-10-16 05:44:50.421',
    'USD'
  ),
  (
    86,
    'Danish nazir',
    'danishbhatt854@gmail.com',
    '$2b$10$bfh5BPFhfXkJGp3vScKee.q/jhqdmtj7FK6cJfbUnha54vmNIk2RS',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 05:52:14.850',
    '2025-10-16 05:52:14.850',
    'USD'
  ),
  (
    87,
    'Aravind Reddy Chevula',
    'aravindchevula9@gmail.com',
    '$2b$10$NjdBfZ6OT1TGmRdga3xDgOXOPMhN9UNUxPWHBm2j841d3g3kmZBPa',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 06:02:53.402',
    '2025-10-16 06:02:53.402',
    'USD'
  ),
  (
    88,
    'Shalini Gupta',
    'gupta2000sh@gmail.com',
    '$2b$10$wC4l7bRSGgzubXZDSy9r/OlFByqNe4vlunSwFejblh/m/HiN8MXxy',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 06:08:44.186',
    '2025-10-16 06:08:44.186',
    'USD'
  ),
  (
    89,
    'Rahul',
    'rahulpal7987403153@gmail.com',
    '$2b$10$9Q8MlPPODtcUSuPDkSVhJeMCBTSFZyHWpg3xcOjDx4gKJuqQazfnq',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 06:10:39.776',
    '2025-10-16 06:10:39.776',
    'USD'
  ),
  (
    90,
    'Sayan Modak',
    'sayanmodak799@gmail.com',
    '$2b$10$WjtLhHS37xd8vNPJed5dWOCUmcfgpV8Ia5skoX54bwbLNECdzaJDu',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 06:34:58.985',
    '2025-10-16 06:34:58.985',
    'USD'
  ),
  (
    91,
    'ANUSREE KANNAN P V',
    'anusreekannan111@gmail.com',
    '$2b$10$ydG4WzSkFaWgJxrfWbYgKeBPWD0dNhE9ZwQuAWn63rk9ZM5xWeWdO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 06:39:36.038',
    '2025-10-16 06:39:36.038',
    'USD'
  ),
  (
    92,
    'Sulochana Karthiga',
    'hskarthiga1521@gmail.com',
    '$2b$10$yuH4c/FRVPrKztwCh1S8MeV0CWuN4r2HGIDwAEteezN3hws/28Xbu',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 06:41:48.883',
    '2025-10-16 06:41:48.883',
    'USD'
  ),
  (
    93,
    'SRI SIVA DURGA SATYA SURYA RAM KOLA',
    'suryaram.kola@gmail.com',
    '$2b$10$PCu5n4yZq0s2xqs.VBVp3uLbknFikUaAAL/adhFKoQ/jEvc05ybmS',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 06:50:49.172',
    '2025-10-16 06:50:49.172',
    'USD'
  ),
  (
    94,
    'Nikhil Bhangare',
    'bhnikhil75@gmail.com',
    '$2b$10$1AO19JkjvndpWXSJcg/EreoFoknQ4yMaSmhYfb9xHudHX4SJo7ZsO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 06:53:36.806',
    '2025-10-16 06:53:36.806',
    'USD'
  ),
  (
    95,
    'Harsh Maheshwari',
    'maheshwariharsh38@gmail.com',
    '$2b$10$dHbHRN/OGP3VuDIg4dwps.ObSAYg1x.9U6lASytxL8fj0olYhbwzi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 06:54:30.876',
    '2025-10-16 06:54:30.876',
    'USD'
  ),
  (
    96,
    'Shreya pandey',
    'shreyapandeyy2024@gmail.com',
    '$2b$10$2yXfwMKPT/KlvdVxnNsM1eEb.qN60KPGs8jXCcCENQZQ/wjSChxbq',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 07:03:15.420',
    '2025-10-16 07:03:15.420',
    'USD'
  ),
  (
    97,
    'Manisha Sarkar',
    'manishachsarkar16@gmail.com',
    '$2b$10$8wEWEITaErXuOt0zf6kWZOrLq166a7EeO7Pupuur.BqTC33BYWpV2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 07:03:15.748',
    '2025-10-16 07:13:05.775',
    'INR'
  ),
  (
    98,
    'Amar Lagisetti',
    'amar.lagisetti@gmail.com',
    '$2b$10$kW2VIw4v3TsLxVUU5Dlq..3dyKYO9u3mH6aKzqNf6tj21aR2Q8KqW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 07:15:12.791',
    '2025-10-16 07:15:12.791',
    'USD'
  ),
  (
    99,
    'Parth Thaker',
    'parththaker1991@gmail.com',
    '$2b$10$V4KOkslhvtNtK2liLulhAOuGk8n4ycawnLckGToFFxwdXoOOVuX5a',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 07:18:31.606',
    '2025-10-16 07:18:31.606',
    'USD'
  ),
  (
    100,
    'khyati chaudhary',
    'kaku08122002@gmail.com',
    '$2b$10$qwQIABSL3ge3oFMKb0B9r.uHmzjUt9B/oMuikPANVN/e.5ULcQo0e',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 07:19:11.009',
    '2025-10-16 07:19:11.009',
    'USD'
  ),
  (
    101,
    'Sai Sankar Chirravuri',
    'sai.rjv@gmail.com',
    '$2b$10$esZKFNb2jcW7SXpuK99qYu3Ftl/fO6etkeBJvbNxYRQyL5y8CcV.6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 07:32:47.334',
    '2025-10-16 07:32:47.334',
    'USD'
  ),
  (
    102,
    'Rahul C Patil',
    'rcpatil97@gmail.com',
    '$2b$10$wsqMsiDBLjC2DFNYYqVDQuOXotzTMq8wf8pdbOpMlBndUlOB.Ah.e',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 07:33:08.275',
    '2025-10-16 07:33:08.275',
    'USD'
  ),
  (
    103,
    'Jemisha kothari',
    'jemishakothari2911@gmail.com',
    '$2b$10$5F7HUdZLu97J8k1BPHSWi.Pi.mA8VBDHlJ37PGowG7i8/JxGvcBeq',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 07:40:00.636',
    '2025-10-16 07:40:00.636',
    'USD'
  ),
  (
    104,
    'Shailesh',
    'shaileshakbari81@gmail.com',
    '$2b$10$MGYNRckgWaA/FMIM.3lexek0jhk0AKS2tN5KQArZ2aGpTrqzjGksy',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 07:49:35.425',
    '2025-10-16 07:49:35.425',
    'USD'
  ),
  (
    105,
    'Bhumi Pipaliya',
    'bhumisrakholiya1113@gmail.com',
    '$2b$10$a8DW55bignGu6LrCj1tGh.qojcZ3iFKxVWZ2LY4ra5NjnFCrWt99K',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 07:51:52.610',
    '2025-10-16 07:51:52.610',
    'USD'
  ),
  (
    106,
    'Anamitra Chakraborty',
    'anamitra.19.2@gmail.com',
    '$2b$10$uJ0XSW6xgcwP4JXdRB4sKuhMmo9ycDbzoUmvwG7vK7h5XyXPgbmA6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 08:07:36.942',
    '2025-10-16 08:07:36.942',
    'USD'
  ),
  (
    107,
    'Rajwinder Saini',
    'rajwindersaini128@gmail.com',
    '$2b$10$HhRjRUtARWdE25QULeWL7O0AwBPk6qX9GAptDh1SNDxTFW85mTs2u',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 08:08:43.542',
    '2025-10-16 08:08:43.542',
    'USD'
  ),
  (
    108,
    'Maulik Mistry',
    'maulikmistry2496@gmail.com',
    '$2b$10$5qO8WdPLeXmprZcw5jSWmeQ2SXsmJuEGMRQwFje3FLTRHtVeiQj7S',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 08:11:14.429',
    '2025-10-16 08:11:14.429',
    'USD'
  ),
  (
    109,
    'Akriti Sahu',
    'sahuakriti932@gmail.com',
    '$2b$10$xtRn8lumKEj11nwrUkK5G.U3moaAVWz2vLUl2LDGsOrgfEMao9.t2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 08:14:00.415',
    '2025-10-16 08:14:00.415',
    'USD'
  ),
  (
    110,
    'Rupendra Singh Chouhan',
    'rupensingh764@gmail.com',
    '$2b$10$O.DApFn9TbRbX1ohjhLahukYwcU2cZoxHYHlFFB2YHyGc95ApIfxi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 08:16:11.582',
    '2025-10-16 08:16:11.582',
    'USD'
  ),
  (
    111,
    'Niraj Kumar',
    'alexander11niraj@gmail.com',
    '$2b$10$amNjt2rTKjO6B6nStgJPmuUMorhniwU6mnB6/XTRwdVffWCOGcIum',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 08:17:47.723',
    '2025-10-16 08:17:47.723',
    'USD'
  ),
  (
    112,
    'Aleena Lasarin',
    'aleenalasrin@gmail.com',
    '$2b$10$/giE5cFIuvjA9qT9d0Btv.L4RVWhGkDYUq89tvWMkC.Owmz6VWEnW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 08:18:12.061',
    '2025-10-16 08:18:12.061',
    'USD'
  ),
  (
    113,
    'Alan biju Joseph',
    'alanbiju404@gmail.com',
    '$2b$10$VXatYbafJlyzoB2oRfx2UOrWqx610DD3Vv6l/jWUBz4lTM68t2JnG',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 08:32:39.721',
    '2025-10-16 08:32:39.721',
    'USD'
  ),
  (
    114,
    'Sahil Umraniya',
    'sahilumraniya9512@gmail.com',
    '$2b$10$fj0913Br1mx3XD6ufpHBEedSQPSH0YFlLGP0t7Q4XIl3xq/AfvN0y',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 08:46:44.159',
    '2025-10-16 08:46:44.159',
    'USD'
  ),
  (
    115,
    'MARGARETE YUBELLA MILENS META KRISTIANA',
    'yubellamargareta@gmail.com',
    '$2b$10$5xEzYg8CsGrz27zkBo991.7CT5zRoRsqARKhN5XRRFMzxI..saTS.',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 09:00:11.208',
    '2025-10-16 09:00:11.208',
    'USD'
  ),
  (
    116,
    'Sadhana',
    'sadhanadakh@gmail.com',
    '$2b$10$lETAYAOzWCHiT1qAENXSb.9MQnLo7GASXTX0fhQ4mJ2II5f6WJAvy',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 09:19:36.722',
    '2025-10-16 09:19:36.722',
    'USD'
  ),
  (
    117,
    'Md saem khsuhter',
    'saemkhushter52@gmail.com',
    '$2b$10$cgZqzUVen8RgBU2ZeRMer.83eFEGzeaCuwrkf2m/yVmJccjIFBp0C',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 09:19:41.252',
    '2025-10-16 09:19:41.252',
    'USD'
  ),
  (
    118,
    'Abhay Prajapati',
    'abhayparja90@gmail.com',
    '$2b$10$JLuIJcpFgXQih2YHjIoQeOcq3m65NkOpGhOzvRUOVVlx5SraXLTLC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 10:02:29.992',
    '2025-10-16 10:02:29.992',
    'USD'
  ),
  (
    119,
    'Alpana Sahu',
    'sahualpana79@gmail.com',
    '$2b$10$P5tsJp0xtbiCsmU6x1Rbl.BdxDqM66pHhHa1fUPzVnDmM/cDcL046',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 10:39:30.976',
    '2025-10-16 10:39:30.976',
    'USD'
  ),
  (
    120,
    'SANTHOSH CHANDRASEKHAR',
    'SANTHOSHCHANDRASEKHAR@GMAIL.COM',
    '$2b$10$XdbpKzGbVR3NGFkpnyhk0ejLqftVgrFoh8wgC3wnJGewaT1SmR/6u',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 10:40:14.812',
    '2025-10-16 10:40:14.812',
    'USD'
  ),
  (
    121,
    'Aryan solanki',
    'sales@outreach.bytespark.in',
    '$2b$10$w5.c.JLtiAQCPYlJVM4L/e9hQKyuvV3RFxD3wAfHvUmfQhTW6MIbq',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 10:47:33.254',
    '2025-10-16 10:47:33.254',
    'USD'
  ),
  (
    122,
    'Neelima Thakur',
    'neelima.thakur1996@gmail.com',
    '$2b$10$FE8NaCcpWqQk/REp2rBOdO7jM0Muug1KRno2EGgffOHr8VSO/vYT6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 11:01:26.292',
    '2025-10-16 11:01:26.292',
    'USD'
  ),
  (
    123,
    'Asutosh khadanga',
    'asutosh.khadanga@insydetechs.com',
    '$2b$10$EbobzpeR5qEs757aUenrw.ZkvP2QkcsJ39qrmwlkuqbi0Xpkrwz7S',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 11:01:38.864',
    '2025-10-16 11:01:38.864',
    'USD'
  ),
  (
    124,
    'Purvi agrawal',
    'purviiagrawal07@gmail.com',
    '$2b$10$usgjBWhJgnGb5bN3fOOObetOKOf/zJUaccQniE4DNceJy9.pW0TeO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 11:07:46.823',
    '2025-10-16 11:07:46.823',
    'USD'
  ),
  (
    125,
    'Yashvi soni',
    'yasoni715@gmail.com',
    '$2b$10$NEXSqOFCAEyTPtLW6GPhmOEaRzX/HwhPoT286CacF2hgleVnXDSPa',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 11:08:56.936',
    '2025-10-16 11:08:56.936',
    'USD'
  ),
  (
    126,
    'Aman',
    'aman.sharma.csharp@gmail.com',
    '$2b$10$qeDRHoOFfohbJcujWG3OzO0swsH43.wZ9okBO/JskcVtBhckVElR2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 11:28:39.421',
    '2025-10-16 11:28:39.421',
    'USD'
  ),
  (
    127,
    'Vasoya Meet',
    'vmeet1825@gmail.com',
    '$2b$10$b9ZqAFlGpeNmgPGnzppGdeaS1mCrwGO0gFpyGgQgRRee1xmT9WobK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 11:47:55.610',
    '2025-10-16 11:47:55.610',
    'USD'
  ),
  (
    128,
    'Aditya Vikram Jangale',
    'jangaleav@gmail.com',
    '$2b$10$9PpIQs1cE5OWxJYayoydYOQgKVlHn15vHBi16s8Q3//bCRjEwKXhO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 11:55:34.648',
    '2025-10-16 11:55:34.648',
    'USD'
  ),
  (
    129,
    'Adithya S',
    'adithya.s8299@gmail.com',
    '$2b$10$8bGcXwlFAPElti4V4DtdaOewbPkik4kKy17fWNQO.cZtaGWeWb56W',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 12:04:47.089',
    '2025-10-16 12:04:47.089',
    'USD'
  ),
  (
    130,
    'Krishna Joshi',
    'joshikrishna7518@gmail.com',
    '$2b$10$zCMUWbp.TyWl4S9nx2o5uuqYSPYZB3MIwuIRqgefyk46vpN2L/3yu',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 12:09:35.654',
    '2025-10-16 12:09:35.654',
    'USD'
  ),
  (
    131,
    'Vivek Shrivastava',
    'raysteeds.vivek@gmail.com',
    '$2b$10$zt4Mc0h3y2bgmRy87bef6eECqrZ5GEjHCClZ.kyhkXzN1Ggzpbriq',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 12:29:43.871',
    '2025-10-16 12:29:43.871',
    'USD'
  ),
  (
    132,
    'Suneel Kumar Shrivastav',
    'shrivastav581@gmail.com',
    '$2b$10$YysCHehQ7oNAPdZ29tOZi.rgfllzzbCLLIG/zJFXXrDMS14NqA5Si',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 12:50:47.876',
    '2025-10-16 12:50:47.876',
    'USD'
  ),
  (
    133,
    'Muskan Khanna',
    'muskankhanna2301@gmail.com',
    '$2b$10$Ny4lH3E3kVVze2DBha/pheDUe41p5TNoi7NaEDksQIKInuX.HDtgO',
    'client',
    'active',
    NULL,
    0,
    '2025-10-16 13:33:24.647',
    '2025-10-16 13:33:24.647',
    'USD'
  ),
  (
    134,
    'Lovneet Kukreja',
    'lovneetkukreja789@gmail.com',
    '$2b$10$SlxblEHRKH.Zwki8Wunw5Oy3r0H4Rs4e43bNuzP0d1Zht0fDAhhp6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 14:14:06.146',
    '2025-10-16 14:14:06.146',
    'USD'
  ),
  (
    135,
    'Suraj Prajapati',
    'suraj.p8355@gmail.com',
    '$2b$10$MwB614yOehxHI5dYm0rTkOmtE2P8LoBhKgXf/fEHOPfbeYMJegdLq',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 14:28:27.662',
    '2025-10-16 14:28:27.662',
    'USD'
  ),
  (
    136,
    'Shikha Kumari',
    'shikhakumari152019@gmail.com',
    '$2b$10$yPrmdZtb5R/AspPvBVdNP.v7eOHVZ4e2JV4uAMfr7c7J5jcISNxS6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 15:02:34.102',
    '2025-10-16 15:02:34.102',
    'USD'
  ),
  (
    137,
    'Jay Sikar',
    'jaysikar28@gmail.com',
    '$2b$10$PWxbOMBCuOco1oxBWbC84.gax75FD2EZl48zbZoOkDZIoQ521d6wa',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 15:20:39.311',
    '2025-10-16 15:20:39.311',
    'USD'
  ),
  (
    138,
    'Keerthana Bodduluri',
    'keerthanakeerthi4666@gmail.com',
    '$2b$10$1MSOqp10TY1wC3vyIz886OlpIlipbR1gAzDDTRxx5Dz/gGph4yofe',
    'client',
    'active',
    NULL,
    0,
    '2025-10-16 15:28:57.816',
    '2025-10-16 15:28:57.816',
    'USD'
  ),
  (
    139,
    'Neha',
    'nehaworld17@gmail.com',
    '$2b$10$0FTIfEAwl/To7kvB8odMZ.IBXpjPqxVrJdOlgP78t8du36uJIp1le',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 15:45:51.233',
    '2025-10-16 15:45:51.233',
    'USD'
  ),
  (
    140,
    'Anamika Lahane',
    'anamikalahane777@gmail.com',
    '$2b$10$Sqwq3xUDlnr..ZI3c9Wf9OFMeRbm2W7TOkAkEAQPw.WUijOXgghdS',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 16:07:29.760',
    '2025-10-16 16:07:29.760',
    'USD'
  ),
  (
    141,
    'Ani johnson',
    'anijohnson1996@gmail.com',
    '$2b$10$woZi0/thXtS3sTFh7c2.e.ok0HtOz0.8tbtnGGN6pnQ1M5dx7wmvq',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 16:09:35.645',
    '2025-10-16 16:09:35.645',
    'USD'
  ),
  (
    142,
    'Pratibha Sachdev',
    'pratibhasachdev20@gmail.com',
    '$2b$10$H4Shx4XVnmc0b/znXxx2WOkF1eYVZPkdsMViFHbEUtkS1MLVQz/P2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 16:12:19.357',
    '2025-10-16 16:12:19.357',
    'USD'
  ),
  (
    143,
    'Deepa K M',
    'deeparaj096@gmail.com',
    '$2b$10$wOFd3sJ.C2TtdF1PGWMWF.ENOxunxQ5EGaw0CArPhPi2aT87vCx0W',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 16:45:21.962',
    '2025-10-16 16:45:21.962',
    'USD'
  ),
  (
    144,
    'Zeeshan Ahmed',
    'zeeshann.ali110@gmail.com',
    '$2b$10$XDQhvfq6UpNQrOEHNL6nLeVnYQxdd9r8r0ZF1f6Hu9aLK5Q4Fioni',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 17:09:07.571',
    '2025-10-16 17:09:07.571',
    'USD'
  ),
  (
    145,
    'Simmy Singh',
    'Simmy.jobs2022@gmail.com',
    '$2b$10$pynAfo3qp.PZh2uoCecV..i88mWJELJT/SZw7Sm6JbsLV4Fe39yhG',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 17:21:39.229',
    '2025-10-16 17:21:39.229',
    'USD'
  ),
  (
    146,
    'Mitali Ubriani',
    'pranjitviswass@gmail.com',
    '$2b$10$et0ASIvcscpprbj3V53s7uCeHdD.a0zpxy19X3yR6pet777mFfLCW',
    'client',
    'active',
    NULL,
    0,
    '2025-10-16 17:32:28.832',
    '2025-10-16 17:32:28.832',
    'USD'
  ),
  (
    147,
    'Anchal choudhary',
    'anchalchoudhary1997@gmail.com',
    '$2b$10$mmbXpZsyxvQTll22XQD5JejWATP.WPchd1.TfmBuqnP.LY2cp.NEu',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 17:40:26.051',
    '2025-10-16 17:40:26.051',
    'USD'
  ),
  (
    148,
    'Prince Satasiya',
    'princesatasiya49@gmail.com',
    '$2b$10$.X6a9Ui7b6RiFJA3eChkZ.ls1qQ9rAMg3aoX5cdUCe0Hej1NnAufC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 18:04:25.021',
    '2025-10-16 18:04:25.021',
    'USD'
  ),
  (
    149,
    'Khushi khandelwal',
    'khushikhandelwal0908@gmail.com',
    '$2b$10$Tv/jDiXgZkovOgqPkfLsRuSnUmPs3HBm/3rLWdHCvZ5vdpPJLgOUC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 18:07:41.757',
    '2025-10-16 18:07:41.757',
    'USD'
  ),
  (
    150,
    'Divyadharsan',
    'divyadharsan245@gmail.com',
    '$2b$10$PqoWB1jctalNnkx4AsZ1tOoOPiXTGSYLg866th40ub3DY6ONogTiK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 18:08:46.747',
    '2025-10-16 18:08:46.747',
    'USD'
  ),
  (
    151,
    'Avinash Chandra Mishra',
    'Avinashmishra0506@gmail.com',
    '$2b$10$p8cZSvaCvpqpbK0nqs7ppuEKbv0qegXU81GeAoKRFBzShaUsP.Iam',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 18:26:46.150',
    '2025-10-16 18:26:46.150',
    'USD'
  ),
  (
    152,
    'Bhairav Sapkale',
    'bhairavsapkale@gmail.com',
    '$2b$10$iH6rd9WmTyxG9X9yMtBpW.kZ8keFLR//x3InYkCnqp3oO/7pa/OuW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 18:31:17.024',
    '2025-10-16 18:31:17.024',
    'USD'
  ),
  (
    153,
    'Ankita Roy',
    'roy.anki39@gmail.com',
    '$2b$10$QFbmZqAbQE35ptk4HJOXU.Zp9Hdl0uHXd2pN5xdI4yRNU.lfVkPde',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 18:41:33.027',
    '2025-10-16 18:41:33.027',
    'USD'
  ),
  (
    154,
    'Divya Gonja',
    'officialdivyagonja@gmail.com',
    '$2b$10$o11AuwkttGVDKbmli90rHeIEslqUufezdKxu8hmaBoTTl1G/GgjWS',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 18:50:48.378',
    '2025-10-16 18:50:48.378',
    'USD'
  ),
  (
    155,
    'Mohammed Faazil Yamin',
    'mfaazil.yamin2857@gmail.com',
    '$2b$10$W5hUQ1V2p7lmWqkMsKzSrec9Dsi0yqeBVgNYjsv.hwZ4Zx6tR/J36',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 19:02:20.511',
    '2025-10-16 19:02:20.511',
    'USD'
  ),
  (
    156,
    'Abhiraj Rajput',
    'abhirajrajput818@gmail.com',
    '$2b$10$./rI0U9xipXAByqgVFANquNUWmFwMXWh6PtH7S/YYu6IUPJ3WpmCG',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 20:57:15.925',
    '2025-10-16 20:57:15.925',
    'USD'
  ),
  (
    157,
    'Aneeq Ahmed',
    'codeaneeq@gmail.com',
    '$2b$10$gKtmeBQ6Qsxjkxx1.RUUCOH6ygyYV0J8/4HJUbq1Nq5MjApdugSm6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 21:10:47.173',
    '2025-10-16 21:10:47.173',
    'USD'
  ),
  (
    158,
    'Ankit kumar choubay',
    'ankitkr7598@yahoo.com',
    '$2b$10$rAQ3UkmnF.18pFRU7EymoOH3Y5AO3SwJ.NjjVaZmWcvrJtTYknr/C',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-16 21:38:01.082',
    '2025-10-16 21:38:01.082',
    'USD'
  ),
  (
    159,
    'Sagar C S',
    'Sagarrakshita420@gmail.com',
    '$2b$10$2CBE70QTWb/WdnAmY/mPCu4ARze57uETG7bsPVQJDualp25kl.kOS',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 02:01:33.837',
    '2025-10-17 02:01:33.837',
    'USD'
  ),
  (
    160,
    'krunal parekh',
    'Krunalparekhwpd@gmail.com',
    '$2b$10$I4DMfb8BjrojPHlL/aJmSOqdTFL.mGWaMHx80SmiqkduZjYUQrPSW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 02:07:57.999',
    '2025-10-17 02:07:57.999',
    'USD'
  ),
  (
    161,
    'Praveen Kumar Puthi',
    'praveenkumar62818@gmail.com',
    '$2b$10$Nn/8nTDSzYMA2gBaYu/sXOruk9TJ7gwyiXxbtfFFfozCc6QvqVH8e',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 02:51:13.971',
    '2025-10-17 02:51:13.971',
    'USD'
  ),
  (
    162,
    'Vala Keval Jitendrabhai',
    'kevalvala58@gmail.com',
    '$2b$10$qQd.Nuvky9dEgX77t5K3v.huOWUMlEengG4daDpkGF5jgZaba510.',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 03:15:17.593',
    '2025-10-17 03:15:17.593',
    'USD'
  ),
  (
    163,
    'vishnu teja Revuri',
    'tejarevuri1001@gmail.com',
    '$2b$10$GEqJCY.IOawF0y0EgLe4hOjr2K2L8dqup/HI3JIn/WpzWJ9vrof2W',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 03:40:50.943',
    '2025-10-17 03:40:50.943',
    'USD'
  ),
  (
    164,
    'Hardik Halani',
    'hardikhalanidt@gmail.com',
    '$2b$10$kFa.Jk3xUlY2C/kcRK6FIecVtTI/Cm21ek4CzstJ8OiZdqxSVVlom',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 04:35:46.390',
    '2025-10-17 04:35:46.390',
    'USD'
  ),
  (
    165,
    'Akash Parmar',
    'aparmar0527@gmail.com',
    '$2b$10$Q7FZlnKFo2IjA7nWJupMYetj.PGdcG7IjuyXfpzQr4glb1JJ6FqG.',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 04:49:30.767',
    '2025-10-17 04:49:30.767',
    'USD'
  ),
  (
    166,
    'Lalit Nailwal',
    'Lalit@digirockett.com',
    '$2b$10$2MRnKb/3hxNFxl0PtNV4Y.VxqUfn/ANFcr0cMedNSAsZsFvC5I0vC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 05:37:38.650',
    '2025-10-17 05:37:38.650',
    'USD'
  ),
  (
    167,
    'Brijbhan Tiwari',
    'tiwari0186@gmail.com',
    '$2b$10$p.8M4YcvmIEDiGxru0qsHenj163U4FZuBX3jKcerjtLH7nOf1LTcO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 05:52:41.002',
    '2025-10-17 05:52:41.002',
    'USD'
  ),
  (
    168,
    'Esuru Pooja',
    'e20esurupooja@gmail.com',
    '$2b$10$mGTULbiDAGOLTRW6tQxK8.dSCluGR/mz5OPu4RmjInzds/eRZgiyC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 05:55:15.800',
    '2025-10-17 05:55:15.800',
    'USD'
  ),
  (
    169,
    'Nautam Goswami',
    'nautamgoswami3010@gmail.com',
    '$2b$10$N2bvnhcfBdbW9f7/aN93MONLHNL3r6fehz3gco1hqbEbE1yEVG2om',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 05:59:10.165',
    '2025-10-17 05:59:10.165',
    'USD'
  ),
  (
    170,
    'Samar Kumar',
    'samarsrivastav69@gmail.com',
    '$2b$10$RuFX2vabzXX9UyzIhPoFRObNuCIWRs1ggFdobkJ8YEYKJetI9nEgG',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 05:59:18.022',
    '2025-10-17 05:59:18.022',
    'USD'
  ),
  (
    171,
    'Krishna Rachhadiya',
    'krishnarachhadiya023@gmail.com',
    '$2b$10$e6SFbqnY0eKNPcrnh//iqOdCqZqxEfb4XP3VMcV6VSR.TafaVHxC2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 06:28:34.657',
    '2025-10-17 06:28:34.657',
    'USD'
  ),
  (
    172,
    'Richard',
    'richard@gmail.com',
    '$2b$10$Uz6AVBs2VQKaCJODBg1YIu.jnSn6EWu8a3GDdrICUzH/MKAEq3j0y',
    'client',
    'active',
    NULL,
    0,
    '2025-10-17 06:43:28.927',
    '2025-10-17 06:43:28.927',
    'USD'
  ),
  (
    173,
    'Vishal Rajput',
    'vishal.rajput1986@gmail.com',
    '$2b$10$Ndc9tjplkmN9CrbA63OUPu27bymoR.ZGxyPbNB6VDoLL5zli3lqRy',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 06:58:42.423',
    '2025-10-17 06:58:42.423',
    'USD'
  ),
  (
    174,
    'Sk Rohit Alam',
    'skrohitalam01@gmail.com',
    '$2b$10$b2mU2GvkCd1FwBm9sNYMNeQFYQvARxiJeiEiD7UL0t4/wk.kXRy4a',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 07:07:17.338',
    '2025-10-17 07:07:17.338',
    'USD'
  ),
  (
    175,
    'Muhammad Kashif',
    'webbykashif@gmail.com',
    '$2b$10$UOLfKB81jM5HUZYQASJ.dOxEzfoO9YBU/Pm/c4oS2cQtAEkQmA/Wi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 07:12:11.517',
    '2025-10-17 07:12:11.517',
    'USD'
  ),
  (
    176,
    'Tejas Ganapat Uphade',
    'tejasuphade07@gmail.com',
    '$2b$10$khIUROTj21UViUB4hBAQfeUH98Oo9zx3PjC.Dz5vTTnAIA0sV26Hm',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 07:39:29.004',
    '2025-10-17 07:39:29.004',
    'USD'
  ),
  (
    177,
    'kow salya',
    'kowsalyajoy@gmail.om',
    '$2b$10$IwswPlWgPvLVpRxTqBqkxOEn1NvRl7k.eFkszE5HYYcGAB9GVxKo6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 07:56:04.199',
    '2025-10-17 07:56:04.199',
    'USD'
  ),
  (
    178,
    'Hariom Tiwari',
    'hariomt650@gmail.com',
    '$2b$10$TFSqRG1OAOjTGS8TVOpJzOHlo2jWfNsrWZx3aWP6Ftbt9YvnSn.pC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 07:56:21.938',
    '2025-10-17 07:56:21.938',
    'USD'
  ),
  (
    179,
    'Manash Das',
    'mjdd3501@gmail.com',
    '$2b$10$u93M9uiWhcYcaqGr0SHHvuKBBRjHWEqz9GauCIXwCO6XFqBKiWYGO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 08:41:18.421',
    '2025-10-17 08:41:18.421',
    'USD'
  ),
  (
    180,
    'John',
    'John@gmail.com',
    '$2b$10$G0izJdeHGr0GnDK8/v9aiOe//6500Z85P0uWZptf/X3T0tpb4SNAS',
    'client',
    'active',
    NULL,
    0,
    '2025-10-17 09:03:00.441',
    '2025-10-17 09:03:00.441',
    'USD'
  ),
  (
    181,
    'Prateek Mohan',
    'prateekmohan7@gmail.com',
    '$2b$10$tw6HtH3i03UOW0gVZ9FoOum2Pw/w8XqxKy1OkGTNM0PrqymFvhw3S',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 09:45:32.527',
    '2025-10-17 09:45:32.527',
    'USD'
  ),
  (
    182,
    'Dharini Sharma',
    'dharinisharma18@gmail.com',
    '$2b$10$mIuezO1fcmk58VPQz0w7xePKmPb8aSeZd7RaUTd.IjWEZJwk6pNG.',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 09:55:55.757',
    '2025-10-17 09:55:55.757',
    'USD'
  ),
  (
    183,
    'James',
    'James@gmail.com',
    '$2b$10$9/6cTe3K35vn9L.jyAdtEuWwYK4NW6K7JY3ynmHcPIrQMEziO/6ju',
    'client',
    'active',
    NULL,
    1,
    '2025-10-17 10:05:51.717',
    '2025-10-18 08:04:58.281',
    'USD'
  ),
  (
    184,
    'Aifoona Ahammed P M',
    'aifoonaahammed@gmail.com',
    '$2b$10$3chN2fb0Ugq.w1ShCSVwMeWbdBvVv67j9A8rgBlkg.zL6dL4lKmz.',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 10:13:48.490',
    '2025-10-17 10:13:48.490',
    'USD'
  ),
  (
    185,
    'Flourish Oke',
    'flourish229@gmail.com',
    '$2b$10$m/9D3q1fjr9J5f4BvkeDdebcRH14E2H5bsJ1fQuWLqUcsb2koXVmK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 10:24:13.003',
    '2025-10-17 10:24:13.003',
    'USD'
  ),
  (
    186,
    'Rohit Budhiraja',
    'rohitbudhiraja10@gmail.com',
    '$2b$10$9NCVBBZx1FskVzZl761e0eoAK.A.KX8UMy0q4WsivKh9aC6neG3V.',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 10:26:49.960',
    '2025-10-17 10:26:49.960',
    'USD'
  ),
  (
    187,
    'Tanay Satija',
    'tanaysatija08@gmail.com',
    '$2b$10$q0MEVCkosPBEb3obo0hBHO6U2.MSkZsKesJIiCN/uz/g7qr.EZVQG',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 10:47:55.496',
    '2025-10-17 10:47:55.496',
    'USD'
  ),
  (
    188,
    'Ishita Singla',
    'Ishitasingla002@gmail.com',
    '$2b$10$lHBLRkKX73bt7z2bEmU7YuqyIiScI0VuTs2m/wBrg1m4CHPjsDrXW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 10:48:31.315',
    '2025-10-17 10:48:31.315',
    'USD'
  ),
  (
    189,
    'sai vara prasad',
    'saivaraprasadnetti@gmail.com',
    '$2b$10$rdBlXnv9jwtqIyXa7GWRVucnBOnBoEu9.q1dsTxkmSLjqyna7dnxu',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 12:01:55.332',
    '2025-10-17 12:01:55.332',
    'USD'
  ),
  (
    190,
    'Arpita Dutta',
    'arpitadutta602@gmail.com',
    '$2b$10$VOR2FDIgK5yEpoANYEDEsu0KUQSvhlEzvhtpPGIlH3CC5hTbNaWSm',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 12:10:29.524',
    '2025-10-17 12:10:29.524',
    'USD'
  ),
  (
    191,
    'Himanshu Shekhar',
    'himanshu@legacyforgegroup.com',
    '$2b$10$x/t38WVzzdT.1iEj2dNC0OLHobDz7h734LK/SPX9YoZZThJU7W7ka',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 13:43:28.613',
    '2025-10-17 13:43:28.613',
    'USD'
  ),
  (
    192,
    'Raj Kharat',
    'realrajkharat@gmail.com',
    '$2b$10$R7dSLv/jkDPRxikg9coYBuRXARvP8IRmx2IdOYN2.tUxRHxzoB6DW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 14:38:30.806',
    '2025-10-17 14:38:30.806',
    'USD'
  ),
  (
    193,
    'Prakhar Srivastava',
    'prakhar1435k@gmail.com',
    '$2b$10$HGuZFY7f.3w4/SdFkDKF8ulWkt9VTKe9RaATlUD/tHto/iSqLpyXC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 15:51:34.283',
    '2025-10-17 15:51:34.283',
    'USD'
  ),
  (
    194,
    'Agdipti Singh',
    'agdiptisingh.work@gmail.com',
    '$2b$10$HF7gCINqFmKxibnC1Gmjq.1eWo/AO5kM3tO/QDd0taVckTvwrXVTu',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 17:24:13.194',
    '2025-10-17 17:24:13.194',
    'USD'
  ),
  (
    195,
    'Nandini V',
    'vnandini1003@gmail.com',
    '$2b$10$lIh3c8g4LPSzOWi3qu6I7OTeVhJei5Q.rKTXF6NYb.Nx3fu.huXnK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 17:35:22.235',
    '2025-10-17 17:35:22.235',
    'USD'
  ),
  (
    196,
    'Chandana Vanama',
    'chandanavanama6@gmail.com',
    '$2b$10$RviVaU2uy3dB3tVw3qxJf.G4dM5zB/LC2SHFs6iO31DaH5Tgk2kBW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-17 21:22:20.694',
    '2025-10-17 21:22:20.694',
    'USD'
  ),
  (
    197,
    'Mohammad khizer Qureshi',
    'khizerqureshi781@gmail.com',
    '$2b$10$bD/yFCfX9..JrJiuxBqfyeQlo1QTlSURzVdwbdWu/rL6m0k53yHry',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 03:42:58.751',
    '2025-10-18 03:42:58.751',
    'USD'
  ),
  (
    198,
    'Aditya Vijapurapu',
    'adityavijapurapu5@gmail.com',
    '$2b$10$I9H5rHru0G9ybX6Z18yIoOIF5L32a91zCSyfnfoWYf24/YnFfY3WO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 04:30:09.926',
    '2025-10-18 04:30:09.926',
    'USD'
  ),
  (
    199,
    'Shekhar Kalyana',
    'shekharpro5@gmail.com',
    '$2b$10$aqEZP5kPrBXDEyCeP796AuMV/u2.fqgCKdXaSOrbFvmE1wLcU1iZS',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 04:55:01.844',
    '2025-10-18 04:55:01.844',
    'USD'
  ),
  (
    200,
    'MD. TOWHIDUL ALAM',
    'mdtowhidulalampony@gmail.com',
    '$2b$10$YdkQQNhpClhLJ2AiJFwCnOWkh5ITu8X1NzNB/c736TMnEHe73xOZm',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 05:25:35.992',
    '2025-10-18 05:25:35.992',
    'USD'
  ),
  (
    201,
    'Anusha Surendran',
    'anushasurendran566@gmail.com',
    '$2b$10$z2.SKyKydofQPppl9RRPS.Mfd7KGnVbOTuvzY2uAPnfQuhvUMxXHK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 05:35:30.020',
    '2025-10-18 05:35:30.020',
    'USD'
  ),
  (
    202,
    'Rajendra Bargaiya',
    'rajbargaiya22@gmail.com',
    '$2b$10$KfN58q9jfBS6szscWjrL6OvdzJEF47tUfQLCRuabNpY8F.xAw4Wle',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 05:42:39.006',
    '2025-10-18 05:42:39.006',
    'USD'
  ),
  (
    203,
    'Ayush Rajpalani',
    'rajpalaniayush72@gmail.com',
    '$2b$10$NEt2u8hu4hH.vvQOwJd5T.KZWVqpkp1LHJmePW15w8yK3cDE4ZuGu',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 05:56:46.757',
    '2025-10-18 05:56:46.757',
    'USD'
  ),
  (
    204,
    'Taizun Kaptan',
    'taizun8@gmail.com',
    '$2b$10$tkzhN44Yu4oQD6mEg1Yp/eQz7PaJ.iSZ/eljLEqL7BvlDjrLC1Z42',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 07:08:54.967',
    '2025-10-18 07:08:54.967',
    'USD'
  ),
  (
    205,
    'Sunitha L V',
    'sunithalv05@gmail.com',
    '$2b$10$Fiak.PZQQUcdtEgu.kUy5OxUCK25zNyKmy0nm0NgKkMVe3XVyV4tq',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 07:34:13.636',
    '2025-10-18 07:34:13.636',
    'USD'
  ),
  (
    206,
    'v dinesh',
    'dineshreddy0906@gmail.com',
    '$2b$10$vGOd4lTJ6Vuk7ojgTTcy5eC1bpgxp7Ke7C/vi1OSS9f.0RE4SRK2y',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 08:37:45.059',
    '2025-10-18 08:37:45.059',
    'USD'
  ),
  (
    207,
    'Fernanda Vieyra Sánchez',
    'fey.vieyra@gmail.com',
    '$2b$10$mW3DWur/x0yB48Td1zCcpea7j80N4.itVzcaaTwOke57le/WQtuAu',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 08:39:50.700',
    '2025-10-18 08:39:50.700',
    'USD'
  ),
  (
    208,
    'Mayank Negi',
    'itsmemayank02@gmail.com',
    '$2b$10$TNSHKAVrlY08.zsNE198j.ILd9x0FLrQObfHMq5mKJvwpyLgUHZRC',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 08:59:02.548',
    '2025-10-18 08:59:02.548',
    'USD'
  ),
  (
    209,
    'Pankaj',
    'pankajverma1361861@gmail.com',
    '$2b$10$8s5LLAvloDO8eW.Pd6rZuOExb7oW/G7rH/YTOm4hepx2Naa8MrJSi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 09:02:09.553',
    '2025-10-18 09:02:09.553',
    'USD'
  ),
  (
    210,
    'Judson Prakashia',
    'judsonprakasia03@gmail.com',
    '$2b$10$.FEUkyxSKgh0/bgo/6YU4uiRbN.GZ08Ow/2ZH3KB0vMrHRNnnO4Ya',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 09:21:23.976',
    '2025-10-18 09:21:23.976',
    'USD'
  ),
  (
    211,
    'Mayuri Dandekar',
    'mayuridandekar96@gmail.com',
    '$2b$10$7yie9WeG3jl1nez1Iy3rY.DJ8P/WmCQHt8chfa/H5Xq4RdrJaECHi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 09:26:26.505',
    '2025-10-18 09:26:26.505',
    'USD'
  ),
  (
    212,
    'Moinahemad Habibbhai Mansuri',
    'er.moin@gmail.com',
    '$2b$10$tZEJRkh4jovtogv4..B9.uPFmgOh9uD/eVAXpkV0WWa6LpiB.B5r2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 09:42:59.385',
    '2025-10-18 09:42:59.385',
    'USD'
  ),
  (
    213,
    'Likhitha',
    'likinaveena21@gmail.com',
    '$2b$10$5GPLT7rpo6xlZI3eMO7Csub.WvxBY1n28GCHWTMlwonoQuLDZnAn2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 09:43:10.582',
    '2025-10-18 09:43:10.582',
    'USD'
  ),
  (
    214,
    'MD. Ifte kharul Alam',
    'ifte29.cuet@gmail.com',
    '$2b$10$fIAfWrD9Kc2u3pdVjUYfo.BNQupqBVsO3t.BANaA8rDBaHpaviqxW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 09:58:20.486',
    '2025-10-18 09:58:20.486',
    'USD'
  ),
  (
    215,
    'Priyadarshini Sahoo',
    'doneliner147@gmail.com',
    '$2b$10$RDXhpwjPHo9EY6oXoD5imeio543z6IN1UMtCN/v3fVGLlGeoJ4Cli',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 10:14:26.739',
    '2025-10-18 10:14:26.739',
    'USD'
  ),
  (
    216,
    'Rohan George Thampi',
    'rohangt1591@gmail.com',
    '$2b$10$gO/bzr3Joh2bs7I716cTe.M/k4t0JDtBgTHIW8sNAY7sxIBkmU9SK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 10:20:12.023',
    '2025-10-18 10:20:12.023',
    'USD'
  ),
  (
    217,
    'Codeflarelabs',
    'dibyajyotidatta.cfl@gmail.com',
    '$2b$10$OrOAw5YUWJ8PiuiakaoINO07dvDRnPbxgEbR.o/lVjTdy1sD7i3ya',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 11:34:27.175',
    '2025-10-18 11:34:27.175',
    'USD'
  ),
  (
    218,
    'Marzelin E',
    'marzzxx.07@gmail.com',
    '$2b$10$EJXaqUBq6S5ODE/N/KZQ0OVYYxeoWXwIyg9iIcuuPVXNJIWxWDXPy',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 13:10:29.029',
    '2025-10-18 13:10:29.029',
    'USD'
  ),
  (
    219,
    'Yokeshwaran s',
    'ykyokeshwaran@gmail.com',
    '$2b$10$Q3IpLranVMs56WMoWnKMOeVrYkaesxXJEzAUJLPZoUCWGpQNkkruS',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 14:27:16.534',
    '2025-10-18 14:27:16.534',
    'USD'
  ),
  (
    220,
    'Jawad Nazari',
    'jawad.khaksar2016@gmail.com',
    '$2b$10$Qh4Us2H7XHB6knVH/hf/1u8YNL.ZQoMzfjBtwK6kwljjW3XHycTbi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 14:40:42.241',
    '2025-10-18 14:40:42.241',
    'USD'
  ),
  (
    221,
    'Aryan Raj',
    '10aryanraj2003@gmail.com',
    '$2b$10$3RhvJ1M/9HQQtX/wZ.CbLuxF./GK7nK02Dy6KoDVtpTwiHB6Nfhny',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 14:45:01.476',
    '2025-10-18 14:45:01.476',
    'USD'
  ),
  (
    222,
    'Romaulens Junior Auguste',
    'maulens2000@gmail.com',
    '$2b$10$uKNZQeX29A8KkGU97UWO2upj1okMzzduCA4Rdh4Hot1xuryklIPNi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 15:26:00.603',
    '2025-10-18 15:26:00.603',
    'USD'
  ),
  (
    223,
    'Muhammad Waleed',
    'rwm579069@gmail.com',
    '$2b$10$DGI6cznRmQiQAo3uhvZGf.xQnp00EbTe27Vcnp5NkdxsjReBn8nNS',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 15:53:54.714',
    '2025-10-18 15:53:54.714',
    'USD'
  ),
  (
    224,
    'Satyam Sagar',
    'satyamsagar30@gmail.com',
    '$2b$10$poQVNswGpxk40BEbqzZlx.NFZSbGUGWJV8W3Dm.bSMJRwZpn3gZbW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 16:06:07.118',
    '2025-10-18 16:06:07.118',
    'USD'
  ),
  (
    225,
    'Atharava Pratap Singh',
    'satharavapratap@gmail.com',
    '$2b$10$.su/9eDny5NGaTpkgA0rlevDYjFIvUCnHYvHAucuPnVDx4HmUVN6m',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 16:44:03.457',
    '2025-10-18 16:44:03.457',
    'USD'
  ),
  (
    226,
    'tanish mathur',
    'tanishmathur56@gmal.com',
    '$2b$10$7T.GTCG7p3sIKk5yEmA9TOUp3wGplKpl4UxF.ONMzisIq3BrRd/.2',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 17:01:25.904',
    '2025-10-18 17:01:25.904',
    'USD'
  ),
  (
    227,
    'Annisha Jain',
    'annisha@daybreaksocial.in',
    '$2b$10$KzhRypSUW1WaTKEKZZA5gurj/OnqMyyHUaqREzlUtsOkwWtsq0e1y',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 18:04:54.646',
    '2025-10-18 18:04:54.646',
    'USD'
  ),
  (
    228,
    'A D Saurabh',
    'asaurabh@htechdigital.com',
    '$2b$10$rIsqVMtXzeB4sOXQA5Xc.e8Yb4tkzUpZoNro00sA7ClaeeXJwkRWy',
    'client',
    'active',
    NULL,
    0,
    '2025-10-18 19:48:08.162',
    '2025-10-18 19:48:08.162',
    'USD'
  ),
  (
    229,
    'PRANAV SHARMA',
    'pranav8871@gmail.com',
    '$2b$10$UPF8O3HsNDCP14ZMKI1gZOvSOB0fSDkpw2IbkGTl1nOQE77hyFayy',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-18 21:10:05.353',
    '2025-10-18 21:10:05.353',
    'USD'
  ),
  (
    230,
    'THULASI RAMAN R',
    'thulasiraman091999@gmail.com',
    '$2b$10$J7tqiwMfD8KchuaIq1pgaelBAe2PgpCNoUSzfnZmk4miBAM3xtqCO',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 02:09:48.562',
    '2025-10-19 02:09:48.562',
    'USD'
  ),
  (
    231,
    'Sandeep Kumar',
    'sktdesignsofficial@gmail.com',
    '$2b$10$wUKUD7X2PfL9B5e.Y6YuLOo4zKfwXymm3OgUL511l6h/DX0/yaU7e',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 03:54:52.451',
    '2025-10-19 03:54:52.451',
    'USD'
  ),
  (
    232,
    'RAJA SAI SANTHOSH REDDY',
    'santhosh61380@gmail.com',
    '$2b$10$2PyAgwcbSsxfBwbE0bJJ/O4MLEhO6TBVphoFhyZ7f/wPqVH3r4A56',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 04:25:59.373',
    '2025-10-19 04:25:59.373',
    'USD'
  ),
  (
    233,
    'Jayesh Kumar',
    'jayesh.nirogyan@gmail.com',
    '$2b$10$VaiJ3wDgzTSXa0gJKiLp4OchE2v4/cGMNRmOLhl1ZpbbbsjTTU37u',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 05:15:01.204',
    '2025-10-19 05:15:01.204',
    'USD'
  ),
  (
    234,
    'Ayush Kumar',
    'ayushkht07@gmail.com',
    '$2b$10$/VZWN7.UWjAogm8hTV4XQeXrHvP./FMCu56XvMTnwWDymcUWojOHW',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 05:24:06.061',
    '2025-10-19 05:24:06.061',
    'USD'
  ),
  (
    235,
    'Kavitha Sonachalam',
    'kavithaannakkili@gmail.com',
    '$2b$10$8aB2K0H3rylTqexdpZamPuUn/RIhiHrroNRef5wxt3mQZPI1JNJ6G',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 05:43:57.991',
    '2025-10-19 05:43:57.991',
    'USD'
  ),
  (
    236,
    'Mallavarapu Anand',
    'Mallavarapuanand83@gmail.com',
    '$2b$10$jt/rpo3gVbhz2nfQfhJpSuOxW0L6LDOu5rMoYHMj08gQ1uDONvfBS',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 05:50:40.628',
    '2025-10-19 05:50:40.628',
    'USD'
  ),
  (
    237,
    'Jyotirmoy Ganguly',
    'zorochan404@gmail.com',
    '$2b$10$C6y8dTvZn1q.loHJqrxWiOfTun9jXxeYKc/PYIplHEGtOTh0Ox1u6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 05:53:56.225',
    '2025-10-19 05:53:56.225',
    'USD'
  ),
  (
    238,
    'MD TAMIM',
    'mdtamim20047@gmail.com',
    '$2b$10$Ri2OTAfP59JWw4Uut1NGWObdDykxc0IWfTrefsAyrpWuvyzY3PQza',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 06:01:16.374',
    '2025-10-19 06:01:16.374',
    'USD'
  ),
  (
    239,
    'Jhanvi Patel',
    'jhanvi13patel@gmail.com',
    '$2b$10$t1uR61VoEa6SDt1VhbcA8eOHxD1GQXgdpwAs3Dg7ZPL87ajx.kqUG',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 06:05:19.340',
    '2025-10-19 06:05:19.340',
    'USD'
  ),
  (
    240,
    'jagjeet hundal',
    'jagjeethundal98@gmail.com',
    '$2b$10$nImR6UqaWV21WJ.iqQXaUerQnaeFX0N0OTXxye46dS0ZT2HpntANK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 07:20:52.273',
    '2025-10-19 07:20:52.273',
    'USD'
  ),
  (
    241,
    'Vanica Audi Prasety Muhari',
    'vanica.audi.va@gmail.com',
    '$2b$10$ZpFnbGyHbKMXads/BLPwpeiM.cJxiVS9xtapK/UUzZPVc/olww.qi',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 07:57:46.977',
    '2025-10-19 07:57:46.977',
    'USD'
  ),
  (
    242,
    'Rishitha R',
    'aaylawolf09@gmail.com',
    '$2b$10$TQxDfpXKexRZHB9kFDos9eTMkduXv4bIdQIUiR9hCPyfD0o6lYNJ6',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 07:59:11.163',
    '2025-10-19 07:59:11.163',
    'USD'
  ),
  (
    243,
    'Kapil sisodiya',
    'krkapil441@gmail.com',
    '$2b$10$IuRIP4EAijUoCYPBLbSQjO5cwJHuMAkHpEMiEhzDfKkfITfUlKJrK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 08:08:21.578',
    '2025-10-19 08:08:21.578',
    'USD'
  ),
  (
    244,
    'Samaira atique',
    'samairaatique22@gmail.com',
    '$2b$10$5azEgddX3YPwRhcMPhUT0eSLJEAtaqLgbjwEgZCc4xVZQMXBogR8y',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 08:33:39.511',
    '2025-10-19 08:33:39.511',
    'USD'
  ),
  (
    245,
    'Deepak bisht',
    'deepak03111998@gmail.com',
    '$2b$10$YLbqHT5TtHyojchftroj.ebOvf0UBHte6RjCIfdk3OrSHQtCdtS8m',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 09:19:03.664',
    '2025-10-19 09:19:03.664',
    'USD'
  ),
  (
    246,
    'Yash',
    'yd811822@gmail.com',
    '$2b$10$RqUGIF/kV7X1JR8ueH.3lundmHFKrkK3TIqw4pgCWAma603FYp8TK',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 10:14:50.146',
    '2025-10-19 10:14:50.146',
    'USD'
  ),
  (
    247,
    'vandana jain',
    'vandanajain.sayna@gmail.com',
    '$2b$10$G3cYyxCaQfQDqZ7o6Q9twuM1wPgykEq9bxGkelZETiB4lIrPDAjX.',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 10:17:57.850',
    '2025-10-19 10:17:57.850',
    'USD'
  ),
  (
    248,
    'Shrawani Thakur',
    'shrawanithakur3@gmail.com',
    '$2b$10$oHAVTTNJ.mhFWYlNTiZKcOm5r1N7jvwCQh9Y9oUhb8omPXV/0Tk7q',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 11:02:37.242',
    '2025-10-19 11:02:37.242',
    'USD'
  ),
  (
    249,
    'Anurag Yadav',
    'anuyadav7800@gmail.com',
    '$2b$10$4poJYWxTawHSukQrNrBk3uIKlFYYyXcTQDEt6yWAPIm0PxengO98S',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 15:17:04.176',
    '2025-10-19 15:17:04.176',
    'USD'
  ),
  (
    250,
    'Harsh Jain',
    'officialharshh@gmail.com',
    '$2b$10$ahgIblhsvMNbrEeHrjMtC.szkw831AFrgic5k6vpzDnMFq/HhH9ui',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 15:56:37.725',
    '2025-10-19 15:56:37.725',
    'USD'
  ),
  (
    251,
    'Ankan Polley',
    'ankanpolley0@gmail.com',
    '$2b$10$iMNaf0uygAUl.B9G0kscJ.hfYgrwvug7/ia9tpY5UesvbW/ezWMLa',
    'freelancer',
    'active',
    NULL,
    0,
    '2025-10-19 16:34:43.265',
    '2025-10-19 16:34:43.265',
    'USD'
  );
/*!40000 ALTER TABLE `User` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `UserProfile`
--

DROP TABLE IF EXISTS `UserProfile`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `UserProfile` (
  `id` int NOT NULL AUTO_INCREMENT,
  `bio` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `skills` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `experience` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `education` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `portfolio` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `hourlyRate` double DEFAULT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `location` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `website` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `github` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `linkedin` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `resumeUrl` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `available` tinyint(1) NOT NULL DEFAULT '1',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UserProfile_userId_key` (`userId`),
  CONSTRAINT `UserProfile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 24 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `UserProfile`
--

LOCK TABLES `UserProfile` WRITE;
/*!40000 ALTER TABLE `UserProfile` DISABLE KEYS */
;
INSERT INTO `UserProfile`
VALUES (
    1,
    'I am a Freelance Software Developer specializing in Web and Mobile Development',
    'JavaScript, Python, Java,React.js, Node.js, Next.js, Fast API, Flutter, React Native, Prisma, SQL, NoSQL, Figma,    ',
    NULL,
    'MSc Computer Science - Distinction\nBCs Computer Science - 1st Class Degree',
    'https://alz-freelance.vercel.app/',
    NULL,
    20,
    'Freelance Developer',
    'London',
    'https://alz-dev.vercel.app/',
    'https://github.com/AyanoCode13',
    'https://www.linkedin.com/in/andrei-lazar13/',
    NULL,
    '/uploads/resumes/resume_20_1760443519108.pdf',
    1,
    '2025-10-14 12:05:19.119',
    '2025-10-14 12:12:31.698',
    20,
    NULL
  ),
  (
    2,
    'Hi im priya singh. I\'m a web developer around 4years experience ',
    'ReactJS, Python,Node.JS,Next.JS ',
    'Hi im priya singh. I\'m a web developer around 4years experience ',
    '10pass',
    NULL,
    NULL,
    50,
    'Priya Singh ',
    'Delhi',
    NULL,
    NULL,
    NULL,
    NULL,
    '/uploads/resumes/resume_2_1760443630126.pdf',
    1,
    '2025-10-14 12:06:59.560',
    '2025-10-18 18:04:41.694',
    2,
    NULL
  ),
  (
    3,
    'I’m Aditya Kumar Singh, a dedicated Software Engineer and Front-End Developer with over 3 years of experience in creating responsive, user-friendly, and accessible web applications. I special',
    'Front-End Development:\nHTML5, CSS3, Bootstrap, Media Queries, Tailwind CSS, Responsive Web Design\n\nDesign to Code Conversion:\nFigma to HTML, PSD to HTML, XD to HTML, AI to HTML\n\nProgramming &',
    'Work Experience\n\n1. Software Engineer — OneTouchGrade\nSept 2025 – Present | India\n1.1. Building responsive and user-friendly web interfaces using HTML, CSS, Bootstrap, and JavaScript.\n1.2. De',
    'Education & Certifications\n\n1. Bachelor of Technology (B.Tech) — Computer Science and Engineering\nKIPM College of Engineering and Technology, Gorakhpur, India\nAug 2018 – Jul 2022\n\n2. Intermed',
    'https://adityafreelance.github.io/',
    NULL,
    7,
    'HTML Developer',
    'India',
    NULL,
    'https://github.com/AdityaFreelance/',
    'https://www.linkedin.com/in/aditya-html22',
    'https://x.com/adityafreelance',
    '/uploads/resumes/resume_24_1760463983472.pdf',
    1,
    '2025-10-14 17:46:23.512',
    '2025-10-14 17:58:08.450',
    24,
    NULL
  ),
  (
    4,
    'I\'m a Freelance Network and IT Professional with strong skills in Project Management. Experienced across multiple Tech Stacks, including PHP, Java, Python, AI, .NET, Flutter, App & many more.',
    'ISP Infrastructure, PHP, Java, Python, .NET, Flutter, Android & iOS Development, Web Application, Laravel, React, Moodle, AI, Machine Learning, Snowflake, ETL, E-Commerce, WordPress, Design',
    'Freelance Consultant – Network & IT Projects\nUpwork & Truelancer | 2021 – Present\n\nSenior Manager – Network & Operations\nClassic Tech Pvt. Ltd. | 2013 – 2025\n',
    'Education: BSc IT\n\nCertifications / Training\n\nBusiness Analysis \nDevOps\nAccelQ Automation Engineer\nCertified General Security Associate\nCommunication Foundations\nAI in Digital Marketing',
    NULL,
    NULL,
    15,
    'Professional IT Freelancer',
    'Kathmandu, Nepal',
    'www.shahidalam.com.np',
    NULL,
    'www.linkedin.com/in/shahidalam-nepal',
    NULL,
    '/uploads/resumes/resume_33_1760502285455.pdf',
    1,
    '2025-10-15 04:24:45.479',
    '2025-10-15 04:50:20.281',
    33,
    NULL
  ),
  (
    5,
    'I am a WordPress and Elementor web developer with hands-on experience building modern, responsive, and SEO-optimized websites for businesses, startups, and professionals. I specialize in crea',
    'WordPress Website Development\n\nElementor Page Builder\n\nResponsive Web Design\n\nFront-End Development\n\nWebsite Redesign & Maintenance\n\nLanding Page Creation\n\nE-Commerce (WooCommerce)\n\nSEO Optim',
    'Designed and developed responsive business, portfolio, and e-commerce websites using WordPress and Elementor.\n\nCollaborated with clients from diverse industries, including healthcare, educati',
    'BA LLB (Pursuing)',
    'https://nitesh-rajput.my.canva.site/sawan-gaira-portfolio-link',
    NULL,
    15,
    'Professional Website Designer & Developer',
    'Rudrapur,Uttrakhand',
    'https://sawan.blog107.com',
    NULL,
    'https://www.linkedin.com/in/sawangairawebdeveloper',
    NULL,
    '/uploads/resumes/resume_27_1760505786279.pdf',
    1,
    '2025-10-15 05:03:27.394',
    '2025-10-15 05:32:08.949',
    27,
    NULL
  ),
  (
    6,
    NULL,
    'React, Nodejs, Expressjs, Javascript, MongoDB, Html, Css, AWS, Typescript, Java, Redux, Docker, Git, RabbitMQ,Redis',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    'Senior Full Stack Developer ',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    '/uploads/resumes/resume_85_1760594067124.pdf',
    1,
    '2025-10-16 05:54:27.145',
    '2025-10-16 05:55:57.054',
    85,
    NULL
  ),
  (
    7,
    'B.Tech graduate in Mechanical Engineering turned data Data Analyst, certified by ExcelR Academy. Gained hands-on experience as a Data Analyst Intern at AI Variant, working with Excel, MySQL, ',
    'Good Communication,Microsoft Excel,Data Entry,\nPowerBi,Chat process,voice process,MySQL.',
    'Flight Delay Analysis\nExcelR (Hyderabad : Onsite)\nOct 2024 to Jan 2025 (Full Time)\n• Worked with large messy datasets (1M+ flight records) to extract meaningful delay insights, cutting data p',
    ' BTech Mechanical Engineering 2024\n*Certified In \"Effective Communication\"And \"Mastering Costumer Service\".\n*Certified In \"Data Analytics\" Offered By EXCELR.\n',
    NULL,
    NULL,
    NULL,
    'Data Analyst | Skilled in Excel, SQL, Power BI & Tableau | Passionate About Turning Data into Actionable Insights | AI Variant Intern|Good Communication ',
    'Hyderabad Andhra Pradesh',
    NULL,
    NULL,
    'www.linkedin.com/in/aravindreddy356',
    NULL,
    '/uploads/resumes/resume_87_1760595798785.pdf',
    1,
    '2025-10-16 06:19:51.239',
    '2025-10-16 06:23:36.691',
    87,
    NULL
  ),
  (
    8,
    'As a Frontend Developer with over 7 years of experience, I specialize in creating high-performance web applications using React.js, TypeScript, JavaScript, HTML5, and CSS3. I am passionate ab',
    ' Frontend Technologies: React.js, TypeScript, JavaScript, HTML5, CSS3, jQuery, \nBootstrap \n● E-commerce Development: Shopify (Liquid, Shopify API, Custom App Development) \n● Backend Technolog',
    '1. SpiceTech IT Solutions Pvt. Ltd. \nFrontend Developer | Sept 2021 – Present \n○ Developed and maintained custom Shopify apps using TypeScript and \nJavaScript. \n○ Integrated Google Analytics ',
    '1. B.Tech in Computer Science \nRajasthan Technical University, Kota | 2017 \n2. Higher Secondary (PCM) \nBoard of Secondary Education Rajasthan | 2013 \n3. Matriculation \nBoard of Secondary Educ',
    NULL,
    NULL,
    8,
    'FrontEnd Developer',
    'Ujjain MP india ',
    NULL,
    NULL,
    'https://www.linkedin.com/in/manisha-sarkar-0b8a4b12b/',
    NULL,
    '/uploads/resumes/resume_97_1760598734472.pdf',
    1,
    '2025-10-16 07:12:14.476',
    '2025-10-16 07:12:19.975',
    97,
    NULL
  ),
  (
    9,
    'As a Data Analyst with over 5 years of experience in the corporate world—and 4+ years deeply focused on analytics—I specialize in turning raw data into actionable insights. I’m passionate abo',
    'MySQL, SSIS, SQL data Management, Tableau, Tableau Server, PowerBI, Excel, Data Cleaning, Data Modelling, Data Visualisation, Data integration, Querying, joins, data validation, python, panda',
    'SCA Health\n\nCurrently Working \nNoida, Uttar Pradesh\n\nDA-Tableau developer\nData Analyst | Healthcare\nYears of experience in data analytics, I specialize in transforming complex healthcare data',
    'Bachelors of Commerce',
    'https://public.tableau.com/app/profile/ankit.choubay/vizzes',
    NULL,
    20,
    'Data Analyst',
    'Noida',
    NULL,
    NULL,
    'https://www.linkedin.com/in/ankit-kumar-choubey/details/experience/',
    NULL,
    NULL,
    1,
    '2025-10-16 22:07:53.879',
    '2025-10-16 22:08:31.252',
    158,
    NULL
  ),
  (
    10,
    'Results-driven Business Intelligence Analyst with 4 years of professional experience in Power BI, SQL, and Python. Skilled in data visualization, dashboard development, data modeling, and ana',
    'Power Bi, Sql , CosmosDb, PostgreSQL,Excel, Azure',
    'Experienced Business Intelligence Analyst with a strong background in Power BI, SQL, and data modeling, turning complex data into actionable business insights. Skilled in building interactive',
    'Post Graduate Certification in Data Science & Business Analytics | The University of Texas at Austin | 2022 – 2023\nBachelor of Technology (Mechanical Engineering) | KIET Group of Institutions',
    NULL,
    NULL,
    45,
    'Business Intelligence Analyst',
    'Shahjahanpur Uttar Pradesh India',
    NULL,
    NULL,
    'https://tinyurl.com/2vdrdr4x',
    NULL,
    NULL,
    1,
    '2025-10-17 05:19:30.927',
    '2025-10-17 05:19:30.927',
    165,
    NULL
  ),
  (
    11,
    'Hey there! I\'m Krishna.\n\nI\'m an enthusiastic WordPress developer and UI/UX designer with a focus on producing fluid, intuitive, and eye-catching digital experiences. I love turning ideas into',
    'WordPress, PHP, UI/UX, Figma, GoHighLevel, Webflow',
    'I’m a UI/UX designer and WordPress developer with 1.6 years of experience creating modern, user-friendly, and responsive websites.',
    'Bachelor of Computer Applications.',
    'Figma Portfolio :- https://www.figma.com/design/qfSYwqGXQt7xGWE2tZJYjo/My-Portfolio-Designs?node-id=0-1&t=LyjLQH7gFOlCs5J8-1',
    NULL,
    15,
    'UI/UX Designer | Figma Designer | WordPress Developer | GoHighLevel',
    'Surat, Gujarat, India.',
    NULL,
    NULL,
    'https://www.linkedin.com/in/krishna-rachhadiya-3085262a4/',
    NULL,
    NULL,
    1,
    '2025-10-17 06:46:16.083',
    '2025-10-17 06:46:16.083',
    171,
    NULL
  ),
  (
    12,
    'I’m a skilled web developer with hands-on experience in building fast, modern, and responsive web applications. I specialize in React.js, Node.js, and full-stack development, with a strong fo',
    'React.js, Next.js, Node.js, Express.js, MongoDB, JavaScript, TypeScript, HTML, CSS, Tailwind CSS, Material-UI, UI/UX Design, Git, REST APIs, Firebase, Email Integration, Project Management',
    'Trustopay – Full Stack Web Developer\nDeveloped and maintained multiple web applications including Trustopay main site, Scope of Work portal, event websites, and community platforms. Implement',
    'B.Tech in Information Technology\n\nCertifications: React.js, Node.js, Full Stack Web Development',
    'https://pavankyada.me',
    NULL,
    20,
    'Full Stack Web Developer',
    'Vadodara, India',
    'https://pavankyada.me',
    'https://github.com/kyadapavan',
    'https://www.linkedin.com/in/pavankyada/',
    NULL,
    NULL,
    1,
    '2025-10-17 07:07:26.935',
    '2025-10-17 07:08:41.612',
    70,
    NULL
  ),
  (
    13,
    'I am an analytics professional with over six years of experience in business intelligence and reporting. My work\nspans retail, healthcare, and manufacturing. I build reliable dashboards, stre',
    'Power BI, Tableau, SQL, ETL, Data Modeling, Dashboarding, Reporting',
    'Led Domo to Power BI migration for 100+ users with governed refreshes and defined KPIs, cutting manual\nreporting by about 60% and improving adoption by about 40%.\n• Built 150+ Power BI dashbo',
    NULL,
    NULL,
    NULL,
    12,
    'Lead BI Developer',
    'Delhi',
    NULL,
    NULL,
    'https://www.linkedin.com/in/rohit-budhiraja-35387b189/',
    NULL,
    NULL,
    1,
    '2025-10-17 10:33:00.778',
    '2025-10-17 10:33:00.778',
    186,
    NULL
  ),
  (
    14,
    '💼 Md. Towhidul Alam | Meta Ads Specialist\nI help businesses grow with ROI-driven Facebook & Instagram ads. Expert in full-funnel strategy, pixel setup, and audience targeting. Let’s turn clic',
    '🎯 Core Skills:\n\n🚀 Meta Ads Strategy (Facebook & Instagram)\n\n🧩 Funnel Marketing (TOFU – MOFU – BOFU)\n\n🎯 Lead Generation & eCommerce Sales\n\n🔁 Retargeting & Audience Targeting\n\n📌 Pixel Setup & C',
    '🧑‍💼 Work Experience (5+ Years)\n\nMd. Towhidul Alam\nMeta Ads Specialist | Facebook & Instagram Advertising Expert\n\nOver 5 years of hands-on experience managing Facebook & Instagram ad campaigns',
    NULL,
    NULL,
    NULL,
    10,
    'Meta Ads Specialist || FB and IG Marketing Manager',
    'Khulna, Bangladesh',
    NULL,
    NULL,
    'https://www.linkedin.com/in/towhidulalampony/',
    NULL,
    NULL,
    1,
    '2025-10-18 05:27:00.992',
    '2025-10-18 06:02:55.969',
    200,
    NULL
  ),
  (
    15,
    'Data Analyst with an MBA in Finance, having 1.5 years of experience in data analysis. Skilled in SQL, Excel, Python, Tableau, and Power BI, with experience analysing datasets, building intera',
    'Tableau, Analytical Skills, Problem Solving, Microsoft Power BI, Microsoft Advanced Excel, SQL, Python, Attention to Detail ',
    'I have over 1.5 years of experience in data analysis with an MBA in Finance, where I’ve worked on transforming data into insights that support better business decisions. My professional backg',
    NULL,
    NULL,
    NULL,
    30,
    'Data Analyst | Tableau, Power BI, SQL, Python, Advanced Excel | Turn Data Into Insights for Business Growth |',
    'Chhatarpur, India',
    NULL,
    'https://github.com/PalakJainAnalyst',
    'https://www.linkedin.com/in/palakjainanalyst/',
    NULL,
    NULL,
    1,
    '2025-10-18 05:49:27.570',
    '2025-10-18 05:55:15.706',
    73,
    NULL
  ),
  (
    16,
    'Welcome to my profile!\n I’m glad you’re here. I’m a Full-Stack MERN Developer with 5+ years of experience, passionate about building modern, responsive, and high-performing websites that help',
    'React, Node.js, Express.js, MongoDB, Next.js',
    '5 year Experience ',
    'University of Engineering and Management Jaipur ',
    NULL,
    NULL,
    10,
    'Full MERN Stack Developer ',
    ' Jaipur Rajasthan ',
    NULL,
    'https://github.com/rameshkumar098',
    'https://www.linkedin.com/in/ramesh-kumar-gurjar-179163277',
    NULL,
    NULL,
    1,
    '2025-10-18 05:57:54.870',
    '2025-10-18 06:00:07.322',
    62,
    NULL
  ),
  (
    17,
    'I have over 10 years of experience as a Full-Stack Developer specialized in MERN Stack,  React Native, Next.js, WordPress, Shopify, AWS, API Integration ',
    'React.js, React Native, Node.js, Next.js, Python, Django, Express.js, WordPress, Shopify, Single Spa, Microsoft Azure,.Net, PostgreSQL, MySQL, Google Cloud, Jira, Git',
    'I have 10 years of experience as a Full-Stack Developer specialized in MERN Stack. ',
    'B.tech, CSE',
    'https://www.raysteedsinfotech.com/work/',
    NULL,
    15,
    'Full-Stack Developer ',
    'Dehradun Uttarakhand ',
    'https://www.raysteedsinfotech.com/',
    'https://github.com/viveksri225',
    'https://www.linkedin.com/in/vivek-shrivastava-50284091/',
    NULL,
    NULL,
    1,
    '2025-10-18 07:23:03.223',
    '2025-10-18 07:47:33.028',
    131,
    NULL
  ),
  (
    18,
    'Highly motivated Data Analyst with hands-on experience in Excel, SQL, and Power BI. Proficient in data cleaning,\nanalysis, visualization, and reporting. Looking for an entry-level Data Analys',
    ' Python, SQL(PostgreSql),Power BI,Advanced Excel,Pivot Tool, VLOOKUP, Conditional Formatting,Pandas,Numpy,DAX,Power Query,Data Cleaning, Data Modelling,Data analysis, Relational databases,Com',
    'Silver Star Mercedes Benz Jan 2025 - July 2025\nManagement Trainee Pune, India\n◦ Worked closely with the General Manager in the automotive sales division.\n◦ Analyzed historical sales trends to',
    'National Institute of Technology Agartala 2021 - 2025\nB.Tech - Biotechnology and Biochemical Engineering Agartala, Tripura\n◦ CGPA: 7.94',
    NULL,
    NULL,
    25,
    'Data Analyst ',
    'India',
    NULL,
    NULL,
    'https://www.linkedin.com/in/aryan-raj-2a7046149/',
    NULL,
    NULL,
    1,
    '2025-10-18 14:51:28.870',
    '2025-10-18 14:52:04.345',
    221,
    NULL
  ),
  (
    19,
    'I’m Romaulens Junior Auguste, a passionate Social Media Marketer and Digital Strategist dedicated to helping brands grow through creative storytelling, data-driven strategies, and authentic a',
    'Social Media marketing, Canva,Generative AI, Community Management, SEO, Google Analytics\n',
    NULL,
    NULL,
    'https://drive.google.com/drive/folders/1dPqS6mCAN1NyfTbK-lY-EoV_1Yy-jWoy',
    NULL,
    11,
    'Social Media Manager ',
    NULL,
    NULL,
    NULL,
    'https://www.linkedin.com/in/romaulens-junior-auguste',
    NULL,
    NULL,
    1,
    '2025-10-18 15:38:01.138',
    '2025-10-18 15:42:37.906',
    222,
    NULL
  ),
  (
    20,
    'I’m Rajendra Bargaiya, a passionate WordPress Developer with over 4.4 years of experience in building, customizing, and optimizing WordPress websites, themes, and plugins.\n\nI specialize in cr',
    'WordPress Theme & Plugin Development, Custom Post Types, ACF, and Shortcodes, WooCommerce & Payment Gateway Integration, \nREST API & Third-Party API Integration, HTML5, CSS3, JavaScript, jQue',
    'Developed and customized WordPress themes and plugins for clients across different industries, ensuring responsiveness and performance optimization.\n\nBuilt custom WordPress-based web applicat',
    NULL,
    NULL,
    NULL,
    NULL,
    'Fullstack developer',
    'India',
    NULL,
    'https://github.com/rajbargaiya22',
    'https://www.linkedin.com/in/rajendra-bargaiya-43933621a/',
    NULL,
    NULL,
    1,
    '2025-10-18 17:01:45.463',
    '2025-10-19 10:15:16.541',
    202,
    NULL
  ),
  (
    21,
    'Full Stack Developer with 3+ years of experience building scalable web apps and e-commerce solutions using React, Next.js, Node.js, and modern frontend-backend technologies.',
    'React, Next.js, TypeScript, Tailwind CSS, Redux, PHP, Node.js, Express.js, NestJS, REST & GraphQL APIs, MongoDB, PostgreSQL, MySQL, PrismaORM, DrizzleORM, Wordpress, Shopify (custom themes), ',
    '* Built full-stack web applications using React, Next.js, Node.js, and Tailwind CSS.\n* Designed and implemented REST & GraphQL APIs and integrated third-party services.\n* Developed reusable R',
    'Dual Degree (B.Tech + M.Tech) in Computer Science Engineering',
    'https://satyam16.vercel.app/',
    NULL,
    45,
    'Full Stack Developer',
    'Bhopal, Madhya Pradesh, IND',
    NULL,
    'https://github.com/satyam95',
    'https://www.linkedin.com/in/satyamsagar95/',
    NULL,
    NULL,
    1,
    '2025-10-18 20:37:20.449',
    '2025-10-18 20:50:37.871',
    224,
    NULL
  ),
  (
    22,
    'I am a Freelancer, I do Data Entry work, Data Filtering, Data Sorting, Data Formating, Data Cleaning, Copy Past work.',
    'Data Entry,Ms Excel, Ms Word, Data Filtering, Data Cleaning\n',
    'one year puls freelancing Expreance.\n',
    'B.tech in Computer Science\n',
    NULL,
    NULL,
    10,
    'DATA ENTRY',
    'Remote',
    NULL,
    NULL,
    'https://www.linkedin.com/in/mdtamim2026/',
    NULL,
    NULL,
    1,
    '2025-10-19 06:12:19.051',
    '2025-10-19 06:12:19.051',
    238,
    NULL
  ),
  (
    23,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    'Data Analyst',
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    NULL,
    1,
    '2025-10-19 16:45:36.263',
    '2025-10-19 16:45:36.263',
    249,
    NULL
  );
/*!40000 ALTER TABLE `UserProfile` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `VirtualAssistance`
--

DROP TABLE IF EXISTS `VirtualAssistance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `VirtualAssistance` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pending',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `VirtualAssistance`
--

LOCK TABLES `VirtualAssistance` WRITE;
/*!40000 ALTER TABLE `VirtualAssistance` DISABLE KEYS */
;
/*!40000 ALTER TABLE `VirtualAssistance` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `WalletTransaction`
--

DROP TABLE IF EXISTS `WalletTransaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `WalletTransaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'completed',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `walletId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `WalletTransaction_walletId_fkey` (`walletId`),
  CONSTRAINT `WalletTransaction_walletId_fkey` FOREIGN KEY (`walletId`) REFERENCES `FreelancerWallet` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `WalletTransaction`
--

LOCK TABLES `WalletTransaction` WRITE;
/*!40000 ALTER TABLE `WalletTransaction` DISABLE KEYS */
;
/*!40000 ALTER TABLE `WalletTransaction` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `_MessageReads`
--

DROP TABLE IF EXISTS `_MessageReads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `_MessageReads` (
  `A` int NOT NULL,
  `B` int NOT NULL,
  UNIQUE KEY `_MessageReads_AB_unique` (`A`, `B`),
  KEY `_MessageReads_B_index` (`B`),
  CONSTRAINT `_MessageReads_A_fkey` FOREIGN KEY (`A`) REFERENCES `Message` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `_MessageReads_B_fkey` FOREIGN KEY (`B`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `_MessageReads`
--

LOCK TABLES `_MessageReads` WRITE;
/*!40000 ALTER TABLE `_MessageReads` DISABLE KEYS */
;
INSERT INTO `_MessageReads`
VALUES (1, 2),
  (9, 3),
  (12, 3),
  (14, 3),
  (15, 3),
  (7, 19),
  (8, 19),
  (3, 41),
  (4, 41),
  (5, 41),
  (10, 183),
  (11, 183),
  (13, 183),
  (16, 183);
/*!40000 ALTER TABLE `_MessageReads` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `admin` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `role` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'admin',
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `avatar` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `admin_email_key` (`email`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */
;
/*!40000 ALTER TABLE `admin` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `connecttransaction`
--

DROP TABLE IF EXISTS `connecttransaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `connecttransaction` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` int NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `userId` int NOT NULL,
  `proposalId` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `connecttransaction_userId_fkey` (`userId`),
  KEY `connecttransaction_proposalId_fkey` (`proposalId`),
  CONSTRAINT `connecttransaction_proposalId_fkey` FOREIGN KEY (`proposalId`) REFERENCES `Proposal` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `connecttransaction_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 131 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `connecttransaction`
--

LOCK TABLES `connecttransaction` WRITE;
/*!40000 ALTER TABLE `connecttransaction` DISABLE KEYS */
;
INSERT INTO `connecttransaction`
VALUES (
    1,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-14 07:44:46.601',
    2,
    1
  ),
  (
    2,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-14 10:45:23.515',
    14,
    2
  ),
  (
    3,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-14 11:42:42.034',
    18,
    3
  ),
  (
    4,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-14 12:03:26.152',
    2,
    4
  ),
  (
    5,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-14 12:04:19.526',
    20,
    5
  ),
  (
    6,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-14 12:33:46.221',
    22,
    6
  ),
  (
    7,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-15 01:30:05.653',
    26,
    7
  ),
  (
    8,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-15 02:00:28.854',
    27,
    8
  ),
  (
    9,
    'usage',
    -1,
    'Submitted proposal for \"Need Virtual Assistant\"',
    '2025-10-15 03:09:03.245',
    29,
    9
  ),
  (
    10,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-15 03:14:14.147',
    30,
    10
  ),
  (
    11,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-15 04:12:58.633',
    33,
    11
  ),
  (
    12,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-15 04:35:59.673',
    34,
    12
  ),
  (
    13,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-15 04:54:40.494',
    35,
    13
  ),
  (
    14,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-15 07:47:22.467',
    42,
    14
  ),
  (
    15,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-15 08:43:40.563',
    45,
    15
  ),
  (
    16,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-15 13:16:47.787',
    51,
    16
  ),
  (
    17,
    'purchase',
    100,
    'Purchased premium plan with 100 connects (INR 1)',
    '2025-10-15 13:47:01.745',
    2,
    NULL
  ),
  (
    18,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-16 15:19:06.457',
    1,
    17
  ),
  (
    19,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-16 15:24:21.022',
    41,
    18
  ),
  (
    20,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-16 15:54:45.382',
    139,
    19
  ),
  (
    21,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-16 18:10:14.859',
    135,
    20
  ),
  (
    22,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-16 18:30:58.439',
    151,
    21
  ),
  (
    23,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-16 18:39:46.453',
    131,
    22
  ),
  (
    24,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-16 18:44:32.131',
    131,
    23
  ),
  (
    25,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-16 19:03:04.919',
    154,
    24
  ),
  (
    26,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-16 19:05:00.681',
    154,
    25
  ),
  (
    27,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-16 20:00:07.227',
    145,
    26
  ),
  (
    28,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-16 21:55:46.474',
    158,
    27
  ),
  (
    29,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-17 02:04:00.805',
    159,
    28
  ),
  (
    30,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-17 04:38:47.459',
    164,
    29
  ),
  (
    31,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-17 05:09:04.810',
    165,
    30
  ),
  (
    32,
    'usage',
    -1,
    'Submitted proposal for \"Need Virtual Assistant\"',
    '2025-10-17 05:26:28.964',
    165,
    31
  ),
  (
    33,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-17 05:43:51.379',
    166,
    32
  ),
  (
    34,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-17 05:46:46.543',
    166,
    33
  ),
  (
    35,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-17 05:55:37.877',
    167,
    34
  ),
  (
    36,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-17 06:02:06.195',
    169,
    35
  ),
  (
    37,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-17 06:02:40.847',
    170,
    36
  ),
  (
    38,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-17 06:05:59.707',
    170,
    37
  ),
  (
    39,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-17 06:24:11.410',
    168,
    38
  ),
  (
    40,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-17 06:38:04.768',
    171,
    39
  ),
  (
    41,
    'usage',
    -1,
    'Submitted proposal for \"Virtual Assistant for Daily Business Tasks\"',
    '2025-10-17 07:03:26.191',
    173,
    40
  ),
  (
    42,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-17 07:03:38.729',
    70,
    41
  ),
  (
    43,
    'usage',
    -1,
    'Submitted proposal for \"Social Media Manager for Brand Growth\"',
    '2025-10-17 07:59:44.977',
    177,
    42
  ),
  (
    44,
    'usage',
    -1,
    'Submitted proposal for \"SEO Specialist for Website Optimization\"',
    '2025-10-17 08:01:52.093',
    177,
    43
  ),
  (
    45,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-17 08:02:39.376',
    85,
    44
  ),
  (
    46,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-17 08:03:34.293',
    177,
    45
  ),
  (
    47,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-17 08:06:44.228',
    85,
    46
  ),
  (
    48,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-17 08:52:57.773',
    179,
    47
  ),
  (
    49,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-17 08:57:39.636',
    179,
    48
  ),
  (
    50,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-17 09:58:24.495',
    182,
    49
  ),
  (
    51,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-17 09:59:23.390',
    182,
    50
  ),
  (
    52,
    'usage',
    -1,
    'Submitted proposal for \"Web Developer for E-Commerce Website\"',
    '2025-10-17 10:00:15.078',
    170,
    51
  ),
  (
    53,
    'usage',
    -1,
    'Submitted proposal for \"Mobile App Developer for Android/iOS\"',
    '2025-10-17 10:01:31.005',
    170,
    52
  ),
  (
    54,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-17 10:29:25.818',
    186,
    53
  ),
  (
    55,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-17 10:30:47.123',
    186,
    54
  ),
  (
    56,
    'usage',
    -1,
    'Submitted proposal for \"Branding Specialist for Apparel Company\"',
    '2025-10-17 10:49:50.627',
    188,
    55
  ),
  (
    57,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-17 10:51:20.945',
    187,
    56
  ),
  (
    58,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-17 10:54:50.374',
    187,
    57
  ),
  (
    59,
    'usage',
    -1,
    'Submitted proposal for \"Mobile App Developer for Android/iOS\"',
    '2025-10-17 10:59:53.595',
    131,
    58
  ),
  (
    60,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-17 12:55:22.807',
    8,
    59
  ),
  (
    61,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-17 12:57:29.405',
    8,
    60
  ),
  (
    62,
    'usage',
    -1,
    'Submitted proposal for \"Web Developer for E-Commerce Website\"',
    '2025-10-17 13:44:51.023',
    191,
    61
  ),
  (
    63,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-17 13:48:53.387',
    191,
    62
  ),
  (
    64,
    'usage',
    -1,
    'Submitted proposal for \"Digital Marketing Manager\"',
    '2025-10-17 13:50:55.101',
    191,
    63
  ),
  (
    65,
    'usage',
    -1,
    'Submitted proposal for \"Facebook & Instagram Ads Specialist\"',
    '2025-10-17 13:53:24.273',
    191,
    64
  ),
  (
    66,
    'usage',
    -1,
    'Submitted proposal for \"Motion Graphic Designer for Promo Videos\"',
    '2025-10-17 14:44:19.645',
    192,
    65
  ),
  (
    67,
    'usage',
    -1,
    'Submitted proposal for \"Video Editor for Social Media and Ads\"',
    '2025-10-17 14:47:35.739',
    192,
    66
  ),
  (
    68,
    'usage',
    -1,
    'Submitted proposal for \"Social Media Manager for Brand Growth\"',
    '2025-10-17 14:50:59.295',
    192,
    67
  ),
  (
    69,
    'usage',
    -1,
    'Submitted proposal for \"Product Listing Specialist (Amazon, Etsy, etc.)\"',
    '2025-10-17 15:22:12.847',
    166,
    68
  ),
  (
    70,
    'usage',
    -1,
    'Submitted proposal for \"Facebook & Instagram Ads Specialist\"',
    '2025-10-17 15:27:03.015',
    166,
    69
  ),
  (
    71,
    'usage',
    -1,
    'Submitted proposal for \"WordPress Developer for Company Website\"',
    '2025-10-17 16:07:10.058',
    193,
    70
  ),
  (
    72,
    'usage',
    -1,
    'Submitted proposal for \"Email Marketing Specialist\"',
    '2025-10-17 21:27:45.980',
    196,
    71
  ),
  (
    73,
    'usage',
    -1,
    'Submitted proposal for \"Quality Control Specialist for Print Production\"',
    '2025-10-17 21:36:27.178',
    196,
    72
  ),
  (
    74,
    'usage',
    -1,
    'Submitted proposal for \"Content Strategist for Fashion Brand\"',
    '2025-10-17 21:40:43.799',
    196,
    73
  ),
  (
    75,
    'usage',
    -1,
    'Submitted proposal for \"Branding Specialist for Apparel Company\"',
    '2025-10-17 21:44:39.987',
    196,
    74
  ),
  (
    76,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-18 04:35:39.547',
    198,
    75
  ),
  (
    77,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-18 04:37:45.393',
    198,
    76
  ),
  (
    78,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-18 05:39:56.296',
    201,
    77
  ),
  (
    79,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-18 05:44:21.818',
    73,
    78
  ),
  (
    80,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-18 06:01:54.139',
    73,
    79
  ),
  (
    81,
    'usage',
    -1,
    'Submitted proposal for \"I need a react developer\"',
    '2025-10-18 06:02:47.428',
    62,
    80
  ),
  (
    82,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-18 06:04:33.905',
    62,
    81
  ),
  (
    83,
    'usage',
    -1,
    'Submitted proposal for \"Need Help\"',
    '2025-10-18 07:58:18.011',
    3,
    82
  ),
  (
    84,
    'usage',
    -1,
    'Submitted proposal for \"Digital Marketing Manager\"',
    '2025-10-18 08:45:31.023',
    207,
    83
  ),
  (
    85,
    'usage',
    -1,
    'Submitted proposal for \"Need Help\"',
    '2025-10-18 09:00:25.979',
    208,
    84
  ),
  (
    86,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-18 09:44:17.764',
    211,
    85
  ),
  (
    87,
    'usage',
    -1,
    'Submitted proposal for \"Web Developer for E-Commerce Website\"',
    '2025-10-18 09:45:39.560',
    212,
    86
  ),
  (
    88,
    'usage',
    -1,
    'Submitted proposal for \"WordPress Developer for Company Website\"',
    '2025-10-18 09:49:27.638',
    212,
    87
  ),
  (
    89,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-18 09:51:46.536',
    212,
    88
  ),
  (
    90,
    'usage',
    -1,
    'Submitted proposal for \"Need Help\"',
    '2025-10-18 10:18:02.916',
    202,
    89
  ),
  (
    91,
    'usage',
    -1,
    'Submitted proposal for \"Web Developer for E-Commerce Website\"',
    '2025-10-18 10:23:20.401',
    202,
    90
  ),
  (
    92,
    'usage',
    -1,
    'Submitted proposal for \"Need Help\"',
    '2025-10-18 10:43:22.054',
    143,
    91
  ),
  (
    93,
    'usage',
    -1,
    'Submitted proposal for \"Web Developer for E-Commerce Website\"',
    '2025-10-18 10:46:12.098',
    143,
    92
  ),
  (
    94,
    'usage',
    -1,
    'Submitted proposal for \"Mobile App Developer for Android/iOS\"',
    '2025-10-18 12:40:42.210',
    33,
    93
  ),
  (
    95,
    'usage',
    -1,
    'Submitted proposal for \"Content Strategist for Fashion Brand\"',
    '2025-10-18 15:30:59.159',
    222,
    94
  ),
  (
    96,
    'usage',
    -1,
    'Submitted proposal for \"Social Media Manager for Brand Growth\"',
    '2025-10-18 15:36:08.386',
    222,
    95
  ),
  (
    97,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-18 15:44:29.841',
    217,
    96
  ),
  (
    98,
    'usage',
    -1,
    'Submitted proposal for \"Web Developer for E-Commerce Website\"',
    '2025-10-18 16:03:56.431',
    223,
    97
  ),
  (
    99,
    'usage',
    -1,
    'Submitted proposal for \"WordPress Developer for Company Website\"',
    '2025-10-18 16:05:40.678',
    223,
    98
  ),
  (
    100,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-18 16:15:59.201',
    224,
    99
  ),
  (
    101,
    'usage',
    -1,
    'Submitted proposal for \"Shopify Expert for Online Store Setup\"',
    '2025-10-18 16:51:46.741',
    224,
    100
  ),
  (
    102,
    'usage',
    -1,
    'Submitted proposal for \"Web Developer for E-Commerce Website\"',
    '2025-10-18 20:56:30.476',
    224,
    101
  ),
  (
    103,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-18 21:14:54.391',
    229,
    102
  ),
  (
    104,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-18 21:16:11.400',
    229,
    103
  ),
  (
    105,
    'usage',
    -1,
    'Submitted proposal for \"Shopify Expert for Online Store Setup\"',
    '2025-10-18 23:06:37.486',
    166,
    104
  ),
  (
    106,
    'usage',
    -1,
    'Submitted proposal for \"Web Developer for E-Commerce Website\"',
    '2025-10-18 23:07:39.322',
    166,
    105
  ),
  (
    107,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-19 02:11:56.186',
    230,
    106
  ),
  (
    108,
    'usage',
    -1,
    'Submitted proposal for \"E-Commerce Store Manager (Shopify/WooCommerce)\"',
    '2025-10-19 03:59:36.106',
    231,
    107
  ),
  (
    109,
    'usage',
    -1,
    'Submitted proposal for \"Video Editor for Social Media and Ads\"',
    '2025-10-19 04:31:16.076',
    232,
    108
  ),
  (
    110,
    'usage',
    -1,
    'Submitted proposal for \"Graphic Designer for Branding and Marketing Materials\"',
    '2025-10-19 04:34:01.800',
    232,
    109
  ),
  (
    111,
    'usage',
    -1,
    'Submitted proposal for \"Need Web Developer\"',
    '2025-10-19 05:18:07.462',
    233,
    110
  ),
  (
    112,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-19 05:30:12.410',
    234,
    111
  ),
  (
    113,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-19 05:59:11.469',
    236,
    112
  ),
  (
    114,
    'usage',
    -1,
    'Submitted proposal for \"Need Help\"',
    '2025-10-19 06:08:56.387',
    239,
    113
  ),
  (
    115,
    'usage',
    -1,
    'Submitted proposal for \"E-Commerce Store Manager (Shopify/WooCommerce)\"',
    '2025-10-19 06:11:15.281',
    239,
    114
  ),
  (
    116,
    'usage',
    -1,
    'Submitted proposal for \"Virtual Assistant for Daily Business Tasks\"',
    '2025-10-19 06:13:41.661',
    239,
    115
  ),
  (
    117,
    'usage',
    -1,
    'Submitted proposal for \"SEO Specialist for Website Optimization\"',
    '2025-10-19 06:14:55.110',
    239,
    116
  ),
  (
    118,
    'usage',
    -1,
    'Submitted proposal for \"Need Help\"',
    '2025-10-19 07:02:03.048',
    131,
    117
  ),
  (
    119,
    'usage',
    -1,
    'Submitted proposal for \"E-Commerce Store Manager (Shopify/WooCommerce)\"',
    '2025-10-19 07:25:05.078',
    240,
    118
  ),
  (
    120,
    'usage',
    -1,
    'Submitted proposal for \"Video Editor for Social Media and Ads\"',
    '2025-10-19 08:04:02.469',
    242,
    119
  ),
  (
    121,
    'usage',
    -1,
    'Submitted proposal for \"Need Virtual Assistant\"',
    '2025-10-19 08:08:17.025',
    242,
    120
  ),
  (
    122,
    'usage',
    -1,
    'Submitted proposal for \"Social Media Manager for Brand Growth\"',
    '2025-10-19 08:23:49.317',
    243,
    121
  ),
  (
    123,
    'usage',
    -1,
    'Submitted proposal for \"Social Media Manager for Brand Growth\"',
    '2025-10-19 08:39:45.358',
    244,
    122
  ),
  (
    124,
    'usage',
    -1,
    'Submitted proposal for \"Customer Support Representative (Remote)\"',
    '2025-10-19 08:52:30.900',
    60,
    123
  ),
  (
    125,
    'usage',
    -1,
    'Submitted proposal for \"Project Manager for Remote Team Coordination\"',
    '2025-10-19 08:55:46.879',
    60,
    124
  ),
  (
    126,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-19 09:07:01.032',
    234,
    125
  ),
  (
    127,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-19 10:04:38.295',
    221,
    126
  ),
  (
    128,
    'usage',
    -1,
    'Submitted proposal for \"Data Analyst for Business Insights\"',
    '2025-10-19 10:37:15.836',
    246,
    127
  ),
  (
    129,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-19 10:45:06.356',
    246,
    128
  ),
  (
    130,
    'usage',
    -1,
    'Submitted proposal for \"Need Data Analyst\"',
    '2025-10-19 15:31:59.711',
    249,
    129
  );
/*!40000 ALTER TABLE `connecttransaction` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `formdata`
--

DROP TABLE IF EXISTS `formdata`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `formdata` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `serviceCategory` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `message` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pending',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 5 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `formdata`
--

LOCK TABLES `formdata` WRITE;
/*!40000 ALTER TABLE `formdata` DISABLE KEYS */
;
INSERT INTO `formdata`
VALUES (
    1,
    'Neeraj Baghel',
    '8182da3e52d835171564d3c8a4e0f7a6:eb6b1616ef8c3aa61a2950a4ddff7c5339f52c5294a1f1:4382777ca94a93afafec99e25289395e',
    'education',
    'Need Service',
    'c757a4a662a6ac52f05d848558d01865:eae8a5ad36ca8806a76e85:f0bfe30c4354e9d7e0b75cfe7da7fbe0',
    '2025-10-14 10:41:50.643',
    'Pending'
  ),
  (
    2,
    'Sumit Kaithwar ',
    'a419869d3ce384a34871792870568bd3:ea4ee6f7b1978ca57131712d89dafd445deb573bd68e:4fccca1f3441205a911201aa1fd24a13',
    'education',
    'Tell me. ',
    '36c9ebe9774fa96374bd5b7d8f5e376d:42db4a79adbab4a856d0:424caba65e1b0f935c03c41bc951d472',
    '2025-10-19 05:05:17.910',
    'Pending'
  ),
  (
    3,
    'Sumit Kaithwar ',
    '850b43f6a2c6e9ee95150298d8434d8c:094f71e10881d9dada05b258582d1251e8bc5b9bc3bb:ed8b61ebd0c82fbd481271639c917a8d',
    'education',
    'Tell me. About this Job Opportunity ',
    '6b9baf5199d6bf8d494f6b9983853231:c32f043011a48c08d0af:a51e37ee17d9c658682ba40627440374',
    '2025-10-19 05:07:33.916',
    'Pending'
  ),
  (
    4,
    'Sumit Kaithwar ',
    '13fec94b62b70366508d70e0f67f2ed5:0c99404b5335f247c7d8c357972f4dc2821448d4097e:b2b1b6a1ba4a59c4e92b688727a5f44a',
    'education',
    'Tell me. About this Job Opportunity ',
    '65d6b5b487997dd84456310c490a1e35:9a7c5455e4386f36314b:11ab55a269a26acb99fa9ced99eede0d',
    '2025-10-19 05:07:34.536',
    'Pending'
  );
/*!40000 ALTER TABLE `formdata` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `job`
--

DROP TABLE IF EXISTS `job`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `job` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `serviceCategory` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `experience` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `resumeUrl` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `letter` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `userId` int DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Pending',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 18 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `job`
--

LOCK TABLES `job` WRITE;
/*!40000 ALTER TABLE `job` DISABLE KEYS */
;
INSERT INTO `job`
VALUES (
    1,
    'Shikha Jain',
    '98728ebe99e6c4f5577341ad242ee02b:89483d12bd73cc916ba502b3fe1db101e0136d:afac3f13aa03455bd72259e76e31566d',
    '8fd20a73d9b6ec3f45d3f3194d2bc8c2:1414c6afc4328c3215bc:7de21c61aaa082a4295a05464641ebc3',
    '1',
    '7',
    '8d592a5abb89255401c8ec8806782acb:7fca6da833a50ec5fcdaaa7ade62eedfaad5a9e32d12e7e503ad0826ad65785a08bb22107b07dc94424bdd8b441aa5a2:e7f05f901776c02a78bd497928e25b16',
    'Hello,\n\nI’m Shikha Jain, a Frontend Developer with hands-on experience in building scalable, user-centric web applications using React.js, Next.js, TypeScript, and modern UI frameworks.\n\nEven',
    NULL,
    '2025-10-14 11:44:18.639',
    'Pending'
  ),
  (
    2,
    'Shikha Jain',
    '60a0597d66b562f59639b6c63ddfc6ea:5dd3dda1bc547d023631473f428d4401ba8993:20544dc610d1632b734cb3c4329ea4b1',
    '27f06d0ab87ba0a980de60d984cdda9d:e1ad647574a3c7a38bdd:67cadc22afec2f87c4e165819aebc235',
    '1',
    '3',
    'caae3cadf211eec2ae3c180d21683603:e9938e4bbb3e6ba8e09f4d3b92d55d39b2bedbdfcf7deb8ca7c0ba2cacdc4a8da450bbd9ab3f6a8ae1d5d3475062f7b4:882d691413d9b360128212680561c021',
    'Hello,\n\nI’m Shikha Jain, a Frontend Developer with hands-on experience in building scalable, user-centric web applications using React.js, Next.js, TypeScript, and modern UI frameworks.\n\nEven',
    NULL,
    '2025-10-14 11:45:20.964',
    'Pending'
  ),
  (
    3,
    'Divyanshi Sahu',
    '4119e395cdbc0fabd005e29f77d77fc4:4d9eaea8d983ddc9430be1952aec50f4d75e41bff33f60c58f:10bc5d563d0c82eee33de1a1423971e5',
    'a486c38c662e9bfe09198e4951d147ed:27f285b7329ca11819f6:005ee2d805728e3fb16abe93f44f8aff',
    '5',
    '0',
    '300c1af1c19aea0830f52eaf82c49ebd:58e5845b204c2b01a8c2d43922813a093e1a7221575c502d59191f2b41ff5f1cb897a5870ea22e8d3ed0:a45a7f92f036a586f3217a6f6c6e8983',
    'pending',
    NULL,
    '2025-10-14 11:57:11.667',
    'Pending'
  ),
  (
    4,
    'Precious Akachukwu Chijioke',
    'e6de88015a14a281bf83dc454aac3ba6:5f9dc50b5b2f22b4f5c993792a8dec970e064da7bf685819331cb653cdf8b524404dce:fdc712407b2900fa98968b67b6f545ac',
    '24f668ae2415326b29b151968f4ddbea:6bc5e26b391f156968264f4bd40bc1768a:977d238e2045f4fe304280bcdd69e169',
    '4',
    '3',
    '8d8a7b234db4e89e02bc9c06e93fb7ba:cd9e158f863ec6dae10e1b832c4a42556683466d404390151664b74dd5b8930ee82829031dd4b8bfd4fe435a1a177a63279eb9a31a3427:989392570ff31ee2f7c4e53ca0280e7c',
    'Hello Hiring Team,\nAroliya Group.\n\nI see that you’re looking for a proactive and detail-oriented Virtual Executive Assistant who can keep global operations organized, communication seamless, ',
    NULL,
    '2025-10-14 12:57:50.544',
    'Pending'
  ),
  (
    5,
    'Ashveen verma',
    'baa869940880bd856a3d0cb94c35b1ee:792f389410776b8ff00b92d2423cbcd2af2ce81f:06e121f4a97f136436a2cfa3933e580d',
    '4f575dbb1ce268ed45a7a2dbb0e78a25:58d0aba047d497d1d7bd50:d03b9118feba5bf834982aab2f0aec0c',
    '2',
    '2',
    'd2f6c787fa9decd310bf88a6828a4619:0ea200b52298438249f6d08154121aec603030fc4cb5138a20a2c9ee86aefebf079bc1:06e0de3cfdc0ef39dd14e424d8b88f51',
    'pending',
    NULL,
    '2025-10-14 13:45:11.511',
    'Pending'
  ),
  (
    6,
    'Sharon Rose Aggah',
    'ddfed57727c6da68d95bf1f0e88ad06d:3547959464ffff1981b5530dac38487f54699632aabd15a611:148bcb3366ca24aaca211dbdc7677427',
    '5ee2c24cead8e8fc97dc2c6ffe564ee7:a1a65ab45941ea444165ec323aa4:44a7b30a7b7ea57775344b0bd3fc18c3',
    '4',
    '1',
    '83c8e20ff095f1e40601d6c144aecf62:260dfd578b20f133f57c80f100c5bdb0305b3451f5dd26c63a1d2e79b3b1a67c966e3577fa415672ce7fbb4aa5f3e42f64ddc1bcc408c0febdf3ac17:d81afdc33b7de0a564b870218389f522',
    'pending',
    NULL,
    '2025-10-14 14:04:38.554',
    'Pending'
  ),
  (
    7,
    'Sharon Rose Aggah',
    'a00de70fcd3324553d94a4d6a457ebcf:c6f02da7db7a9ad5ecf2a1ad68ad258be179f4230e3ad00e13:3f771519bc1f4ddc0e3c5a99d628f7a2',
    '5f2010b7b3547038b01f3ba7d1f5c3bb:114ee062800957c8f3ea5aa2ac4e:7bb643a730a68bc31a9fd28c179a751f',
    '4',
    '1',
    'ef0f8438470b51b3023be8ac8b69562e:fa6dbde41c8ffd799321780c236ca900d79b0423be8cbef4bfd829d506067696862e1be454a4edf9a545e65d6287a2f919e891846275d980fa580f41:c978e1c5ce8d41fd73f09a4c2e42339a',
    'pending',
    NULL,
    '2025-10-14 14:04:38.778',
    'Pending'
  ),
  (
    8,
    'Sharon Rose Aggah',
    '6c0e50788eb7367e33dfffbf73abf2b8:a2578b43db4c914dcf525512c2ef3473ef04998e4cc3eb5882:38947a2894e89f2546fc4975950e1c31',
    '492e8f64248d7928530d52fc9e66c563:a199d059e95a65af10371f5022a5:0bf705e2cbd3539d5a831b3918ed3b18',
    '4',
    '1',
    '9fc357b6f086763a70c1c6fc85933de5:0c7602dbafdba66b286b7aca4a4118c8d6e26d02773d9c610c51962c75ad5b77ace934a5e9024b14b2e991091c051e4acf154033cbfc892102355cca:8f3c0972f717f9b2063cc5a0a8fbb904',
    '.',
    NULL,
    '2025-10-14 14:04:39.014',
    'Pending'
  ),
  (
    9,
    'Sharon Rose Aggah',
    'a8e3f2fbbce5adb63ee5808a59aa41fd:86a62ba00b9f2d9fd84bb8bdb9e7e9f54e26a55f6b9f81d798:766922af9ca062c8d86547ff41872f75',
    '1791d1c4ac0d98c4564870392d1dc585:8892588d77f407cd18fbdb963465:53c9dfd381a6adc170e03bcfed8bbcde',
    '4',
    '1',
    '740da8166ed33da9a59c022f660db83c:eb6207e53221d2eae26a0e0915f7b4e36d4fde989423f6a7187eb869e64ef8995b6c478ad5f4f17839e66bff84f22f1b6f19218268f4f3c49d0eaf2c:4dc64c105652ce8e745f9dd7fff8d665',
    'pending',
    NULL,
    '2025-10-14 14:04:40.935',
    'Pending'
  ),
  (
    10,
    'Yash Repal ',
    'f8d6d8ba46dabfacbd1c9b78a78d6342:301e781cb4a22cebd485e19b6c7a23bba41af1:9fe30032526e470ce6088624a5f170bc',
    '1834bd2506af6d0d40b5abc5ee690ee1:6805f48bab3bce3316c2282caa:61a90a90b8752b7364a1a1f6f8bfb255',
    '12',
    '1',
    '709a23941d3e2db351fc36bbc0eb6302:8328b89ab0173f96c81e26e5501c232abaca63bcbf2dd423ccbe958872f80110b3ef4666b4de6f04079e:248f53ee910523158d6de90b894ec780',
    'My name is Yash Sanjay Repal , and I am interested in exploring employment opportunities. I am eager to contribute to your team. I have attached my resume for your review and would appreciate',
    NULL,
    '2025-10-15 07:12:56.851',
    'Pending'
  ),
  (
    11,
    'Ashwin',
    'fd81f8bbde1e12e34ed37aa00d164ad5:6570006a2c070f65aceeed27877a89787a16dc78043db7d040:5c144be6a644a0363a6994a79ebca876',
    '3167f5c79980386c18de0945c8bd6d44:7775578fb37af20baaa0:ed9a77a3135bb3ce72cbb08c89a8b92c',
    '2',
    '1',
    '75f8ba9056e067c3a409a20073df5d0a:6f3d9b95da8f2efb23c4e4435678833ea642418a1ea893770e2f7e001801:0f984eae516cf2fbb11f7e9cc65c15a6',
    'pending',
    NULL,
    '2025-10-15 15:25:32.489',
    'Pending'
  ),
  (
    12,
    'Ashwin S',
    '2b6b5c7c148e4e4d4a43cab37d9124f2:5fc6aa3cc4d02072ebcae82f40072657edbfcf369a2d6f40c4:1842049b4841a31f906e06e4ee3f0797',
    'a8b17d0b6d71963beb9a83352bd78ceb:ac7b72e1e8d0d3ec6b15:bc3498a5639fdb8190574e522bc46389',
    '5',
    '1',
    '7d5e74ece8c4b2389d653e4479c0f55f:4d6be85d140d318a8dd7a48f33732887d66e78ac6ef68ea0c6f0f5788136:3ee03f8638cda77eafb2a549d6eb4ce1',
    'pending',
    NULL,
    '2025-10-15 15:26:21.781',
    'Pending'
  ),
  (
    13,
    'Manuja Mukherjee',
    'b8a52cccd2ae71a70007894f97862acc:d20f1d995228d214a0305e5d5c6ea1bc9783add767a45c0f6bf40c971c:08ab901f9bfaa7f5da67ef2b1360ee14',
    '9e387c9842636e5199757583cfa1239f:21c7e8604bb69c68866200:aa57fb2d69a9e82baab94fab4c3a9915',
    '8',
    '3',
    '5e3229b7166071f5a5af9ac4a2b629c4:2fa2279084826c23f370b28e3051b5371d7603db6d2c6ee8bc9b5cb264542cb4a4e92bf7cc6bcd6d311334:d5c0864e6e54a0a6b0afd17da42f7aec',
    'pending',
    NULL,
    '2025-10-15 18:49:19.593',
    'Pending'
  ),
  (
    14,
    'Hari Jatin Dave',
    'b143b50c5985c126cc5ed5262a28d1de:5c66fe1eba6abc8235f515639b24bceea38cb5cefd375c25:73e2c6dd1c51fefa273f591ff559fc26',
    '9ad50957e3beb79fa275a951452333cf:a311b39f13e4faa47580:6b250f6ffb0ba9875d5a6518c2a211d0',
    '2',
    '2',
    '9006549d5fd824636ed9b2cc29d4589c:37453bf93f412dd7d8191e6854e3df54e221ed3d622ec30d8baaba5d8e9eae5924fc0a9d:803adc164bbc629cf84cfdae09dd4f2c',
    'Dear Hiring Manager,\n\nI am writing to express my enthusiasm for the AI/ML Engineer – Data & Predictive Analytics role at Aroliya. I am drawn to Aroliya’s commitment to providing smart online ',
    NULL,
    '2025-10-15 19:28:33.360',
    'Pending'
  ),
  (
    15,
    'Hari Jatin Dave',
    'aae0eea8fafd59220bb830cfc38992a5:d12dd582659c04b95add9487a776dc15f8a2c7580e2575ea:c5c3ef6ea7a7b09d2b5b1902c1043f5a',
    '436fc7378c664f019bf7380ec4483ea2:a1f93cc5aca378d71932:63ea6316e8307066fc90376c1a709d43',
    '5',
    '2',
    'eebbd595f4556aa981f2fa40e216dbd0:fe91fb4714166949298b7fdcbe6197b338644f2836e994457308c76b06bdd4d5d8ba4abb:8f1ce6af12978d488dda7993e13594ee',
    'pending',
    NULL,
    '2025-10-15 19:29:00.806',
    'Pending'
  ),
  (
    16,
    'Sanya Bitthal',
    'e1535c8eec04c9a471f0565f65f1e328:d286f57c7c5cfa26b4e7729c88250d9015f53ff46e7a:06f209a8da3154e89da04af2cad1cc3e',
    'cc05fe68233b41109e5aa79dda0bda09:5b75bba33ff4fa2841e8:49b4a0b9dec568eb50b0bf0289c9260c',
    '4',
    '0',
    '8316eb76dc6e78f6749b5dac30252fe9:ba4404078ae550f759f5947dd46b7faf2447773a6917daccadb4ed0aa6137b5c561f51dcf7e0692bbeb9be:f50579c25adb5e0ff4c13d0ced409402',
    'Dear Hiring Manager,\n\nI am writing to express my interest in the Virtual Executive Assistant position. I am highly organized, detail-oriented, and comfortable handling administrative tasks in',
    NULL,
    '2025-10-16 06:34:21.535',
    'Pending'
  ),
  (
    17,
    'Sanya Bitthal',
    'cd0502f88b1bba252de5a51fc1afdc39:0d9c7849ec57fb5951aaf67eae9e4d533f1929d9de77:54d934c35cf0f3a0a5434b654523e3b3',
    'a7d6214044075a502c4906a9a3b4efa4:2147b6598ae393870121:b8827ec088607853d8dafbea81789adb',
    '4',
    '0',
    'cb14c4281423f43b220b913d01e11f0e:78d820b14db9d4d5e8e4e8a4f3f9f3d9124bb360767ab6113a3ad3177e2c9bf481c60cd46a2e07322dd103:88248f481b3efc2b46412d9102eb1772',
    'Dear Hiring Manager,\n\nI am writing to express my interest in the Virtual Executive Assistant position. I am highly organized, detail-oriented, and comfortable handling administrative tasks in',
    NULL,
    '2025-10-16 06:35:01.732',
    'Pending'
  );
/*!40000 ALTER TABLE `job` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `order` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `service` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `paymentId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'Pending',
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int DEFAULT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `duration` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `experienceLevel` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quantity` int NOT NULL DEFAULT '1',
  `requirements` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `resume` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `subcategory` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `urgency` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT 'standard',
  PRIMARY KEY (`id`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */
;
/*!40000 ALTER TABLE `order` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `otps`
--

DROP TABLE IF EXISTS `otps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `otps` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `otp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiresAt` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `otps_email_key` (`email`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `otps`
--

LOCK TABLES `otps` WRITE;
/*!40000 ALTER TABLE `otps` DISABLE KEYS */
;
/*!40000 ALTER TABLE `otps` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `passwordresettoken`
--

DROP TABLE IF EXISTS `passwordresettoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `passwordresettoken` (
  `id` int NOT NULL AUTO_INCREMENT,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `expiresAt` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`),
  UNIQUE KEY `passwordresettoken_token_key` (`token`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `passwordresettoken`
--

LOCK TABLES `passwordresettoken` WRITE;
/*!40000 ALTER TABLE `passwordresettoken` DISABLE KEYS */
;
/*!40000 ALTER TABLE `passwordresettoken` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `plansubscription`
--

DROP TABLE IF EXISTS `plansubscription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `plansubscription` (
  `id` int NOT NULL AUTO_INCREMENT,
  `planType` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` double NOT NULL,
  `currency` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'INR',
  `status` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'active',
  `razorpayOrderId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `razorpayPaymentId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `razorpaySignature` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `startsAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `expiresAt` datetime(3) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `plansubscription_userId_idx` (`userId`),
  CONSTRAINT `plansubscription_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 2 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `plansubscription`
--

LOCK TABLES `plansubscription` WRITE;
/*!40000 ALTER TABLE `plansubscription` DISABLE KEYS */
;
INSERT INTO `plansubscription`
VALUES (
    1,
    'premium',
    1,
    'INR',
    'active',
    'order_RTloeA7Kz3c5fO',
    'pay_RTlosMb7Y7Lmxy',
    'b30553cadcdbbf9337fe55f499c8f0566958aeed0d184816d52c1e9a7621dcb9',
    '2025-10-15 13:47:01.722',
    '2025-11-14 13:47:01.677',
    '2025-10-15 13:47:01.722',
    '2025-10-15 13:47:01.722',
    2
  );
/*!40000 ALTER TABLE `plansubscription` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `refundrequest`
--

DROP TABLE IF EXISTS `refundrequest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `refundrequest` (
  `id` int NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `reason` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` enum(
    'pending',
    'approved',
    'rejected',
    'processed',
    'cancelled'
  ) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pending',
  `adminNotes` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `paymentRequestId` int NOT NULL,
  `clientId` int NOT NULL,
  `freelancerId` int NOT NULL,
  `processedById` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `refundrequest_paymentRequestId_fkey` (`paymentRequestId`),
  KEY `refundrequest_clientId_fkey` (`clientId`),
  KEY `refundrequest_freelancerId_fkey` (`freelancerId`),
  KEY `refundrequest_processedById_fkey` (`processedById`),
  CONSTRAINT `refundrequest_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `refundrequest_freelancerId_fkey` FOREIGN KEY (`freelancerId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `refundrequest_paymentRequestId_fkey` FOREIGN KEY (`paymentRequestId`) REFERENCES `PaymentRequest` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `refundrequest_processedById_fkey` FOREIGN KEY (`processedById`) REFERENCES `admin` (`id`) ON DELETE
  SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `refundrequest`
--

LOCK TABLES `refundrequest` WRITE;
/*!40000 ALTER TABLE `refundrequest` DISABLE KEYS */
;
/*!40000 ALTER TABLE `refundrequest` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `savedjob`
--

DROP TABLE IF EXISTS `savedjob`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `savedjob` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int NOT NULL,
  `jobId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `savedjob_userId_jobId_key` (`userId`, `jobId`),
  KEY `savedjob_jobId_fkey` (`jobId`),
  CONSTRAINT `savedjob_jobId_fkey` FOREIGN KEY (`jobId`) REFERENCES `JobPost` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `savedjob_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `savedjob`
--

LOCK TABLES `savedjob` WRITE;
/*!40000 ALTER TABLE `savedjob` DISABLE KEYS */
;
/*!40000 ALTER TABLE `savedjob` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Table structure for table `userplan`
--

DROP TABLE IF EXISTS `userplan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `userplan` (
  `id` int NOT NULL AUTO_INCREMENT,
  `planType` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'free',
  `connects` int NOT NULL DEFAULT '10',
  `usedConnects` int NOT NULL DEFAULT '0',
  `expiresAt` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `userId` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userplan_userId_key` (`userId`),
  CONSTRAINT `userplan_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 87 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `userplan`
--

LOCK TABLES `userplan` WRITE;
/*!40000 ALTER TABLE `userplan` DISABLE KEYS */
;
INSERT INTO `userplan`
VALUES (
    1,
    'free',
    10,
    1,
    NULL,
    '2025-10-14 07:36:24.021',
    '2025-10-18 07:58:17.995',
    3
  ),
  (
    2,
    'premium',
    100,
    0,
    '2025-11-14 13:47:01.677',
    '2025-10-14 07:44:46.531',
    '2025-10-15 13:47:01.702',
    2
  ),
  (
    3,
    'free',
    10,
    1,
    NULL,
    '2025-10-14 10:07:56.075',
    '2025-10-16 15:19:06.445',
    1
  ),
  (
    4,
    'free',
    10,
    1,
    NULL,
    '2025-10-14 10:45:23.448',
    '2025-10-14 10:45:23.500',
    14
  ),
  (
    5,
    'free',
    10,
    1,
    NULL,
    '2025-10-14 11:42:41.957',
    '2025-10-14 11:42:42.021',
    18
  ),
  (
    6,
    'free',
    10,
    1,
    NULL,
    '2025-10-14 12:04:19.482',
    '2025-10-14 12:04:19.520',
    20
  ),
  (
    7,
    'free',
    10,
    1,
    NULL,
    '2025-10-14 12:33:46.154',
    '2025-10-14 12:33:46.209',
    22
  ),
  (
    8,
    'free',
    10,
    1,
    NULL,
    '2025-10-15 01:30:05.585',
    '2025-10-15 01:30:05.638',
    26
  ),
  (
    9,
    'free',
    10,
    1,
    NULL,
    '2025-10-15 02:00:28.789',
    '2025-10-15 02:00:28.844',
    27
  ),
  (
    10,
    'free',
    10,
    1,
    NULL,
    '2025-10-15 03:09:03.174',
    '2025-10-15 03:09:03.233',
    29
  ),
  (
    11,
    'free',
    10,
    1,
    NULL,
    '2025-10-15 03:14:14.086',
    '2025-10-15 03:14:14.138',
    30
  ),
  (
    12,
    'free',
    10,
    2,
    NULL,
    '2025-10-15 04:12:58.568',
    '2025-10-18 12:40:42.196',
    33
  ),
  (
    13,
    'free',
    10,
    1,
    NULL,
    '2025-10-15 04:35:59.610',
    '2025-10-15 04:35:59.663',
    34
  ),
  (
    14,
    'free',
    10,
    1,
    NULL,
    '2025-10-15 04:54:40.434',
    '2025-10-15 04:54:40.485',
    35
  ),
  (
    15,
    'free',
    10,
    1,
    NULL,
    '2025-10-15 07:47:22.403',
    '2025-10-15 07:47:22.457',
    42
  ),
  (
    16,
    'free',
    10,
    1,
    NULL,
    '2025-10-15 08:43:40.500',
    '2025-10-15 08:43:40.554',
    45
  ),
  (
    17,
    'free',
    10,
    1,
    NULL,
    '2025-10-15 13:16:47.725',
    '2025-10-15 13:16:47.777',
    51
  ),
  (
    18,
    'free',
    10,
    1,
    NULL,
    '2025-10-15 15:04:19.367',
    '2025-10-16 15:24:21.010',
    41
  ),
  (
    19,
    'free',
    10,
    0,
    NULL,
    '2025-10-16 04:00:38.608',
    '2025-10-16 04:00:38.608',
    36
  ),
  (
    20,
    'free',
    10,
    0,
    NULL,
    '2025-10-16 05:07:15.179',
    '2025-10-16 05:07:15.179',
    75
  ),
  (
    21,
    'free',
    10,
    2,
    NULL,
    '2025-10-16 05:56:08.255',
    '2025-10-17 08:06:44.216',
    85
  ),
  (
    22,
    'free',
    10,
    2,
    NULL,
    '2025-10-16 13:01:56.951',
    '2025-10-17 12:57:29.399',
    8
  ),
  (
    23,
    'free',
    5,
    0,
    NULL,
    '2025-10-16 14:35:28.416',
    '2025-10-16 14:35:28.416',
    11
  ),
  (
    24,
    'free',
    10,
    1,
    NULL,
    '2025-10-16 15:54:45.307',
    '2025-10-16 15:54:45.369',
    139
  ),
  (
    25,
    'free',
    5,
    0,
    NULL,
    '2025-10-16 16:18:03.614',
    '2025-10-16 16:18:03.614',
    19
  ),
  (
    26,
    'free',
    5,
    0,
    NULL,
    '2025-10-16 17:40:22.746',
    '2025-10-16 17:40:22.746',
    120
  ),
  (
    27,
    'free',
    10,
    1,
    NULL,
    '2025-10-16 18:10:14.794',
    '2025-10-16 18:10:14.849',
    135
  ),
  (
    28,
    'free',
    10,
    1,
    NULL,
    '2025-10-16 18:30:58.378',
    '2025-10-16 18:30:58.429',
    151
  ),
  (
    29,
    'free',
    10,
    4,
    NULL,
    '2025-10-16 18:39:46.392',
    '2025-10-19 07:02:03.035',
    131
  ),
  (
    30,
    'free',
    10,
    2,
    NULL,
    '2025-10-16 19:03:04.856',
    '2025-10-16 19:05:00.673',
    154
  ),
  (
    31,
    'free',
    10,
    1,
    NULL,
    '2025-10-16 20:00:07.160',
    '2025-10-16 20:00:07.216',
    145
  ),
  (
    32,
    'free',
    10,
    1,
    NULL,
    '2025-10-16 21:55:46.411',
    '2025-10-16 21:55:46.465',
    158
  ),
  (
    33,
    'free',
    10,
    1,
    NULL,
    '2025-10-17 02:04:00.740',
    '2025-10-17 02:04:00.795',
    159
  ),
  (
    34,
    'free',
    10,
    1,
    NULL,
    '2025-10-17 04:38:47.401',
    '2025-10-17 04:38:47.450',
    164
  ),
  (
    35,
    'free',
    10,
    2,
    NULL,
    '2025-10-17 05:09:04.746',
    '2025-10-17 05:26:28.953',
    165
  ),
  (
    36,
    'free',
    10,
    6,
    NULL,
    '2025-10-17 05:43:51.316',
    '2025-10-18 23:07:39.316',
    166
  ),
  (
    37,
    'free',
    10,
    1,
    NULL,
    '2025-10-17 05:55:37.817',
    '2025-10-17 05:55:37.867',
    167
  ),
  (
    38,
    'free',
    10,
    1,
    NULL,
    '2025-10-17 06:02:06.133',
    '2025-10-17 06:02:06.185',
    169
  ),
  (
    39,
    'free',
    10,
    4,
    NULL,
    '2025-10-17 06:02:40.807',
    '2025-10-17 10:01:30.999',
    170
  ),
  (
    40,
    'free',
    10,
    1,
    NULL,
    '2025-10-17 06:24:11.347',
    '2025-10-17 06:24:11.400',
    168
  ),
  (
    41,
    'free',
    10,
    1,
    NULL,
    '2025-10-17 06:38:04.707',
    '2025-10-17 06:38:04.758',
    171
  ),
  (
    42,
    'free',
    10,
    1,
    NULL,
    '2025-10-17 07:03:26.132',
    '2025-10-17 07:03:26.182',
    173
  ),
  (
    43,
    'free',
    10,
    1,
    NULL,
    '2025-10-17 07:03:38.692',
    '2025-10-17 07:03:38.723',
    70
  ),
  (
    44,
    'free',
    5,
    0,
    NULL,
    '2025-10-17 07:13:07.580',
    '2025-10-17 07:13:07.580',
    79
  ),
  (
    45,
    'free',
    10,
    3,
    NULL,
    '2025-10-17 07:59:44.915',
    '2025-10-17 08:03:34.286',
    177
  ),
  (
    46,
    'free',
    10,
    2,
    NULL,
    '2025-10-17 08:52:57.712',
    '2025-10-17 08:57:39.629',
    179
  ),
  (
    47,
    'free',
    10,
    2,
    NULL,
    '2025-10-17 09:58:24.435',
    '2025-10-17 09:59:23.384',
    182
  ),
  (
    48,
    'free',
    10,
    2,
    NULL,
    '2025-10-17 10:29:25.752',
    '2025-10-17 10:30:47.117',
    186
  ),
  (
    49,
    'free',
    10,
    1,
    NULL,
    '2025-10-17 10:49:50.566',
    '2025-10-17 10:49:50.617',
    188
  ),
  (
    50,
    'free',
    10,
    2,
    NULL,
    '2025-10-17 10:51:20.902',
    '2025-10-17 10:54:50.367',
    187
  ),
  (
    51,
    'free',
    10,
    4,
    NULL,
    '2025-10-17 13:44:50.957',
    '2025-10-17 13:53:24.267',
    191
  ),
  (
    52,
    'free',
    10,
    3,
    NULL,
    '2025-10-17 14:44:19.583',
    '2025-10-17 14:50:59.283',
    192
  ),
  (
    53,
    'free',
    10,
    1,
    NULL,
    '2025-10-17 16:07:09.992',
    '2025-10-17 16:07:10.049',
    193
  ),
  (
    54,
    'free',
    10,
    4,
    NULL,
    '2025-10-17 21:27:45.915',
    '2025-10-17 21:44:39.977',
    196
  ),
  (
    55,
    'free',
    10,
    2,
    NULL,
    '2025-10-18 04:35:39.484',
    '2025-10-18 04:37:45.386',
    198
  ),
  (
    56,
    'free',
    10,
    1,
    NULL,
    '2025-10-18 05:39:56.232',
    '2025-10-18 05:39:56.285',
    201
  ),
  (
    57,
    'free',
    10,
    2,
    NULL,
    '2025-10-18 05:44:21.777',
    '2025-10-18 06:01:54.127',
    73
  ),
  (
    58,
    'free',
    10,
    2,
    NULL,
    '2025-10-18 06:02:47.369',
    '2025-10-18 06:04:33.899',
    62
  ),
  (
    59,
    'free',
    10,
    1,
    NULL,
    '2025-10-18 08:45:30.959',
    '2025-10-18 08:45:31.013',
    207
  ),
  (
    60,
    'free',
    10,
    1,
    NULL,
    '2025-10-18 09:00:25.916',
    '2025-10-18 09:00:25.969',
    208
  ),
  (
    61,
    'free',
    10,
    1,
    NULL,
    '2025-10-18 09:44:17.704',
    '2025-10-18 09:44:17.755',
    211
  ),
  (
    62,
    'free',
    10,
    3,
    NULL,
    '2025-10-18 09:45:39.519',
    '2025-10-18 09:51:46.530',
    212
  ),
  (
    63,
    'free',
    10,
    2,
    NULL,
    '2025-10-18 10:18:02.854',
    '2025-10-18 10:23:20.390',
    202
  ),
  (
    64,
    'free',
    5,
    2,
    NULL,
    '2025-10-18 10:41:30.657',
    '2025-10-18 10:46:12.092',
    143
  ),
  (
    65,
    'free',
    5,
    0,
    NULL,
    '2025-10-18 11:07:58.861',
    '2025-10-18 11:07:58.861',
    183
  ),
  (
    66,
    'free',
    10,
    2,
    NULL,
    '2025-10-18 15:30:59.090',
    '2025-10-18 15:36:08.374',
    222
  ),
  (
    67,
    'free',
    10,
    1,
    NULL,
    '2025-10-18 15:44:29.784',
    '2025-10-18 15:44:29.831',
    217
  ),
  (
    68,
    'free',
    10,
    2,
    NULL,
    '2025-10-18 16:03:56.372',
    '2025-10-18 16:05:40.671',
    223
  ),
  (
    69,
    'free',
    10,
    3,
    NULL,
    '2025-10-18 16:15:59.142',
    '2025-10-18 20:56:30.463',
    224
  ),
  (
    70,
    'free',
    10,
    2,
    NULL,
    '2025-10-18 21:14:54.331',
    '2025-10-18 21:16:11.394',
    229
  ),
  (
    71,
    'free',
    10,
    1,
    NULL,
    '2025-10-19 02:11:56.125',
    '2025-10-19 02:11:56.177',
    230
  ),
  (
    72,
    'free',
    10,
    1,
    NULL,
    '2025-10-19 03:59:36.045',
    '2025-10-19 03:59:36.095',
    231
  ),
  (
    73,
    'free',
    10,
    2,
    NULL,
    '2025-10-19 04:31:16.012',
    '2025-10-19 04:34:01.793',
    232
  ),
  (
    74,
    'free',
    10,
    1,
    NULL,
    '2025-10-19 05:18:07.400',
    '2025-10-19 05:18:07.451',
    233
  ),
  (
    75,
    'free',
    10,
    2,
    NULL,
    '2025-10-19 05:30:12.347',
    '2025-10-19 09:07:01.020',
    234
  ),
  (
    76,
    'free',
    10,
    1,
    NULL,
    '2025-10-19 05:59:11.408',
    '2025-10-19 05:59:11.460',
    236
  ),
  (
    77,
    'free',
    5,
    0,
    NULL,
    '2025-10-19 06:06:45.298',
    '2025-10-19 06:06:45.298',
    238
  ),
  (
    78,
    'free',
    10,
    4,
    NULL,
    '2025-10-19 06:08:56.324',
    '2025-10-19 06:14:55.104',
    239
  ),
  (
    79,
    'free',
    10,
    1,
    NULL,
    '2025-10-19 07:25:05.017',
    '2025-10-19 07:25:05.068',
    240
  ),
  (
    80,
    'free',
    10,
    2,
    NULL,
    '2025-10-19 08:04:02.407',
    '2025-10-19 08:08:17.014',
    242
  ),
  (
    81,
    'free',
    10,
    1,
    NULL,
    '2025-10-19 08:23:49.258',
    '2025-10-19 08:23:49.307',
    243
  ),
  (
    82,
    'free',
    10,
    1,
    NULL,
    '2025-10-19 08:39:45.280',
    '2025-10-19 08:39:45.340',
    244
  ),
  (
    83,
    'free',
    10,
    2,
    NULL,
    '2025-10-19 08:52:30.837',
    '2025-10-19 08:55:46.873',
    60
  ),
  (
    84,
    'free',
    10,
    1,
    NULL,
    '2025-10-19 10:04:38.226',
    '2025-10-19 10:04:38.284',
    221
  ),
  (
    85,
    'free',
    5,
    2,
    NULL,
    '2025-10-19 10:16:04.819',
    '2025-10-19 10:45:06.346',
    246
  ),
  (
    86,
    'free',
    5,
    1,
    NULL,
    '2025-10-19 15:20:04.730',
    '2025-10-19 15:31:59.695',
    249
  );
/*!40000 ALTER TABLE `userplan` ENABLE KEYS */
;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;
-- Dump completed on 2025-12-19 23:38:27
SET FOREIGN_KEY_CHECKS = 1;