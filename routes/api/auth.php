<?php

Route::middleware(['jwt.api.auth'])->group(function () {
    Route::get('/', 'api\AuthController@me');
    Route::post('/logout', 'api\AuthController@logout');
});

Route::post('/', 'api\AuthController@auth');