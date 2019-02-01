<?php

namespace App\Http\Controllers\API;

use App\TipoOrganizacion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use test\Mockery\ReturnTypeObjectTypeHint;

class TipoOrganizacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tipo_organizacion = TipoOrganizacion::orderBy('descripcion')->get();
        return response()->json($tipo_organizacion, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tipo_organizacion = TipoOrganizacion::find($id);
        $tipo_organizacion->delete($id);
        return response()->json(['message' => 'Tipo de organizacion eliminada']);
    }
}
