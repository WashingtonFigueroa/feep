<?php

namespace App\Http\Controllers\API;

use App\Insumo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class InsumoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $insumos = Insumo::join('eventos','eventos.evento_id','=','insumos.evento_id')
            ->join('tipos','tipos.tipo_id','=','insumos.tipo_id')
            ->selectRaw('insumos.*,eventos.nombre as evento, tipos.nombre as tipo')
            ->orderBy('insumos.insumo_id','desc')
            ->paginate(10);
        return response()->json($insumos,200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $insumo = new Insumo();
        $insumo->fill($request->all());
        if ($request->hasFile('imagen')) {
            $url = $request->file('imagen')->store('insumos');
            $insumo->imagen = explode('/', $url)[1];
        }else {
            $insumo->imagen = 'sin_imagen';
        }
        $insumo->save();
        return response()->json($insumo, 201);
    }
    public function show($id)
    {
        return response()->json(Insumo::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $insumo = Insumo::find($id);
        $insumo->update($request->all());
        return response()->json($insumo, 200);
    }
    public function destroy($id)
    {
        $insumo = Insumo::find($id);
        $insumo->delete();
        return response()->json($insumo, 200);
    }
    public function imagen($url){
        return response()->file(storage_path('app/insumos/' . $url));
    }
    public function cambiarImagen($id) {
        if (\request()->hasFile('imagen')) {
            $url = \request()->file('imagen')->store('insumos');
            $insumo = Insumo::find($id);
            $insumo->imagen = explode('/', $url)[1]; ;
            $insumo->save();
        }
        return $this->index();
    }
}
