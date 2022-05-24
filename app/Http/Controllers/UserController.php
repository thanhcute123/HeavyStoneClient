<?php

namespace App\Http\Controllers;

<<<<<<< HEAD
use App\Http\Controllers\Controller;
use App\Models\Api\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
//        $user = User::simplePaginate(5);
        $user = User::whereNull('status')->get();
        return response()->json($user);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Api\User $user
     * @return \Illuminate\Http\Response
     */
=======
use App\Models\Api\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
>>>>>>> edb805c0665343bcf6494fad88a50d76214f96c5
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
<<<<<<< HEAD

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $user = User::create($request->all());
        return response()->json($user);
    }

    public function search($name)
    {
        $result = Task::where('id_user', 'LIKE', '%'. $name. '%')->orWhere('username', 'LIKE', '%'. $name. '%')->get();
        if(count($result)){
            return Response()->json($result);
        }
        else
        {
            return response()->json(['Result' => 'No Data not found'], 404);
        }
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Api\User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update($request->all());
        return response()->json($user);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Api\User $user
     * @return \Illuminate\Http\Response
     */
    public function delete(Request $request, $id)
    {
        $user = User::findOrFail($id);
        $user->update([
            $request->all(),
            'status' => 'Đã xóa'
        ]);
        return response()->json($user);
    }
=======
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
>>>>>>> edb805c0665343bcf6494fad88a50d76214f96c5
}
