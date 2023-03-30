<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Hash;
use App\Models\Organization;
use App\Models\User;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\UserExport;
use App\Exports\AlldataExport;
use App\Helper\Helper;

class UsersController extends Controller
{
    public function index()
    {
        $data = User::with('organization')->whereIsAdmin(0)->get();
        return view('users.index', ['data' => $data]);
    }

    public function create()
    {
        $data_ = Organization::all();
        return view('users.add', ['data_' => $data_]);
    }

    public function store(request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|unique:users,email',
            'password' => 'required',
            'organization_id' => 'required'
        ]);

        if ($validator->fails()) {
            return redirect()
                ->back()
                ->withErrors($validator)
                ->withInput();
        }

        User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'organization_id' => $request->organization_id,
            'is_admin' => 0
        ]);

        return redirect('/admin/user')->with('status', "Added Succesfully");
    }

    public function edit($id)
    {
        $data = User::with('organization')->whereId($id)->first();
        $data_ = Organization::all();
        return view('users.edit', ['data' => $data, 'data_' => $data_]);
    }

    public function update(request $request, $id)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required',
            // 'email' => 'required|unique:users,email',
            // 'password' => 'required',
            'organization_id' => 'required'
        ]);

        if ($validator->fails()) {
            return redirect()
                ->back()
                ->withErrors($validator)
                ->withInput();
        }

        $data = User::find($id);

        $data->name = $request->input('name');
        $data->organization_id = $request->input('organization_id');

        if($data->email != $request->input('email')) {
            $validator = Validator::make($request->all(), [
                'email' => 'required|unique:users,email',
            ]);
    
            if ($validator->fails()) {
                return redirect()
                    ->back()
                    ->withErrors($validator)
                    ->withInput();
            }

            $data->email = $request->input('email');
        }
            

        if($request->has('password') && !empty($request->input('password')))
            $data->password = Hash::make($request->input('password'));
        
        $data->save();

        return redirect('/admin/user')->with('status', "update succesfully");
    }

    public function destroy($id)
    {
        $user = User::whereId($id)->delete();
        if ($user) return redirect('/admin/user')->with('status', "Deleted Succesfully!");

        return redirect('admin/user')->with('error', "Record Not Found.");
    }

    public function user_export()
    {
        $user =User::where('is_admin',0)->get()->toArray();
        if(!empty($user)){
            $titles = array_keys($user[0]);
            array_unshift($user, $titles);
        }
        return Helper::downloadExcel([
            "Users" => $user,
        ],"Teachers-", true);
        // $fecha = date('d-m-Y');
        // return Excel::download(new UserExport, 'Teachers-'.$fecha.'.xls', \Maatwebsite\Excel\Excel::XLS);
    }

    public function all_data_export()
    {
        $fecha = date('d-m-Y');
        return Excel::download(new AlldataExport, 'Statistic_Report-'.$fecha.'.xls', \Maatwebsite\Excel\Excel::XLS);
    }


}
