<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TipoSuministro extends Model
{
    use SoftDeletes;
    protected $table = 'tipo_suministros';
    protected $primaryKey = 'tipo_suministro_id';
    protected $fillable = [
        'suministro_id',
        'nombre',
        'descripcion',
    ];
    protected $dates = ['deleted_at'];
}
