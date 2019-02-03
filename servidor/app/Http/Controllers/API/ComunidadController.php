<?php

namespace App\Http\Controllers\API;

use App\Comunidad;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ComunidadController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Comunidad::orderBy('nombre')->paginate(10), 200);
    }
    public function listar()
    {
        $barrio = Comunidad::orderBy('nombre')->get();
        return response()->json($barrio, 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $comunidad = Comunidad::create($request->all());
        return response()->json($comunidad, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Comunidad::find($id), 200);
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
        $comunidad = Comunidad::find($id);
        $comunidad->update($request->all());
        return response()->json($comunidad, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $comunidad = Comunidad::find($id);
        $comunidad->delete();
        return response()->json($comunidad, 200);
    }
}
