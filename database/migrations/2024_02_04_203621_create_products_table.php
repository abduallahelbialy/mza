<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name_arabic');
            $table->string('name_english');
            $table->text('product_details');
            $table->string('sku')->unique()->default(Str::random(10)); // Unique random SKU
            $table->decimal('weight', 10, 2)->nullable();
            $table->decimal('estimated_market_price', 10, 2)->nullable();
            $table->decimal('cost_price', 10, 2)->nullable();
            $table->integer('required_bidders')->nullable();
            $table->decimal('registration_amount', 10, 2)->nullable();
            $table->integer('auction_duration_minutes')->nullable();
            $table->decimal('opening_bid_amount', 10, 2)->nullable();
            $table->integer('payment_deadline_minutes')->nullable();
            $table->boolean('is_visible')->default(true);
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->boolean('is_active')->default(true);
            $table->dateTime('auction_start')->nullable();
            $table->dateTime('auction_end')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
