<?php

namespace App\Http\Controllers\API;

use App\TipoEvento;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TipoEventoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tipo_eventos = TipoEvento::orderBy('nombre')->paginate(10);
        return response()->json($tipo_eventos, 200);
    }
    public function listar()
    {
        $tipo_eventos = TipoEvento::orderBy('nombre')->get();
        return response()->json($tipo_eventos, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json(TipoEvento::create($request->all()), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(TipoEvento::find($id), 200);
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
        $tipo_evento = TipoEvento::find($id);
        $tipo_evento->update();
        return response()->json($tipo_evento, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tipo_evento = TipoEvento::find($id);
        $tipo_evento->delete();
        return response()->json($tipo_evento, 200);
    }
}
