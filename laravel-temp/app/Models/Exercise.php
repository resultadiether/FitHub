<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Exercise extends Model
{
    protected $fillable = [
        'name',
        'category',
        'difficulty',
        'primary_muscles',
        'equipment',
        'instructions',
        'video_url'
    ];
}