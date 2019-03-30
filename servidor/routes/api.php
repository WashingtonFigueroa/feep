<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('v1')->group(function () {
    Route::post('login', 'API\UsuarioController@login');
    Route::post('signup', 'API\UsuarioController@signup');

    //Imágenes
    Route::get('organizaciones-imagen/{url}', 'API\OrganizacionController@imagen');
    Route::get('tipo-personas-imagen/{url}', 'API\TipoPersonaController@imagen');
    Route::get('anexos-archivo/{url}', 'API\AnexoController@imagen');
    Route::get('eventos-imagen/{url}', 'API\EventoController@imagen');
    Route::get('insumos-imagen/{url}', 'API\InsumoController@imagen');
    Route::get('proyectos-imagen/{url}', 'API\ProyectoController@imagen');

    Route::get('evento-participantes/{evento_id}', 'API\EventoController@participantes');

    Route::get('cargo-privilegios/{cargo_id}', 'API\CargoController@privilegios');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::post('get-usuario', 'API\UsuarioController@getUsuario');
//cambiar imagenes
        Route::post('organizaciones-imagen-cambiar/{id}', 'API\OrganizacionController@cambiarImagen');
        Route::post('proyetos-imagen-cambiar/{id}', 'API\ProyectoController@cambiarImagen');
        Route::post('eventos-imagen-cambiar/{id}', 'API\EventoController@cambiarImagen');
        Route::post('insumos-imagen-cambiar/{id}', 'API\InsumoController@cambiarImagen');
        /*listados*/
        Route::get('tipo-organizaciones-listar', 'API\TipoOrganizacionController@listar');
//ORGANIZACIONES
        Route::get('organizaciones-listar', 'API\OrganizacionController@listar');
        Route::get('organizaciones-buscar/{valor?}', 'API\OrganizacionController@buscar');
//PERSONAS
      //  Route::get('tipo-personas-listar', 'API\TipoPersonaController@listar');
        Route::get('provincias-listar', 'API\ProvinciaController@listar');
        Route::get('ciudades-listar', 'API\CiudadController@listar');
        Route::get('tipo-eventos-listar', 'API\TipoEventoController@listar');
        Route::get('tipo-insumos-listar', 'API\TipoInsumoController@listar');
        Route::get('suministros-listar', 'API\SuministroController@listar');
        Route::get('tipo-suministros-listar', 'API\TipoSuministroController@listar');
        Route::get('tipos-listar', 'API\SuministroController@listar');
//PERSONAS
        Route::get('personas-listar', 'API\PersonaController@listar');
        Route::get('personas-buscar/{valor?}', 'API\PersonaController@buscar');
//asignacion insumo
        Route::get('insumos-buscar/{valor?}', 'API\InsumoController@buscar');
        Route::get('eventos-listar', 'API\EventoController@listar');
//Parroquia
        Route::get('parroquias-listar', 'API\ParroquiaController@listar');
//Barrios
        Route::get('barrios-listar', 'API\BarrioController@listar');
//Tipo proyectos
        Route::get('tipo-proyectos-listar', 'API\TipoProyectoController@listar');
//Proyectos
        Route::get('proyectos-listar', 'API\ProyectoController@listar');
        Route::get('proyectos-buscar/{valor?}', 'API\ProyectoController@buscar');
//Asignacion Proyectos o Evento
        Route::get('asignacion-proyectos-listar', 'API\AsignacionEventoController@listar');
        Route::get('asignacion-proyectos-buscar/{valor?}', 'API\AsignacionEventoController@buscar');
//Actividades
        Route::get('actividades-listar', 'API\ActividadController@listar');
        Route::get('actividades-buscar/{valor?}', 'API\ActividadController@buscar');
//organizaciones ejecutoras
        Route::get('ejecutoras-listar', 'API\EjecutoraController@listar');
        Route::get('ejecutoras-buscar/{valor?}', 'API\EjecutoraController@buscar');
        /*buscar*/
        Route::get('tipo-insumos-buscar/{valor?}', 'API\TipoInsumoController@buscar');
        Route::get('suministros-buscar/{valor?}', 'API\SuministroController@buscar');
        Route::get('tipo-suministros-buscar/{valor?}', 'API\TipoSuministroController@buscar');
        Route::get('tipos-buscar/{valor?}', 'API\TipoController@buscar');
        Route::get('eventos-buscar/{valor?}', 'API\EventoController@buscar');
//Participante
        Route::get('participantes-buscar/{valor?}', 'API\ParticipanteController@buscar');
//Suministros tipo
        Route::get('tipo-listar', 'API\TipoController@listar');

//Cargos
        Route::resource('cargos', 'API\CargoController');
        Route::resource('privilegios', 'API\PrivilegioController');
//los privilegios de un cargo
/*        Route::get('privilegios-cargo/{cargo_id}', 'API\PrivilegioController@privilegios');*/
//Usuarios
        Route::get('usuarios-listar', 'API\UsuarioController@listar');
        Route::get('usuarios-buscar/{valor?}', 'API\UsuarioController@buscar');
        Route::get('buscar_usuario/{valor?}', 'API\UsuarioController@buscar_usuario');
//Anexos
        Route::get('anexos-listar', 'API\AnexoController@listar');
        Route::get('anexos-buscar/{valor?}', 'API\AnexoController@buscar');
//Resumen
        Route::get('resumenes-listar', 'API\ResumenController@listar');
        Route::get('resumenes-buscar/{valor?}', 'API\ResumenController@buscar');
//consultas
        Route::get('sri/{cedula}', 'API\PersonaController@sri');
        /*login*/
        Route::apiResources([
            'tipo-organizaciones' => 'API\TipoOrganizacionController',
            'tipo-personas' => 'API\TipoPersonaController',
            'provincias' => 'API\ProvinciaController',
            'organizaciones' => 'API\OrganizacionController',
            'tipo-eventos' => 'API\TipoEventoController',
            'barrios' => 'API\BarrioController',
            'ciudades' => 'API\CiudadController',
            'personas' => 'API\PersonaController',
            'tipo-proyectos' => 'API\TipoProyectoController',
            'proyectos' => 'API\ProyectoController',
            'ejecutoras' => 'API\EjecutoraController',
            'eventos' => 'API\EventoController',
            'parroquias' => 'API\ParroquiaController',
            'participantes' => 'API\ParticipanteController',
            'organizacion-eventos' => 'API\OrganizacionEventoController',
            'tipo-insumos' => 'API\TipoInsumoController',
            'suministros' => 'API\SuministroController',
            'tipo-suministros' => 'API\TipoSuministroController',
            'tipos' => 'API\TipoController',
            'insumos' => 'API\InsumoController',
            'anexos' => 'API\AnexoController',
            'usuarios' => 'API\UsuarioController',
            'asignacion-proyectos' => 'API\AsignacionEventoController',
            'actividades' => 'API\ActividadController',
            'resumenes' => 'API\ResumenController',
            'reportes' => 'API\ReporteController'
        ]);
    });
});

