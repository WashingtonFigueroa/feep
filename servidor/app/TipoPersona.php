<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TipoPersona extends Model
{
    use SoftDeletes;
    protected $table = 'tipo_personas';
    protected $primaryKey = 'tipo_persona_id';
    protected $fillable = [
        'nombre',
        'descripcion',
    ];
    protected $dates = "deleted_at";
}
