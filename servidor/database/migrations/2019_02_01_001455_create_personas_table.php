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
            $table->integer('organizacion_id')->unsigned();
            $table->integer('parroquia_id')->unsigned();
            $table->foreign('organizacion_id')
                ->references('organizacion_id')
                ->on('organizaciones')
                ->onDelete('cascade');
            $table->foreign('parroquia_id')
                ->references('parroquia_id')
                ->on('parroquias')
                ->onDelete('cascade');
            $table->string('cedula')->unique();
            $table->string('nombres');
            $table->string('genero')->nullable();
            $table->string('ocupacion')->nullable();
            $table->string('etnia')->nullable();
            $table->string('nacionalidad')->nullable();
            $table->string('pueblo')->nullable();
            $table->string('fecha_nacimiento')->nullable();
            $table->string('direccion')->nullable();
            $table->string('telefono_fijo')->nullable();
            $table->string('operadora')->nullable();
            $table->string('contacto')->nullable();
            $table->string('email')->nullable();
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
