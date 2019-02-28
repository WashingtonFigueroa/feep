<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TipoProyecto extends Model
{
    use SoftDeletes;
    protected $table = 'tipo_proyectos';
    protected $primaryKey = 'tipo_proyecto_id';
    protected $fillable = [
        'nombre',
        'descripcion',
    ];
    protected $dates = ['deleted_at'];
}
