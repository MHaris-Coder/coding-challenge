<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;
use App\Http\Requests\AttemptLoginRequest;
use App\Helper\APIresponse;
use Illuminate\Support\Facades\Hash;
class AuthController extends Controller
{
    public function login(AttemptLoginRequest $request) {
        try {

            $credentials = [
                'email' => $request->email,
                'password' => $request->pass
            ];

            $findUser = User::where('email', $request->email)->whereIsAdmin(0)->first();
            if (is_null($findUser)) return APIresponse::error('Email Not Found!', []);

            $verifyPass = Hash::check($request->pass, $findUser->password);
            if(!$verifyPass) return APIresponse::error('Password Incorrect!', []);
            
            if (!Auth::attempt($credentials)) return APIresponse::error('Algo Deu Errado!', []);

            $user = $request->user();
            $tokenResult = $user->createToken('Personal Access Token');

            return APIresponse::success('Login com sucesso!', [
                'access_token' => $tokenResult->plainTextToken,
                'token_type' => 'Bearer',
                'user' => $findUser
            ]);

        } catch (\Throwable $th) {
            return APIresponse::error($th->getMessage(), []);
        }
    }

    public function logout(Request $request) {
        try {
            $user = Auth::user()->tokens()->delete();
            if($user)
                return APIresponse::success('Logout Success!', []);
            else
                return APIresponse::error('Already Logout!', []);
            
        } catch (\Throwable $th) {
            return APIresponse::error($th->getMessage(), []);
        }

    }
}
