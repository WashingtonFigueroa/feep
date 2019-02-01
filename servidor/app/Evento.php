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
        'imagen',
        'imagen',
        'fecha_evento',
        'direccion',
        'lugar',
        'duracion_hora',
        'fecha_finaliza',
        'latitud',
        'longitud',
        'estado',
    ];
}
