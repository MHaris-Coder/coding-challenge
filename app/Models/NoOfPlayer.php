<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NoOfPlayer extends Model
{
    use HasFactory;

    protected $appends = ['noOfPlayerPercentage'];

    public function userGameNoOfPlayer() {
        return $this->hasMany(UserGame::class, 'no_of_player', 'players');
    }

    public function getNoOfPlayerPercentageAttribute()
    {
        $result = 0;
        if(UserGame::count() > 0) {
            $result = number_format((self::userGameNoOfPlayer()->count() * 100) / UserGame::count(), 2);
        }

        return $result;

    }
}
