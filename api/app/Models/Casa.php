<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Casa extends Model
{
    use HasFactory;
    protected $fillable = [ 'tipo_depart','direccion', 'ciudad','estado','cp','latitud','longitud','id_propietario'];
}
