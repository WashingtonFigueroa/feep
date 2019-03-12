<?php
namespace App\Http\Controllers\API;

use App\Barrio;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class BarrioController extends Controller
{
    public function index()
    {
        return response()->json(Barrio::orderBy('barrio_id','desc')->paginate(10), 200);
    }

    public function listar()
    {
        $barrio = Barrio::join('parroquias', 'parroquias.parroquia_id', '=', 'barrios.parroquia_id')
            ->join('ciudades', 'ciudades.ciudad_id', '=', 'parroquias.ciudad_id')
            ->selectRaw('barrios.*, ciudades.nombre as ciudad, parroquias.nombre as parroquia')
            ->orderBy('barrios.barrio_id', 'desc')
            ->get();
        return response()->json($barrio, 200);
    }

    public function store(Request $request)
    {
        $barrio = Barrio::create($request->all());
        return $this->listar();
    }

    public function show($id)
    {
        return response()->json(Barrio::find($id), 200);
    }

    public function update(Request $request, $id)
    {
        $barrio = Barrio::find($id);
        $barrio->update($request->all());
        return response()->json($barrio, 200);
    }

    public function destroy($id)
    {
        $barrio = Barrio::find($id);
        $barrio->delete();
        return response()->json($barrio, 200);
    }
}
