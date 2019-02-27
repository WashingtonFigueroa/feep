<?php

namespace App\Http\Controllers\API;

use App\Ejecutora;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EjecutoraController extends Controller
{
    public function index()
    {
        $ejecutoras = Ejecutora::orderBy('ejecutora_id', 'desc')->paginate(10);
        return response()->json($ejecutoras, 200);
    }
    public function listar()
    {
        $ejecutoras = Ejecutora::orderBy('ejecutora_id', 'desc')->get();
        return response()->json($ejecutoras, 200);
    }
    public function store(Request $request)
    {
        return response()->json(Ejecutora::create($request->all()), 201);
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
