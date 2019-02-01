<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TipoOrganizacion extends Model
{
    use SoftDeletes;
    protected $table = 'tipo_organizaciones';
    protected $primaryKey = 'tipo_organizacion_id';
    protected $fillable = [
        'imagen',
        'descripcion',
    ];
    protected $dates = ['deleted_at'];
}
