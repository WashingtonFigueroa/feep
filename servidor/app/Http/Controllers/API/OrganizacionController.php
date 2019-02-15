<?php

namespace App\Http\Controllers\API;

use App\Organizacion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrganizacionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $organizaciones = Organizacion::orderBy('organizacion_id','desc')->paginate(10);
        return response()->json($organizaciones, 200);
    }
    public function listar()
    {
        $organizacion = Organizacion::orderBy('organizacion_id','desc')->get();
        return response()->json($organizacion, 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $organizacion = new Organizacion();
        if ($request->hasFile('imagen')) {
            $url = $request->file('imagen')->store('organizaciones');
            $organizacion->imagen = explode('/', $url)[1];
        }
        $organizacion->fill($request->all());
        $organizacion->save();
        return response()->json($organizacion, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Organizacion::find($id));
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
        $organizacion = Organizacion::find($id);
        $organizacion->update($request->all());
        return response()->json($organizacion, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $organizacion = Organizacion::find($id);
        $organizacion->delete();
        return response()->json($organizacion, 200);
    }

    public function imagen($url){
        return response()->file(storage_path('app/organizaciones/' . $url));
    }
}
