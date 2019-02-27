<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Ejecutora extends Model
{
    use SoftDeletes;
    protected $table = 'ejecutoras';
    protected $primaryKey = 'ejecutora_id';
    protected $fillable = [
        'proyecto_id',
        'organizacion_id',
        'tipo',
        'descripcion',
    ];
}
