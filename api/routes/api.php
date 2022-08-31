<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CasasController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\CitasController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::apiResource('casas', CasasController::class);
Route::apiResource('citas', CitasController::class);



Route::get('/userss',[UsersController::class, 'index']);
Route::get('/userss/{id}',[UsersController::class,'show']);
Route::post('/userss',[UsersController::class,'store']);
Route::put('/userss/{id}',[UsersController::class, 'update']);
Route::delete('/userss/{id}',[UsersController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

