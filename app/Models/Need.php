<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Need extends Model
{
    use HasFactory;

    public function needProject() {
        return $this->hasMany(NeedProject::class);
    }
    protected $table ='needs';
    protected $fillable =[
        'name',
        'icon',
        'slug',
        'status',
    ];
}
