<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bidding extends Model
{
    use HasFactory;
    protected $guarded = [];

    function auction_registration(){
        return  $this->belongsTo(AuctionRegistration::class,'auction_registration_id');
    }
    function product(){
        return  $this->belongsTo(Product::class,'product_id');
    }
    function user(){
        return  $this->belongsTo(User::class,'user_id');
    }
}
