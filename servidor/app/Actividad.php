<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Actividad extends Model
{
    use SoftDeletes;
    protected $table = 'actividades';
    protected $primaryKey = 'actividad_id';
    protected $fillable = [
        'nombre',
        'descripcion',
    ];
    protected $dates = ['deleted_at'];
}
