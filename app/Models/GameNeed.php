<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameNeed extends Model
{
    use HasFactory;

    protected $fillable = [
        'need_id',
        'user_game_id',
        'game_neighbourhood_id'
    ];

    public function need() {
        return $this->belongsTo(Need::class);
    }

    public function needProject() {
        return $this->hasMany(NeedProject::class, 'need_id', 'need_id');
    }

    // public function projectLike() {
    //     return $this->hasOne(ProjectLike::class);
    // }

    public function projectLike() {
        return $this->hasMany(ProjectLike::class);
    }
}
