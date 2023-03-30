<?php

namespace App\Exports;

use App\Models\UserGame;
use Maatwebsite\Excel\Concerns\FromArray;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithMapping;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithTitle;


class GamesExport implements FromArray,ShouldAutoSize,WithMapping,WithHeadings,WithEvents,WithTitle
{

    use Exportable;

    
    public function  array(): array
    {
        $userGame =UserGame::with('user','user.organization','lastGameTurn')->get()->toArray();
        // dd($userGame);
        return $userGame;
    }

    
    public function map($userGame): array
    {
        return [

            $userGame['id'],
            isset($userGame['user']['name']) ? $userGame['user']['name'] :  null ,
            isset($userGame['user']['organization']) ? $userGame['user']['organization']['name'] :  null,
            $userGame['game_setting'],
            $userGame['no_of_player'],
            $userGame['created_at'],
            $userGame['score'] == 0 ? '0' : $userGame['score'],
            isset($userGame['last_game_turn']) ? $userGame['last_game_turn']['time'] :  null,
        ];

    }

    public function headings(): array
    {
        return [
            'id',
            'Teacher',
            'Organization',
            'Game Setting',
            'No of Player',
            'Date',
            'Score',
            'Time',

        ];
    }

    public function title(): string
    {
        return 'Games';
    }
    public function registerEvents(): array
    {
        return[

            AfterSheet::class => function(AfterSheet $event){
                $event->sheet->getStyle('A1:H1')->applyFromArray([
                    'font' => [
                        'bold' =>true
                    ]
                ]);
            },
        ];
   
    }
}
