<?php

namespace App\Http\Controllers\API;

use App\Persona;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PersonaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $personas= Persona::join('organizaciones','organizaciones.organizacion_id','=','personas.organizacion_id')
            ->join('parroquias','parroquias.parroquia_id','=','personas.parroquia_id')
            ->selectRaw('personas.*, organizaciones.nombre as organizacion,parroquias.nombre as parroquia')
            ->orderBy('personas.persona_id','desc')
            ->paginate(10);
        return response()->json($personas, 200);
    }
    public function listar()
    {
        $persona = Persona::orderBy('persona_id','desc')->get();
        return response()->json($persona, 200);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $persona = Persona::create($request->all());
        return response()->json($persona, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Persona::find($id), 200);
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
        $persona = Persona::find($id);
        $persona->update($request->all());
        return response()->json($persona, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $persona = Persona::find($id);
        $persona->delete();
        return response()->json($persona, 200);
    }

    public function sri($cedula, $timeOut = 0, $proxy=null) {
        $data=array('success'=>true, 'message'=>null, 'data'=>null);
        $personas = Persona::where('cedula', 'like', '%'.$cedula.'%')->count();
/*        echo $cedula;
        echo $personas;*/
        if ($personas > 0) {
            $data = Persona::where('cedula', 'like', '%'.$cedula.'%')->first();
            $type = 'local';
        } else {
            if(strlen($cedula)!=10) throw new Exception('La cedula debe tener 10 digitos!');
            $post = array('tipo'=>'getDataWsRc','ci'=>$cedula);
            $request = curl_init();
            curl_setopt ($request, CURLOPT_URL, "http://www.mdi.gob.ec/minterior1/antecedentes/data.php");
            curl_setopt ($request, CURLOPT_SSL_VERIFYPEER, false);
            curl_setopt ($request, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt ($request, CURLOPT_CONNECTTIMEOUT, $timeOut);
            curl_setopt ($request, CURLOPT_REFERER, 'http://www.mdi.gob.ec/minterior1/antecedentes/verifica.php');
            curl_setopt ($request, CURLOPT_POSTFIELDS, $post);
            if($proxy!=null){ //Si tiene salida a Internet por Proxy, debe poner ip y puerto
                curl_setopt ($request, CURLOPT_HTTPPROXYTUNNEL, 1);
                curl_setopt ($request, CURLOPT_PROXY, "$proxy[ip]:$proxy[port]");
                if(isset($proxy['user'])) curl_setopt ($request, CURLOPT_PROXYUSERPWD, "$proxy[user]:$proxy[password]");
            }
            $response = curl_exec($request);
            curl_close($request);
            $ced = json_decode($response,true);
            if($ced==null) throw new Exception('La cedula no existe o no se logro obtener los datos!');
            $ced=$ced[0];
            if(isset($ced['error']) && !empty($ced['error'])) throw new Exception("La $cedula no existe o no se logro obtener los datos!");
            $data['data']=array('identificacion' => $ced['identity'],
                'nombreCompleto' => $ced['name'],
                'genero' => $ced['genre'],
                'fechaNacimiento' => $ced['dob'],
                'estadoCivil' => $ced['civilstate'],
                'nacionalidad' => $ced['nationality'],
                'nombreCompletoConyuge' => null,
                'fechaDefuncion' => null,
                'numeroCedulaPadre' => null,
                'numeroCedulaMadre' => null,
                'residencia'=>$ced['residence'],
                'domicilio'=>$ced['streets'],
                'numeroDomicilio'=>$ced['homenumber']
            );
            $type = 'sri';
        }
        return response()->json([
            'data' => $data,
            'type' => $type
        ], 200);
    }
}
