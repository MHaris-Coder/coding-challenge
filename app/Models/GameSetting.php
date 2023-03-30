<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameSetting extends Model
{
    use HasFactory;

    protected $appends = ['gameSettingCount'];

    public function neighbourhood()
    {
        return $this->belongsTo(Neighbourhood::class);
    }

    public function userGameSetting() {
        return $this->hasMany(UserGame::class, 'game_setting', 'slug');
    }

    public function getGameSettingCountAttribute()
    {
        $result = 0;
        if(UserGame::count() > 0) {
            $result = number_format((self::userGameSetting()->count() * 100) / UserGame::count(), 0);
        }
        return $result;
    }
}