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
-- Table structure for table `anexos`
--

DROP TABLE IF EXISTS `anexos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `anexos` (
  `anexo_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `evento_id` int(10) unsigned NOT NULL,
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
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
  `usuario_id` int(10) unsigned NOT NULL,
  `evento_id` int(10) unsigned NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`asignacion_evento_id`),
  KEY `asignacion_eventos_usuario_id_foreign` (`usuario_id`),
  KEY `asignacion_eventos_evento_id_foreign` (`evento_id`),
  CONSTRAINT `asignacion_eventos_evento_id_foreign` FOREIGN KEY (`evento_id`) REFERENCES `eventos` (`evento_id`) ON DELETE CASCADE,
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
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`barrio_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `barrios`
--

LOCK TABLES `barrios` WRITE;
/*!40000 ALTER TABLE `barrios` DISABLE KEYS */;
/*!40000 ALTER TABLE `barrios` ENABLE KEYS */;
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
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`ciudad_id`),
  KEY `ciudades_provincia_id_foreign` (`provincia_id`),
  CONSTRAINT `ciudades_provincia_id_foreign` FOREIGN KEY (`provincia_id`) REFERENCES `provincias` (`provincia_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ciudades`
--

LOCK TABLES `ciudades` WRITE;
/*!40000 ALTER TABLE `ciudades` DISABLE KEYS */;
/*!40000 ALTER TABLE `ciudades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comunidades`
--

DROP TABLE IF EXISTS `comunidades`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comunidades` (
  `comunidad_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `barrio_id` int(10) unsigned NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pueblo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`comunidad_id`),
  KEY `comunidades_barrio_id_foreign` (`barrio_id`),
  CONSTRAINT `comunidades_barrio_id_foreign` FOREIGN KEY (`barrio_id`) REFERENCES `barrios` (`barrio_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comunidades`
--

LOCK TABLES `comunidades` WRITE;
/*!40000 ALTER TABLE `comunidades` DISABLE KEYS */;
/*!40000 ALTER TABLE `comunidades` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eventos`
--

DROP TABLE IF EXISTS `eventos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `eventos` (
  `evento_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `tipo_evento_id` int(10) unsigned NOT NULL,
  `parroquia_id` int(10) unsigned NOT NULL,
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
  KEY `eventos_tipo_evento_id_foreign` (`tipo_evento_id`),
  KEY `eventos_parroquia_id_foreign` (`parroquia_id`),
  CONSTRAINT `eventos_parroquia_id_foreign` FOREIGN KEY (`parroquia_id`) REFERENCES `parroquias` (`parroquia_id`) ON DELETE CASCADE,
  CONSTRAINT `eventos_tipo_evento_id_foreign` FOREIGN KEY (`tipo_evento_id`) REFERENCES `tipo_eventos` (`tipo_evento_id`) ON DELETE CASCADE
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
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cantidad` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
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
) ENGINE=InnoDB AUTO_INCREMENT=87 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (65,'2014_10_12_000000_create_users_table',1),(66,'2014_10_12_100000_create_password_resets_table',1),(67,'2019_01_31_230602_create_tipo_organizacions_table',1),(68,'2019_01_31_231452_create_tipo_personas_table',1),(69,'2019_01_31_232025_create_provincias_table',1),(70,'2019_01_31_232711_create_organizacions_table',1),(71,'2019_01_31_234155_create_tipo_eventos_table',1),(72,'2019_01_31_235052_create_barrios_table',1),(73,'2019_01_31_235452_create_ciudads_table',1),(74,'2019_02_01_000346_create_comunidads_table',1),(75,'2019_02_01_001454_create_parroquias_table',1),(76,'2019_02_01_001455_create_personas_table',1),(77,'2019_02_01_003953_create_eventos_table',1),(78,'2019_02_01_030933_create_participantes_table',1),(79,'2019_02_01_040527_create_organizacion_eventos_table',1),(80,'2019_02_01_155450_create_tipo_insumos_table',1),(81,'2019_02_01_160315_create_suministros_table',1),(82,'2019_02_01_165257_create_tipo_suministros_table',1),(83,'2019_02_01_170516_create_tipos_table',1),(84,'2019_02_01_171317_create_insumos_table',1),(85,'2019_02_01_172605_create_anexos_table',1),(86,'2019_02_04_175804_create_asignacion_eventos_table',1);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
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
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `imagen` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `actividad` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `representante` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contacto` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`organizacion_id`),
  KEY `organizaciones_tipo_organizacion_id_foreign` (`tipo_organizacion_id`),
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
  `comunidad_id` int(10) unsigned NOT NULL,
  `ciudad_id` int(10) unsigned NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`parroquia_id`),
  KEY `parroquias_comunidad_id_foreign` (`comunidad_id`),
  KEY `parroquias_ciudad_id_foreign` (`ciudad_id`),
  CONSTRAINT `parroquias_ciudad_id_foreign` FOREIGN KEY (`ciudad_id`) REFERENCES `ciudades` (`ciudad_id`) ON DELETE CASCADE,
  CONSTRAINT `parroquias_comunidad_id_foreign` FOREIGN KEY (`comunidad_id`) REFERENCES `comunidades` (`comunidad_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `parroquias`
--

LOCK TABLES `parroquias` WRITE;
/*!40000 ALTER TABLE `parroquias` DISABLE KEYS */;
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
  `tipo_persona_id` int(10) unsigned NOT NULL,
  `organizacion_id` int(10) unsigned NOT NULL,
  `parroquia_id` int(10) unsigned NOT NULL,
  `cedula` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombres` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `genero` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ocupacion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `etnia` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_nacimiento` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono_fijo` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `operadora` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contacto` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`persona_id`),
  KEY `personas_tipo_persona_id_foreign` (`tipo_persona_id`),
  KEY `personas_organizacion_id_foreign` (`organizacion_id`),
  KEY `personas_parroquia_id_foreign` (`parroquia_id`),
  CONSTRAINT `personas_organizacion_id_foreign` FOREIGN KEY (`organizacion_id`) REFERENCES `organizaciones` (`organizacion_id`) ON DELETE CASCADE,
  CONSTRAINT `personas_parroquia_id_foreign` FOREIGN KEY (`parroquia_id`) REFERENCES `parroquias` (`parroquia_id`) ON DELETE CASCADE,
  CONSTRAINT `personas_tipo_persona_id_foreign` FOREIGN KEY (`tipo_persona_id`) REFERENCES `tipo_personas` (`tipo_persona_id`) ON DELETE CASCADE
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
-- Table structure for table `provincias`
--

DROP TABLE IF EXISTS `provincias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `provincias` (
  `provincia_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`provincia_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `provincias`
--

LOCK TABLES `provincias` WRITE;
/*!40000 ALTER TABLE `provincias` DISABLE KEYS */;
/*!40000 ALTER TABLE `provincias` ENABLE KEYS */;
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
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`suministro_id`),
  KEY `suministros_tipo_insumo_id_foreign` (`tipo_insumo_id`),
  CONSTRAINT `suministros_tipo_insumo_id_foreign` FOREIGN KEY (`tipo_insumo_id`) REFERENCES `tipo_insumos` (`tipo_insumo_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `suministros`
--

LOCK TABLES `suministros` WRITE;
/*!40000 ALTER TABLE `suministros` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_eventos`
--

LOCK TABLES `tipo_eventos` WRITE;
/*!40000 ALTER TABLE `tipo_eventos` DISABLE KEYS */;
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
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tipo_insumo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_insumos`
--

LOCK TABLES `tipo_insumos` WRITE;
/*!40000 ALTER TABLE `tipo_insumos` DISABLE KEYS */;
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
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tipo_organizacion_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_organizaciones`
--

LOCK TABLES `tipo_organizaciones` WRITE;
/*!40000 ALTER TABLE `tipo_organizaciones` DISABLE KEYS */;
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
-- Table structure for table `tipo_suministros`
--

DROP TABLE IF EXISTS `tipo_suministros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tipo_suministros` (
  `tipo_suministro_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `suministro_id` int(10) unsigned NOT NULL,
  `nombre` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tipo_suministro_id`),
  KEY `tipo_suministros_suministro_id_foreign` (`suministro_id`),
  CONSTRAINT `tipo_suministros_suministro_id_foreign` FOREIGN KEY (`suministro_id`) REFERENCES `suministros` (`suministro_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_suministros`
--

LOCK TABLES `tipo_suministros` WRITE;
/*!40000 ALTER TABLE `tipo_suministros` DISABLE KEYS */;
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
  `descripcion` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`tipo_id`),
  KEY `tipos_tipo_suministro_id_foreign` (`tipo_suministro_id`),
  CONSTRAINT `tipos_tipo_suministro_id_foreign` FOREIGN KEY (`tipo_suministro_id`) REFERENCES `tipo_suministros` (`tipo_suministro_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos`
--

LOCK TABLES `tipos` WRITE;
/*!40000 ALTER TABLE `tipos` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `usuario_id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nombres` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cuenta` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tipo` enum('root','administrador','trabajador') COLLATE utf8mb4_unicode_ci NOT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`usuario_id`),
  UNIQUE KEY `usuarios_cuenta_unique` (`cuenta`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'as;ldkfj',';kasdf','$2y$10$nRWzqIWJ44OZkbeIiuJE8uNqw66rPs.AVz4ILlrMem6/C4kH8sWea','mamanipozofrancojesus@gmail.com','administrador','2019-02-05 00:54:14','2019-02-05 00:50:07','2019-02-05 00:54:14'),(2,'skjadfhlkjah','kljhasdf','$2y$10$MvpKrG3/4is5IaAxoDiXZOa.RZyyrzXQNGkIRRpIV.FVLKUSj4F3i','mamanipozofrancojesus@gmail.com','administrador',NULL,'2019-02-05 00:51:41','2019-02-05 00:51:41'),(3,'Vannesa','vanesa','$2y$10$9x.9XXjaP528.7jxHmgKEuYr3.V6BmZ6hULbtGXciCjX1ywk.5Jaq','vanesa@gmamil.com','trabajador',NULL,'2019-02-05 00:52:02','2019-02-05 00:52:02');
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

-- Dump completed on 2019-02-04 17:06:55
