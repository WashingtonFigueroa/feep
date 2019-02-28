<?php

namespace App\Http\Controllers\API;

use App\Evento;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EventoController extends Controller
{
    public function index()
    {
        $eventos = Evento::join('proyectos', 'proyectos.proyecto_id', '=', 'eventos.proyecto_id')
            ->join('tipo_eventos', 'tipo_eventos.tipo_evento_id', '=', 'eventos.tipo_evento_id')
                            ->join('barrios', 'barrios.barrio_id', '=', 'eventos.barrio_id')
                            ->selectRaw('eventos.*, proyectos.nombre as proyecto, tipo_eventos.nombre as tipo_evento, barrios.nombre as parroquia')
                            ->orderBy('eventos.fecha_evento', 'desc')
                            ->paginate(10);
        return response()->json($eventos, 200);
    }
    public function listar()
    {
        $organizacion = Evento::orderBy('evento_id', 'desc')->get();
        return response()->json($organizacion, 200);
    }

    public function buscar($valor = '') {
        $eventos = Evento::join('proyectos', 'proyectos.proyecto_id', '=', 'eventos.proyecto_id')
            ->join('tipo_eventos', 'tipo_eventos.tipo_evento_id', '=', 'eventos.tipo_evento_id')
            ->join('barrios', 'barrios.barrio_id', '=', 'eventos.barrio_id')
            ->selectRaw('eventos.*, proyectos.nombre as proyecto, tipo_eventos.nombre as tipo_evento, barrios.nombre as parroquia')
            ->where('eventos.nombre', 'like', '%' . $valor . '%')
            ->orWhere('eventos.direccion', 'like', '%' . $valor . '%')
            ->orderBy('eventos.fecha_evento', 'desc')
            ->paginate(10);
        return response()->json($eventos, 200);
    }
    public function store(Request $request)
    {
        if ($request->hasFile('imagen')) {
            $url = $request->file('imagen')->store('eventos');
            $evento = new Evento();
            $evento->fill($request->all());
            $evento->imagen = explode('/', $url)[1];
            $evento->save();
            return response()->json($evento, 201);
        } else {
            $evento = Evento::create($request->all());
            return response()->json($evento, 201);
        }
    }
    public function show($id)
    {
        return response()->json(Evento::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $evento = Evento::find($id);
        $evento->update($request->all());
        return response()->json($evento, 200);
    }
    public function destroy($id)
    {
        $evento = Evento::find($id);
        $evento->delete();
        return response()->json($evento, 200);
    }
    public function imagen($url){
        return response()->file(storage_path('app/eventos/' . $url));
    }
}
