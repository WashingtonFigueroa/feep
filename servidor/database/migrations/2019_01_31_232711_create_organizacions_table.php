<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizacionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizaciones', function (Blueprint $table) {
            $table->increments('organizacion_id');
            $table->integer('tipo_organizacion_id')->unsigned();
            $table->foreign('tipo_organizacion_id')
                ->references('tipo_organizacion_id')
                ->on('tipo_organizaciones')
                ->onDelete('cascade');
            $table->string('nombre');
            $table->string('imagen')->nullable();
            $table->string('actividad');
            $table->string('representante');
            $table->string('contacto')->nullable();
            $table->string('direccion')->nullable();
            $table->string('descripcion')->nullable();
            $table->string('acuerdo')->nullable();
            $table->string('mujeres')->nullable();
            $table->string('hombres')->nullable();
            $table->string('latitud')->nullable();
            $table->string('longitud')->nullable();
            $table->string('precision')->nullable();
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
        Schema::dropIfExists('organizaciones');
    }
}
