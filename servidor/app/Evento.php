<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Evento extends Model
{
    use SoftDeletes;
    protected $table = 'eventos';
    protected $primaryKey = 'evento_id';
    protected $fillable = [
        'tipo_evento_id',
        'parroquia_id',
        'nombre',
        'imagen',
        'fecha_evento',
        'direccion',
        'duracion_horas',
        'fecha_finaliza',
        'latitud',
        'longitud',
        'estado',
    ];
}
