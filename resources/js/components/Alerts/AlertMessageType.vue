<template>
    <div class="container-fluid" :class="{'mt-3': (responseType === 'success' || responseType === 'error')}">
        <template v-if="responseType === 'success'">
            <div class="alert alert-success text-success p-2 mb-0">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-1 p-0">
                            <div>
                                <i class="fa fa-check-circle fa-2x"></i>
                            </div>
                        </div>
                        <div class="col-10">
                            <h5>Recompensa de {{ QUESTION?.question_category?.title }}</h5>
                            <small>{{QUESTION?.success_message}}</small>
                        </div>
                        <div class="col-1 p-0">
                            <div class="text-right">
                                <a @click="closeAlert()" href="javascript:void(0);" title="" class="fa fa-close text-lg"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-if="responseType === 'error'">
            <div class="alert alert-danger text-danger p-2 mb-0">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-1 p-0">
                            <div>
                                <i class="fa fa-times-circle fa-2x"></i>
                            </div>
                        </div>
                        <div class="col-10">
                            <h5>Evento falhado!</h5>
                            <small>{{QUESTION?.fail_message}}</small>
                        </div>
                        <div class="col-1 p-0">
                            <div class="text-right">
                                <a @click="closeAlert()" href="javascript:void(0);" title="" class="fa fa-close text-lg"></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
    import { watchEffect, ref, onMounted, computed } from 'vue'
    import { useStore } from 'vuex'

    const responseType = ref('')
    const closeAlert = () => { responseType.value = '' }

    export default {
        setup(props) {
            const STORE = useStore()
            const QUESTION = computed(() => STORE.state.gameSettingsModule.QUESTION)

            onMounted(() => {
                responseType.value = ''
                
            })

            watchEffect(() => {
                if(props?.type) responseType.value = props.type
            })

            return {
                responseType,
                QUESTION,

                closeAlert
            }
        },
        props: {
            title: String,
            content: String,
            type: String,
            exitAlert: Number
        },
        watch: {
            'exitAlert': () => {closeAlert()}
        }
    }
</script>