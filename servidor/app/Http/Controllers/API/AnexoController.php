<?php

namespace App\Http\Controllers\API;

use App\Anexo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AnexoController extends Controller
{
    public function index()
    {
        $eventos = Anexo::join('eventos', 'eventos.evento_id', '=', 'anexos.evento_id')
            ->selectRaw('anexos.*, eventos.nombre as evento')
            ->orderBy('anexos.anexo_id', 'desc')
            ->paginate(10);
        return response()->json($eventos, 200);
    }
    public function listar()
    {
        $anexo = Anexo::orderBy('anexo_id', 'desc')->get();
        return response()->json($anexo, 200);
    }

    public function buscar($valor = '') {
        $proyecto = Anexo::join('eventos', 'eventos.evento_id', '=', 'anexos.evento_id')
            ->selectRaw('anexos.*, eventos.*')
            ->where('anexos.descripcion', 'like', '%' . $valor . '%')
            ->orderBy('anexos.anexo_id', 'desc')
            ->paginate(10);
        return response()->json($proyecto, 200);
    }
    public function store(Request $request)
    {
        $anexo = new Anexo();
        $anexo->fill($request->all());
        if ($request->hasFile('archivo')) {
            $url = $request->file('archivo')->store('anexos');
            $anexo->archivo = explode('/', $url)[1];
        }else {
            $anexo->archivo = 'sin_imagen';
        }
        $anexo->save();
        return response()->json($anexo, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Anexo::find($id), 200);
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
        $anexo = Anexo::find($id);
        $anexo->update($request->all());
        return response()->json($anexo, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $anexo = Anexo::find($id);
        $anexo->delete();
        return response()->json($anexo, 200);
    }

    public function imagen($url){
        return response()->file(storage_path('app/anexos/' . $url));
    }
}
