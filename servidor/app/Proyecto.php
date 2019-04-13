<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Proyecto extends Model
{
    use SoftDeletes;
    protected $table = 'proyectos';
    protected $primaryKey = 'proyecto_id';
    protected $fillable = [
        'tipo_proyecto_id',
        'nombre',
        'ubicacion',
        'imagen',
        'inicio',
        'fin',
        'estado',
    ];
}
