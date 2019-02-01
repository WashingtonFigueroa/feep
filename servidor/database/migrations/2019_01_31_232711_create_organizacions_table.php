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
            $table->string('imagen');
            $table->string('descripcion');
            $table->string('zona');
            $table->string('contacto');
            $table->string('cuenta');
            $table->string('representante');
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
