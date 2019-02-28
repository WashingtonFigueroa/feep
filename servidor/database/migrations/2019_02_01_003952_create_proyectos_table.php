<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProyectosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('proyectos', function (Blueprint $table) {
            $table->increments('proyecto_id');
            $table->integer('tipo_proyecto_id')->unsigned();
            $table->foreign('tipo_proyecto_id')
                ->references('tipo_proyecto_id')
                ->on('tipo_proyectos')
                ->onDelete('cascade');
            $table->integer('barrio_id')->unsigned();
                $table->foreign('barrio_id')
                    ->references('barrio_id')
                    ->on('barrios')
                    ->onDelete('cascade');
            $table->string('nombre')->nullable();
            $table->string('imagen')->nullable();
            $table->date('inicio')->nullable();
            $table->date('fin')->nullable();
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
        Schema::dropIfExists('proyectos');
    }
}
