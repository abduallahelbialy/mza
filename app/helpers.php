<?php
use Intervention\Image\Facades\Image;

// function imageProcessArray($image){
//     if ($image) {

//         if (count($image)>0 ) {
//             foreach()
//             Storage::disk('public_uploads')->delete('/parents_logo/' . $User->logo);

//         }//end of if

//         Image::make($request->logo)->save(public_path('uploads/parents_logo/' . $request->logo->hashName()));

//             $User->logo  = $request->logo->hashName();

//     }//end of if
// }
function imageProcess($imageRequest ){
    Image::make($imageRequest->image)->save(public_path('uploads/' . $imageRequest->image->hashName()));

    return $imageRequest->image->hashName();
}
//
