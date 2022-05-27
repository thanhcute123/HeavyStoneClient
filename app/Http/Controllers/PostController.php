<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Api\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    const STATUS_WAIT = 0;
    const STATUS_APPROVED = 1;
    const STATUS_DELETED = 2;
    const STATUS_CLUB = 3;
//    const STATUS_POST_CLUB = 3;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getAll()
    {
//        $post = Post::simplePaginate(5);
        $post = Post::where('status', '=', self::STATUS_APPROVED)->orderBy('id', 'desc')->get();
        return response()->json($post);
    }

    public function getClubPost()
    {
//        $post = Post::simplePaginate(5);
        $post = Post::where('status', '=', self::STATUS_CLUB)->orderBy('id', 'desc')->get();
        return response()->json($post);
    }


    public function createPostClub(Request $request)
    {
        $arr = $request->all();
        $club= $arr['club'];
        $tags = [
            'club' => $club
        ];
        try {
            $validator = Validator::make($request->all(), [
                'image' => 'image'
            ], [
                'image' => "Avatar phải là kiểu ảnh"
            ]);
            $errors = $validator->errors();
            if ($validator->fails())  {
                $error = $validator->errors()->all()[0];
                return response()->json(["status" => false, "message" => $errors, "data" => []], 422);
            } else {
                $image = $request->image;
                if ($image && $image->isValid()) {
                    $file_name = time().".".$image->extension();
                    $image->move(public_path('images'), $file_name);
                    $path = "public/images/$file_name";
                    $image = $path;
                }
                $post = Post::create([
                    'id_user' => $arr['id_user'],
                    'theme' => $arr['theme'],
                    'content' => $arr['content'],
                    'image' => $image,
                    'tags' => json_encode($tags),
                    'status' => self::STATUS_CLUB
                ]);
                return response()->json($post);
            }
        }
        catch (\Exception $e)
        {
            return response()->json(["status" => false, "message" => $e->getMessage(), "data" => []], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Api\Post $post
     * @return \Illuminate\Http\Response
     */
    public function getId($id)
    {
        $post = Post::findOrFail($id);
        if (isset($id))
        {
            return Response()->json($post);
        }
        else
        {
            return Response()->json("Id không tồn tại");
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $arr = $request->all();
        $faculty = $arr['faculty'];
        $major = $arr['major'];
        $tags = [
            'faculty' => $faculty,
            'major' => $major
        ];
        try {
            $validator = Validator::make($request->all(), [
                'image' => 'image'
            ], [
                'image' => "Avatar phải là kiểu ảnh"
            ]);
            $errors = $validator->errors();
            if ($validator->fails())  {
                $error = $validator->errors()->all()[0];
                return response()->json(["status" => false, "message" => $errors, "data" => []], 422);
            } else {
                $image = $request->image;
                if ($image && $image->isValid()) {
                    $file_name = time().".".$image->extension();
                    $image->move(public_path('images'), $file_name);
                    $path = "public/images/$file_name";
                    $image = $path;
                }
                $post = Post::create([
                    'id_user' => $arr['id_user'],
                    'theme' => $arr['theme'],
                    'content' => $arr['content'],
                    'image' => $image,
                    'tags' => json_encode($tags)
                ]);
                return response()->json($post);
            }
        }
        catch (\Exception $e)
        {
            return response()->json(["status" => false, "message" => $e->getMessage(), "data" => []], 500);
        }
    }


    public function search(Request $request)
    {
        $name = $request->get('search');
        $result = Post::where('id_user', 'LIKE', '%'. $name. '%')->orWhere('theme', 'LIKE', '%'. $name. '%')->get();
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
     * @param  \App\Models\Api\Post $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $post = Post::findOrFail($id);
        $status = $request->get('status');
        if ($status == "1") {
            $post->update([
                'status' => SELF::STATUS_APPROVED
            ]);
        } else if ($status == "2"){
            $post->update([
                'status' => SELF::STATUS_DELETED
            ]);
        };

        return response()->json($post);
    }



    public function getCountComment()
    {
        var_dump('23233'); die(13);
        $count = Comment::where('id_post', '=', $id)
            ->count();
        return response()->json($count);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Api\Post $post
     * @return \Illuminate\Http\Response
     */
//    public function delete(Request $request, $id)
//    {
//        $post = Post::findOrFail($id);
//        $post->update([
//            'status' => self::STATUS_DELETED
//        ]);
//        return response()->json($post);
//    }
}
