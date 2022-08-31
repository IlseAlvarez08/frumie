<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class postComentario extends Model
{
    use HasFactory;
    protected $fillable = [ 'id','id_comentario','id_usuario'];
}
