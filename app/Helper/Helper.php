<?php

namespace App\Helper;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\AnyExport;
use App\Exports\CollectionSheet;

class Helper
{
    static function downloadExcel($arrayData, $filename = "", $downloadable = false){
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time',600);
        $fileName = $filename.'_'.date('Y_m_d_H_i_s_'). '.xlsx';
        if($downloadable){
            return Excel::download(new AnyExport($arrayData), $fileName);
        }
        Excel::store(new AnyExport($arrayData), $fileName);
        return $fileName;
    }
}