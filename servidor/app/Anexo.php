<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Anexo extends Model
{
    use SoftDeletes;
    protected $table = 'anexos';
    protected $primaryKey = 'anexo_id';
    protected $fillable = [
        'evento_id',
        'archivo',
        'descripcion',
    ];
    protected $dates = ['deleted_at'];
}
