<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Neighbourhood extends Model
{
    use HasFactory;
    protected $table ='neighbourhoods';
    protected $fillable =[
        'name',
        'icon',
        'slug',
        'status',
        'need_limit',
        'population'
    ];

    protected $appends = ['gameNeighbourhoodCount'];

    public function gameNeighbourhood() {
        return $this->hasMany(GameNeighbourhood::class);
    }

    public function getGameNeighbourhoodCountAttribute()
    {
        $result = 0;
        if(GameNeighbourhood::count() > 0) {
            $result = number_format((self::gameNeighbourhood()->count() * 100) / GameNeighbourhood::count(), 0);
        }
        return $result;
    }
}
