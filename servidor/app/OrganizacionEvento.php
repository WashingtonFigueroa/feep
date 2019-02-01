<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrganizacionEvento extends Model
{
    protected $table = 'organizacion_eventos';
    protected $primaryKey = 'organizacion_evento_id';
    protected $fillable = [
        'organizacion_id',
        'evento_id',
        'fecha',
    ];
    protected $dates = ['deleted_at'];

}
