<?php

namespace App\Http\Controllers;

use App\Models\Api\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function getId($id)
    {
        $user = User::findOrFail($id);
        if (isset($id))
        {
            return Response()->json($user);
        }
        else
        {
            return Response()->json("Id không tồn tại");
        }
    }
    public function upLoadAvatar(Request $request, $id)
    {
        try {
            $validator = Validator::make($request->all(), [
                'avatar' => 'image'
            ], [
                'image' => "Avatar phải là kiểu ảnh"
            ]);
            $errors = $validator->errors();
            if ($validator->fails())  {
                $error = $validator->errors()->all()[0];
                return response()->json(["status" => false, "message" => $errors, "data" => []], 422);
            } else {
                $user = User::findOrFail($id);
                $avatar = $request->avatar;
                if ($avatar && $avatar->isValid()) {
                    $file_name = time().".".$avatar->extension();
                    $avatar->move(public_path('images'), $file_name);
                    $path = "public/images/$file_name";
                    $avatar = $path;
                }
                $user->update([
                    "avatar" => $avatar
                ]);
                return response()->json(["status" => true, "message" => "Upload Avatar thành công!", "data" => $user]);
            }
        }
        catch (\Exception $e)
        {
            return response()->json(["status" => false, "message" => $e->getMessage(), "data" => []], 500);
        }
    }
}
