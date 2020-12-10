<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Images;
use Illuminate\Support\Facades\File;
use Intervention\Image\ImageManagerStatic as Image;

class ImageProcessor extends Controller
{
    public function upload(Request $request)
    {
        $userId = $request->get('user_id');
        $allFiles = $request->allFiles();

        $imageModel = new Images();

        foreach ($allFiles as $file) {
            $imageModel->user_id = $userId;
            $imageModel->image_path = $file->store('public');
            $storedFile = File::get(base_path() . '/storage/app/' . $imageModel->image_path);
            Image::make($storedFile)->greyscale()->save(base_path() . '/storage/app/' . $imageModel->image_path);
            $imageModel->image_path = str_replace('public/', "", $imageModel->image_path);
            $imageModel->save();
        }

        return json_encode(['success' => true]);
    }

    public function get()
    {
        $imageModel = new Images();

        $allImages = $imageModel::all();

        return $allImages;
    }

    public function getByUser($id = null) {
        $imageModel = new Images();

        $allImages = $imageModel::all()->where('user_id', 'eq', $id);

        foreach ($allImages as $allImage) {
            $arr[] = $allImage;
        }

        return  $arr;
    }
}
