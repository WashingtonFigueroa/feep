<?php

namespace App\Http\Controllers\API;

use App\TipoInsumo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TipoInsumoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(TipoInsumo::orderBy('tipo_insumo_id','desc')->paginate(10), 200);
    }

    public function listar()
    {
        return response()->json(TipoInsumo::orderBy('tipo_insumo_id','desc')->get(), 200);
    }

    public function buscar($valor = '') {
        $tipo_insumos = TipoInsumo::where('nombre', 'like', '%' . $valor . '%')
                                ->orWhere('descripcion', 'like', '%' . $valor . '%')
                                ->orderBy('nombre')
                                ->paginate(10);
        return response()->json($tipo_insumos, 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json(TipoInsumo::create($request->all()), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(TipoInsumo::find($id), 200);
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
        $tipo_insumo = TipoInsumo::find($id);
        $tipo_insumo->update($request->all());
        return response()->json($tipo_insumo, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tipo_insumo = TipoInsumo::find($id);
        $tipo_insumo->delete();
        return response()->json($tipo_insumo, 200);
    }
}
