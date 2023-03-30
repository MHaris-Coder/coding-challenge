<template>
    <MasterLayout>
        <div class="container">
            <div class="row mb-5">
                <div class="col-lg-4 col-md-4 col-sm-12">

                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">

                </div>
                <div class="col-lg-4 col-md-4 col-sm-12">
                    <div class="text-right">
                        <a class="btn btn-sm btn-danger mt-3" href="javascript:void(0)" title="" @click="logout()"> 
                            Logout
                        </a>
                    </div>
                </div>
            </div>
            <div class="row mb-5">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <h2>Temperature Conversion</h2>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <input type="number" class="form-control" placeholder="Input Numerical Value" v-model="TEMPERATURE_FORM.input_numerical_value"/>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <select class="form-control" v-model="TEMPERATURE_FORM.convert_from">
                        <option value="">Select Input Unit</option>
                        <template v-for="TEMPERATURE in TEMPERATURES">
                            <option :value="TEMPERATURE?.id">{{ TEMPERATURE?.name }}</option>
                        </template>
                    </select>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <select class="form-control" v-model="TEMPERATURE_FORM.convert_to">
                        <option value="">Select Target Unit</option>
                        <template v-for="TEMPERATURE in TEMPERATURES">
                            <option :value="TEMPERATURE?.id">{{ TEMPERATURE?.name }}</option>
                        </template>
                    </select>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <input type="number" class="form-control" placeholder="Student Response" v-model="TEMPERATURE_FORM.student_response"/>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <button type="button" class="btn btn-primary mt-3" @click="UNIT_CONVERSION(TEMPERATURE_FORM)">Calculate</button>
                </div>
            </div>

            <!-- <div class="row mb-5">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <h2>Volume Conversion</h2>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <input type="number" class="form-control" placeholder="Input Numerical Value" v-model="VOLUME_FORM.input_numerical_value"/>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <select v-model="VOLUME_FORM.convert_from" class="form-control">
                        <option value="">Select Input Unit</option>
                        <template v-for="VOLUME in VOLUMES">
                            <option :value="VOLUME?.id">{{ VOLUME?.name }}</option>
                        </template>
                    </select>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <select v-model="VOLUME_FORM.convert_to" class="form-control">
                        <option value="">Select Target Unit</option>
                        <template v-for="VOLUME in VOLUMES">
                            <option :value="VOLUME?.id">{{ VOLUME?.name }}</option>
                        </template>
                    </select>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-12">
                    <input type="number" class="form-control" placeholder="Student Response" v-model="VOLUME_FORM.student_response"/>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <button type="button" class="btn btn-primary mt-3" @click="UNIT_CONVERSION(VOLUME_FORM)">Calculate</button>
                </div>
            </div> -->
            
            <table width="100%" class="table">
                <thead>
                    <tr>
                        <th>Input Numerical Value</th>
                        <th>Input Unit of Measure</th>
                        <th>Target Unit of Measure</th>
                        <th>Student Response</th>
                        <th>Actual Result</th>
                        <th>Output</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-if="UNIT_CONVERSION_RESPONSES?.length > 0">
                        <tr v-for="UNIT_CONVERSION_RESPONSE in UNIT_CONVERSION_RESPONSES">
                            <td>{{ UNIT_CONVERSION_RESPONSE?.input_numerical_value }}</td>
                            <td>{{ UNIT_CONVERSION_RESPONSE?.convert_from }}</td>
                            <td>{{ UNIT_CONVERSION_RESPONSE?.convert_to }}</td>
                            <td>{{ UNIT_CONVERSION_RESPONSE?.student_response }}</td>
                            <td>{{ UNIT_CONVERSION_RESPONSE?.actual_result }}</td>
                            <td>{{ UNIT_CONVERSION_RESPONSE?.status }}</td>
                        </tr>

                    </template>
                </tbody>
            </table>
        </div>
    </MasterLayout>
</template>

<script>
    import { ref, onMounted, defineAsyncComponent, computed, watchEffect } from 'vue'
    import { useStore } from 'vuex'
    import { mapActions, mapState } from 'vuex'

    export default {
        components: {

        },
        setup() {
            const STORE = useStore()
            let TEMPERATURE_FORM = ref({})
            let VOLUME_FORM = ref({})

            const initTemperatureFields = () => {
                TEMPERATURE_FORM.value.unit_type_id = STORE.state.UNIT_TYPE_IDS['Temperature']
                TEMPERATURE_FORM.value.input_numerical_value = ''
                TEMPERATURE_FORM.value.student_response = ''
                TEMPERATURE_FORM.value.convert_from = ''
                TEMPERATURE_FORM.value.convert_to = ''
            }

            const initVolumeFields = () => {
                VOLUME_FORM.value.unit_type_id = STORE.state.UNIT_TYPE_IDS['Volume']
                VOLUME_FORM.value.input_numerical_value = ''
                VOLUME_FORM.value.student_response = ''
                VOLUME_FORM.value.convert_from = ''
                VOLUME_FORM.value.convert_to = ''
            }

            watchEffect(() => {
                initTemperatureFields()
                initVolumeFields()
            })

            const UNIT_CONVERSION = (payload) => {
                STORE.dispatch('unitConversion', payload)
                .then((resp) => {
                    console.log('resp', resp)
                })
                .catch((err) => {
                    console.log('err', err)
                })
                .finally((fn) => {
                    initTemperatureFields()
                    initVolumeFields()
                })
            }

            return {
                TEMPERATURE_FORM,
                VOLUME_FORM,

                UNIT_CONVERSION
            }
        },
        methods: {
            ...mapActions([
                'logout'
            ]),
        },
        computed: {
            ...mapState({
                TEMPERATURES: state => state.TEMPERATURES,
                VOLUMES: state => state.VOLUMES,
                UNIT_CONVERSION_RESPONSES: state => state.UNIT_CONVERSION_RESPONSES
            })
        },
    }
</script>