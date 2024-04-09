<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $appends = ['auction_status'];
    protected $guarded = [];

    function imageProduct(){
        return  $this->hasMany(ImageProduct::class,'product_id');
    }
    function Bidding(){
        return  $this->hasMany(Bidding::class,'product_id');
    }
    public function getAuctionStatusAttribute(){
        if($this->auction_start > now()){
            return 'not_started';
        }
        if($this->auction_end < now()){
            return 'ended';
        }
        return 'ongoing';
    }
}
