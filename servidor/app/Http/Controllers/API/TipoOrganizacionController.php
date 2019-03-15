<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;

use App\TipoOrganizacion;
use Illuminate\Http\Request;

class TipoOrganizacionController extends Controller
{
     public function index()
    {
        $tipo_organizacion = TipoOrganizacion::orderBy('nombre')->paginate(10);
        return response()->json($tipo_organizacion, 200);
    }

    public function listar()
    {
        $tipo_organizacion = TipoOrganizacion::orderBy('nombre')->get();
        return response()->json($tipo_organizacion, 200);
    }

    public function store(Request $request)
    {
            $tipo_organizacion = new TipoOrganizacion();
            $tipo_organizacion->nombre = $request->input('nombre');
            $tipo_organizacion->descripcion = $request->input('descripcion');
            $tipo_organizacion->save();
            return response()->json($tipo_organizacion, 201);
    }

    public function show($id)
    {
        return response()->json(TipoOrganizacion::find($id));
    }

    public function update(Request $request, $id)
    {
        $tipo_organizacion = TipoOrganizacion::find($id);
        $tipo_organizacion->update($request->all());
        return response()->json($tipo_organizacion, 200);
    }

    public function destroy($id)
    {
        $tipo_organizacion = TipoOrganizacion::find($id);
        $tipo_organizacion->delete($id);
        return response()->json(['message' => 'Tipo de organizacion eliminada']);
    }
}
