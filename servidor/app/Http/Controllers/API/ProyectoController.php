<?php

namespace App\Http\Controllers\API;

use App\Proyecto;
use Illuminate\Http\Request;

use App\Http\Controllers\Controller;

class ProyectoController extends Controller
{
    public function index()
    {
        $proyecto = Proyecto::join('barrios', 'barrios.barrio_id', '=', 'proyecto.barrio_id')
            ->selectRaw('proyecto.*, barrios.nombre as barrio')
            ->orderBy('proyecto.proyecto_id', 'desc')
            ->paginate(10);
        return response()->json($proyecto, 200);
    }
    public function listar()
    {
        $proyecto = Proyecto::orderBy('proyecto_id', 'desc')->get();
        return response()->json($proyecto, 200);
    }

    public function buscar($valor = '') {
        $proyecto = Proyecto::join('barrios', 'barrios.barrio_id', '=', 'proyecto.barrio_id')
            ->selectRaw('proyecto.*, barrios.nombre as barrio')
            ->where('proyecto.nombre', 'like', '%' . $valor . '%')
            ->orWhere('proyecto.inicio', 'like', '%' . $valor . '%')
            ->orWhere('proyecto.fin', 'like', '%' . $valor . '%')
            ->orWhere('barrio.nombre', 'like', '%' . $valor . '%')
            ->orderBy('proyecto.proyecto_id', 'desc')
            ->paginate(10);
        return response()->json($proyecto, 200);
    }
    public function store(Request $request)
    {
        if ($request->hasFile('imagen')) {
            $url = $request->file('imagen')->store('proyectos');
            $proyecto = new Proyecto();
            $proyecto->fill($request->all());
            $proyecto->imagen = explode('/', $url)[1];
            $proyecto->save();
            return response()->json($proyecto, 201);
        } else {
            $proyecto = Proyecto::create($request->all());
            return response()->json($proyecto, 201);
        }
    }
    public function show($id)
    {
        return response()->json(Proyecto::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $proyecto = Proyecto::find($id);
        $proyecto->update($proyecto);
        return response()->json($proyecto, 200);
    }
    public function destroy($id)
    {
        $proyecto = Proyecto::find($id);
        $proyecto->delete();
        return response()->json($proyecto, 200);
    }
    public function imagen($url){
        return response()->file(storage_path('app/proyectos/' . $url));
    }
}
