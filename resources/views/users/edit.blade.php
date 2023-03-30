<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Users') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    @if ($errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                    @endif
                    <form action="{{ url('admin/user/'.$data->id)}}" method="POST" enctype="multipart/form-data">
                        @method('PUT')
                        @csrf
                        <div class="col-md-6">
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <div class="input-group input-group-outline">

                                    <input value="{{$data->name}}" name="name" type="text" class="form-control">
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <div class="input-group input-group-outline mb-3">
                                    <input value="{{$data->email}}" name="email" type="text" class="form-control">
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Password</label>
                                <div class="input-group input-group-outline mb-3">
                                    <input name="password" type="text" class="form-control">
                                </div>
                            </div>

                            <div class="mb-3">
                                <label class="form-label">Organization </label>
                                <div class="input-group input-group-outline">
                                    <select class="form-control" name="organization_id">
                                        <option value="">Select Organization </option>
                                        @if($data_->count() > 0)
                                        @foreach($data_ as $organization)
                                        <option value="{{$organization->id}}" @if($data->organization_id == $organization->id) selected @endif>{{$organization->name}}</option>
                                        @endforeach
                                        @endif
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="mb-3">
                            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>