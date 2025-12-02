<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ExerciseController;

Route::prefix('v1')->group(function () {
    Route::get('exercises', [ExerciseController::class, 'index']);
    Route::get('exercises/search', [ExerciseController::class, 'search']);
    Route::get('exercises/{id}', [ExerciseController::class, 'show']);

    // Auth routes (use Sanctum)
    // Route::post('auth/register', [AuthController::class, 'register']);
    // Route::post('auth/login', [AuthController::class, 'login']);
});
