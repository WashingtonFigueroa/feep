<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInsumosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insumos', function (Blueprint $table) {
            $table->increments('insumo_id');
            $table->integer('tipo_id')->unsigned();
            $table->integer('evento_id')->unsigned();
            $table->foreign('tipo_id')
                ->references('tipo_id')
                ->on('tipos')
                ->onDelete('cascade');
            $table->foreign('evento_id')
                ->references('evento_id')
                ->on('eventos')
                ->onDelete('cascade');
            $table->string('nombre');
            $table->integer('cantidad');
            $table->date('fecha');
            $table->string('imagen');
            $table->string('receptor');
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
        Schema::dropIfExists('insumos');
    }
}
