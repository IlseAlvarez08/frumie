<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('pagos', function (Blueprint $table){
            $table->increments('id');

            $table->integer('id_estudiante')->unsigned();
            $table->integer('id_casa')->unsigned();

            $table->double('mensualidad');
            $table->double('tarifa');

            $table->foreign('id_estudiante')->references('id')->on('users');
            $table->foreign('id_casa')->references('id')->on('casas');

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
        Schema::dropIfExist('pagos');
    }
};
