<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('eventos', function (Blueprint $table) {
            $table->increments('evento_id');
            $table->integer('tipo_evento_id')->unsigned();
            $table->integer('parroquia_id')->unsigned();
            $table->foreign('tipo_evento_id')
                ->references('tipo_evento_id')
                ->on('tipo_eventos')
                ->onDelete('cascade');
            $table->foreign('parroquia_id')
                ->references('parroquia_id')
                ->on('parroquias')
                ->onDelete('cascade');
            $table->string('nombre');
            $table->string('imagen')->nullable();
            $table->date('fecha_evento');
            $table->string('direccion');
            $table->integer('duracion_horas')->unsigned();
            $table->date('fecha_finaliza')->nullable();
            $table->string('latitud')->nullable();
            $table->string('longitud')->nullable();
            $table->boolean('estado')->default(true);
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
        Schema::dropIfExists('eventos');
    }
}
