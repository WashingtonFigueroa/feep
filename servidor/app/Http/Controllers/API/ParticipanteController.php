<?php

namespace App\Http\Controllers\API;

use App\Persona;
use App\Participante;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ParticipanteController extends Controller
{
    public function index()
    {
        $personas= Participante::join('eventos','eventos.evento_id','=','participantes.evento_id')
            ->join('personas','personas.persona_id','=','participantes.persona_id')
            ->selectRaw('participantes.*, eventos.nombre as evento, personas.nombres as persona')
            ->orderBy('participantes.participante_id','desc')
            ->paginate(10);
        return response()->json($personas, 200);
    }
    public function store(Request $request)
    {
        $participante = null;
        if ($request->input('persona_id') === 0) {
            $persona_id = Persona::create($request->all())->persona_id;
            $participante = new Participante();
            $participante->fill($request->all());
            $participante->persona_id = $persona_id;
            $participante->save();
        } else {
            $participante = Participante::create($request->all());
        }

        return response()->json($participante, 201);


//        $participante = Participante::create($request->all());
//        return response()->json($participante, 201);
    }
    public function buscar($valor = '') {
        $participante = Participante::join('eventos','eventos.evento_id','=','participantes.evento_id')
            ->join('personas','personas.persona_id','=','participantes.persona_id')
            ->where('eventos.nombre', 'like', '%' . $valor . '%')
            ->orWhere('personas.nombres', 'like', '%' . $valor . '%')
            ->orWhere('participantes.observacion', 'like', '%' . $valor . '%')
            ->selectRaw('participantes.*, eventos.nombre as evento, personas.nombres as persona')
            ->orderBy('participantes.participante_id')
            ->paginate(10);
        return response()->json($participante, 200);
    }
    public function show($id)
    {
        return response()->json(Participante::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $participante = Participante::find($id);
        $participante->update($request->all());
        return response()->json($participante, 200);
    }
    public function destroy($id)
    {
        $participante = Participante::find($id);
        $participante->delete();
        return response()->json($participante, 200);
    }
}
