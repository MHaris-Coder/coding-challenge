<?php

namespace App\Exports;
use App\Models\User;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithTitle;


class UserExport implements FromArray, ShouldAutoSize,WithMapping,WithHeadings,WithEvents,WithTitle
{
   use Exportable;
    /**
    * @return \Illuminate\Support\Collection
    */
    public function  array(): array
    {
        $user =User::where('is_admin',0)->with('organization','organization.organizationType')->get()->toArray();
        // dd($user);
        return $user;
    }
    
    public function map($user): array
    {
        return [

            $user['id'],
            $user['name'],
            $user['email'],
            $user['organization']['name'] ? $user['organization']['name'] :  null ,
            $user['organization']['organization_type'] ? $user['organization']['organization_type']['name'] :  null ,
            $user['created_at'],

        ];

    }

    public function headings(): array
    {
        return [
            'Teacher id',
            'Name',
            'Email',
            'Organization',
            'Organization Type',
            'Created At',
        ];
    }

    public function title(): string
    {
        return 'Teachers';
    }

    public function registerEvents(): array
    {
        return[

            AfterSheet::class => function(AfterSheet $event){
                $event->sheet->getStyle('A1:F1')->applyFromArray([
                    'font' => [
                        'bold' =>true
                    ]
                ]);
            },
        ];
   
    }
}
