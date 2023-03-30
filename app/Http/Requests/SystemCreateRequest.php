<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class SystemCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */

    protected $stopOnFirstFailure = true;

    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'unit_type_id' => 'required',
            'input_numerical_value' => 'required|numeric|min:1|max:100000',
            'convert_from' => 'required',
            'convert_to' => 'required',
            'student_response' => 'required|numeric|min:1|max:100000'
        ];
    }
}
