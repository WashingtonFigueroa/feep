<?php

namespace App\Http\Controllers\API;

use App\TipoEvento;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TipoEventoController extends Controller
{
    public function index()
    {
        $tipo_eventos = TipoEvento::orderBy('nombre')->paginate(10);
        return response()->json($tipo_eventos, 200);
    }
    public function listar()
    {
        $tipo_eventos = TipoEvento::orderBy('nombre')->get();
        return response()->json($tipo_eventos, 200);
    }
    public function store(Request $request)
    {
        return response()->json(TipoEvento::create($request->all()), 201);
    }
    public function show($id)
    {
        return response()->json(TipoEvento::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $tipoevento = TipoEvento::find($id);
        $tipoevento->update($request->all());
        return response()->json($tipoevento, 200);
    }
    public function destroy($id)
    {
        $tipoevento = TipoEvento::find($id);
        $tipoevento->delete($id);
        return response()->json(['message' => 'Tipo de evento eliminado']);
    }
}
