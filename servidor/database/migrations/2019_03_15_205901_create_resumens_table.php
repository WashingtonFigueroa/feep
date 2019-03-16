<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateResumensTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resumenes', function (Blueprint $table) {
            $table->increments('resumen_id');
            $table->integer('evento_id')->unsigned();
            $table->foreign('evento_id')
                ->references('evento_id')
                ->on('eventos')
                ->onDelete('cascade');
            $table->string('asistentes');
            $table->string('num_mujeres')->nullable();
            $table->string('num_ninias')->nullable();
            $table->string('num_hombre')->nullable();
            $table->string('num_ninios')->nullable();
            $table->string('indigena')->nullable();
            $table->string('afroecuatoriano')->nullable();
            $table->string('negro')->nullable();
            $table->string('mulato')->nullable();
            $table->string('montubio')->nullable();
            $table->string('mestizo')->nullable();
            $table->string('blanco')->nullable();
            $table->string('otro')->nullable();
            $table->string('observaciones',300)->nullable();
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
        Schema::dropIfExists('resumenes');
    }
}
