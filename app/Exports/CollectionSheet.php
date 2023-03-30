<?php
namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\WithStyles;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;

class CollectionSheet implements FromCollection, WithTitle, WithStyles
{
    public function __construct($title, $data)
    {
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time',600);
        $this->data = $data;
        $this->title = $title;
    }

    public function collection()
    {
        ini_set('memory_limit', '-1');
        ini_set('max_execution_time',600);
        return new Collection($this->data);
    }

    public function title(): string
    {
        return $this->title;
    }

    public function styles(Worksheet $sheet)
    {
        return [
            1    => ['font' => ['bold'=>true, 'family'=>'Calibri', 'size'=> '12',]],
        ];
    }
}