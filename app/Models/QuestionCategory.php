<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class QuestionCategory extends Model
{
    use HasFactory;

    protected $appends = ['attemptPercentage', 'attemptQuestionAsPerUser'];

    protected $fillable = [
        'title',
        'description',
        'icon',
        'status'
    ];

    public function question() {
        return $this->hasMany(Question::class);
    }

    public function attemptQuestion() {
        return $this->hasMany(ChallengeQuiz::class);
    }

    public function attemptAnswer() {
        return $this->hasManyThrough(UserGameTurnQuestionAnswerResult::class, Question::class);
    }

    public function getAttemptPercentageAttribute() {
        // $result = DB::select('SELECT ( ((SELECT COUNT(*) FROM challenge_quizzes WHERE question_category_id = '.$this->id .' AND `is_correct` = 1) * 100) / (SELECT COUNT(*) FROM challenge_quizzes WHERE question_category_id = '.$this->id .') ) as result' );

        // if(count($result) > 0) return $result = number_format($result[0]->result, 0);
        // return $result;
        
        $result = 0;
        $totalAttemptAnswers = ChallengeQuiz::whereQuestionCategoryId($this->id)->count();
        
        if($totalAttemptAnswers > 0)
            $result = number_format( ((ChallengeQuiz::whereQuestionCategoryId($this->id)->whereIsCorrect(1)->count() * 100) / $totalAttemptAnswers), 2 );

        return $result;
    }

    public function getAttemptQuestionAsPerUserAttribute() {
        $arr = [];
        $arr['status'] = 'pending';

        $result = 'Em curso';
    
        if(self::question()->count() > 0 && self::attemptQuestion()->whereUserId(auth()->user()->id)->count() == self::question()->count()) {
            $result = 'Concluído';
            $arr['status'] = 'complete';
        }

        $arr['result'] = self::attemptQuestion()->whereUserId(auth()->user()->id)->count() . ' / ' . self::question()->count() .' '. $result;

        return $arr;
    }

}
