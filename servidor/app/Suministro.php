<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Suministro extends Model
{
    use SoftDeletes;
    protected $table = 'suministros';
    protected $primaryKey = 'suministro_id';
    protected $fillable = [
        'tipo_insumo_id',
        'nombre',
        'descripcion',
    ];
    protected $dates = ['deleted_at'];
}
