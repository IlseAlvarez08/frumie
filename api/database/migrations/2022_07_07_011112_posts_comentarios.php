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
        Schema::create('posts_comentarios', function (Blueprint $table){
            $table->increments('id');
            $table->integer('id_comentario')->unsigned();
            $table->integer('id_usuario')->unsigned();
            $table->foreign('id_comentario')->references('id')->on('comentarios');
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
