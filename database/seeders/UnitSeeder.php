<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UnitSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('units')->truncate();
        DB::table('units')->insert([
            [
                'id' => 1,
                'unit_type_id' => 1,
                'name' => 'Kelvin',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 2,
                'unit_type_id' => 1,
                'name' => 'Celsius',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 3,
                'unit_type_id' => 1,
                'name' => 'Fahrenheit',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 4,
                'unit_type_id' => 1,
                'name' => 'Rankine',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 5,
                'unit_type_id' => 2,
                'name' => 'Liters',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 6,
                'unit_type_id' => 2,
                'name' => 'Tablespoons',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 7,
                'unit_type_id' => 2,
                'name' => 'Cubic Inches',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 8,
                'unit_type_id' => 2,
                'name' => 'Cups',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 9,
                'unit_type_id' => 2,
                'name' => 'Cubic Feet',
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'id' => 10,
                'unit_type_id' => 2,
                'name' => 'Gallons',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}