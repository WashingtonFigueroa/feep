<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParroquiasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('parroquias', function (Blueprint $table) {
            $table->increments('parroquia_id');
            $table->integer('comunidad_id')->unsigned();
            $table->integer('ciudad_id')->unsigned();
            $table->foreign('comunidad_id')
                ->references('comunidad_id')
                ->on('comunidades')
                ->onDelete('cascade');
            $table->foreign('ciudad_id')
                ->references('ciudad_id')
                ->on('ciudades')
                ->onDelete('cascade');
            $table->string('nombre');
            $table->string('descripcion');
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
        Schema::dropIfExists('parroquias');
    }
}
