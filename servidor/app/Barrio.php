<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Barrio extends Model
{
    protected $table = 'barrios';
    protected $primaryKey =  'barrio_id';
    protected $fillable = [
        'nombre'
    ];
    protected $dates = ['deleted_at'];
}
