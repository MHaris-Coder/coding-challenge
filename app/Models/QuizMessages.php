<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QuizMessages extends Model
{
    use HasFactory;
    protected $fillable = [
        'message',
        'message_type',
    ];
}
