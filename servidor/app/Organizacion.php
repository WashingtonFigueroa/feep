<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Organizacion extends Model
{
    use SoftDeletes;
    protected $table = 'organizaciones';
    protected $primaryKey = 'organizacion_id';
    protected $fillable = [
        'tipo_organizacion_id',
        'actividad_id',
        'documento',
        'nombre',
        'caracteristica1',
        'caracteristica2',
        'caracteristica3',
        'imagen',
        'representante',
        'contacto',
        'direccion',
        'descripcion',
        'ministerio',
        'acuerdo',
        'mujeres',
        'ninias',
        'hombres',
        'ninios',
        'total',
        'latitud',
        'longitud',
        'precision',
    ];
    protected $dates = ['deleted_at'];
}
