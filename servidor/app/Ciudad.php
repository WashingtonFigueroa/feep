<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ciudad extends Model
{
    protected $table = 'ciudades';
    protected $primaryKey = 'ciudad_id';
    protected $fillable = [
        'provincia_id',
        'codigo',
        'nombre',
    ];
    protected $dates = ['deleted_at'];
}
