<?php

namespace App\Http\Controllers\API;

use App\Cargo;
use App\Privilegio;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PrivilegioController extends Controller
{
    private $privilegios = [
        'cargos' => [
            [
                'acceso' => 'cargos/listar'
            ]
        ],
        'privilegios' => [
            [
                'acceso' => 'privilegios'
            ]
        ],
        'asignar-proyectos' => [
            [
                'acceso' => 'asignacioneventos/listar'
            ]
        ],
        'personas' => [
            [
                'acceso' => 'miembros/listar'
            ]
        ],
        'proyectos' => [
            [
                'acceso' => 'proyectos/listar'
            ]
        ],
        'inscripciones' => [
            [
                'acceso' => 'inscripciones/listar'
            ]
        ],
        'subir-anexos' => [
            [
                'acceso' => 'anexos/listar'
            ]
        ],
        'organizaciones' => [
            [
                'acceso' => 'organizaciones/listar'
            ]
        ],
        'eventos' => [
            [
                'acceso' => 'eventos/listar'
            ]
        ],
        'asignar-insumos' => [
            [
                'acceso' => 'asignaciones/listar'
            ]
        ],
        'configuracion' => [
            [
                'acceso' => 'tipoorganizacion/listar'
            ],
            [
                'acceso' => 'tipoproyectos/listar'
            ],
            [
                'acceso' => 'tipoeventos/listar'
            ],
            [
                'acceso' => 'actividades/listar'
            ],
            [
                'acceso' => 'insumos/tipo-insumos/listar'
            ],
            [
                'acceso' => 'ubicaciones/listar'
            ],
            [
                'acceso' => 'usuarios/listar'
            ]
        ]
    ];
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $privilegio = $request->input('privilegio');
        $accesos = $this->privilegios[$privilegio];
        foreach ($accesos as $acceso) {
            $existe = Privilegio::where('acceso', '=', $acceso['acceso'])->exists();
            if ($existe) {
                $data = Privilegio::where('acceso', '=', $acceso['acceso'])->first();
                $data->activo = !$data->activo;
                $data->save();
            } else {
                Privilegio::create([
                    'acceso' => $acceso['acceso'],
                    'activo' => true
                ]);
            }
        }
        return response()->json([
            'exito' => 'Privilegio actualizado'
        ], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
