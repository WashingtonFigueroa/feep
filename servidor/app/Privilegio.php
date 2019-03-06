<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Privilegio extends Model
{
    use SoftDeletes;
    protected $table = 'privilegios';
    protected $primaryKey = 'privilegio_id';
    protected $fillable = [
        'acceso',
        'activo'
    ];
    protected $dates = ['deleted_at'];

    public function cargo() {
        return $this->belongsTo('App\Cargo', 'cargo_id');
    }
}
