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
        'barrio_id',
        'tipo',
        'nombre',
        'imagen',
        'inicio',
        'fin',
        'estado',
    ];
}
