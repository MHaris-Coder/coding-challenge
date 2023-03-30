<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnitConversionResponses extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unit_conversion_responses', function (Blueprint $table) {
            $table->id();
            $table->string('unit_type')->nullable();
            $table->string('convert_from')->nullable();
            $table->string('convert_to')->nullable();
            $table->float('input_numerical_value')->nullable();
            $table->float('actual_result')->nullable();
            $table->float('student_response')->nullable();
            $table->string('status')->enum('status', ['incorrect', 'correct'])->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('unit_conversion_responses');
    }
}
