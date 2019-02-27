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
        'ciudad_id',
        'codigo',
        'nombre',
    ];
    protected $dates = ['deleted_at'];
}
