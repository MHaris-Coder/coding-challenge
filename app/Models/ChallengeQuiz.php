<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ChallengeQuiz extends Model
{
    use HasFactory;

    protected $fillable = [
        'question_category_id',
        'question_id',
        'answer_id',
        'is_correct',
        'user_id',
        'organization_id'
    ];
}
