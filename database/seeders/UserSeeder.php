<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->truncate();
        DB::table('users')->insert([
            [
                'name' => 'Admin',
                'email' => 'testadmin@yopmail.com',
                'password' => Hash::make('1000'),
                'is_admin' => 1,
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'name' => 'testuser',
                'email' => 'testuser@yopmail.com',
                'password' => Hash::make('1000'),
                'is_admin' => 0,
                'created_at' => now(),
                'updated_at' => now()
            ]
        ]);
    }
}