<?php

namespace App\Http\Controllers\API;

use App\Suministro;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class SuministroController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $suministros = Suministro::join('tipo_insumos', 'tipo_insumos.tipo_insumo_id', '=', 'suministros.tipo_insumo_id')
                                ->selectRaw('suministros.*, tipo_insumos.nombre as tipo_insumo')
                                ->orderBy('nombre')
                                ->paginate(10);
        return response()->json($suministros, 200);
    }

    public function listar() {
        $suministros = Suministro::orderBy('nombre')->get();
        return response()->json($suministros, 200);
    }

    public function buscar($valor = '') {
        $suministros = Suministro::join('tipo_insumos', 'tipo_insumos.tipo_insumo_id', '=', 'suministros.tipo_insumo_id')
            ->where('suministros.nombre', 'like', '%' . $valor . '%')
            ->orWhere('suministros.descripcion', 'like', '%' . $valor . '%')
            ->selectRaw('suministros.*, tipo_insumos.nombre as tipo_insumo')
            ->orderBy('suministros.nombre')
            ->paginate(10);
        return response()->json($suministros, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json(Suministro::create($request->all()), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Suministro::find($id), 200);
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
        $suministro = Suministro::find($id);
        $suministro->update($request->all());
        return response()->json($suministro, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $suministro = Suministro::find($id);
        $suministro->delete();
        return response()->json($suministro, 200);
    }
}
