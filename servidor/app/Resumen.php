<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Resumen extends Model
{
    use SoftDeletes;
    protected $table = 'resumenes';
    protected $primaryKey = 'resumen_id';
    protected $fillable = [
        'evento_id',
        'asistentes',
        'num_mujeres',
        'num_ninias',
        'num_hombre',
        'num_ninios',
        'indigena',
        'afroecuatoriano',
        'negro',
        'mulato',
        'montubio',
        'mestizo',
        'blanco',
        'otro',
        'observaciones',
    ];
    protected $dates = ['deleted_at'];
}
