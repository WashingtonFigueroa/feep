<?php

namespace App\Http\Controllers\API;

use App\TipoProyecto;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TipoProyectoController extends Controller
{
    public function index()
    {
        $tipo_proyectos = TipoProyecto::orderBy('tipo_proyecto_id','desc')->paginate(10);
        return response()->json($tipo_proyectos, 200);
    }
    public function listar()
    {
        $tipo_proyectos = TipoProyecto::orderBy('tipo_proyecto_id','desc')->get();
        return response()->json($tipo_proyectos, 200);
    }
    public function store(Request $request)
    {
        return response()->json(TipoProyecto::create($request->all()), 201);
    }
    public function show($id)
    {
        return response()->json(TipoProyecto::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $tipo_proyectos = TipoProyecto::find($id);
        $tipo_proyectos->update($request->all());
        return response()->json($tipo_proyectos, 200);
    }
    public function destroy($id)
    {
        $tipo_proyectos = TipoProyecto::find($id);
        $tipo_proyectos->delete($id);
        return response()->json(['message' => 'Tipo de proyecto eliminado']);
    }
}
