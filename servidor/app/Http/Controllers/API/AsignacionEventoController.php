<?php

namespace App\Http\Controllers\API;

use App\AsignacionEvento;
use App\Usuario;
use App\Proyecto;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AsignacionEventoController extends Controller
{
    public function index()
    {
        $asignacion_proyectos = AsignacionEvento::join('proyectos', 'proyectos.proyecto_id', '=', 'asignacion_eventos.proyecto_id')
                                                ->join('usuarios', 'usuarios.usuario_id', '=', 'asignacion_eventos.usuario_id')
                                                ->selectRaw('asignacion_eventos.*, proyectos.nombre as proyecto, usuarios.nombres as usuario')
                                                ->orderBy('asignacion_eventos.asignacion_evento_id','desc')
                                                ->paginate(10);
        return response()->json($asignacion_proyectos, 200);
    }
    public function store(Request $request)
    {
        $evento = AsignacionEvento::create($request->all())->toArray();
        $evento['proyecto'] = Proyecto::find($evento['proyecto_id'])->nombre;
        $evento['usuario'] = Usuario::find($evento['usuario_id'])->nombres;
        return response()->json($evento, 201);
    }
    public function show($id)
    {
        $asignacion_evento = AsignacionEvento::find($id);
        return response()->json($asignacion_evento, 200);
    }
    public function update(Request $request, $id)
    {
        $asignacion_evento = AsignacionEvento::find($id);
        $asignacion_evento->update($request->all());
        return response()->json($asignacion_evento, 200);
    }
    public function destroy($id)
    {
        $asignacion_evento = AsignacionEvento::find($id);
        $asignacion_evento->delete();
        return response()->json($asignacion_evento, 200);
    }
}
