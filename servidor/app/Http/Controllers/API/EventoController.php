<?php

namespace App\Http\Controllers\API;

use App\Evento;
use App\Participante;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class EventoController extends Controller
{
    public function index()
    {
        $eventos = Evento::join('proyectos', 'proyectos.proyecto_id', '=', 'eventos.proyecto_id')
            ->join('usuarios', 'usuarios.usuario_id', '=', 'eventos.usuario_id')
            ->join('tipo_eventos', 'tipo_eventos.tipo_evento_id', '=', 'eventos.tipo_evento_id')
            ->join('barrios', 'barrios.barrio_id', '=', 'eventos.barrio_id')
                    ->selectRaw('eventos.*, proyectos.nombre as proyecto, usuarios.nombres as usuario, tipo_eventos.nombre as tipo_evento, barrios.nombre as parroquia')
                    ->orderBy('eventos.evento_id', 'desc')
                    ->paginate(10);
        return response()->json($eventos, 200);
    }
    public function listar()
    {
        $organizacion = Evento::orderBy('evento_id', 'desc')->get();
        return response()->json($organizacion, 200);
    }

    public function buscar($valor = '') {
        $eventos = Evento::join('proyectos', 'proyectos.proyecto_id', '=', 'eventos.proyecto_id')
            ->join('usuarios', 'usuarios.usuario_id', '=', 'eventos.usuario_id')
            ->join('tipo_eventos', 'tipo_eventos.tipo_evento_id', '=', 'eventos.tipo_evento_id')
            ->join('barrios', 'barrios.barrio_id', '=', 'eventos.barrio_id')
                ->where('proyectos.nombre', 'like', '%' . $valor . '%')
                ->orWhere('tipo_eventos.nombre', 'like', '%' . $valor . '%')
                ->orWhere('usuarios.nombres', 'like', '%' . $valor . '%')
                ->orWhere('eventos.nombre', 'like', '%' . $valor . '%')
            ->selectRaw('eventos.*, proyectos.nombre as proyecto, usuarios.nombres as usuario, tipo_eventos.nombre as tipo_evento, barrios.nombre as parroquia')
            ->orderBy('eventos.evento_id', 'desc')
                ->paginate(10);
        return response()->json($eventos, 200);
    }

    public function exporarExcel()
    {
        $eventos = Evento::join('proyectos', 'proyectos.proyecto_id', '=', 'eventos.proyecto_id')
            ->join('usuarios', 'usuarios.usuario_id', '=', 'eventos.usuario_id')
            ->join('tipo_eventos', 'tipo_eventos.tipo_evento_id', '=', 'eventos.tipo_evento_id')
            ->join('barrios', 'barrios.barrio_id', '=', 'eventos.barrio_id')
         //   ->where('eventos.estado','=',1)
            ->selectRaw('proyectos.nombre as proyecto, tipo_eventos.nombre as tipo_evento, eventos.nombre, usuarios.nombres as usuario, barrios.nombre as parroquia, eventos.direccion, eventos.fecha_evento, eventos.fecha_finaliza, eventos.duracion_horas')
            ->orderBy('eventos.evento_id', 'desc')
            ->get();
        return response()->json($eventos, 200);
    }

    public function store(Request $request)
    {
        if ($request->hasFile('imagen')) {
            $usuario = Auth::user();
            $url = $request->file('imagen')->store('eventos');
            $evento = new Evento();
            $evento->fill($request->all());
            $evento->usuario_id = $usuario->usuario_id;
            $evento->imagen = explode('/', $url)[1];
            $evento->save();
            return response()->json($evento, 201);
        } else {
            $usuario = Auth::user();
            $input = $request->all();
            $input['usuario_id'] = $usuario->usuario_id;
            $evento = Evento::create($input);
            return response()->json($evento, 201);
        }
    }
    public function show($id)
    {
        return response()->json(Evento::find($id), 200);
    }
    public function update(Request $request, $id)
    {
        $evento = Evento::find($id);
        $evento->update($request->all());
        return response()->json($evento, 200);
    }
    public function destroy($id)
    {
        $evento = Evento::find($id);
        $evento->delete();
        return response()->json($evento, 200);
    }
    public function imagen($url){
        return response()->file(storage_path('app/eventos/' . $url));
    }

    public function participantes($evento_id) {
        $participantes = Evento::join('participantes', 'participantes.evento_id', '=', 'eventos.evento_id')
                                ->join('personas', 'personas.persona_id', '=', 'participantes.persona_id')
                                ->join('organizaciones', 'organizaciones.organizacion_id', '=', 'personas.organizacion_id')
                                ->where('eventos.evento_id', '=', $evento_id)
                                ->selectRaw('personas.cedula, 
                                            personas.nombres,
                                            personas.genero,
                                            personas.etnia,
                                            personas.email,
                                            personas.contacto,
                                            organizaciones.nombre as organizacion')
                                ->orderBy('personas.nombres', 'asc')
                                ->get();
        $evento = Evento::find($evento_id);
        $data['evento'] = [
            'nombre' => $evento->nombre,
            'direccion' => $evento->direccion,
            'fecha_inicio' => $evento->fecha_evento,
            'fecha_fin' => $evento->fecha_finaliza
        ];
        $data['participantes'] = $participantes;
        return response()->json($data, 200);
    }
    public function cambiarImagen($id) {
        if (\request()->hasFile('imagen')) {
            $url = \request()->file('imagen')->store('eventos');
            $evento = Evento::find($id);
            $evento->imagen = explode('/', $url)[1]; ;
            $evento->save();
        }
        return $this->index();
    }

    /*
     * Cantidad de varones, mujeres de un evento
     *
     * */
    public function reporte($evento_id) {
        $data = [];
        $varones = Participante::join('eventos', 'eventos.evento_id', '=', 'participantes.evento_id')
                ->join('personas', 'personas.persona_id', '=', 'participantes.persona_id')
                ->where('participantes.evento_id', '=',$evento_id)
                ->where('personas.genero', '=', 'M')
                ->count();
        $mujeres = Participante::join('eventos', 'eventos.evento_id', '=', 'participantes.evento_id')
                ->join('personas', 'personas.persona_id', '=', 'participantes.persona_id')
                ->where('participantes.evento_id', '=',$evento_id)
                ->where('personas.genero', '=', 'F')
                ->count();
<<<<<<< HEAD
=======
        $afro = Participante::join('eventos', 'eventos.evento_id', '=', 'participantes.evento_id')
            ->join('personas', 'personas.persona_id', '=', 'participantes.persona_id')
            ->where('participantes.evento_id', '=',$evento_id)
            ->where('personas.etnia', '=', 'AFROECUATORIANO/A AFRODESCENDIENTE')
            ->count();
        $indigena = Participante::join('eventos', 'eventos.evento_id', '=', 'participantes.evento_id')
            ->join('personas', 'personas.persona_id', '=', 'participantes.persona_id')
            ->where('participantes.evento_id', '=',$evento_id)
            ->where('personas.etnia', '=', 'INDÍGENA')
            ->count();
        $mestizo = Participante::join('eventos', 'eventos.evento_id', '=', 'participantes.evento_id')
            ->join('personas', 'personas.persona_id', '=', 'participantes.persona_id')
            ->where('participantes.evento_id', '=',$evento_id)
            ->where('personas.etnia', '=', 'MESTIZO/A')
            ->count();
//        $ninios = Participante::join('eventos', 'eventos.evento_id', '=', 'participantes.evento_id')
//            ->join('personas', 'personas.persona_id', '=', 'participantes.persona_id')
//            ->selectRaw('participantes.*, personas.fecha_nacimiento as fecha_nacimiento')
//            ->where('participantes.evento_id', '=',$evento_id)
//            ->get();
//        $obj = response()->joson($ninios);

 //        echo($obj);

>>>>>>> 91aff1b1219e3fa958415ee2f5afe88020f081ef
        return response()->json([
            'varones' => $varones,
            'mujeres' => $mujeres,
            'afro' => $afro,
            'indigena' => $indigena,
            'mestizo' => $mestizo
        ]);
    }
}
