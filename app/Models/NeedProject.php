<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class NeedProject extends Model
{
    use HasFactory;
    protected $table ='need_projects';
    protected $fillable =[
        'name',
        'image',
        'status',
        'need_id',
    ];

    public function projectLike() {
        return $this->hasOne(ProjectLike::class, 'id', 'need_project_id');
    }

    public function needs()
    {
        return $this->belongsTo(Need::class, 'need_id', 'id');
    }
}
