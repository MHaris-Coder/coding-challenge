<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromArray;
use App\Http\Controllers\RankingController;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Concerns\WithTitle;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\ShouldAutoSize;
use Maatwebsite\Excel\Concerns\WithHeadings;
use Maatwebsite\Excel\Concerns\WithEvents;
use Maatwebsite\Excel\Events\AfterSheet;
use Maatwebsite\Excel\Concerns\WithMapping;


class RankihgExport implements FromArray,ShouldAutoSize,WithHeadings, WithEvents,WithMapping,WithTitle
{
    use Exportable;

    public function  array(): array
    {

        $exportData = [];
        $request = new Request();   
        $request->setMethod('POST'); //default METHOD
        $response = RankingController::index($request);

        if (!empty($response)) {
            if (!empty($response->getStatusCode())) {
                $rsCode = $response->getStatusCode();
                if($rsCode == 200){
                    $currentOrganizationData = json_decode($response->getContent(),true);
                   if(!empty($currentOrganizationData)){
                        if( 
                        (isset($currentOrganizationData['data']['matches']) && count($currentOrganizationData['data']['matches']) > 0) && 
                        (isset($currentOrganizationData['data']['challenges']) && count($currentOrganizationData['data']['challenges']) > 0) ) {
                            foreach ($currentOrganizationData['data']['matches'] as $key => $value) {
                                foreach ($currentOrganizationData['data']['challenges'] as $key2 => $value2) {
                                    if($value['organization_id'] == $value2['organization_id']) {
                                        $currentOrganizationData['data']['matches'][$key]['ranking_percentage'] = $value2['ranking_percentage'];
                                    }
                                }
                            }
                        }

                        $exportData = isset($currentOrganizationData['data']['matches']) ? $currentOrganizationData['data']['matches'] : [];
                   } 
                }
            }
        }
       
        // dd($exportData);
        return $exportData;
        
    }

    public function map($exportData): array
    {
        return [
            $exportData['organization_id'],
            $exportData['organization_name'],
            $exportData['rank'],
            $exportData['score'],
            $exportData['total_games'],
            $exportData['ranking_percentage']
        ];

    }

    public function headings(): array
    {
        return [
            'Organization Id',
            'Organization Name',
            'Rank',
            'Score',
            'No of Played Games',
            '% Success in the Challenges'
        ];
    }
    public function title(): string
    {
        return 'Ranking';
    }
    public function registerEvents(): array
    {
        return[

            AfterSheet::class => function(AfterSheet $event){
                $event->sheet->getStyle('A1:F1')
                ->applyFromArray([
                    'font' => [
                        'bold' =>true
                    ]
                ]);
                $event->sheet->getStyle('A1:F100')->getAlignment()->setHorizontal('left');
               

                
            },

            
        ];
   
    }

}
