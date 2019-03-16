<?php

namespace App\Http\Controllers\API;

use App\Ciudad;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CiudadController extends Controller
{
    public function index()
    {
        return response()->json(Ciudad::orderBy('nombre')->paginate(10), 200);
    }
    public function listar()
    {
        $barrio = Ciudad::orderBy('nombre')->get();
        return response()->json($barrio, 200);
    }
    public function store(Request $request)
    {
        $ciudad = Ciudad::create($request->all());
        return $this->listar();
    }
    public function show($id)
    {
        return response()->json(Ciudad::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $ciudad = Ciudad::find($id);
        $ciudad->update($request->all());
        return response()->json($ciudad, 200);
    }
    public function destroy($id)
    {
        $ciudad = Ciudad::find($id);
        $ciudad->delete();
        return response()->json($ciudad, 200);
    }
}
