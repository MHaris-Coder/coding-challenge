<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\WithMultipleSheets;

class AlldataExport implements WithMultipleSheets
{
    public function __construct($dataArray = [])
    {

    }

    public function sheets(): array
    {
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time',600);
        $sheets = [
            new GamesExport(""),
            new UserExport(),
            new RankihgExport()
        ];
        // $sheets[] = new GamesExport();
        // $sheets[] = new UserExport();
        // $sheets[] = new RankihgExport();
        return $sheets;
    }
}
