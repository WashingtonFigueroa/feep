<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAsignacionEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('asignacion_eventos', function (Blueprint $table) {
            $table->increments('asignacion_evento_id');
            $table->integer('usuario_id')->unsigned();
            $table->integer('evento_id')->unsigned();
            $table->foreign('usuario_id')
                    ->references('usuario_id')
                    ->on('usuarios')
                    ->onDelete('cascade');
            $table->foreign('evento_id')
                    ->references('evento_id')
                    ->on('eventos')
                    ->onDelete('cascade');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('asignacion_eventos');
    }
}
