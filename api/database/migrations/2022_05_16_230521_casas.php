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
        Schema::create('casas', function (BluePrint $table) {
        $table->increments('id');
        $table->string('tipo_depart');
        $table->string('direccion');
        $table->string('ciudad');
        $table->string('estado');
        $table->integer('cp');
        $table->string('longitud');
        $table->string('latitud');
        $table->integer('id_propietario')->unsigned();
        $table->foreign('id_propietario')->references('id')->on('users');


        $table->timestamps();
    });
        //
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExist('casas');
        //
    }
};
