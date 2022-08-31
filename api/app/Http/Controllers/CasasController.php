<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Casa;
use App\Models\Foto;
use Validator;
class CasasController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Casa::select('casas.*','users.nombres as propietario')
        ->join('users','casas.id_propietario','=','users.id')->get();
        $todo;
        foreach($data as $casa){
            $data2 = Foto::where('id_casa',$casa->id)->get();
            $todo[]=[
                'casa'=>$casa,
                'fotos'=>$data2
            ];
        }
        return response()->json($todo);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
       
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'tipo_depart' => 'required|max:255',
            'direccion' => 'required',
            'ciudad' => 'required',
            'estado' => 'required',
            'cp' => 'required',
            'latitud' => 'required',
            'longitud' => 'required',
            'id_propietario' => 'required'
          ]);
      
          $newData = new Casa([
            'tipo_depart' => $request->get('tipo_depart'),
            'direccion' => $request->get('direccion'),
            'ciudad' => $request->get('ciudad'),
            'estado' => $request->get('estado'),
            'cp' => $request->get('cp'),
            'latitud' => $request->get('latitud'),
            'longitud' => $request->get('longitud'),
            'latitud' => $request->get('latitud'),
            'id_propietario' => $request->get('id_propietario')
          ]);
      
          $newData->save();
      
          return response()->json($newData);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $data = Casa::findOrFail($id);
        return response()->json($data);
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
