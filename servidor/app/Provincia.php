<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Provincia extends Model
{
    use SoftDeletes;
    protected $table = 'provincias';
    protected $primaryKey = 'provincia_id';
    protected $fillable = [
        'codigo',
        'nombre',
    ];
    protected $dates = ['deleted_at'];
}
