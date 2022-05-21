<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Api\Account;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;
class LoginController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function onLogin(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        if ($validator->fails()) {
            return response()->json(['error' => "Đăng nhập không thành công!"], 401);
        }

        $user = Account::where("email", $request->email)
            ->where("password", md5($request->password))
            ->where('role', '=', '0')->get();
        if ($user->count() > 0) {
            return Response()->json(array("success" => 1, "data" => $user[0]));
        }
        return response()->json(['error' => "Đăng nhập không thành công!"], 401);
    }
}
