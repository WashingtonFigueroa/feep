<?php

namespace App\Http\Controllers\API;

use App\Participante;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ParticipanteController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $personas= Participante::join('organizaciones','organizaciones.organizacion_id','=','personas.organizacion_id')
            ->join('parroquias','parroquias.parroquia_id','=','personas.parroquia_id')
            ->selectRaw('personas.*, organizaciones.nombre as organizacion,parroquias.nombre as parroquia')
            ->orderBy('personas.persona_id','desc')
            ->paginate(10);
        return response()->json($personas, 200);
        return response()->json(Participante::paginate(), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $participante = Participante::create($request->all());
        return response()->json($participante, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Participante::find($id), 200);
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
        $participante = Participante::find($id);
        $participante->update($request->all());
        return response()->json($participante, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $participante = Participante::find($id);
        $participante->delete();
        return response()->json($participante, 200);
    }
}
