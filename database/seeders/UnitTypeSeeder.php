<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UnitTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('unit_types')->truncate();
        DB::table('unit_types')->insert([
            [
                'id' => 1,
                'name' => 'Temperature',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 2,
                'name' => 'Volume',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
