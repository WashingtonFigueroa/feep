<?php

namespace App\Http\Controllers\API;

use App\TipoSuministro;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TipoSuministroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tipo_suministros = TipoSuministro::join('suministros', 'suministros.suministro_id', '=', 'tipo_suministros.suministro_id')
                                            ->selectRaw('tipo_suministros.*, suministros.nombre as suministro')
                                            ->orderBy('tipo_suministros.nombre')
                                            ->paginate(10);
        return response()->json($tipo_suministros, 200);
    }

    public function listar() {
        $tipo_suministros = TipoSuministro::orderBy('nombre')->get();
        return response()->json($tipo_suministros, 200);
    }

    public function buscar($valor = '') {
        $tipo_suministros = TipoSuministro::join('suministros', 'suministros.suministro_id', '=', 'tipo_suministros.suministro_id')
            ->where('tipo_suministros.nombre', 'like', '%' . $valor . '%')
            ->orWhere('tipo_suministros.descripcion', 'like', '%' . $valor . '%')
            ->selectRaw('tipo_suministros.*, suministros.nombre as suministro')
            ->orderBy('suministros.nombre')
            ->paginate(10);
        return response()->json($tipo_suministros, 200);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json(TipoSuministro::create($request->all()), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(TipoSuministro::find($id), 200);
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
        $tipo_suministro = TipoSuministro::find($id);
        $tipo_suministro->update($request->all());
        return response()->json($tipo_suministro, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tipo_suministro = TipoSuministro::find($id);
        $tipo_suministro->delete();
        return response()->json($tipo_suministro, 200);
    }
}
