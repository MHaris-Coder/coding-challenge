<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GameNeighbourhood extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_game_id',
        'neighbourhood_id',
        'resource_id'
    ];

    public function neighbourhood() {
        return $this->belongsTo(Neighbourhood::class);
    }

    public function resource() {
        return $this->belongsTo(Resource::class);
    }

    public function gameNeed() {
        return $this->hasMany(GameNeed::class);
    }

}
