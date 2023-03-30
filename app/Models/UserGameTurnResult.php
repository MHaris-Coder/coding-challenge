<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserGameTurnResult extends Model
{
    use HasFactory;

    protected $fillable = ['user_game_id', 'game_turn_id', 'question_id', 'answer_id'];
}