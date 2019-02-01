<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Insumo extends Model
{
    use SoftDeletes;
    protected $table = 'insumos';
    protected $primaryKey = 'insumo_id';
    protected $fillable = [
        'tipo_id',
        'evento_id',
        'nombre',
        'cantidad',
        'fecha',
        'imagen',
        'receptor',
    ];
    protected $dates = ['deleted_at'];
}
