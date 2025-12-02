<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Exercise;
use Illuminate\Http\Request;

class ExerciseController extends Controller
{
    public function index()
    {
        return response()->json(Exercise::paginate(20));
    }

    public function show($id)
    {
        $exercise = Exercise::findOrFail($id);
        return response()->json($exercise);
    }

    public function search(Request $request)
    {
        $q = $request->query('q');
        $results = Exercise::where('name', 'like', "%$q%")
            ->orWhere('primary_muscles', 'like', "%$q%")
            ->paginate(20);
        return response()->json($results);
    }
}
