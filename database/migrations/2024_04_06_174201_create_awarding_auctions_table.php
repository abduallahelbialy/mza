<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('awarding_auctions', function (Blueprint $table) {
            $table->id();

            $table->decimal('auction_award_amount', 10, 2)->nullable();

            $table->foreignId('auction_registration_id')->unsigned()->nullable()->references('id')->on('auction_registrations')->onDelete('cascade');
            $table->foreignId('product_id')->unsigned()->nullable()->references('id')->on('products')->onDelete('cascade');
            $table->foreignId('user_id')->unsigned()->nullable()->references('id')->on('products')->onDelete('cascade');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('awarding_auctions');
    }
};
