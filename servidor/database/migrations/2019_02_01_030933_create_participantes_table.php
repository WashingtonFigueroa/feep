<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateParticipantesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('participantes', function (Blueprint $table) {
            $table->increments('participante_id');
            $table->integer('evento_id')->unsigned();
            $table->integer('persona_id')->unsigned();
            $table->foreign('evento_id')
                ->references('evento_id')
                ->on('eventos')
                ->onDelete('cascade');
            $table->foreign('persona_id')
                ->references('persona_id')
                ->on('personas')
                ->onDelete('cascade');
            $table->text('observacion')->nullable();
            $table->boolean('estado')->default(true);
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
        Schema::dropIfExists('participantes');
    }
}
