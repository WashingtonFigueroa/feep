<?php

namespace App\Http\Controllers\API;

use App\Evento;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EventoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $eventos = Evento::join('tipo_eventos', 'tipo_eventos.tipo_evento_id', '=', 'eventos.tipo_evento_id')
                            ->join('parroquias', 'parroquias.parroquia_id', '=', 'eventos.parroquia_id')
                            ->selectRaw('eventos.*, tipo_eventos.nombre as tipo_evento, parroquias.nombre as parroquia')
                            ->orderBy('eventos.fecha_evento', 'desc')
                            ->paginate(10);
        return response()->json($eventos, 200);
    }
    public function listar()
    {
        $organizacion = Evento::orderBy('evento_id', 'desc')->get();
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

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Evento::find($id), 200);
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
        $evento = Evento::find($id);
        $evento->update($evento);
        return response()->json($evento, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
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
