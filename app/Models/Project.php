<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_category_id',
        'title',
        'description',
        'image_path',
        'video_path',
        'date_publication',
        'is_default'
    ];

    public function projectCategory() {
        return $this->belongsTo(ProjectCategory::class);
    }
}
