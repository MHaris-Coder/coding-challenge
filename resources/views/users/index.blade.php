<x-app-layout>
    <x-slot name="header">
        <div class="d-flex mr-auto">
          <h2 class="font-semibold text-xl text-gray-800 leading-tight mb-0">
            {{ __('Users') }}
          </h2>
          <a href="{{url('admin/user/create')}}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto">
            <i class="fa fa-plus"></i>
          </a>
        </div>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div style="margin-top:20px;" class="container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Organization</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($data as $key => $data)
                                <tr>
                                    <td>{{ $key + 1 }}</td>
                                    <td>{{ $data->name }}</td>
                                    <td>{{ $data->email }}</td>
                                    <td>@if(!is_null($data->organization)){{ $data->organization->name }}@endif</td>
                                    <td>
                                        <a href="{{url('admin/user/'.$data->id.'/edit')}}" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</a>
                                        <form onsubmit="return validate(this);" class="d-inline-flex" action="{{ url('admin/user/'.$data->id)}}" method="POST">
                                            @method('DELETE')
                                            @csrf
                                            <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2">Delete</button>
                                        </form>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>