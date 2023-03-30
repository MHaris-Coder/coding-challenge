<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserGame extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'organization_id',
        'game_setting',
        'no_of_player',
        'date',
        'score',
        'population',
        'status'
    ];

    public function gameNeighbourhood() {
        return $this->hasMany(GameNeighbourhood::class);
    }

    public function gameTurn() {
        return $this->hasMany(GameTurn::class);
    }

    public function userGameTurnResult() {
        return $this->hasMany(UserGameTurnQuestionAnswerResult::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function lastGameTurn() {
        return $this->hasOne(GameTurn::class)->latest();
    }
}
