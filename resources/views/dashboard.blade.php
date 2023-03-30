<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <div class="d-flex">
                        You're logged in!
                        <a class="ml-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto" href="{{route('all_data_export')}}" title="Export Data">Export Data</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
