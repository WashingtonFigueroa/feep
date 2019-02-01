<?php

namespace App\Http\Controllers\API;

use App\Anexo;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AnexoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(Anexo::get(), 200);
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
            $url = $request->file('imagen')->store('anexos');
            $anexo = new Anexo();
            $anexo->fill($request->all());
            $anexo->imagen = explode('/', $url)[1];
            $anexo->save();
            return response()->json($anexo, 201);
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
