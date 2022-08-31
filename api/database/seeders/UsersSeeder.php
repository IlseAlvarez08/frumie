<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'tipo_usuario'=>'arrendador',
            'email'=>'arrendador1@gmail.com',
            'password'=> Hash::make('123'),
            'nombres'=>'Juan ',
            'ap_paterno'=>'Lopez',
            'ap_materno'=>'Garcia',
            'fecha_nac'=>'2000/02/16',
            'sexo'=>'masculino',
            'imagen'=>'default.jpg'
        ]);
        DB::table('users')->insert([
            'tipo_usuario'=>'arrendatario',
            'email'=>'arrendatario01@gmail.com',
            'password'=> Hash::make('123'),
            'nombres'=>'Miguel ',
            'ap_paterno'=>'Perez',
            'ap_materno'=>'Flores',
            'fecha_nac'=>'2000/02/16',
            'sexo'=>'masculino',
            'imagen'=>'default.jpg'
        ]);
        
    }
}