<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name_arabic' => 'required|string|max:255',
            'name_english' => 'required|string|max:255',
            'product_details' => 'required|string',
            'sku' => 'required|string|unique:products,sku',
            'weight' => 'nullable|numeric|min:0',
            'estimated_market_price' => 'nullable|numeric|min:0',
            'cost_price' => 'nullable|numeric|min:0',
            'required_bidders' => 'nullable|integer|min:1',
            'registration_amount' => 'nullable|numeric|min:0',
            'auction_duration_minutes' => 'nullable|integer|min:1',
            'opening_bid_amount' => 'nullable|numeric|min:0',
            'payment_deadline_minutes' => 'nullable|integer|min:1',
            'auction_start' => 'nullable|date',
            'auction_end' => 'nullable|date|after_or_equal:auction_start',
            'image' => 'required|image|mimes:jpeg,jpg,png,gif,svg|max:2048',
            'alt' => 'nullable|string|max:255'
        ];
    }
}
