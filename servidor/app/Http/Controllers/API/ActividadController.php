<?php

namespace App\Http\Controllers\API;
use App\Http\Controllers\Controller;

use App\Actividad;
use Illuminate\Http\Request;

class ActividadController extends Controller
{
    public function index()
    {
        $actividad = Actividad::orderBy('actividad_id', 'desc')->paginate(10);
        return response()->json($actividad, 200);
    }

    public function listar()
    {
        $actividad = Actividad::orderBy('actividad_id', 'desc')->get();
        return response()->json($actividad, 200);
    }

    public function buscar($valor = null) {
        if ($valor === null) {
            $actividad = Actividad::orderBy('actividad_id', 'desc')->paginate(10);
        } else {
            $actividad = Actividad::Where('nombre', 'like', '%' . $valor . '%')
                ->orWhere('descripcion', 'like', '%' . $valor . '%')
                ->orderBy('actividad_id', 'desc')
                ->paginate(10);
        }
        return response()->json($actividad, 200);
    }

    public function store(Request $request)
    {
        $actividad = new Actividad();
        $actividad->nombre = $request->input('nombre');
        $actividad->descripcion = $request->input('descripcion');
        $actividad->save();
        return response()->json($actividad, 201);
    }

    public function show($id)
    {
        return response()->json(Actividad::find($id));
    }

    public function update(Request $request, $id)
    {
        $actividad = Actividad::find($id);
        $actividad->update($request->all());
        return response()->json($actividad, 200);
    }

    public function destroy($id)
    {
        $actividad = Actividad::find($id);
        $actividad->delete($id);
        return response()->json(['message' => 'Actividad eliminada']);
    }
}
