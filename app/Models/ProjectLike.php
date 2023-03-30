<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectLike extends Model
{
    use HasFactory;

    protected $fillable = [
        'game_neighbourhood_id',
        'game_need_id',
        'need_project_id',
        'likes'
    ];
}
