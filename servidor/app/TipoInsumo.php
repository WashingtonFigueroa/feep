<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TipoInsumo extends Model
{
    use SoftDeletes;
    protected $table = 'tipo_insumos';
    protected $primaryKey = 'tipo_insumo_id';
    protected $fillable = [
        'nombre',
        'descripcion',
    ];
    protected $dates = ['deleted_at'];
}
