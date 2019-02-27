<?php

namespace App\Http\Controllers\API;

use App\Provincia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProvinciaController extends Controller
{
    public function index()
    {
        $provincias = Provincia::orderBy('nombre', 'asc')->paginate(10);
        return response()->json($provincias, 200);
    }
    public function listar()
    {
        $provincia = Provincia::orderBy('nombre')->get();
        return response()->json($provincia, 200);
    }
    public function store(Request $request)
    {
        $provincia = Provincia::create($request->all());
        return $this->listar();
    }
    public function show($id)
    {
        return response()->json(Provincia::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $provincia = Provincia::find($id);
        $provincia->update($request->all());
        return response()->json($provincia, 200);
    }
    public function destroy($id)
    {
        $provincia = Provincia::find($id);
        $provincia->delete();
        return response()->json($provincia, 200);
    }
}
