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
//Imágenes
Route::get('organizaciones-imagen/{url}', 'API\OrganizacionController@imagen');
Route::get('tipo-personas-imagen/{url}', 'API\TipoPersonaController@imagen');
Route::get('anexos-imagen/{url}', 'API\AnexoController@imagen');
Route::get('eventos-imagen/{url}', 'API\EventoController@imagen');

/*listados*/
Route::get('tipo-organizaciones-listar', 'API\TipoOrganizacionController@listar');
Route::get('organizaciones-listar', 'API\OrganizacionController@listar');
Route::get('tipo-personas-listar', 'API\TipoPersonaController@listar');
Route::get('provincias-listar', 'API\ProvinciaController@listar');

Route::get('ciudades-listar', 'API\CiudadController@listar');
Route::get('tipo-eventos-listar', 'API\TipoEventoController@listar');

Route::get('tipo-insumos-listar', 'API\TipoInsumoController@listar');
Route::get('suministros-listar', 'API\SuministroController@listar');
Route::get('tipo-suministros-listar', 'API\TipoSuministroController@listar');
Route::get('tipos-listar', 'API\SuministroController@listar');
Route::get('personas-listar', 'API\PersonaController@listar');
Route::get('eventos-listar', 'API\EventoController@listar');
//¨Parroquia
Route::get('parroquias-listar', 'API\ParroquiaController@listar');

//Barrios
Route::get('barrios-listar', 'API\BarrioController@listar');
//Tipo proyectos
Route::get('tipo-proyectos-listar', 'API\TipoProyectoController@listar');
//Proyectos
Route::get('proyectos-listar', 'API\ProyectoController@listar');
Route::get('proyectos-buscar/{valor?}', 'API\ProyectoController@buscar');
Route::get('proyectos-imagen/{url}', 'API\ProyectoController@imagen');
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
Route::get('usuarios-buscar/{valor?}', 'API\UsuarioController@buscar');

//consultas
Route::get('sri/{cedula}', 'API\PersonaController@sri');

/*login*/
Route::post('login', 'API\UsuarioController@login');

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
    'anexo' => 'API\AnexoController',
    'usuarios' => 'API\UsuarioController',
    'asignacion-eventos' => 'API\AsignacionEventoController',
    'actividades' => 'API\ActividadController'
]);
