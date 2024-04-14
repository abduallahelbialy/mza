<?php

use App\Http\Controllers\WebSite\AuctionController;
use App\Http\Controllers\WebSite\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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

// Route::get('/', function () {
//     return Inertia::render('Web/Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });
// Route::group([
//     'namespace' => 'App\Http\Controllers\WebSite',
// ], function () {
// Route::resource('home', 'HomeController');

//     });


// Route::get('/',function (){
// })->name('home');
Route::get('/', function () {
    return Inertia::render('Web/Soon', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
})->name('home.test');
Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/settings', [HomeController::class, 'settings'])->name('settings');
Route::get('/termsAndConditions', [HomeController::class, 'termsAndConditions'])->name('termsAndConditions');
Route::get('/returnConditions', [HomeController::class, 'returnConditions'])->name('returnConditions');
Route::get('/privacyPolicy', [HomeController::class, 'privacyPolicy'])->name('privacyPolicy');

Route::get('/auctions', [HomeController::class, 'index'])->name('auctions');

Route::group([
    'prefix' => 'auction',
], function () {
    Route::get('/registration/{auction_id}',[AuctionController::class, 'registration'])->name('Contrdashdone');
    Route::get('/bidding/{auction_id}',[AuctionController::class, 'bidding'])->name('Controtwo');
    Route::get('/history/{auction_id}',[AuctionController::class, 'history'])->name('Controlthree');
});
Route::get('/slider', function () {
    return Inertia::render('Web/SwiperSlideTest');
     })->name('SwiperSlideTest.slider');
Route::get('/According', function () {
    return Inertia::render('Web/According');
     })->name('According');

require __DIR__ . '/auth.php';
