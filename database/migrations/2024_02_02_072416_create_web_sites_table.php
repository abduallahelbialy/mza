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
        Schema::create('web_sites', function (Blueprint $table) {
            $table->id();
            $table->tinyText('logo');
            $table->json('for_frequently_asked_questions');
            $table->json('about_us');
            $table->json('supports');
            $table->string('footer');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('web_sites');
    }
};
