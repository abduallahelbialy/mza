<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\{
    StoreProductRequest,
    UpdateProductRequest,
};
use App\Http\Requests\{
    StoreImage,
    StoreMultiImage
};
use App\Models\{
    ImageProduct,
    Product,
    Permission
};
use Intervention\Image\Facades\Image;

use Illuminate\Support\Facades\Storage;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('can:product list', ['only' => ['index', 'show']]);
        $this->middleware('can:product create', ['only' => ['create', 'store']]);
        $this->middleware('can:product edit', ['only' => ['edit', 'update', 'active', 'visible']]);
        $this->middleware('can:product delete', ['only' => ['destroy']]);
    }

    /**
     * Display a listing of the resource.
     */
    public function index(Product $product)
    {
        $products = (new Product)->with('imageProduct')->newQuery();

        if (request()->has('search')) {
            $searchTerm = '%' . request()->input('search') . '%';

            $products->where(function ($query) use ($searchTerm) {
                $query->where('name_arabic', 'LIKE', $searchTerm)
                    ->orWhere('name_english', 'LIKE', $searchTerm)
                    ->orWhere('sku', 'LIKE', $searchTerm)
                    // Add more conditions for other columns as needed
                    ->orWhere('product_details', 'LIKE', $searchTerm);
            });
        }

        if (request()->query('sort')) {
            $attribute = request()->query('sort');
            $sort_order = 'ASC';
            if (strncmp($attribute, '-', 1) === 0) {
                $sort_order = 'DESC';
                $attribute = substr($attribute, 1);
            }
            $products->orderBy($attribute, $sort_order);
        } else {
            $products->latest();
        }

        $products = $products->paginate(5)->onEachSide(2)->appends(request()->query());

        return Inertia::render('Admin/Product/Index', [
            'products' => $products,
            'filters' => request()->all('search'),
            'can' => [
                'create' => Auth::user()->can('product create'),
                'edit' => Auth::user()->can('product edit'),
                'delete' => Auth::user()->can('product delete'),
            ],
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Product/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request)
    {

        // dd($request->hasFile('image'));
        $imagePath = '';

        // if ($request->hasFile('image')) {
        //     $image_path = $request->file('image')->store('image', 'public');
        // }
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            // $image_path = $image->store('image', 'public');

            // $resized_image = Image::make(public_path('storage/' . $image_path))->resize(300, 200)->save();

            // $image_path = $resized_image->basePath();

            ///

            $imageName = uniqid() . '_' . $image->getClientOriginalName();
            $imagePath = $image->storeAs('productImages', $imageName, 'public');

            // تغيير حجم الصورة
            $resized_image = Image::make($image)->resize(300, 200)->encode();

            // حفظ الصورة المصغرة
            $resized_image_path = 'productImages/resized_' . $imageName;
            Storage::put($resized_image_path, $resized_image);

        }
        $data = $request->validated();
        $data['user_id'] = Auth::id();
        $image = $request->image;
        // dd($image);
        unset($data['image']);
        unset($data['alt']);

        $product = Product::create($data);
        $imageProduct = ImageProduct::create(['img' => $imagePath, "alt" => $request->alt]);

        $product->imageProduct()->save($imageProduct);

        return redirect()->route('admin.product.image',$product->id)
            ->with('message', __('Product created successfully.'));
    }
    /**
     * Display the specified resource.
     */
    public function show(Request $request, $productId)
    {
        $product = Product::with('imageProduct')->find($productId);
        return Inertia::render('Admin/Product/Show', [
            'product' => $product,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $productId)
    {
        $product = Product::with('imageProduct')->find($productId);
        // dd($product);
        return Inertia::render('Admin/Product/Edit', [
            'product' => $product,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, Product $product)
    {
        $product->update($request->validated());

        return redirect()->route('admin.product.index')
            ->with('message', __('Product Updated successfully.'));
    }
    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return redirect()->route('admin.product.index')
            ->with('message', __('Product deleted successfully'));
    }
    public function active($id)
    {
        // dd($product);
        $product = Product::findOrFail($id);
        $product->update(['is_active' => !$product->is_active]);

        return redirect()->route('admin.product.index')
            ->with('message', __('Product Active Change ' . $product->sku . ' successfully'));
    }
    public function  visible($id)
    {

        $product = Product::findOrFail($id);
        $product->update(['is_visible' => !$product->is_visible]);

        return redirect()->route('admin.product.index')
            ->with('message', __('Product Visible Change ' . $product->sku . ' successfully'));
    }
    public function imageProductMultible(Request $request,$productId) {

        return Inertia::render('Admin/Product/Fileupload',['productId'=>$productId]);

    }
    public function editImageProductMultible( $product) {
        $product = Product::whereId($product)->with('imageProduct')->first();
        // dd($product);
        // dd($product->imageProduct[0]->image_path);
        return Inertia::render('Admin/Product/EditImageProductMultible', ['product' => $product]);
    }


    // public function  uploadImageProductMultible(StoreMultiImage $request, $productId)
    // {
    //     $product = Product::findOrFail($productId);

    //     $image_path = '';
    //     $count = ImageProduct::where('product_id', $productId)->count();
    //     $count = $count < 1 ? 1 : $count;
    //     // dd($count);
    //     // foreach ($request->file('image') as $img) {
    //     //     // Check if file is valid
    //     //     if ($img->isValid()) {
    //     //         // Generate a unique filename
    //     //         $imageName = uniqid() . '_' . $img->getClientOriginalName();
    //     //         // Store the image
    //     //         $image_path = $img->storeAs('images', $imageName, 'public');

    //     //         // Create ImageProduct instance
    //     //         ImageProduct::create([
    //     //             'product_id' => $productId,
    //     //             'img' => $image_path,
    //     //             'alt' => "dfgsdfds",
    //     //             'rank' => $count, // Use $count as rank
    //     //         ]);

    //     //         // Increment counter
    //     //         $count++;
    //     //     }
    //     // }

    //     $images = [];
    //     // if(!empty())
    //     foreach ($request->file('image') as $img) {
    //         if ($img->isValid()) {
    //             $imageName = uniqid() . '_' . $img->getClientOriginalName();


    //             $imagePath = $img->storeAs('productImages', $imageName, 'public');

    //             $images[] = [
    //                 'img' => $imagePath,
    //                 'alt' => "dfgsdfds",
    //                 'rank' => $count,
    //             ];

    //             $count++;
    //         }
    //     }
    //     $product->imageProduct()->createMany($images);


    //     return redirect()->route('admin.product.edit', $product->id)
    //         ->with('message', __('Product created successfully.'));
    // }
    public function uploadImageProductMultible(StoreMultiImage $request, $productId)
{
    $product = Product::findOrFail($productId);

    $images = [];
    $count = ImageProduct::where('product_id', $productId)->count();
    $count = $count < 1 ? 1 : $count;

    foreach ($request->file('image') as $img) {
        if ($img->isValid()) {
            $imageName = uniqid() . '_' . $img->getClientOriginalName();
            $imagePath = $img->storeAs('productImages', $imageName, 'public');

            // تغيير حجم الصورة
            $resized_image = Image::make($img)->resize(300, 200)->encode();

            // حفظ الصورة المصغرة
            $resized_image_path = 'productImages/resized_' . $imageName;
            Storage::put($resized_image_path, $resized_image);

            $images[] = [
                'img' => $imagePath,
                'alt' => "dfgsdfds",
                'rank' => $count,
            ];

            $count++;
        }
    }

    // إنشاء السجلات في قاعدة البيانات
    $product->imageProduct()->createMany($images);

    return redirect()->route('admin.product.edit', $product->id)
        ->with('message', __('Product created successfully.'));
}
    public function destroyImage(Request $request, $id)
    {
        $imageProductQuery = ImageProduct::query();
        $imageProduct = $imageProductQuery->find($id);

        if ($imageProduct) {
            try {
                // Delete the image from storage
                // dd(Storage::disk('public')->exists($imageProduct->img));

                if (Storage::disk('public')->exists($imageProduct->img)) {
                    Storage::disk('public')->delete($imageProduct->img);
                }

                // Delete the ImageProduct record
                $imageProduct->delete();
                $images = ImageProduct::where('product_id', $imageProduct->product_id)
                    ->orderBy('rank') // Order by rank
                    ->get();

                // Reorder images
                $count = 1;
                foreach ($images as $image) {
                    $image->rank = $count;
                    $image->save();
                    $count++;
                }                // Redirect back with success message
                return redirect()->route('admin.product.edit', $imageProduct->product_id)
                    ->with('message', __('Image Product deleted successfully'));
            } catch (\Exception $e) {
                // Log the error
                \Log::error('Error deleting image: ' . $e->getMessage());

                // Redirect back with error message
                return redirect()->back()->withErrors(['error' => 'Failed to delete image.']);
            }
        }

        // Redirect back with error message if ImageProduct not found
        return redirect()->back()->withErrors(['error' => 'Image Product not found.']);
    }
    public function destroyAllImageForProduct(Request $request, $product_id)
    {
        try {
            $imageProductQuery = ImageProduct::where('product_id', $product_id);
            $imageProducts = $imageProductQuery->get();

            if ($imageProducts->isNotEmpty()) {
                foreach ($imageProducts as $imageProduct) {
                    // dd(Storage::disk('public')->delete($imageProduct->img));
                    if (Storage::disk('public')->exists($imageProduct->img)) {
                        Storage::disk('public')->delete($imageProduct->img);
                    }
                    // Delete the ImageProduct record
                    $imageProduct->delete();
                }
                // Redirect back with success message
                return redirect()->route('admin.product.edit', $product_id)
                    ->with('message', __('Image Product deleted successfully'));
            }

            // Redirect back with error message if ImageProduct not found
            return redirect()->back()->withErrors(['error' => 'Image Product not found.']);
        } catch (\Exception $e) {
            // Log the error
            \Log::error('Error deleting image: ' . $e->getMessage());

            // Redirect back with error message
            return redirect()->back()->withErrors(['error' => 'Failed to delete image.']);
        }
    }
}
