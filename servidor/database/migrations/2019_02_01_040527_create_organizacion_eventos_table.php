<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrganizacionEventosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('organizacion_eventos', function (Blueprint $table) {
            $table->increments('organizacion_evento_id');
            $table->integer('organizacion_id')->unsigned();
            $table->integer('evento_id')->unsigned();
            $table->foreign('organizacion_id')
                ->references('organizacion_id')
                ->on('organizaciones')
                ->onDelete('cascade');
            $table->foreign('evento_id')
                ->references('evento_id')
                ->on('eventos')
                ->onDelete('cascade');
            $table->date('fecha');
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
        Schema::dropIfExists('organizacion_eventos');
    }
}
