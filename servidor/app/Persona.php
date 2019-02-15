<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Persona extends Model
{
    use SoftDeletes;
    protected $table = 'personas';
    protected $primaryKey = 'persona_id';
    protected $fillable = [
        'organizacion_id',
        'parroquia_id',
        'cedula',
        'nombres',
        'genero',
        'ocupacion',
        'etnia',
        'fecha_nacimiento',
        'direccion',
        'telefono_fijo',
        'operadora',
        'contacto',
        'email',
    ];
    protected $dates = ['deleted_at'];
}
