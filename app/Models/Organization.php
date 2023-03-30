<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'organization_type_id'
    ];

    public function organizationType() {
        return $this->belongsTo(OrganizationType::class);
    }
}
