<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class AnyExport implements WithMultipleSheets
{
    public function __construct($dataArray = [])
    {
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time',600);
        $this->dataArray = $dataArray;
    }

    public function sheets(): array
    {
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time',600);
        $sheets = [];
        foreach($this->dataArray as $key => $data){
            $sheets[] = new CollectionSheet($key, $data);
        }
        return $sheets;
    }
}
