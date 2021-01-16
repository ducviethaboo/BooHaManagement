<?php

namespace App\Http\Controllers\Account;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
    //
    public function authenticate(Request $request)
    {
        $credentials = $request->only('account', 'password');
        if (Auth::attempt($credentials)) {
            try {
                if (!$token = JWTAuth::attempt($credentials)) {
                    return response()->json(['error' => 'invalid_credentials'], 400);
                }
            } catch (JWTException $e) {
                return response()->json(['error' => 'could_not_create_token'], 500);
            }
            return response()->json(['user' => Auth::user(), 'token' => $token]);
        }
    }


//    public function register(Request $request)
//    {
//        $account = new User();
//        $account->name = $request->name;
//        $account->account = $request->account;
//        $account->password = Hash::make($request->password);
//        $account->save();
//
//    }
}
