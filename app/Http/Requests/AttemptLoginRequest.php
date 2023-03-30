<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AttemptLoginRequest extends FormRequest
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
            'email' => 'required|email',
            'pass' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Email address field is required',
            'email.email' => 'Please enter the valid email address',
            'pass.required' => 'Password field is required',
        ];
    }
}
