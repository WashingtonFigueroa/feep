<?php

namespace App\Http\Controllers\API;

use App\Organizacion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OrganizacionController extends Controller
{
    public function index()
    {
      // $organizaciones = Organizacion::orderBy('organizacion_id','desc')->paginate(10);



        $organizaciones = Organizacion::join('tipo_organizaciones', 'tipo_organizaciones.tipo_organizacion_id', '=', 'organizaciones.tipo_organizacion_id')
            ->join('actividades', 'actividades.actividad_id', '=', 'organizaciones.actividad_id')
            ->selectRaw('organizaciones.*, tipo_organizaciones.nombre as tipoorganizacion, actividades.nombre as actividad')
            ->orderBy('organizacion_id','desc')
            ->paginate(10);




        return response()->json($organizaciones, 200);
    }
    public function listar()
    {
        $organizacion = Organizacion::orderBy('organizacion_id','desc')->get();
        return response()->json($organizacion, 200);
    }
    public function store(Request $request)
    {
        $organizacion = new Organizacion();
        $organizacion->fill($request->all());
        if ($request->hasFile('imagen')) {
            $url = $request->file('imagen')->store('organizaciones');
            $organizacion->imagen = explode('/', $url)[1];
        }else {
            $organizacion->imagen = 'sin_imagen';
        }
        $organizacion->save();
        return response()->json($organizacion, 201);
    }
    public function show($id)
    {
        return response()->json(Organizacion::find($id));
    }
    public function update(Request $request, $id)
    {
        $organizacion = Organizacion::find($id);
        $organizacion->update($request->all());
        return response()->json($organizacion, 200);
    }
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
