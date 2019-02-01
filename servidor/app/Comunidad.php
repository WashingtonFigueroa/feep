<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Comunidad extends Model
{
    use SoftDeletes;
    protected $table = 'comunidades';
    protected $primaryKey = 'comunidad_id';
    protected $fillable = [
        'barrio_id',
        'nombre',
        'pueblo',
        'descripcion',
    ];
}
