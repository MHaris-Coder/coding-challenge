<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Helper\APIresponse;
use App\Models\User;
use App\Models\UnitType;
use App\Models\Unit;
use App\Models\UnitConversion;
use App\Models\UnitConversionResponse;
use Carbon\Carbon;
use App\Http\Requests\SystemCreateRequest;

class SystemController extends Controller
{
    public function index(Request $request)
    {
        try {
            $data = [];
            $unitType = UnitType::select('id', 'name')->get();
            if($unitType->count() > 0) {
                foreach ($unitType as $value) {
                    $data[$value->name] = $value->unit;
                    $data['UnitTypeIds'][$value->name] = $value->id;
                }
            }

            $data['UnitConversionResponse'] = UnitConversionResponse::select('input_numerical_value', 'convert_from', 'convert_to', 'student_response', 'actual_result', 'status')->get();

            return APIresponse::success('System Info Fetched!', $data);
        } catch (\Throwable $th) {
            return APIresponse::error($th->getMessage(), []);
        }
    }

    public function create(SystemCreateRequest $request) {
        try {
            $unitTypeId = $request->input('unit_type_id');
            $inputNumericalValue = $request->input('input_numerical_value');
            $convertFrom = $request->input('convert_from');
            $convertTo = $request->input('convert_to');
            $studentResponse = $request->input('student_response');

            $unitConversion = UnitConversion::select('formula')
                                            ->whereUnitTypeId($unitTypeId)
                                            ->whereConvertFrom($convertFrom)
                                            ->whereConvertTo($convertTo)
                                            ->first();
            if(is_null($unitConversion)) return APIresponse::error('Formula Not Found!', []);

            $replace = str_replace('{{value}}', $inputNumericalValue, $unitConversion->formula);
            $convertedNumericalValue = eval('return '.$replace.';');
            $convertedNumericalValue = (float)number_format((float)$convertedNumericalValue, 2, '.', '');

            /********** Unit Conversion Response Has Isolated Data (Only For view) **********/
            $unitType = UnitType::select('name')->find($unitTypeId);
            $payload = [];
            $payload['unit_type'] = $unitType->name ?? null;
            $payload['convert_from'] = Unit::select('name')->find($convertFrom)->name ?? null;
            $payload['convert_to'] = Unit::select('name')->find($convertTo)->name ?? null;
            $payload['input_numerical_value'] = $inputNumericalValue;
            $payload['actual_result'] = $convertedNumericalValue;
            $payload['student_response'] = $studentResponse;

            if($convertedNumericalValue == $studentResponse) {
                $payload['status'] = 'correct';
            }
            else {
                $payload['status'] = 'incorrect';
            }

            UnitConversionResponse::create($payload);

            if($convertedNumericalValue == $studentResponse) {
                return APIresponse::success('Response Is Correct!', []);
            }
            return APIresponse::error('Response Is Incorrect!', []);
        } catch (\Throwable $th) {
            return APIresponse::error($th->getMessage(), []);
        }
    }

}
