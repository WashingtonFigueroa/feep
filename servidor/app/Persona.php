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
        'tipo_persona_id',
        'organizacion_id',
        'parroquia_id',
        'cedula',
        'nombres',
        'apellidos',
        'genero',
        'ocupacion',
        'fecha_nacimiento',
        'direccion',
        'telefono_fijo',
        'operadora',
        'contacto',
        'cuenta',
        'email',
        'etnia',
    ];
    protected $dates = ['deleted_at'];
}
