<?php

namespace App\Http\Controllers\API;

use App\Insumo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InsumoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $insumos = Insumo::join('eventos','eventos.evento_id','=','insumos.evento_id')
            ->join('tipos','tipos.tipo_id','=','insumos.tipo_id')
            ->selectRaw('insumos.*,eventos.nombre as evento, tipos.nombre as tipo')
            ->orderBy('insumos.insumo_id','desc')
            ->paginate(10);
        return response()->json($insumos,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json(Insumo::create($request->all()), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Insumo::find($id), 200);
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
        $insumo = Insumo::find($id);
        $insumo->update($request->all());
        return response()->json($insumo, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $insumo = Insumo::find($id);
        $insumo->delete();
        return response()->json($insumo, 200);
    }
}
