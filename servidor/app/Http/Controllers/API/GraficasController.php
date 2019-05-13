<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
class GraficasController extends Controller
{
    public function eventosMes() {
        $fecha_actual = Carbon::now()->format('Y');
        $inicio = $fecha_actual.'-01-01';
        $fin = $fecha_actual.'-12-31';
        $eventos = DB::table('eventos')
    ->whereBetween('fecha_finaliza', [$inicio,$fin])
    ->select(DB::raw('count(*) as total'), DB::raw('MONTH(eventos.fecha_finaliza) AS mes'))
    ->groupBy('mes')
    ->orderBy('mes', 'asc')
    ->get();
        return response()->json($eventos, 200);
    }
    public function beneficiariosMes() {
        $beneficiarios = DB::table('participantes')
            ->whereBetween('created_at', ['2019-01-01', '2019-12-31'])
            ->select(DB::raw('count(*) as total'), DB::raw('MONTH(participantes.created_at) AS mes'))
            ->groupBy('mes')
            ->orderBy('mes', 'asc')
            ->get();
        return response()->json($beneficiarios, 200);
    }
}
