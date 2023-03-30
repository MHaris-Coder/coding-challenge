<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameTurn extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_game_id',
        'turn',
        'start_time',
        'end_time',
        'time'
    ];

    public function userGameTurnQuestionAnswerResult() {
        return $this->hasOne(UserGameTurnQuestionAnswerResult::class);
    }
}
