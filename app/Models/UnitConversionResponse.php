<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UnitConversionResponse extends Model
{
    use HasFactory;

    protected $fillable = [
        'unit_type',
        'convert_from',
        'convert_to',
        'input_numerical_value',
        'actual_result',
        'student_response',
        'status'
    ]; 
}
