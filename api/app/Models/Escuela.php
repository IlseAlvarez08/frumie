<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Escuela extends Model
{
    use HasFactory;
    protected $fillable = [ 'id','nombre','imagen','longitud','latitud','direccion','ciudad','cp' ];
}
