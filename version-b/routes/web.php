<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you register web routes for your application. These routes
| are loaded by the ServiceProvider within a given middleware group. Just tell
| the Router the Controller or class to use to respond to this request.
|
*/

/*
|--------------------------------------------------------------------------
| Ruta única de la landing
|--------------------------------------------------------------------------
*/

Route::get('/', function () {
    return view('welcome');
});

/*
|--------------------------------------------------------------------------
| Ruta de salud
|--------------------------------------------------------------------------
*/

Route::get('/health', function () {
    return response()->json(['status' => 'ok']);
});