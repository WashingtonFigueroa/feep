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

            $table->integer('actividad_id')->unsigned();
            $table->foreign('actividad_id')
                ->references('actividad_id')
                ->on('actividades')
                ->onDelete('cascade');
            $table->string('documento')->unique()->nullable();
            $table->string('nombre')->unique();
            $table->string('imagen')->nullable();
            $table->string('representante');
            $table->string('contacto')->nullable();
            $table->string('direccion')->nullable();
            $table->string('descripcion')->nullable();
            $table->string('acuerdo')->nullable();
            $table->integer('mujeres')->nullable();
            $table->integer('ninias')->nullable();
            $table->integer('hombres')->nullable();
            $table->integer('ninios')->nullable();
            $table->integer('total')->nullable();
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
