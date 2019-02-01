<?php

namespace App\Http\Controllers\API;

use App\OrganizacionEvento;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrganizacionEventoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(OrganizacionEvento::orderBy('fecha', 'desc')->paginate(10), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $organizacion_evento = OrganizacionEvento::create($request->all());
        return response()->json($organizacion_evento, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(OrganizacionEvento::find($id), 200);
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
        $organizacion_evento = OrganizacionEvento::find($id);
        $organizacion_evento->update($request->all());
        return response()->json($organizacion_evento, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $organizacion_evento = OrganizacionEvento::find($id);
        $organizacion_evento->delete();
        return response()->json($organizacion_evento, 200);
    }
}
