<?php

namespace App\Http\Controllers\API;

use App\Tipo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TipoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tipos = Tipo::join('tipo_suministros', 'tipo_suministros.tipo_suministro_id', '=', 'tipos.tipo_suministro_id')
                        ->selectRaw('tipos.*, tipo_suministros.nombre as tipo_suministro')
                        ->orderBy('tipos.nombre')
                        ->paginate(10);
        return response()->json($tipos, 200);
    }
    public function listar()
    {
        return response()->json(Tipo::orderBy('nombre')->get(), 200);
    }
    public function buscar($valor = '') {
        $tipos = Tipo::join('tipo_suministros', 'tipo_suministros.tipo_suministro_id', '=', 'tipos.tipo_suministro_id')
            ->where('tipos.nombre', 'like', '%' . $valor . '%')
            ->orWhere('tipos.descripcion', 'like', '%' . $valor . '%')
            ->selectRaw('tipos.*, tipo_suministros.nombre as tipo_suministro')
            ->orderBy('tipos.nombre')
            ->paginate(10);
        return response()->json($tipos, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json(Tipo::create($request->all()), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Tipo::find($id), 200);
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
        $tipo = Tipo::find($id);
        $tipo->update($request->all());
        return response()->json($tipo, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tipo = Tipo::find($id);
        $tipo->delete();
        return response()->json($tipo, 200);
    }
}
