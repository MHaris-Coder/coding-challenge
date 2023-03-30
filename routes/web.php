<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NeighbourhoodsController;
use App\Http\Controllers\NeedsController;
use App\Http\Controllers\NeedProjectsController;
use App\Http\Controllers\NoOfPlayersController;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\OrganizationsController;
use App\Http\Controllers\OrganizationTypesController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\ProjectCategoriesController;
use App\Http\Controllers\QuestionCategoriesController;
use App\Http\Controllers\QuestionsController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\RankingController;
use App\Http\Controllers\QuizMessagesController;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__.'/auth.php';

Route::get('/welcome', function () {
    return view('welcome');
});

Route::prefix('admin')->group(function () {
    Route::middleware('is_admin')->group(function () { 
        Route::get('/dashboard', function () {
            return view('dashboard');
        })->name('dashboard');

    });   
});

Route::get('/{any}', function () {
    return view('vue');
})->where("any", ".*");