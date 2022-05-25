<?php

namespace App\Models\Api;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_post',
        'id_user',
        'id_cmt_parent',
        'id_cmt_child',
        'comment'
    ];
}
