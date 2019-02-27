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
        'nombre',
        'imagen',
        'representante',
        'contacto',
        'direccion',
        'descripcion',
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
