<?php

namespace App\Http\Controllers\API;

use App\Participante;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReporteController extends Controller
{
    public function index()
    {
        $eventos = Participante::join('eventos', 'eventos.evento_id', '=', 'participantes.evento_id')
            ->join('usuarios', 'usuarios.usuario_id', '=', 'participantes.usuario_id')
            ->selectRaw('participantes.*, eventos.nombre as nombre, eventos.direccion as direccion, eventos.fecha_finaliza as fecha_finaliza, usuarios.nombres as usuario')
            ->orderBy('eventos.evento_id', 'desc')
            ->paginate(10);
        return response()->json($eventos, 200);
    }
    public function listar()
    {
        $organizacion = Participante::orderBy('evento_id', 'desc')->get();
        return response()->json($organizacion, 200);
    }

    public function buscar($valor = '') {
        $eventos = Participante::join('proyectos', 'proyectos.evento_id', '=', 'participante.evento_id')
            ->join('usuarios', 'usuarios.usuario_id', '=', 'eventos.usuario_id')
            ->join('tipo_eventos', 'tipo_eventos.tipo_evento_id', '=', 'eventos.tipo_evento_id')
            ->join('barrios', 'barrios.barrio_id', '=', 'eventos.barrio_id')
            ->where('proyectos.nombre', 'like', '%' . $valor . '%')
            ->orWhere('tipo_eventos.nombre', 'like', '%' . $valor . '%')
            ->orWhere('usuarios.nombres', 'like', '%' . $valor . '%')
            ->orWhere('eventos.nombre', 'like', '%' . $valor . '%')
            ->selectRaw('eventos.*, proyectos.nombre as proyecto, usuarios.nombres as usuario, tipo_eventos.nombre as tipo_evento, barrios.nombre as parroquia')
            ->orderBy('eventos.evento_id', 'desc')
            ->paginate(10);
        return response()->json($eventos, 200);
    }
}
