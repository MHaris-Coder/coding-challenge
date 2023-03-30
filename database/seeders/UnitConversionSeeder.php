<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UnitConversionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('unit_conversions')->truncate();
        DB::table('unit_conversions')->insert([

            /********** Temperature Conversion **********/

            /*** Kelvin To Celsius Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 1,
                'convert_to' => 2,
                'formula' => '{{value}} - 273.15',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Kelvin To Fahrenheit Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 1,
                'convert_to' => 3,
                'formula' => '({{value}} - 273.15) * (9/5) + 32',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Kelvin To Rankine Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 1,
                'convert_to' => 4,
                'formula' => '{{value}} * 1.8',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Celsius To Kelvin Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 2,
                'convert_to' => 1,
                'formula' => '{{value}} + 273.15',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Celsius To Fahrenheit Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 2,
                'convert_to' => 3,
                'formula' => '({{value}} * 1.8) + 32',
                'created_at' => now(),
                'updated_at' => now()
            ],
            
            /*** Celsius To Rankine Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 2,
                'convert_to' => 4,
                'formula' => '({{value}} * 1.8) + 491.67',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Fahrenheit To Kelvin Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 3,
                'convert_to' => 1,
                'formula' => '(({{value}} - 32) * (5/9)) + 273.15',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Fahrenheit To Celsius Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 3,
                'convert_to' => 2,
                'formula' => '({{value}} - 32) * (5/9)',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Fahrenheit To Rankine Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 3,
                'convert_to' => 4,
                'formula' => '{{value}} + 459.67',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Rankine To Kelvin Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 4,
                'convert_to' => 1,
                'formula' => '{{value}} * (5/9)',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Rankine To Celsius Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 4,
                'convert_to' => 2,
                'formula' => '({{value}} - 491.67) * (5/9)',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Rankine To Fahrenheit Conversion ***/
            [
                'unit_type_id' => 1,
                'convert_from' => 4,
                'convert_to' => 3,
                'formula' => '{{value}} - 459.67',
                'created_at' => now(),
                'updated_at' => now()
            ],



            /********** Volume Conversion **********/

            /*** Liters To Tablespoons Conversion ***/
            [
                'unit_type_id' => 2,
                'convert_from' => 5,
                'convert_to' => 6,
                'formula' => '{{value}} * 67.628',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Liters To Cubic Inches Conversion ***/
            [
                'unit_type_id' => 2,
                'convert_from' => 5,
                'convert_to' => 7,
                'formula' => '{{value}} * 61.024',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Liters To Cups Conversion ***/
            [
                'unit_type_id' => 2,
                'convert_from' => 5,
                'convert_to' => 8,
                'formula' => '{{value}} * 4.227',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Liters To Cubic Feet Conversion ***/
            [
                'unit_type_id' => 2,
                'convert_from' => 5,
                'convert_to' => 9,
                'formula' => '{{value}} / 28.317',
                'created_at' => now(),
                'updated_at' => now()
            ],

            /*** Liters To Gallons Conversion ***/
            [
                'unit_type_id' => 2,
                'convert_from' => 5,
                'convert_to' => 10,
                'formula' => '{{value}} / 3.785',
                'created_at' => now(),
                'updated_at' => now()
            ],
        ]);
    }
}
