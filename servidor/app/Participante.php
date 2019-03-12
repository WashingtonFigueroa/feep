<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Participante extends Model
{
    use SoftDeletes;
    protected $table = 'participantes';
    protected $primaryKey = 'participante_id';
    protected $fillable = [
        'evento_id',
        'persona_id',
        'estado',
        'observacion',
    ];
    protected $dates = ['deleted_at'];

    public function evento() {
        return $this->belongsTo('App\Participante', 'evento_id');
    }
}
