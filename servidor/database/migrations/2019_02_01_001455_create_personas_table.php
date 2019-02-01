<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePersonasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personas', function (Blueprint $table) {
            $table->increments('persona_id');
            $table->integer('tipo_persona_id')->unsigned();
            $table->integer('organizacion_id')->unsigned();
            $table->integer('parroquia_id')->unsigned();
            $table->foreign('tipo_persona_id')
                ->references('tipo_persona_id')
                ->on('tipo_personas')
                ->onDelete('cascade');
            $table->foreign('organizacion_id')
                ->references('organizacion_id')
                ->on('organizaciones')
                ->onDelete('cascade');
            $table->foreign('parroquia_id')
                ->references('parroquia_id')
                ->on('parroquias')
                ->onDelete('cascade');
            $table->string('cedula');
            $table->string('nombres');
            $table->string('genero');
            $table->string('ocupacion');
            $table->string('etnia');
            $table->string('fecha_nacimiento');
            $table->string('direccion');
            $table->string('telefono_fijo');
            $table->string('operadora');
            $table->string('contacto');
            $table->string('email');
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
        Schema::dropIfExists('personas');
    }
}
