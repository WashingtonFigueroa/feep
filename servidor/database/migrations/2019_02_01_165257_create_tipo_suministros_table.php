<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTipoSuministrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tipo_suministros', function (Blueprint $table) {
            $table->increments('tipo_suministro_id');
            $table->integer('suministro_id')->unsigned();
            $table->foreign('suministro_id')
                ->references('suministro_id')
                ->on('suministros')
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
        Schema::dropIfExists('tipo_suministros');
    }
}
