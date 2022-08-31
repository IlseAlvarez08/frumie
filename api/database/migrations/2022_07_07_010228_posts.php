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
        Schema::create('posts', function (Blueprint $table){
            $table->increments('id');
            $table->integer('id_casa')->unsigned();
            $table->integer('id_usuario')->unsigned();
            $table->string('tipo');
            $table->string('img');
            $table->string('descripcion');
            $table->foreign('id_casa')->references('id')->on('casas');
            $table->foreign('id_usuario')->references('id')->on('users');

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
