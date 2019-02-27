<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateEjecutorasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ejecutoras', function (Blueprint $table) {
            $table->increments('ejecutora_id');
            $table->integer('proyecto_id')->unsigned();
            $table->foreign('proyecto_id')
                ->references('proyecto_id')
                ->on('proyectos')
                ->onDelete('cascade');
                $table->integer('organizacion_id')->unsigned();
                $table->foreign('organizacion_id')
                    ->references('organizacion_id')
                    ->on('organizaciones')
                    ->onDelete('cascade');
            $table->string('tipo');
            $table->string('descripcion')->nullable();
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
        Schema::dropIfExists('ejecutoras');
    }
}
