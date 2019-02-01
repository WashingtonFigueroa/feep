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
        'imagen',
        'descripcion',
        'zona',
        'contacto',
        'cuenta',
        'representante',
    ];
    protected $dates = ['deleted_at'];
}
