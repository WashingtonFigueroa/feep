<?php

namespace App\Http\Controllers\API;

use App\Resumen;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ResumenController extends Controller
{
    public function index()
    {
        return response()->json(Resumen::orderBy('resumen_id','desc')->paginate(10), 200);
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
