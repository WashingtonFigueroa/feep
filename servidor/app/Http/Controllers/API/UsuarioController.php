<?php

namespace App\Http\Controllers\API;

use App\Cargo;
use App\Usuario;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;
use Validator;
class UsuarioController extends Controller
{
/*    public function login() {
        $credentials = request()->only('cuenta', 'password');
        $rules = [
            'cuenta' => 'required',
            'password' => 'required|min:3',
        ];
        $validator = Validator::make($credentials, $rules);
        if ($validator->fails()) {
            return response()->json([
                'autenticado' => false,
                'mensaje' => $validator->messages()
            ], 500);
        }
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'autenticado' => false,
                    'mensaje' => 'Las credenciales son incorrectas'
                ], 401);
            }
        } catch (JWTException $e) {
            return response()->json([
                'autenticado' => false,
                'mensaje' => 'Error durante la autenticación, por favor intente nuevamente'],
                500);
        }
        $usuario = Usuario::where('cuenta', \request()->input('cuenta'))->first();
        return response()->json([
            'autenticado' => true,
            'usuario' => $usuario,
            'token' => $token,
            'mensaje' => 'Usuario autenticado exitosamente'
        ], 200);
    }*/

    private $successStatus = 200;
    private $createdStatus= 201;
    public function login() {
        if (Auth::attempt([
            'cuenta' => \request()->input('cuenta'),
            'password' => \request()->input('password')
        ])) {
            $usuario = Auth::user();
            $success['token'] = $usuario->createToken('FEPP')->accessToken;
            return response()->json($success, $this->successStatus);
        } else {
            return response()->json([
                'error' => 'Unauthorized',
                401
            ]);
        }
    }
    public function signup() {
        $input = \request()->all();
        $input['password'] = Hash::make($input['password']);
        $usuario = Usuario::create($input);
        $success['token'] = $usuario->createToken('FEPP')->accessToken;
        return response()->json([
            'success' => $success
        ], $this->createdStatus);
    }
    public function getUsuario() {
        $usuario = Auth::user();
        $usuario['cargo'] = Cargo::find($usuario->cargo_id);
        return response()->json([
            'success' => $usuario
        ], $this->successStatus);
    }
    public function index() {
        $usuarios = Usuario::join('cargos', 'cargos.cargo_id', '=', 'usuarios.cargo_id')
                            ->selectRaw('usuarios.*, cargos.nombre as cargo')
                            ->orderBy('usuarios.nombres')
                            ->paginate(10);
        return response()->json($usuarios, 200);
    }
    public function listar() {
        $usuarios = Usuario::orderBy('nombres')->get();
        return response()->json($usuarios, 200);
    }
    public function buscar($valor = '') {
        $usuarios = Usuario::where('nombres', 'like', '%' . $valor . '%')
                            ->orWhere('cuenta', 'like', '%' . $valor . '%')
                            ->orWhere('email', 'like', '%' . $valor . '%')
                            ->orderBy('nombres')
                            ->paginate(10);
        return response()->json($usuarios, 200);
    }
    public function store() {
        $usuario = new Usuario();
        $usuario->fill(request()->all());
        $usuario->password = Hash::make(request()->input('password'));
        $usuario->save();
        return response()->json($usuario, 201);
    }
    public function buscar_usuario ($id) {
        $usuario = Usuario::find($id);
        return response()->json($usuario, 200);
    }
    public function update($id) {
        $usuario = Usuario::find($id);
        $usuario->update(request()->all());
        return response()->json($usuario, 200);
    }
    public function destroy($id) {
        $usuario = Usuario::find($id);
        $usuario->delete();
        return response()->json($usuario, 200);
    }


}
