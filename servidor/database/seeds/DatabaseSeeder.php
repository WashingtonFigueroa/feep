<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
//        DB::table('anexos')->truncate();
//        DB::table('asignacion_eventos')->truncate();
//        DB::table('ejecutoras')->truncate();
//        DB::table('insumos')->truncate();
//        DB::table('organizacion_eventos')->truncate();
//        DB::table('participantes')->truncate();
//        DB::table('personas')->truncate();
//        DB::table('eventos')->truncate();
//        DB::table('proyectos')->truncate();
//        DB::table('suministros')->truncate();
//        DB::table('tipos')->truncate();
//        DB::table('actividades')->truncate();
//        DB::table('tipo_eventos')->truncate();
//        DB::table('tipo_insumos')->truncate();
//        DB::table('tipo_personas')->truncate();
//        DB::table('tipo_proyectos')->truncate();
//        DB::table('tipo_suministros')->truncate();
//        DB::table('organizaciones')->truncate();
//        DB::table('tipo_organizaciones')->truncate();
//        DB::table('barrios')->truncate();
//        DB::table('parroquias')->truncate();
//        DB::table('ciudades')->truncate();
//        DB::table('provincias')->truncate();
//        DB::table('usuarios')->truncate();



        //TIPO USUARIOS
        \App\Usuario::create(['nombres' => 'Washington Figueroa','cuenta' => 'Figo','password' => '123456','email' => 'w.figo.1991@gmail.com','tipo' => 'root']);

//TIPO ORGANIZACIONES
        \App\TipoOrganizacion::create(['tipo' => 'OB','nombre' => 'COOPERATIVA','descripcion' => '']);
        \App\TipoOrganizacion::create(['tipo' => 'OB','nombre' => 'ASOCIACIÓN','descripcion' => '']);
        \App\TipoOrganizacion::create(['tipo' => 'OB','nombre' => 'REGULADA','descripcion' => '']);
        \App\TipoOrganizacion::create(['tipo' => 'OSG','nombre' => 'OSG','descripcion' => '']);
//ACTIVIDADES
        \App\Actividad::create(['nombre' => 'PRODUCCIÓN','descripcion' => '']);
        \App\Actividad::create(['nombre' => 'SERVICIO','descripcion' => '']);
        \App\Actividad::create(['nombre' => 'TRANSFORMACIÓN','descripcion' => '']);
        \App\Actividad::create(['nombre' => 'COMERCIALIZACIÓN','descripcion' => '']);

//TIPO PROYECTOS
        \App\TipoProyecto::create(['nombre' => 'RECREACIÓN','descripcion' => 'FUNDAMENTAL PARA LA VIDA']);
        \App\TipoProyecto::create(['nombre' => 'COMUNICACIÓN','descripcion' => 'DESARROLLO']);
//TIPO EVENTOS
        \App\TipoEvento::create(['nombre' => 'TALLER','descripcion' => 'CREACIÓN DE UN PRODUCTO']);
        \App\TipoEvento::create(['nombre' => 'PINTURA','descripcion' => 'ARTES PLASTICAS']);

//TIPO INSUMOS
        \App\TipoInsumo::create(['nombre' => 'AGRÍCOLA','descripcion' => '']);
        \App\TipoInsumo::create(['nombre' => 'PECUARIO','descripcion' => '']);
        \App\TipoInsumo::create(['nombre' => 'TECNOLÓGICO','descripcion' => '']);
//SUMINISTROS
        \App\Suministro::create(['tipo_insumo_id' => 1,'nombre' => 'SEMILLAS','descripcion' => '']);
        \App\Suministro::create(['tipo_insumo_id' => 1, 'nombre' => 'PLANTAS','descripcion' => '']);
        \App\Suministro::create(['tipo_insumo_id' => 1, 'nombre' => 'ÁRBOLES','descripcion' => '']);
        \App\Suministro::create(['tipo_insumo_id' => 3, 'nombre' => 'EQUIPOS','descripcion' => '']);
//TIPO SUMINISTRO
        \App\TipoSuministro::create(['suministro_id' => 1,'nombre' => 'FRUTALES','descripcion' => '']);
        \App\TipoSuministro::create(['suministro_id' => 1, 'nombre' => 'ORNAMENTALES','descripcion' => '']);
        \App\TipoSuministro::create(['suministro_id' => 4, 'nombre' => 'OFICINA','descripcion' => '']);
//TIPOS
        \App\Tipo::create(['tipo_suministro_id' => 1,'nombre' => 'MANZANA','descripcion' => '']);
        \App\Tipo::create(['tipo_suministro_id' => 1, 'nombre' => 'LIMA','descripcion' => '']);
        \App\Tipo::create(['tipo_suministro_id' => 3, 'nombre' => 'COMPUTADOR','descripcion' => '']);

        //PROVINCIAS
        \App\Provincia::create(['codigo' => '01','nombre' => 'AZUAY']);
        \App\Provincia::create(['codigo' => '02','nombre' => 'BOLIVAR']);
        \App\Provincia::create(['codigo' => '03','nombre' => 'CAÑAR']);
        \App\Provincia::create(['codigo' => '04','nombre' => 'CARCHI']);
        \App\Provincia::create(['codigo' => '05','nombre' => 'COTOPAXI']);
        \App\Provincia::create(['codigo' => '06','nombre' => 'CHIMBORAZO']);
        \App\Provincia::create(['codigo' => '07','nombre' => 'EL ORO']);
        \App\Provincia::create(['codigo' => '08','nombre' => 'ESMERALDAS']);
        \App\Provincia::create(['codigo' => '09','nombre' => 'GUAYAS']);
        \App\Provincia::create(['codigo' => '10','nombre' => 'IMBABURA']);
        \App\Provincia::create(['codigo' => '11','nombre' => 'LOJA']);
        \App\Provincia::create(['codigo' => '12','nombre' => 'LOS RIOS']);
        \App\Provincia::create(['codigo' => '13','nombre' => 'MANABI']);
        \App\Provincia::create(['codigo' => '14','nombre' => 'MORONA SANTIAGO']);
        \App\Provincia::create(['codigo' => '15','nombre' => 'NAPO']);
        \App\Provincia::create(['codigo' => '16','nombre' => 'PASTAZA']);
        \App\Provincia::create(['codigo' => '17','nombre' => 'PICHINCHA']);
        \App\Provincia::create(['codigo' => '18','nombre' => 'TUNGURAHUA']);
        \App\Provincia::create(['codigo' => '19','nombre' => 'ZAMORA CHINCHIPE']);
        \App\Provincia::create(['codigo' => '20','nombre' => 'GALAPAGOS']);
        \App\Provincia::create(['codigo' => '21','nombre' => 'SUCUMBIOS']);
        \App\Provincia::create(['codigo' => '22','nombre' => 'ORELLANA']);
        \App\Provincia::create(['codigo' => '23','nombre' => 'SANTO DOMINGO DE LOS TSACHILAS']);
        \App\Provincia::create(['codigo' => '24','nombre' => 'SANTA ELENA']);
        \App\Provincia::create(['codigo' => '90','nombre' => 'ZONAS NO DELIMITADAS']);
//Cantones
        \App\Ciudad::create(['provincia_id' => 10,'codigo' => '101', 'nombre' => 'IBARRA']);
//Parroquia
        \App\Parroquia::create(['ciudad_id' => 1,'codigo' => '1001', 'nombre' => 'SAN ANTONIO']);
//Barrio
        \App\Barrio::create(['parroquia_id' => 1,'comunidad' => '', 'nombre' => 'LOS SOLES']);

//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => 'ZONAS NO DELIMITADAS','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' CUENCA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' GIRÓN ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' GUALACEO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' NABÓN ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' PAUTE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' PUCARA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' SAN FERNANDO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' SANTA ISABEL ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' SIGSIG ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' OÑA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' CHORDELEG ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' EL PAN ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' SEVILLA DE ORO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' GUACHAPALA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 1, 'nombre' => ' CAMILO PONCE ENRÍQUEZ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 2, 'nombre' => ' GUARANDA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 2, 'nombre' => ' CHILLANES ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 2, 'nombre' => ' CHIMBO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 2, 'nombre' => ' ECHEANDÍA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 2, 'nombre' => ' SAN MIGUEL ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 2, 'nombre' => ' CALUMA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 2, 'nombre' => ' LAS NAVES ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 3, 'nombre' => ' AZOGUES ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 3, 'nombre' => ' BIBLIÁN ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 3, 'nombre' => ' CAÑAR ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 3, 'nombre' => ' LA TRONCAL ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 3, 'nombre' => ' EL TAMBO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 3, 'nombre' => ' DÉLEG ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 3, 'nombre' => ' SUSCAL ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 4, 'nombre' => ' TULCÁN ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 4, 'nombre' => ' BOLÍVAR ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 4, 'nombre' => ' ESPEJO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 4, 'nombre' => ' MIRA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 4, 'nombre' => ' MONTÚFAR ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 4, 'nombre' => ' SAN PEDRO DE HUACA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 5, 'nombre' => ' LATACUNGA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 5, 'nombre' => ' LA MANÁ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 5, 'nombre' => ' PANGUA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 5, 'nombre' => ' PUJILI ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 5, 'nombre' => ' SALCEDO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 5, 'nombre' => ' SAQUISILÍ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 5, 'nombre' => ' SIGCHOS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 6, 'nombre' => ' RIOBAMBA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 6, 'nombre' => ' ALAUSI ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 6, 'nombre' => ' COLTA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 6, 'nombre' => ' CHAMBO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 6, 'nombre' => ' CHUNCHI ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 6, 'nombre' => ' GUAMOTE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 6, 'nombre' => ' GUANO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 6, 'nombre' => ' PALLATANGA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 6, 'nombre' => ' PENIPE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 6, 'nombre' => ' CUMANDÁ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' MACHALA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' ARENILLAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' ATAHUALPA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' BALSAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' CHILLA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' EL GUABO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' HUAQUILLAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' MARCABELÍ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' PASAJE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' PIÑAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' PORTOVELO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' SANTA ROSA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' ZARUMA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 7, 'nombre' => ' LAS LAJAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 8, 'nombre' => ' ESMERALDAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 8, 'nombre' => ' ELOY ALFARO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 8, 'nombre' => ' MUISNE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 8, 'nombre' => ' QUININDÉ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 8, 'nombre' => ' SAN LORENZO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 8, 'nombre' => ' ATACAMES ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 8, 'nombre' => ' RIOVERDE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 8, 'nombre' => ' LA CONCORDIA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' GUAYAQUIL ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' ALFREDO BAQUERIZO MORENO (JUJÁN) ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' BALAO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' BALZAR ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' COLIMES ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' DAULE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' DURÁN ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' EL EMPALME ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' EL TRIUNFO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' MILAGRO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' NARANJAL ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' NARANJITO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' PALESTINA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' PEDRO CARBO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' SAMBORONDÓN ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' SANTA LUCÍA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' SALITRE (URBINA JADO) ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' SAN JACINTO DE YAGUACHI ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' PLAYAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' SIMÓN BOLÍVAR ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' CORONEL MARCELINO MARIDUEÑA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' LOMAS DE SARGENTILLO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' NOBOL ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' GENERAL ANTONIO ELIZALDE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 9, 'nombre' => ' ISIDRO AYORA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 10, 'nombre' => ' IBARRA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 10, 'nombre' => ' ANTONIO ANTE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 10, 'nombre' => ' COTACACHI ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 10, 'nombre' => ' OTAVALO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 10, 'nombre' => ' PIMAMPIRO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 10, 'nombre' => ' SAN MIGUEL DE URCUQUÍ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' LOJA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' CALVAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' CATAMAYO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' CELICA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' CHAGUARPAMBA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' ESPÍNDOLA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' GONZANAMÁ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' MACARÁ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' PALTAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' PUYANGO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' SARAGURO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' SOZORANGA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' ZAPOTILLO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' PINDAL ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' QUILANGA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 11, 'nombre' => ' OLMEDO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' BABAHOYO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' BABA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' MONTALVO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' PUEBLOVIEJO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' QUEVEDO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' URDANETA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' VENTANAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' VÍNCES ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' PALENQUE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' BUENA FÉ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' VALENCIA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' MOCACHE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 12, 'nombre' => ' QUINSALOMA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' PORTOVIEJO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' BOLÍVAR ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' CHONE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' EL CARMEN ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' FLAVIO ALFARO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' JIPIJAPA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' JUNÍN ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' MANTA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' MONTECRISTI ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' PAJÁN ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' PICHINCHA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' ROCAFUERTE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' SANTA ANA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' SUCRE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' TOSAGUA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' 24 DE MAYO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' PEDERNALES ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' OLMEDO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' PUERTO LÓPEZ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' JAMA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' JARAMIJÓ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 13, 'nombre' => ' SAN VICENTE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' MORONA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' GUALAQUIZA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' LIMÓN INDANZA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' PALORA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' SANTIAGO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' SUCÚA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' HUAMBOYA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' SAN JUAN BOSCO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' TAISHA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' LOGROÑO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' PABLO SEXTO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 14, 'nombre' => ' TIWINTZA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 15, 'nombre' => ' TENA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 15, 'nombre' => ' ARCHIDONA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 15, 'nombre' => ' EL CHACO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 15, 'nombre' => ' QUIJOS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 15, 'nombre' => ' CARLOS JULIO AROSEMENA TOLA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 16, 'nombre' => ' PASTAZA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 16, 'nombre' => ' MERA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 16, 'nombre' => ' SANTA CLARA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 16, 'nombre' => ' ARAJUNO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 17, 'nombre' => ' QUITO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 17, 'nombre' => ' CAYAMBE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 17, 'nombre' => ' MEJIA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 17, 'nombre' => ' PEDRO MONCAYO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 17, 'nombre' => ' RUMIÑAHUI ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 17, 'nombre' => ' SAN MIGUEL DE LOS BANCOS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 17, 'nombre' => ' PEDRO VICENTE MALDONADO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 17, 'nombre' => ' PUERTO QUITO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 18, 'nombre' => ' AMBATO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 18, 'nombre' => ' BAÑOS DE AGUA SANTA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 18, 'nombre' => ' CEVALLOS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 18, 'nombre' => ' MOCHA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 18, 'nombre' => ' PATATE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 18, 'nombre' => ' QUERO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 18, 'nombre' => ' SAN PEDRO DE PELILEO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 18, 'nombre' => ' SANTIAGO DE PÍLLARO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 18, 'nombre' => ' TISALEO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 19, 'nombre' => ' ZAMORA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 19, 'nombre' => ' CHINCHIPE ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 19, 'nombre' => ' NANGARITZA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 19, 'nombre' => ' YACUAMBI ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 19, 'nombre' => ' YANTZAZA (YANZATZA) ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 19, 'nombre' => ' EL PANGUI ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 19, 'nombre' => ' CENTINELA DEL CÓNDOR ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 19, 'nombre' => ' PALANDA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 19, 'nombre' => ' PAQUISHA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 20, 'nombre' => ' SAN CRISTÓBAL ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 20, 'nombre' => ' ISABELA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 20, 'nombre' => ' SANTA CRUZ ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 21, 'nombre' => ' LAGO AGRIO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 21, 'nombre' => ' GONZALO PIZARRO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 21, 'nombre' => ' PUTUMAYO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 21, 'nombre' => ' SHUSHUFINDI ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 21, 'nombre' => ' SUCUMBÍOS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 21, 'nombre' => ' CASCALES ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 21, 'nombre' => ' CUYABENO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 22, 'nombre' => ' ORELLANA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 22, 'nombre' => ' AGUARICO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 22, 'nombre' => ' LA JOYA DE LOS SACHAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 22, 'nombre' => ' LORETO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 23, 'nombre' => ' SANTO DOMINGO ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 24, 'nombre' => ' SANTA ELENA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 24, 'nombre' => ' LA LIBERTAD ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 24, 'nombre' => ' SALINAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 25, 'nombre' => ' LAS GOLONDRINAS ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 25, 'nombre' => ' MANGA DEL CURA ','descripcion' => '']);
//   \App\Ciudad::create(['provincia_id' => 25, 'nombre' => ' EL PIEDRERO ','descripcion' => '']);

//PROYECTO
        \App\Proyecto::create(['tipo_proyecto_id' => 1,'barrio_id' => 1,'nombre' => 'RENACER','imagen' => '','inicio' => '2019-03-01','fin' => '2019-03-01']);
//EVENTO
        \App\Evento::create(['proyecto_id' => 1,'usuario_id' => 1,'tipo_evento_id' => 1,'barrio_id' => '1','nombre' => 'INAGURACION DTMOWED','imagen' => 'EHnmZSw7PmfC8vv0hsZ8PzTraFMUQlGOd02YiIDV.jpeg','fecha_evento' => '2019-03-01', 'direccion' => 'CALLE A Y CALLE B','duracion_horas' => '4','fecha_finaliza' => '2019-03-01']);
//
//ORGANIZACION
        \App\Organizacion::create(['tipo_organizacion_id' => 1,'actividad_id' => 1,'nombre' => 'LA CHOZA','imagen' => 'EHnmZSw7PmfC8vv0hsZ8PzTraFMUQlGOd02YiIDV.jpeg','representante' => 'JUAN CARLOS LOPEZ','contacto' => '0636545632','direccion' => 'CALLE Q Y CALLE B','descripcion' => 'UNION DE ARTISTAS','acuerdo' => '001','mujeres' => 10,'ninias' => 1,'hombres' => 10,'ninios' => 2,'total' => 23,'latitud' => '','longitud' => '','precision' => '']);

    }
}
