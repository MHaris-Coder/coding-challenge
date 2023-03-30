<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUnitConversionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('unit_conversions', function (Blueprint $table) {
            $table->id();
            $table->integer('unit_type_id')->nullable();
            $table->integer('convert_from')->nullable();
            $table->integer('convert_to')->nullable();
            $table->longText('formula')->nullable();
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
        Schema::dropIfExists('unit_conversions');
    }
}
