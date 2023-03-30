<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/test', function (Request $request) {
    return $request->user();
});
Route::post('/login', [\App\Http\Controllers\AuthController::class, 'login']);
Route::middleware('auth:api')->post('/logout', [\App\Http\Controllers\AuthController::class, 'logout']);

Route::middleware('auth:api')->get('/system', [\App\Http\Controllers\SystemController::class, 'index']);
Route::middleware('auth:api')->post('/system', [\App\Http\Controllers\SystemController::class, 'create']);