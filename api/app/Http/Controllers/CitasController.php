<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cita;
class CitasController extends Controller

{
    /**
     
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Cita::all();
        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $request->validate([
            'id_estudiante' => 'required|max:255',
            'id_casa' => 'required',
            'fecha' => 'required',
            'hora' => 'required',
            'status' => 'required'
          ]);
      
          $newData = new Cita([
            'id_estudiante' => $request->get('id_estudiante'),
            'id_casa' => $request->get('id_casa'),
            'fecha' => $request->get('fecha'),
            'hora' => $request->get('hora'),
            'status' => $request->get('status')
          ]);
      
          $newData->save();
      
          return response()->json($newData);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $coment = Casa::findOrFall($id);
        return response()->json($Cita);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
