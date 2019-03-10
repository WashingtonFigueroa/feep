<?php

namespace App\Http\Controllers\API;

use App\Ejecutora;
use App\Organizacion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EjecutoraController extends Controller
{
    public function index()
    {
        $ejecutoras = Ejecutora::join('proyectos', 'proyectos.proyecto_id', '=', 'ejecutoras.proyecto_id')
            ->join('organizaciones', 'organizaciones.organizacion_id', '=', 'ejecutoras.organizacion_id')
            ->selectRaw('ejecutoras.*, organizaciones.nombre as organizacion, proyectos.nombre as proyecto')
            ->orderBy('ejecutoras.ejecutora_id', 'desc')
            ->paginate(10);
        return response()->json($ejecutoras, 200);
    }
    public function listar()
    {
        $ejecutoras = Ejecutora::orderBy('ejecutora_id', 'desc')->get();
        return response()->json($ejecutoras, 200);
    }
    public function buscar($valor = '') {
        $ejecutoras = Ejecutora::join('proyectos', 'proyectos.proyecto_id', '=', 'ejecutoras.proyecto_id')
            ->join('organizaciones', 'organizaciones.organizacion_id', '=', 'ejecutoras.organizacion_id')
            ->selectRaw('ejecutoras.*, organizaciones.nombre as organizacion, proyectos.nombre as proyecto')
            ->where('organizacion.nombre', 'like', '%' . $valor . '%')
            ->orWhere('proyecto.nombre', 'like', '%' . $valor . '%')
            ->orWhere('ejecutoras.tipo', 'like', '%' . $valor . '%')
            ->orderBy('ejecutoras.ejecutora_id', 'desc')
            ->paginate(10);
        return response()->json($ejecutoras, 200);
    }
    public function store(Request $request)
    {
        $ejecutora = Ejecutora::create($request->all())->toArray();
        $ejecutora['organizacion'] = Organizacion::find($ejecutora['organizacion_id'])->nombre;
        return response()->json($ejecutora, 201);
    }
    public function show($id)
    {
        return response()->json(Ejecutora::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $ejecutora = Ejecutora::find($id);
        $ejecutora->update($request->all());
        return response()->json($ejecutora, 200);
    }
    public function destroy($id)
    {
        $ejecutora = Ejecutora::find($id);
        $ejecutora->delete();
        return response()->json($ejecutora, 200);
    }
}
