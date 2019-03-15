-- MySQL dump 10.13  Distrib 5.7.19, for Win64 (x86_64)
--
-- Host: localhost    Database: fepp
-- ------------------------------------------------------
-- Server version	5.7.19

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
-- Table structure for table `actividades`
--

DROP TABLE IF EXISTS `actividades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `actividades` (
  `actividad_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`actividad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `actividades`
--

LOCK TABLES `actividades` WRITE;
/*!40000 ALTER TABLE `actividades` DISABLE KEYS */;
INSERT INTO `actividades` VALUES (1,'PRODUCCIÓN','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(2,'SERVICIO','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(3,'TRANSFORMACIÓN','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(4,'COMERCIALIZACIÓN','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42');
/*!40000 ALTER TABLE `actividades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `anexos`
--

DROP TABLE IF EXISTS `anexos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `anexos` (
  `anexo_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `evento_id` int(10) unsigned NOT NULL,
  `archivo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`anexo_id`),
  KEY `anexos_evento_id_foreign` (`evento_id`),
  CONSTRAINT `anexos_evento_id_foreign` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `anexos`
--

LOCK TABLES `anexos` WRITE;
/*!40000 ALTER TABLE `anexos` DISABLE KEYS */;
/*!40000 ALTER TABLE `anexos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `asignacion_eventos`
--

DROP TABLE IF EXISTS `asignacion_eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asignacion_eventos` (
  `asignacion_evento_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `proyecto_id` int(10) unsigned NOT NULL,
  `usuario_id` int(10) unsigned NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`asignacion_evento_id`),
  KEY `asignacion_eventos_proyecto_id_foreign` (`proyecto_id`),
  KEY `asignacion_eventos_usuario_id_foreign` (`usuario_id`),
  CONSTRAINT `asignacion_eventos_proyecto_id_foreign` FOREIGN KEY (`proyecto_id`) REFERENCES `proyectos` (`proyecto_id`) ON DELETE CASCADE,
  CONSTRAINT `asignacion_eventos_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asignacion_eventos`
--

LOCK TABLES `asignacion_eventos` WRITE;
/*!40000 ALTER TABLE `asignacion_eventos` DISABLE KEYS */;
/*!40000 ALTER TABLE `asignacion_eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `barrios`
--

DROP TABLE IF EXISTS `barrios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `barrios` (
  `barrio_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `parroquia_id` int(10) unsigned NOT NULL,
  `comunidad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Ninguna',
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`barrio_id`),
  KEY `barrios_parroquia_id_foreign` (`parroquia_id`),
  CONSTRAINT `barrios_parroquia_id_foreign` FOREIGN KEY (`parroquia_id`) REFERENCES `parroquias` (`parroquia_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barrios`
--

LOCK TABLES `barrios` WRITE;
/*!40000 ALTER TABLE `barrios` DISABLE KEYS */;
INSERT INTO `barrios` VALUES (1,1,'','LOS SOLES',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43');
/*!40000 ALTER TABLE `barrios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cargos`
--

DROP TABLE IF EXISTS `cargos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cargos` (
  `cargo_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`cargo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cargos`
--

LOCK TABLES `cargos` WRITE;
/*!40000 ALTER TABLE `cargos` DISABLE KEYS */;
INSERT INTO `cargos` VALUES (1,'administrador','descripcion del administrador',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42');
/*!40000 ALTER TABLE `cargos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ciudades`
--

DROP TABLE IF EXISTS `ciudades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ciudades` (
  `ciudad_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `provincia_id` int(10) unsigned NOT NULL,
  `codigo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ciudad_id`),
  KEY `ciudades_provincia_id_foreign` (`provincia_id`),
  CONSTRAINT `ciudades_provincia_id_foreign` FOREIGN KEY (`provincia_id`) REFERENCES `provincias` (`provincia_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
INSERT INTO `ciudades` VALUES (1,10,'101','IBARRA',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43');
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ejecutoras`
--

DROP TABLE IF EXISTS `ejecutoras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ejecutoras` (
  `ejecutora_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `proyecto_id` int(10) unsigned NOT NULL,
  `organizacion_id` int(10) unsigned NOT NULL,
  `tipo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ejecutora_id`),
  KEY `ejecutoras_proyecto_id_foreign` (`proyecto_id`),
  KEY `ejecutoras_organizacion_id_foreign` (`organizacion_id`),
  CONSTRAINT `ejecutoras_organizacion_id_foreign` FOREIGN KEY (`organizacion_id`) REFERENCES `organizaciones` (`organizacion_id`) ON DELETE CASCADE,
  CONSTRAINT `ejecutoras_proyecto_id_foreign` FOREIGN KEY (`proyecto_id`) REFERENCES `proyectos` (`proyecto_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ejecutoras`
--

LOCK TABLES `ejecutoras` WRITE;
/*!40000 ALTER TABLE `ejecutoras` DISABLE KEYS */;
/*!40000 ALTER TABLE `ejecutoras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eventos` (
  `evento_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `proyecto_id` int(10) unsigned NOT NULL,
  `usuario_id` int(10) unsigned NOT NULL,
  `tipo_evento_id` int(10) unsigned NOT NULL,
  `barrio_id` int(10) unsigned NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_evento` date NOT NULL,
  `direccion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `duracion_horas` int(10) unsigned NOT NULL,
  `fecha_finaliza` date DEFAULT NULL,
  `latitud` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitud` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`evento_id`),
  KEY `eventos_proyecto_id_foreign` (`proyecto_id`),
  KEY `eventos_usuario_id_foreign` (`usuario_id`),
  KEY `eventos_tipo_evento_id_foreign` (`tipo_evento_id`),
  KEY `eventos_barrio_id_foreign` (`barrio_id`),
  CONSTRAINT `eventos_barrio_id_foreign` FOREIGN KEY (`barrio_id`) REFERENCES `barrios` (`barrio_id`) ON DELETE CASCADE,
  CONSTRAINT `eventos_proyecto_id_foreign` FOREIGN KEY (`proyecto_id`) REFERENCES `proyectos` (`proyecto_id`) ON DELETE CASCADE,
  CONSTRAINT `eventos_tipo_evento_id_foreign` FOREIGN KEY (`tipo_evento_id`) REFERENCES `tipo_eventos` (`tipo_evento_id`) ON DELETE CASCADE,
  CONSTRAINT `eventos_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eventos`
--

LOCK TABLES `eventos` WRITE;
/*!40000 ALTER TABLE `eventos` DISABLE KEYS */;
/*!40000 ALTER TABLE `eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `insumos`
--

DROP TABLE IF EXISTS `insumos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `insumos` (
  `insumo_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_id` int(10) unsigned NOT NULL,
  `evento_id` int(10) unsigned NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` date DEFAULT NULL,
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `receptor` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`insumo_id`),
  KEY `insumos_tipo_id_foreign` (`tipo_id`),
  KEY `insumos_evento_id_foreign` (`evento_id`),
  CONSTRAINT `insumos_evento_id_foreign` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`) ON DELETE CASCADE,
  CONSTRAINT `insumos_tipo_id_foreign` FOREIGN KEY (`tipo_id`) REFERENCES `tipos` (`tipo_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `insumos`
--

LOCK TABLES `insumos` WRITE;
/*!40000 ALTER TABLE `insumos` DISABLE KEYS */;
/*!40000 ALTER TABLE `insumos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=161 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (129,'2014_10_11_000000_create_cargos_table',1),(130,'2014_10_11_100000_create_privilegios_table',1),(131,'2014_10_12_000000_create_users_table',1),(132,'2014_10_12_100000_create_password_resets_table',1),(133,'2016_06_01_000001_create_oauth_auth_codes_table',1),(134,'2016_06_01_000002_create_oauth_access_tokens_table',1),(135,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(136,'2016_06_01_000004_create_oauth_clients_table',1),(137,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(138,'2019_01_31_230602_create_tipo_organizacions_table',1),(139,'2019_01_31_231452_create_tipo_personas_table',1),(140,'2019_01_31_232025_create_provincias_table',1),(141,'2019_01_31_232710_create_actividads_table',1),(142,'2019_01_31_232711_create_organizacions_table',1),(143,'2019_01_31_234155_create_tipo_eventos_table',1),(144,'2019_01_31_235452_create_ciudads_table',1),(145,'2019_02_01_000340_create_parroquias_table',1),(146,'2019_02_01_000345_create_barrios_table',1),(147,'2019_02_01_001455_create_personas_table',1),(148,'2019_02_01_003951_create_tipo_proyectos_table',1),(149,'2019_02_01_003952_create_proyectos_table',1),(150,'2019_02_01_003953_create_eventos_table',1),(151,'2019_02_01_003954_create_ejecutoras_table',1),(152,'2019_02_01_030933_create_participantes_table',1),(153,'2019_02_01_040527_create_organizacion_eventos_table',1),(154,'2019_02_01_155450_create_tipo_insumos_table',1),(155,'2019_02_01_160315_create_suministros_table',1),(156,'2019_02_01_165257_create_tipo_suministros_table',1),(157,'2019_02_01_170516_create_tipos_table',1),(158,'2019_02_01_171317_create_insumos_table',1),(159,'2019_02_01_172605_create_anexos_table',1),(160,'2019_02_04_175804_create_asignacion_eventos_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(10) unsigned NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'Laravel Personal Access Client','QVDOb3ANPlBj6f5eJCXdmDUSKHLiVPbVlWmZZFpg','http://localhost',1,0,0,'2019-03-13 20:23:50','2019-03-13 20:23:50'),(2,NULL,'Laravel Password Grant Client','C6JQnrnv6uXHE3PGwaULgYKHwOpdbpdEPn6Ww7GG','http://localhost',0,1,0,'2019-03-13 20:23:50','2019-03-13 20:23:50');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_personal_access_clients_client_id_index` (`client_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2019-03-13 20:23:50','2019-03-13 20:23:50');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organizacion_eventos`
--

DROP TABLE IF EXISTS `organizacion_eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organizacion_eventos` (
  `organizacion_evento_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `organizacion_id` int(10) unsigned NOT NULL,
  `evento_id` int(10) unsigned NOT NULL,
  `fecha` date NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`organizacion_evento_id`),
  KEY `organizacion_eventos_organizacion_id_foreign` (`organizacion_id`),
  KEY `organizacion_eventos_evento_id_foreign` (`evento_id`),
  CONSTRAINT `organizacion_eventos_evento_id_foreign` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`) ON DELETE CASCADE,
  CONSTRAINT `organizacion_eventos_organizacion_id_foreign` FOREIGN KEY (`organizacion_id`) REFERENCES `organizaciones` (`organizacion_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizacion_eventos`
--

LOCK TABLES `organizacion_eventos` WRITE;
/*!40000 ALTER TABLE `organizacion_eventos` DISABLE KEYS */;
/*!40000 ALTER TABLE `organizacion_eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organizaciones`
--

DROP TABLE IF EXISTS `organizaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `organizaciones` (
  `organizacion_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_organizacion_id` int(10) unsigned NOT NULL,
  `actividad_id` int(10) unsigned NOT NULL,
  `documento` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `representante` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contacto` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `acuerdo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mujeres` int(11) DEFAULT NULL,
  `ninias` int(11) DEFAULT NULL,
  `hombres` int(11) DEFAULT NULL,
  `ninios` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `latitud` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `longitud` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `precision` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`organizacion_id`),
  UNIQUE KEY `organizaciones_nombre_unique` (`nombre`),
  UNIQUE KEY `organizaciones_documento_unique` (`documento`),
  KEY `organizaciones_tipo_organizacion_id_foreign` (`tipo_organizacion_id`),
  KEY `organizaciones_actividad_id_foreign` (`actividad_id`),
  CONSTRAINT `organizaciones_actividad_id_foreign` FOREIGN KEY (`actividad_id`) REFERENCES `actividades` (`actividad_id`) ON DELETE CASCADE,
  CONSTRAINT `organizaciones_tipo_organizacion_id_foreign` FOREIGN KEY (`tipo_organizacion_id`) REFERENCES `tipo_organizaciones` (`tipo_organizacion_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizaciones`
--

LOCK TABLES `organizaciones` WRITE;
/*!40000 ALTER TABLE `organizaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `organizaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `parroquias`
--

DROP TABLE IF EXISTS `parroquias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `parroquias` (
  `parroquia_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ciudad_id` int(10) unsigned NOT NULL,
  `codigo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`parroquia_id`),
  KEY `parroquias_ciudad_id_foreign` (`ciudad_id`),
  CONSTRAINT `parroquias_ciudad_id_foreign` FOREIGN KEY (`ciudad_id`) REFERENCES `ciudades` (`ciudad_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parroquias`
--

LOCK TABLES `parroquias` WRITE;
/*!40000 ALTER TABLE `parroquias` DISABLE KEYS */;
INSERT INTO `parroquias` VALUES (1,1,'1001','SAN ANTONIO',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43');
/*!40000 ALTER TABLE `parroquias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participantes`
--

DROP TABLE IF EXISTS `participantes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `participantes` (
  `participante_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `evento_id` int(10) unsigned NOT NULL,
  `persona_id` int(10) unsigned NOT NULL,
  `observacion` text COLLATE utf8mb4_unicode_ci,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`participante_id`),
  KEY `participantes_evento_id_foreign` (`evento_id`),
  KEY `participantes_persona_id_foreign` (`persona_id`),
  CONSTRAINT `participantes_evento_id_foreign` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`) ON DELETE CASCADE,
  CONSTRAINT `participantes_persona_id_foreign` FOREIGN KEY (`persona_id`) REFERENCES `personas` (`persona_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participantes`
--

LOCK TABLES `participantes` WRITE;
/*!40000 ALTER TABLE `participantes` DISABLE KEYS */;
/*!40000 ALTER TABLE `participantes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personas`
--

DROP TABLE IF EXISTS `personas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personas` (
  `persona_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `organizacion_id` int(10) unsigned NOT NULL,
  `parroquia_id` int(10) unsigned NOT NULL,
  `cedula` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombres` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genero` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ocupacion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `etnia` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `nacionalidad` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pueblo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fecha_nacimiento` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `direccion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `telefono_fijo` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `operadora` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contacto` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`persona_id`),
  UNIQUE KEY `personas_cedula_unique` (`cedula`),
  KEY `personas_organizacion_id_foreign` (`organizacion_id`),
  KEY `personas_parroquia_id_foreign` (`parroquia_id`),
  CONSTRAINT `personas_organizacion_id_foreign` FOREIGN KEY (`organizacion_id`) REFERENCES `organizaciones` (`organizacion_id`) ON DELETE CASCADE,
  CONSTRAINT `personas_parroquia_id_foreign` FOREIGN KEY (`parroquia_id`) REFERENCES `parroquias` (`parroquia_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personas`
--

LOCK TABLES `personas` WRITE;
/*!40000 ALTER TABLE `personas` DISABLE KEYS */;
/*!40000 ALTER TABLE `personas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `privilegios`
--

DROP TABLE IF EXISTS `privilegios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `privilegios` (
  `privilegio_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cargo_id` int(10) unsigned NOT NULL,
  `acceso` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `activo` enum('si','no') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'no',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`privilegio_id`),
  KEY `privilegios_cargo_id_foreign` (`cargo_id`),
  CONSTRAINT `privilegios_cargo_id_foreign` FOREIGN KEY (`cargo_id`) REFERENCES `cargos` (`cargo_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `privilegios`
--

LOCK TABLES `privilegios` WRITE;
/*!40000 ALTER TABLE `privilegios` DISABLE KEYS */;
INSERT INTO `privilegios` VALUES (1,1,'cargos/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(2,1,'privilegios','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(3,1,'asignacioneventos/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(4,1,'miembros/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(5,1,'proyectos/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(6,1,'inscripciones/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(7,1,'anexos/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(8,1,'organizaciones/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(9,1,'eventos/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(10,1,'asignaciones/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(11,1,'tipoorganizacion/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(12,1,'tipoproyectos/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(13,1,'tipoeventos/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(14,1,'actividades/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(15,1,'insumos/tipo-insumos/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(16,1,'ubicaciones/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(17,1,'usuarios/listar','si',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42');
/*!40000 ALTER TABLE `privilegios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `provincias`
--

DROP TABLE IF EXISTS `provincias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincias` (
  `provincia_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `codigo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`provincia_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincias`
--

LOCK TABLES `provincias` WRITE;
/*!40000 ALTER TABLE `provincias` DISABLE KEYS */;
INSERT INTO `provincias` VALUES (1,'01','AZUAY',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(2,'02','BOLIVAR',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(3,'03','CAÑAR',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(4,'04','CARCHI',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(5,'05','COTOPAXI',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(6,'06','CHIMBORAZO',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(7,'07','EL ORO',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(8,'08','ESMERALDAS',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(9,'09','GUAYAS',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(10,'10','IMBABURA',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(11,'11','LOJA',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(12,'12','LOS RIOS',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(13,'13','MANABI',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(14,'14','MORONA SANTIAGO',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(15,'15','NAPO',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(16,'16','PASTAZA',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(17,'17','PICHINCHA',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(18,'18','TUNGURAHUA',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(19,'19','ZAMORA CHINCHIPE',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(20,'20','GALAPAGOS',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(21,'21','SUCUMBIOS',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(22,'22','ORELLANA',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(23,'23','SANTO DOMINGO DE LOS TSACHILAS',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(24,'24','SANTA ELENA',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43'),(25,'90','ZONAS NO DELIMITADAS',NULL,'2019-03-13 20:23:43','2019-03-13 20:23:43');
/*!40000 ALTER TABLE `provincias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proyectos`
--

DROP TABLE IF EXISTS `proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `proyectos` (
  `proyecto_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_proyecto_id` int(10) unsigned NOT NULL,
  `barrio_id` int(10) unsigned NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `inicio` date DEFAULT NULL,
  `fin` date DEFAULT NULL,
  `estado` tinyint(1) NOT NULL DEFAULT '1',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`proyecto_id`),
  KEY `proyectos_tipo_proyecto_id_foreign` (`tipo_proyecto_id`),
  KEY `proyectos_barrio_id_foreign` (`barrio_id`),
  CONSTRAINT `proyectos_barrio_id_foreign` FOREIGN KEY (`barrio_id`) REFERENCES `barrios` (`barrio_id`) ON DELETE CASCADE,
  CONSTRAINT `proyectos_tipo_proyecto_id_foreign` FOREIGN KEY (`tipo_proyecto_id`) REFERENCES `tipo_proyectos` (`tipo_proyecto_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proyectos`
--

LOCK TABLES `proyectos` WRITE;
/*!40000 ALTER TABLE `proyectos` DISABLE KEYS */;
/*!40000 ALTER TABLE `proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `suministros`
--

DROP TABLE IF EXISTS `suministros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `suministros` (
  `suministro_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_insumo_id` int(10) unsigned NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`suministro_id`),
  KEY `suministros_tipo_insumo_id_foreign` (`tipo_insumo_id`),
  CONSTRAINT `suministros_tipo_insumo_id_foreign` FOREIGN KEY (`tipo_insumo_id`) REFERENCES `tipo_insumos` (`tipo_insumo_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suministros`
--

LOCK TABLES `suministros` WRITE;
/*!40000 ALTER TABLE `suministros` DISABLE KEYS */;
INSERT INTO `suministros` VALUES (1,1,'SEMILLAS','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(2,1,'PLANTAS','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(3,1,'ÁRBOLES','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(4,3,'EQUIPOS','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42');
/*!40000 ALTER TABLE `suministros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_eventos`
--

DROP TABLE IF EXISTS `tipo_eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_eventos` (
  `tipo_evento_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tipo_evento_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_eventos`
--

LOCK TABLES `tipo_eventos` WRITE;
/*!40000 ALTER TABLE `tipo_eventos` DISABLE KEYS */;
INSERT INTO `tipo_eventos` VALUES (1,'TALLER','CREACIÓN DE UN PRODUCTO',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(2,'PINTURA','ARTES PLASTICAS',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42');
/*!40000 ALTER TABLE `tipo_eventos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_insumos`
--

DROP TABLE IF EXISTS `tipo_insumos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_insumos` (
  `tipo_insumo_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tipo_insumo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_insumos`
--

LOCK TABLES `tipo_insumos` WRITE;
/*!40000 ALTER TABLE `tipo_insumos` DISABLE KEYS */;
INSERT INTO `tipo_insumos` VALUES (1,'AGRÍCOLA','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(2,'PECUARIO','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(3,'TECNOLÓGICO','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42');
/*!40000 ALTER TABLE `tipo_insumos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_organizaciones`
--

DROP TABLE IF EXISTS `tipo_organizaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_organizaciones` (
  `tipo_organizacion_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tipo_organizacion_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_organizaciones`
--

LOCK TABLES `tipo_organizaciones` WRITE;
/*!40000 ALTER TABLE `tipo_organizaciones` DISABLE KEYS */;
INSERT INTO `tipo_organizaciones` VALUES (1,'OB','COOPERATIVA','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(2,'OB','ASOCIACIÓN','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(3,'OB','REGULADA','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(4,'OSG','OSG','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42');
/*!40000 ALTER TABLE `tipo_organizaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_personas`
--

DROP TABLE IF EXISTS `tipo_personas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_personas` (
  `tipo_persona_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tipo_persona_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_personas`
--

LOCK TABLES `tipo_personas` WRITE;
/*!40000 ALTER TABLE `tipo_personas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipo_personas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_proyectos`
--

DROP TABLE IF EXISTS `tipo_proyectos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_proyectos` (
  `tipo_proyecto_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tipo_proyecto_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_proyectos`
--

LOCK TABLES `tipo_proyectos` WRITE;
/*!40000 ALTER TABLE `tipo_proyectos` DISABLE KEYS */;
INSERT INTO `tipo_proyectos` VALUES (1,'RECREACIÓN','FUNDAMENTAL PARA LA VIDA',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(2,'COMUNICACIÓN','DESARROLLO',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42');
/*!40000 ALTER TABLE `tipo_proyectos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_suministros`
--

DROP TABLE IF EXISTS `tipo_suministros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_suministros` (
  `tipo_suministro_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `suministro_id` int(10) unsigned NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tipo_suministro_id`),
  KEY `tipo_suministros_suministro_id_foreign` (`suministro_id`),
  CONSTRAINT `tipo_suministros_suministro_id_foreign` FOREIGN KEY (`suministro_id`) REFERENCES `suministros` (`suministro_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_suministros`
--

LOCK TABLES `tipo_suministros` WRITE;
/*!40000 ALTER TABLE `tipo_suministros` DISABLE KEYS */;
INSERT INTO `tipo_suministros` VALUES (1,1,'FRUTALES','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(2,1,'ORNAMENTALES','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(3,4,'OFICINA','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42');
/*!40000 ALTER TABLE `tipo_suministros` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipos`
--

DROP TABLE IF EXISTS `tipos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipos` (
  `tipo_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_suministro_id` int(10) unsigned NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tipo_id`),
  KEY `tipos_tipo_suministro_id_foreign` (`tipo_suministro_id`),
  CONSTRAINT `tipos_tipo_suministro_id_foreign` FOREIGN KEY (`tipo_suministro_id`) REFERENCES `tipo_suministros` (`tipo_suministro_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos`
--

LOCK TABLES `tipos` WRITE;
/*!40000 ALTER TABLE `tipos` DISABLE KEYS */;
INSERT INTO `tipos` VALUES (1,1,'MANZANA','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(2,1,'LIMA','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42'),(3,3,'COMPUTADOR','',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42');
/*!40000 ALTER TABLE `tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `usuario_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `cargo_id` int(10) unsigned NOT NULL,
  `nombres` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cuenta` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`usuario_id`),
  UNIQUE KEY `usuarios_cuenta_unique` (`cuenta`),
  KEY `usuarios_cargo_id_foreign` (`cargo_id`),
  CONSTRAINT `usuarios_cargo_id_foreign` FOREIGN KEY (`cargo_id`) REFERENCES `cargos` (`cargo_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,1,'Washington Figueroa','Figo','$2y$10$d6zwkI0zlbFRJ/CITiF67uMmGTudrhtiZ2jLqg8LffEyB9bMmQBAK','w.figo.1991@gmail.com',NULL,'2019-03-13 20:23:42','2019-03-13 20:23:42');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-13 16:24:06
