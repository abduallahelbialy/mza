<?php

use App\Http\Controllers\Admin\{
    ProductController,
    RoleController,
};
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use Inertia\Inertia;

Route::group([
    'namespace' => 'App\Http\Controllers\Admin',
    'prefix' => config('admin.prefix'),
    'middleware' => ['auth'],
    'as' => 'admin.',
], function () {
    Route::get('/', function () {
        // dd(Auth::user()->roles);

        return Inertia::render('Dashboard');
    })->name('dashboard');
    Route::resource('user', 'UserController');
    Route::resource('role', RoleController::class);
    Route::resource('permission', 'PermissionController');
    Route::resource('product', ProductController::class);
    Route::put('product/visible/{id}',[ProductController::class,'visible'])->name('product.visible');
    Route::put('product/active/{id}',[ProductController::class,'active'])->name('product.active');
    Route::delete('destroyImage/{id}',[ProductController::class,'destroyImage'])->name('product.destroyImage');
    Route::delete('destroyAllImageForProduct/{product_id}',[ProductController::class,'destroyAllImageForProduct'])->name('product.destroyAllImageForProduct');

    Route::resource('menu', 'MenuController')->except([
        'show',
    ]);
    Route::resource('menu.item', 'MenuItemController');
    Route::group([
        'prefix' => 'category',
        'as' => 'category.',
    ], function () {
        Route::resource('type', 'CategoryTypeController')->except([
            'show',
        ]);
        Route::resource('type.item', 'CategoryController');
    });
    Route::get('edit-account-info', 'UserController@accountInfo')->name('account.info');
    Route::post('edit-account-info', 'UserController@accountInfoStore')->name('account.info.store');
    Route::post('change-password', 'UserController@changePasswordStore')->name('account.password.store');
    Route::post('change-image', 'UserController@changeImageStore')->name('account.image.store');

    Route::get('/imageProductMultible/{productId}', [ProductController::class,'imageProductMultible'])->name('product.image');
    Route::get('/editImageProductMultible/{productId}', [ProductController::class,'editImageProductMultible'])->name('product.editImageProductMultible');
    Route::post('image/{productId}', [ProductController::class,'uploadImageProductMultible'])->name('image.store');

});
