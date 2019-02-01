<?php

namespace App\Http\Controllers\API;

use App\TipoPersona;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TipoPersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tipo_persona = TipoPersona::orderBy('nombre')->paginate(10);
        return response()->json($tipo_persona, 200);
    }
    public function listar()
    {
        $tipo_personas = TipoPersona::orderBy('nombre')->get();
        return response()->json($tipo_personas, 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if ($request->hasFile('imagen')) {
            $url = $request->file('imagen')->store('tipo_personas');
            $tipo_persona = new TipoPersona();
            $tipo_persona->fill($request->all());
            $tipo_persona->imagen = explode('/', $url)[1];
            $tipo_persona->save();
            return response()->json($tipo_persona, 201);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(TipoPersona::find($id));
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
        $tipo_persona = TipoPersona::find($id);
        $tipo_persona->update($request->all());
        return response()->json($tipo_persona, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $tipo_persona = TipoPersona::find($id);
        $tipo_persona->delete();
        return response()->json($tipo_persona, 200);
    }
}
