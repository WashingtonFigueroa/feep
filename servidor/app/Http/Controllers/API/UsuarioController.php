<?php

namespace App\Http\Controllers\API;

use App\Usuario;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UsuarioController extends Controller
{
    public function login() {

    }
    public function index() {
        $usuarios = Usuario::orderBy('nombres')->paginate(10);
        return response()->json($usuarios, 200);
    }
    public function store() {
        $usuario = Usuario::create(request()->all());
        return response()->json($usuario, 201);
    }
    public function update($id) {
        $usuario = Usuario::find($id);
        $usuario->update(request()->all());
        return response()->json($usuario, 20);
    }
    public function destroy($id) {
        $usuario = Usuario::find($id);
        $usuario->delete();
        return response()->json($usuario, 200);
    }


}
