<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $appends = ['attemptPercentage'];

    protected $fillable = [
        'question_category_id',
        'title',
        'status'
    ];

    public function answer() {
        return $this->hasMany(Answer::class);
    }

    public function attemptAnswer() {
        return $this->hasMany(UserGameTurnQuestionAnswerResult::class);
    }

    public function getAttemptPercentageAttribute() {
        $result = 0;
        $totalAttemptAnswers = ChallengeQuiz::whereQuestionId($this->id)->count();
        
        if($totalAttemptAnswers > 0)
            $result = number_format( ( (ChallengeQuiz::whereQuestionId($this->id)->whereIsCorrect(1)->count() * 100) / $totalAttemptAnswers ), 2);

        return $result;
    }

    public function questionCategory() {
        return $this->belongsTo(QuestionCategory::class, 'question_category_id', 'id')->whereStatus(1);
    }
}
