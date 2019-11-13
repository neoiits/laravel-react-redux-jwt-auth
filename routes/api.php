<?php

use Illuminate\Http\Request;

Route::prefix('user')
    ->group(base_path('routes/api/user.php'));

Route::prefix('auth')
    ->group(base_path('routes/api/auth.php'));