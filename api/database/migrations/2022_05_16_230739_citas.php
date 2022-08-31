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
        Schema::create('citas', function (Blueprint $table){
            $table->increments('id');
            $table->integer('id_estudiante')->unsigned();
            $table->integer('id_casa')->unsigned();
            $table->date('fecha');
            $table->time('hora');
            $table->string('status');


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
        Schema::dropIfExist('citas');
    }
};
