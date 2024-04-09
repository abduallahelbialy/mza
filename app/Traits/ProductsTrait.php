<?php

namespace App\Traits;

use App\Models\Product;
use Illuminate\Http\Request;
use Carbon\Carbon;

trait ProductsTrait
{

    /**
     * @param Request $request
     * @return $this|false|string
     */

    public function notStarted( $product)
    {
        return $product->where('auction_start', '>', Carbon::now());
    }

    public function ended( $product)
    {
        return $product->where('auction_end', '<', Carbon::now());
    }

    public function ongoing( $product)
    {
        return $product->where('auction_start', '<=', Carbon::now())->where('auction_end', '>=', Carbon::now());
    }

    public function auctionStatus($props,  $product)
    {
        if ($props == 'not_started') {

            return $this->notStarted( $product);
        }
        if ($props == 'ended') {
            return $this->ended( $product);
        }
        if ($props == 'ongoing') {
            return $this->ongoing( $product);
        }
        return $product;
    }
    public function auctionStatusCount($product)
    {
        return ['not_started'=>$this->notStarted($product)->count(),'ended'=>$this->ended($product)->count(),'ongoing'=>$this->ongoing($product)->count()];
    }

}
