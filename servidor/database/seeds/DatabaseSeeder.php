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
            '/resumenes/listar',
            '/ejecutoras/crear'
        ];
        //TIPO USUARIOS
        $cargo = \App\Cargo::create(
            [
                'nombre' => 'administrador',
                'descripcion' => 'descripcion del administrador'
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
                'cuenta' => 'Fepp2019',
                'password' => Hash::make('1Evento'),
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
//        \App\Suministro::create(['tipo_insumo_id' => 1, 'nombre' => 'PLANTAS','descripcion' => '']);
//        \App\Suministro::create(['tipo_insumo_id' => 1, 'nombre' => 'ÁRBOLES','descripcion' => '']);
//        \App\Suministro::create(['tipo_insumo_id' => 3, 'nombre' => 'EQUIPOS','descripcion' => '']);
//TIPO SUMINISTRO
        \App\TipoSuministro::create(['suministro_id' => 1,'nombre' => 'OTRO/A','descripcion' => '']);
//        \App\TipoSuministro::create(['suministro_id' => 1, 'nombre' => 'ORNAMENTALES','descripcion' => '']);
//        \App\TipoSuministro::create(['suministro_id' => 4, 'nombre' => 'OFICINA','descripcion' => '']);
//TIPOS
        \App\Tipo::create(['tipo_suministro_id' => 1,'nombre' => 'OTRO/A','descripcion' => '']);
//        \App\Tipo::create(['tipo_suministro_id' => 1, 'nombre' => 'LIMA','descripcion' => '']);
//        \App\Tipo::create(['tipo_suministro_id' => 3, 'nombre' => 'COMPUTADOR','descripcion' => '']);
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
//ORGANIZACIONES
//        \App\Organizacion::create(['tipo_organizacion_id' => 1,'actividad_id' => 1,'documento' => '','nombre' => 'PARTICULAR','caracteristica1' => 'NO REGULADA','caracteristica2' => 'BASE','caracteristica3' => 'EMPRENDIMIENTO','representante' => 'NINGUNO']);
        //Cantones
//      \App\Ciudad::create(['provincia_id' => 10,'codigo' => '101', 'nombre' => 'IBARRA']);
//Parroquia
//       \App\Parroquia::create(['ciudad_id' => 1,'codigo' => '1001', 'nombre' => 'SAN ANTONIO']);
//Barrio
//      \App\Barrio::create(['parroquia_id' => 1,'comunidad' => '', 'nombre' => 'LOS SOLES']);

//PROYECTO
//        \App\Proyecto::create(['tipo_proyecto_id' => 1,'barrio_id' => 1,'nombre' => 'RENACER','imagen' => '','inicio' => '2019-03-01','fin' => '2019-03-01']);
//EVENTO
//        \App\Evento::create(['proyecto_id' => 1,'usuario_id' => 1,'tipo_evento_id' => 1,'barrio_id' => '1','nombre' => 'INAGURACION DTMOWED','imagen' => 'EHnmZSw7PmfC8vv0hsZ8PzTraFMUQlGOd02YiIDV.jpeg','fecha_evento' => '2019-03-01', 'direccion' => 'CALLE A Y CALLE B','duracion_horas' => '4','fecha_finaliza' => '2019-03-01']);
//
//ORGANIZACION
//        \App\Organizacion::create(['tipo_organizacion_id' => 1,'actividad_id' => 1,'nombre' => 'LA CHOZA','imagen' => 'EHnmZSw7PmfC8vv0hsZ8PzTraFMUQlGOd02YiIDV.jpeg','representante' => 'JUAN CARLOS LOPEZ','contacto' => '0636545632','direccion' => 'CALLE Q Y CALLE B','descripcion' => 'UNION DE ARTISTAS','acuerdo' => '001','mujeres' => 10,'ninias' => 1,'hombres' => 10,'ninios' => 2,'total' => 23,'latitud' => '','longitud' => '','precision' => '']);

    }
}
