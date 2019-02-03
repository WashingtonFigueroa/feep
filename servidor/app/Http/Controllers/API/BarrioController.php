<?php

namespace App\Http\Controllers\API;

use App\Barrio;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BarrioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Barrio::orderBy('nombre')->paginate(10), 200);
    }

    public function listar()
    {
        $barrio = Barrio::orderBy('nombre')->get();
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
        $barrio = Barrio::create($request->all());
        return response()->json($barrio, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Barrio::find($id), 200);
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
        $barrio = Barrio::find($id);
        $barrio->update($request->all());
        return response()->json($barrio, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $barrio = Barrio::find($id);
        $barrio->delete();
        return response()->json($barrio, 200);
    }
}
