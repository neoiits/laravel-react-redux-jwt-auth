<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tymon\JWTAuth\Facades\JWTAuth;

class AuthController extends Controller
{
    public function me(Request $request){
        return response()->json($request->auth_user);
    }
    public function auth(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
        ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 422);
        }
        try{
            if(!$token = JWTAuth::attempt($request->all())){
                $response = [
                    'message'   => 'Greate, You have signed in...!!!',
                ];
                return response()->json("Invalid credentials", 400);
            }
            $response = [
                'message'   => 'Greate, You have signed in...!!!',
                'token'      => $token,
            ];
            return response()->json($response, 200);
        }catch (\Exception $e){
            return response()->json($e->getMessage(), 500);
        }
    }
    public function logout(Request $request){
        JWTAuth::invalidate();
    }
}
