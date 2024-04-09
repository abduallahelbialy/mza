<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuctionRegistration extends Model
{
    use HasFactory;
    protected $guarded = [];
    function product(){
        return  $this->belongsTo(Product::class,'product_id');
    }
    function user(){
        return  $this->belongsTo(User::class,'user_id');
    }
    function Bidding(){
        return  $this->hasMany(Bidding::class,'product_id');
    }
}
