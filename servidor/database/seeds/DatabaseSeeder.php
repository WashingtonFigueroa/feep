<?php

use App\Privilegio;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run() {
        $accesos = [
                    '/cargos/listar',
                    '/privilegios',
                    '/asignacioneventos/listar',
                    '/miembros/listar',
                    '/proyectos/listar',
                    '/inscripciones/listar',
                    '/anexos/listar',
                    '/organizaciones/listar',
                    '/eventos/listar',
                    '/asignaciones/listar',
                    '/tipoorganizacion/listar',
                    '/tipoproyectos/listar',
                    '/tipoeventos/listar',
                    '/actividades/listar',
                    '/insumos/tipo-insumos/listar',
                    '/ubicaciones/listar',
                    '/usuarios/listar',
                    '/ejecutoras/crear',
                    '/resumenes/listar',
                    '/reportes/reporte1',

                ];
                //TIPO USUARIOS
                $cargo = \App\Cargo::create(
                    [
                        'nombre' => 'SuperAdmin',
                        'descripcion' => 'DTMOWED Desarrolladores'
                    ]
                );
                foreach ($accesos as $acceso) {
                    Privilegio::create([
                        'cargo_id' => $cargo->cargo_id,
                        'acceso' => $acceso,
                        'activo' => 'si'
                    ]);
                }
                \App\Usuario::create(
                    [
                        'nombres' => 'Washington Figueroa',
                        'cuenta' => 'Admin',
                        'password' => Hash::make('123456'),
                        'email' => 'w.figo.1991@gmail.com',
                        'cargo_id' => $cargo->cargo_id]
                );
        //TIPO ORGANIZACIONES
                \App\TipoOrganizacion::create(['nombre' => 'OTRO/A','descripcion' => '']);
                \App\TipoOrganizacion::create(['nombre' => 'ASOCIATIVA','descripcion' => '']);
                \App\TipoOrganizacion::create(['nombre' => 'FAMILIAR','descripcion' => '']);
        //ACTIVIDADES
                \App\Actividad::create(['nombre' => 'OTRO/A','descripcion' => '']);
                \App\Actividad::create(['nombre' => 'PRODUCCIÓN','descripcion' => '']);
                \App\Actividad::create(['nombre' => 'SERVICIO','descripcion' => '']);
                \App\Actividad::create(['nombre' => 'TRANSFORMACIÓN','descripcion' => '']);
                \App\Actividad::create(['nombre' => 'COMERCIALIZACIÓN','descripcion' => '']);
                \App\Actividad::create(['nombre' => 'FINANCIERA','descripcion' => '']);
        //TIPO PROYECTOS
                \App\TipoProyecto::create(['nombre' => 'OTRO/A','descripcion' => '']);
                \App\TipoProyecto::create(['nombre' => 'RECREACIÓN','descripcion' => 'FUNDAMENTAL PARA LA VIDA']);
                \App\TipoProyecto::create(['nombre' => 'COMUNICACIÓN','descripcion' => 'DESARROLLO']);
        //TIPO EVENTOS
                \App\TipoEvento::create(['nombre' => 'OTRO/A','descripcion' => '']);
                \App\TipoEvento::create(['nombre' => 'TALLER','descripcion' => 'CREACIÓN DE UN PRODUCTO']);
                \App\TipoEvento::create(['nombre' => 'PINTURA','descripcion' => 'ARTES PLASTICAS']);






        //TIPO INSUMOS
                \App\TipoInsumo::create(['nombre' => 'OTRO/A','descripcion' => '']);
                \App\TipoInsumo::create(['nombre' => 'AGRÍCOLA','descripcion' => '']);
                \App\TipoInsumo::create(['nombre' => 'PECUARIO','descripcion' => '']);
                \App\TipoInsumo::create(['nombre' => 'TECNOLÓGICO','descripcion' => '']);
        //SUMINISTROS
                \App\Suministro::create(['tipo_insumo_id' => 1,'nombre' => 'OTRO/A','descripcion' => '']);
                \App\Suministro::create(['tipo_insumo_id' => 1, 'nombre' => 'PLANTAS','descripcion' => '']);
                \App\Suministro::create(['tipo_insumo_id' => 1, 'nombre' => 'ÁRBOLES','descripcion' => '']);
                \App\Suministro::create(['tipo_insumo_id' => 3, 'nombre' => 'EQUIPOS','descripcion' => '']);
        //TIPO SUMINISTRO
                \App\TipoSuministro::create(['suministro_id' => 1,'nombre' => 'OTRO/A','descripcion' => '']);
                \App\TipoSuministro::create(['suministro_id' => 1, 'nombre' => 'ORNAMENTALES','descripcion' => '']);
                \App\TipoSuministro::create(['suministro_id' => 4, 'nombre' => 'OFICINA','descripcion' => '']);
        //TIPOS
                \App\Tipo::create(['tipo_suministro_id' => 1,'nombre' => 'OTRO/A','descripcion' => '']);
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
//Organizacion
        \App\Organizacion::create(['tipo_organizacion_id' => 1, 'actividad_id' => 1, 'documento' => '9999999999', 'nombre' => 'PARTICULAR', 'caracteristica1' => 'NO REGULADA', 'caracteristica2' => 'BASE', 'caracteristica3' => 'EMPRENDIMIENTO', 'imagen' => 'sin_imagen', 'representante' => 'PARTICULAR', 'contacto' => '999999999', 'direccion' => '', 'descripcion' => 'IBARRA', 'ministerio' => '000', 'acuerdo' => '', 'mujeres' => '0', 'ninias' => '0', 'hombres' => '0', 'ninios' => '0', 'total' => '0', 'latitud' => '', 'longitud' => '', 'precision' => '']);

//Barrio
/*\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'Los Ceibos (barrio-cabecera)']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'El Cedro']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'Caranqui (cabecera-barrio histórico)']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'Ruinas de Caranqui (protegido por el Muncicipio de Ibarra)']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'La Esperanza']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'La Campiña']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'La Primavera']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'Cementerio-Necrópolis San Miguel']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'Cuatro Esquinas']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'La Portada de La Esperanza']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'Riveras del Tahuando']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'La Candelaria']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'Los Roques-Cementerio San Francisco']);
\App\Barrio::create(['parroquia_id' => 607,'comunidad' => '', 'nombre' => 'Los Reyes.']);
  \App\Barrio::create(['parroquia_id' => 608,'comunidad' => '', 'nombre' => 'Azaya']);
  \App\Barrio::create(['parroquia_id' => 608,'comunidad' => '', 'nombre' => 'Las Palmas']);
  \App\Barrio::create(['parroquia_id' => 608,'comunidad' => '', 'nombre' => 'Hospital-El Seguro']);
  \App\Barrio::create(['parroquia_id' => 608,'comunidad' => '', 'nombre' => 'Martínez de Orbe']);
  \App\Barrio::create(['parroquia_id' => 608,'comunidad' => '', 'nombre' => 'Alpachaca (barrio-cabecera)']);
  \App\Barrio::create(['parroquia_id' => 608,'comunidad' => '', 'nombre' => 'Miravalle']);
  \App\Barrio::create(['parroquia_id' => 608,'comunidad' => '', 'nombre' => 'La Soria']);
  \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'El Ejido']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Condominios-Los Galeanos']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'La Florida']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Las Colinas']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'El Milagro']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Pugacho']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Villa Europea-Imbaya']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Los Pinos']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Jardín de Paz']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'El Empedrado']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Aeropuerto']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Parque del Águila']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Esquina del Coco']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Centro Histórico (Lado este Rocafuerte)']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Redondel Cabezas Borja-Antigua Hacienda']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Pilanquí']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => '19 de Enero']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'La Merced']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Redondel de La Madre']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Hospital-San Vicente de Paúl']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Urbanizaciones de Mariano Acosta']);
    \App\Barrio::create(['parroquia_id' => 609,'comunidad' => '', 'nombre' => 'Barrio Gomezjurado.']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Terminal del Reloj']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Cuestas de San Francisco']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Teodoro Gómez']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Cruz Verde']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Ajaví']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Parque de La Familia']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Yacucalle']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Bola Amarilla']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'La Victoria']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Ciudadela Sur']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Ciudadela Norte']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'La Curia-Antiguo Cuartel']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Rocafuerte']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'La Católica']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Loma de Guayabillas']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'Centro Histórico (Lado oeste Rocafuerte)']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'La Bolívar']);
     \App\Barrio::create(['parroquia_id' => 610,'comunidad' => '', 'nombre' => 'El Obelisco-Moncayo.']);
        \App\Barrio::create(['parroquia_id' => 611,'comunidad' => '', 'nombre' => 'El Olivo']);
        \App\Barrio::create(['parroquia_id' => 611,'comunidad' => '', 'nombre' => 'Ciudadela Universitaria']);
        \App\Barrio::create(['parroquia_id' => 611,'comunidad' => '', 'nombre' => 'La Aduana']);
        \App\Barrio::create(['parroquia_id' => 611,'comunidad' => '', 'nombre' => 'Yahuarcocha-Ingreso']);
        \App\Barrio::create(['parroquia_id' => 611,'comunidad' => '', 'nombre' => 'Pueblo Viejo']);
        \App\Barrio::create(['parroquia_id' => 611,'comunidad' => '', 'nombre' => 'Yahuarcocha-El Arcángel']);
        \App\Barrio::create(['parroquia_id' => 611,'comunidad' => '', 'nombre' => 'Catacumbas']);
        \App\Barrio::create(['parroquia_id' => 611,'comunidad' => '', 'nombre' => 'Priorato-La Esperanza (barrio-cabecera)']);
        \App\Barrio::create(['parroquia_id' => 611,'comunidad' => '', 'nombre' => 'Huertos Familiares']);
        \App\Barrio::create(['parroquia_id' => 611,'comunidad' => '', 'nombre' => 'Miraflores y Barrio España']);*/




    }
}
