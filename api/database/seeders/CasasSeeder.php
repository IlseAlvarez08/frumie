<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CasasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('casas')->insert([
            'tipo_depart'=>'casa',
            'direccion'=>'tulipan #1606',
            'ciudad'=> 'Nuevo Casas Grandes',
            'estado'=>'Chihuahua ',
            'cp'=>31700,
            'longitud'=>'102.00',
            'latitud'=>'101.00',
            'id_propietario'=>1
        ]);
        DB::table('casas')->insert([
            'tipo_depart'=>'casa',
            'direccion'=>'Av. Abraham Gonzalez #1007',
            'ciudad'=> 'Nuevo Casas Grandes',
            'estado'=>'Chihuahua ',
            'cp'=>31700,
            'longitud'=>'103.00',
            'latitud'=>'102.00',
            'id_propietario'=>1
        ]);
        DB::table('casas')->insert([
            'tipo_depart'=>'casa',
            'direccion'=>'chapuluapan #1625',
            'ciudad'=> 'Nuevo Casas Grandes',
            'estado'=>'Chihuahua ',
            'cp'=>31700,
            'longitud'=>'108.00',
            'latitud'=>'104.00',
            'id_propietario'=>1
        ]);
        DB::table('casas')->insert([
            'tipo_depart'=>'casa',
            'direccion'=>'Av. Tecnologico #406',
            'ciudad'=> 'Nuevo Casas Grandes',
            'estado'=>'Chihuahua ',
            'cp'=>31700,
            'longitud'=>'105.00',
            'latitud'=>'106.00',
            'id_propietario'=>1
        ]);
    }
}