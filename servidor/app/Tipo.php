<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tipo extends Model
{
    use SoftDeletes;
    protected $table = 'tipos';
    protected $primaryKey = 'tipo_id';
    protected $fillable = [
        'tipo_suministro_id',
        'nombre',
        'descripcion',
    ];
    protected $dates = ['deleted_at'];
}
