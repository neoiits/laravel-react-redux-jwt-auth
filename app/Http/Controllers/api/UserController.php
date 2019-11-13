<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    public function create(Request $request){
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|min:6',
            'confirm_password' => 'same:password',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }

        try{
            $data = $request->all();
            $data['slug'] = uniqid(true);
            $user = User::create($data);
            $token = JWTAuth::fromUser($user);
            $response = [
                'status'    => 'success',
                'message'   => 'Great, You have registered with NEOIITS blogs...!!!',
                'token'      => $token,
            ];
            return response()->json($response);
        }catch (\Exception $e){
            return response()->json($e->getMessage(), 500);
        }
    }
}
