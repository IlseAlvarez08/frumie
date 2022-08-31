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
        Schema::create('escuelas', function (Blueprint $table){
            $table->increments('id');
            $table->string('nombre');
            $table->string('img');
            $table->string('longitud');
            $table->string('latitud');
            $table->string('ciudad');
            $table->string('direccion');
            $table->integer('cp');
            

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
        //
    }
};
