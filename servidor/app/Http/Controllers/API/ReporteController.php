<?php

namespace App\Http\Controllers\API;

use App\Evento;
use App\Proyecto;
use App\Insumo;
use App\Participante;
use App\Organizacion;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReporteController extends Controller
{
    public function index()
    {
        $eventos = Evento::join('proyectos', 'proyectos.proyecto_id', '=', 'eventos.proyecto_id')
            ->join('usuarios', 'usuarios.usuario_id', '=', 'eventos.usuario_id')
            ->join('tipo_eventos', 'tipo_eventos.tipo_evento_id', '=', 'eventos.tipo_evento_id')
            ->join('barrios', 'barrios.barrio_id', '=', 'eventos.barrio_id')
            ->selectRaw('eventos.*, proyectos.nombre as proyecto, usuarios.nombres as usuario, tipo_eventos.nombre as tipo_evento, barrios.nombre as parroquia')
            ->orderBy('eventos.evento_id', 'desc')
            ->paginate(5);
        return response()->json($eventos, 200);
    }

    public function beneficiarios($start, $end)
    {
        $personas= Participante::join('eventos','eventos.evento_id','=','participantes.evento_id')
            ->join('proyectos','proyectos.proyecto_id','=','eventos.proyecto_id')
            ->join('personas','personas.persona_id','=','participantes.persona_id')
            ->join('organizaciones', 'organizaciones.organizacion_id', '=', 'personas.organizacion_id')
            ->whereBetween('proyectos.fin', [$start, $end])
            ->selectRaw('proyectos.nombre as proyecto, participantes.*, eventos.nombre as evento, personas.nombres as persona, personas.genero as genero, personas.fecha_nacimiento as edad, organizaciones.nombre as organizacion')
            ->orderBy('participantes.participante_id','desc')
            ->paginate(10);
        return response()->json($personas, 200);
    }
    public function indexbeneficiarios()
    {
        $personas= Participante::join('eventos','eventos.evento_id','=','participantes.evento_id')
            ->join('proyectos','proyectos.proyecto_id','=','eventos.proyecto_id')
            ->join('personas','personas.persona_id','=','participantes.persona_id')
            ->join('organizaciones', 'organizaciones.organizacion_id', '=', 'personas.organizacion_id')
            ->selectRaw('proyectos.nombre as proyecto, participantes.*, eventos.nombre as evento, distinct personas.nombres as persona, personas.genero as genero, personas.fecha_nacimiento as edad, organizaciones.nombre as organizacion')
            ->orderBy('participantes.participante_id','desc')
            ->paginate(10);
        return response()->json($personas, 200);
    }
    public function buscar($valor = null) {
        if ($valor === null) {
            $personas= Participante::join('eventos','eventos.evento_id','=','participantes.evento_id')
                ->join('proyectos','proyectos.proyecto_id','=','eventos.proyecto_id')
                ->join('personas','personas.persona_id','=','participantes.persona_id')
                ->join('organizaciones', 'organizaciones.organizacion_id', '=', 'personas.organizacion_id')
                ->selectRaw('proyectos.nombre as proyecto, participantes.*, eventos.nombre as evento, personas.nombres as persona, personas.genero as genero, personas.fecha_nacimiento as edad, organizaciones.nombre as organizacion')
                ->orderBy('participantes.participante_id','desc')
                ->paginate(10);
        } else {
            $personas = Participante::join('eventos','eventos.evento_id','=','participantes.evento_id')
                ->join('proyectos','proyectos.proyecto_id','=','eventos.proyecto_id')
                ->join('personas','personas.persona_id','=','participantes.persona_id')
                ->join('organizaciones', 'organizaciones.organizacion_id', '=', 'personas.organizacion_id')
                ->Where('proyectos.nombre', 'like', '%' . $valor . '%')
                ->orWhere('eventos.nombre', 'like', '%' . $valor . '%')
                ->orWhere('personas.nombres', 'like', '%' . $valor . '%')
                ->orWhere('organizaciones.nombre', 'like', '%' . $valor . '%')
                ->orWhere('personas.genero', 'like', '%' . $valor . '%')
                ->orWhere('genero', 'like', '%' . $valor . '%')
                ->selectRaw('proyectos.nombre as proyecto, participantes.*, eventos.nombre as evento, personas.nombres as persona, personas.genero as genero, personas.fecha_nacimiento as edad, organizaciones.nombre as organizacion')
                ->orderBy('participantes.participante_id','desc')
                ->paginate(10);
        }
        return response()->json($personas, 200);
    }
    public function num_asistencia()
    {
        $num= Participante::count()
            ->where('evento_id'== 1);
        echo 'holappp';
        return response()->json('hols', 200);
    }
    public function excelProyectos()
    {
        $proyecto = Proyecto::join('tipo_proyectos', 'tipo_proyectos.tipo_proyecto_id', '=', 'proyectos.tipo_proyecto_id')
            ->selectRaw('tipo_proyectos.nombre as tipo, proyectos.nombre as nombre, proyectos.ubicacion, proyectos.inicio, proyectos.fin')
            ->orderBy('proyectos.proyecto_id', 'desc')
            ->get();
        return response()->json($proyecto, 200);
    }
    public function excelBeneficiarios()
    {
        $beneficiarios = Participante::join('eventos','eventos.evento_id','=','participantes.evento_id')
            ->join('personas','personas.persona_id','=','participantes.persona_id')
            ->join('organizaciones', 'organizaciones.organizacion_id', '=', 'personas.organizacion_id')
            ->selectRaw('eventos.nombre as evento, personas.nombres as persona, organizaciones.nombre as organizacion, participantes.observacion as observacion')
            ->orderBy('participantes.participante_id', 'desc')
            ->get();
        return response()->json($beneficiarios, 200);
    }
    public function excelOrganizaciones()
    {
        $organizaciones = Organizacion::join('tipo_organizaciones', 'tipo_organizaciones.tipo_organizacion_id', '=', 'organizaciones.tipo_organizacion_id')
            ->join('actividades', 'actividades.actividad_id', '=', 'organizaciones.actividad_id')
            ->selectRaw('tipo_organizaciones.nombre as tipo, actividades.nombre as actividad, organizaciones.documento as doc, organizaciones.nombre as nom, organizaciones.caracteristica1 as c1, organizaciones.caracteristica2 as c2, organizaciones.caracteristica3 as c3, organizaciones.representante as rep, organizaciones.contacto as cont, organizaciones.direccion as direc, organizaciones.email amail, organizaciones.ministerio as min, organizaciones.acuerdo as acu, organizaciones.mujeres as mujeres, organizaciones.ninias as ninias, organizaciones.hombres as hombres, organizaciones.ninios as ninios, organizaciones.total as total, organizaciones.facebook as facebook, organizaciones.twitter as twitter, organizaciones.watshap as watshap, organizaciones.instragram as instragram, organizaciones.interna, organizaciones.externa')
                ->orderBy('organizacion_id','desc')
            ->get();
        return response()->json($organizaciones, 200);
    }
    public function excelPorInsumo($dato, $start, $end)
    {
        $insumos = Insumo::join('eventos','eventos.evento_id','=','insumos.evento_id')
            ->join('tipos','tipos.tipo_id','=','insumos.tipo_id')
            ->whereBetween('insumos.created_at', [$start, $end])
            ->selectRaw('eventos.nombre as evento, tipos.nombre as tipo, insumos.cantidad as cantidad, insumos.fecha as fechas, insumos.receptor as receptor')
            ->where('tipos.nombre','=', $dato)
            ->orderBy('insumos.insumo_id','desc')
            ->get();
        return response()->json($insumos, 200);
    }
    public function excelPorParroquia($dato, $start, $end)
    {
        $eventos = Evento::join('proyectos', 'proyectos.proyecto_id', '=', 'eventos.proyecto_id')
            ->join('usuarios', 'usuarios.usuario_id', '=', 'eventos.usuario_id')
            ->join('tipo_eventos', 'tipo_eventos.tipo_evento_id', '=', 'eventos.tipo_evento_id')
            ->join('barrios', 'barrios.barrio_id', '=', 'eventos.barrio_id')
            ->where('eventos.barrio_id','=',$dato)
            ->whereBetween('eventos.fecha_evento', [$start, $end])
            ->selectRaw('proyectos.nombre as proyecto, tipo_eventos.nombre as tipo_evento, eventos.nombre, usuarios.nombres as usuario, barrios.nombre as parroquia, eventos.direccion, eventos.fecha_evento, eventos.fecha_finaliza, eventos.duracion_horas')
            ->orderBy('eventos.evento_id', 'desc')
            ->get();
        return response()->json($eventos, 200);
    }
}
