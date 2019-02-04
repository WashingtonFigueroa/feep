<?php

namespace App\Http\Controllers\API;

use App\AsignacionEvento;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AsignacionEventoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $asignacion_eventos = AsignacionEvento::join('eventos', 'eventos.evento_id', '=', 'asignacion_eventos.evento_id')
                                                ->join('usuarios', 'usuarios.usuario_id', '=', 'asignacion_eventos.usuario_id')
                                                ->selectRaw('asignacion_eventos.*, eventos.nombre as evento, usuarios.*')
                                                ->orderBy('usuarios.nombres')
                                                ->paginate(10);
        return response()->json($asignacion_eventos, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json(AsignacionEvento::create($request->all()), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $asignacion_evento = AsignacionEvento::find($id);
        return response()->json($asignacion_evento, 200);
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
        $asignacion_evento = AsignacionEvento::find($id);
        $asignacion_evento->update($request->all());
        return response()->json($asignacion_evento, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $asignacion_evento = AsignacionEvento::find($id);
        $asignacion_evento->delete();
        return response()->json($asignacion_evento, 200);
    }
}
