<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Parroquia extends Model
{
    use SoftDeletes;
    protected $table = 'parroquias';
    protected $primaryKey = 'parroquia_id';
    protected $fillable = [
        'comunidad_id',
        'ciudad_id',
        'nombre',
        'nombre',
        'descripcion'
    ];
    protected $dates = ['deleted_at'];
}
