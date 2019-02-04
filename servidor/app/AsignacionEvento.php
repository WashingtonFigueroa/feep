<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class AsignacionEvento extends Model
{
    use SoftDeletes;
    protected $table = 'asignacion_eventos';
    protected $primaryKey = 'asignacion_evento_id';
    protected $fillable = [
        'evento_id',
        'usuario_id'
    ];
    protected $dates = ['deleted_at'];
}
