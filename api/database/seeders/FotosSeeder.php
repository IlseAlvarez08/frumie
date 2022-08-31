<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class FotosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('fotos')->insert(['id_casa'=>1,'nomb_archivo'=>'Casa1.jpg']);
        DB::table('fotos')->insert(['id_casa'=>1,'nomb_archivo'=>'Casa2.jpg']);
        DB::table('fotos')->insert(['id_casa'=>1,'nomb_archivo'=>'Casa3.jpg']);
        DB::table('fotos')->insert(['id_casa'=>2,'nomb_archivo'=>'Casa4.jpg']);
        DB::table('fotos')->insert(['id_casa'=>2,'nomb_archivo'=>'Casa5.jpg']);

        
    }
}