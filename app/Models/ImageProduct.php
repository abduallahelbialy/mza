<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class ImageProduct extends Model
{
    use HasFactory;
    protected $guarded = [];
    protected $appends = ['image_path'];

    function product(){
        return  $this->belongsTo(Product::class,'product_id');
    }
    // public function getImgAttribute($value)
    // {
    //     return asset('storage/'.$value);
    // }
    public function setImgAttribute($value)
    {
        if (!empty($this->img)) {
            Storage::disk('public')->delete($this->img);
        }

        $this->attributes['img'] = $value;
    }
    public function getImagePathAttribute()
    {

        return asset('storage/' . $this->img);
    }
}
