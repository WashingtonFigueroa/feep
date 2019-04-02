<?php

namespace App\Http\Controllers\API;

use App\Resumen;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ResumenController extends Controller
{
    public function index()
    {
        $personas= Resumen::join('eventos','eventos.evento_id','=','resumenes.evento_id')
            ->selectRaw('resumenes.*, eventos.nombre as evento')
            ->orderBy('resumenes.resumen_id','desc')
            ->paginate(10);
        return response()->json($personas, 200);
    }
    public function buscar($valor = '') {
        $participante = Resumen::join('eventos','eventos.evento_id','=','resumenes.evento_id')
            ->where('eventos.nombre', 'like', '%' . $valor . '%')
            ->selectRaw('resumenes.*, eventos.nombre as evento')
            ->orderBy('resumenes.resumen_id','desc')
            ->paginate(10);
        return response()->json($participante, 200);
    }
    public function listar()
    {
        $resumenes = Resumen::orderBy('resumen_id','desc')->get();
        return response()->json($resumenes, 200);
    }
    public function store(Request $request)
    {
        $resumen = Resumen::create($request->all());
        return response()->json($resumen, 201);
    }
    public function show($id)
    {
        return response()->json(Resumen::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $resumen = Resumen::find($id);
        $resumen->update($request->all());
        return response()->json($resumen, 200);
    }
    public function destroy($id)
    {
        $resumen = Resumen::find($id);
        $resumen->delete();
        return response()->json($resumen, 200);
    }
}
