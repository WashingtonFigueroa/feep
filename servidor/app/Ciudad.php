<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ciudad extends Model
{
    protected $table = 'ciudades';
    protected $primaryKey = 'ciudad_id';
    protected $fillable = [
        'provincia_id',
        'nombre',
        'descripcion',
    ];
    protected $dates = ['deleted_at'];
}
