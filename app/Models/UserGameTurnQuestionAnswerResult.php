<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserGameTurnQuestionAnswerResult extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_game_id',
        'game_turn_id',
        'question_id',
        'answer_id'
    ];

    public function answer() {
        return $this->belongsTo(Answer::class, 'answer_id', 'id');
    }

    // public function notCorrectAnswerCount() {
    //     return $this->belongsTo(Answer::class, 'answer_id', 'id')->where('is_correct', 0);
    // }

    public function userGame() {
        return $this->belongsTo(UserGame::class, 'user_game_id', 'id');
    }
}
