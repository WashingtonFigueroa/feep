<?php

namespace App\Http\Controllers\API;

use App\Evento;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReporteController extends Controller
{
    public function index()
    {
        $eventos = Evento::join('proyectos', 'proyectos.proyecto_id', '=', 'eventos.proyecto_id')
            ->join('usuarios', 'usuarios.usuario_id', '=', 'eventos.usuario_id')
            ->join('tipo_eventos', 'tipo_eventos.tipo_evento_id', '=', 'eventos.tipo_evento_id')
            ->join('barrios', 'barrios.barrio_id', '=', 'eventos.barrio_id')
            ->selectRaw('eventos.*, proyectos.nombre as proyecto, usuarios.nombres as usuario, tipo_eventos.nombre as tipo_evento, barrios.nombre as parroquia')
            ->orderBy('eventos.fecha_evento', 'desc')
            ->paginate(5);
        return response()->json($eventos, 200);
    }
    public function num_asistencia()
    {
        $num= Participante::count()
            ->where('evento_id'== 1);
        echo 'holappp';
        return response()->json('hols', 200);
    }


}
