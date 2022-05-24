<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\ChangePasswordController;
use App\Http\Controllers\UserController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Api đăng nhập
Route::post('/user/login', [LoginController::class, 'onLogin'])->name('user.login');

//Api đổi mật khẩu
Route::post('/user/changepassword/{id}', [ChangePasswordController::class, 'changepassword'])->name('user.changepassword');

//Api lấy thông tin user
Route::get('/user/{id}', [UserController::class, 'getId'])->name('getId');

//Api upload avatar
Route::post('/user/upLoadAvatar/{id}', [UserController::class, 'upLoadAvatar'])->name('upLoadAvatar');
