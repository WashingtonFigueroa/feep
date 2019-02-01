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
//Imegenes
Route::get('organizaciones-imagen/{url}', 'OrganizacionController@imagen');


Route::apiResources([
    'tipo-organizaciones' => 'API\TipoOrganizacionController',
    'tipo-personas' => 'API\TipoPersonaController',
    'provincias' => 'API\ProvinciaController',
    'organizaciones' => 'API\OrganizacionController',
    'tipo-eventos' => 'API\TipoEventoController',
    'barrios' => 'API\BarrioController',
    'ciudades' => 'API\CiudadController',
    'comunidades' => 'API\ComunidadController',
    'personas' => 'API\PersonaController',
    'eventos' => 'API\EventoController',
    'parroquias' => 'API\ParroquiaController',
    'participantes' => 'API\ParticipanteController',
    'organizacion-eventos' => 'API\OrganizacionEventoController',
    'tipo-insumos' => 'API\TipoInsumoController',
    'suministros' => 'API\SuministroController',
]);
