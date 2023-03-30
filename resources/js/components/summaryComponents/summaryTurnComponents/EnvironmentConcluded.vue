<template>
    <div class="environment_concluded_container">
        <EnvironmentConcludedLoadingComponent v-if="$store.state.LOADING"/>
        <div v-else class="text-center w-100">
            <img 
                style="width:80px; height:80px; margin-bottom:20px;border-radius: 80px;" 
                :src="baseUrl + 'assets/questionCategories/' + QUESTION?.question_category?.icon"
                @error="event => event.target.src = baseUrl + 'images/placeholder.jpg'" />
            <!-- <img style="width:80px; height:80px; margin-bottom:20px" class="image-fluid" :src="baseUrl + 'images/Desafio_pic.png'" /> -->
            <h4 class="mb-4">{{QUESTION?.question_category?.title}} Concluído!</h4>
            <h6>Respostas corretas: <b class="text-success">{{CORRECT_ANSWER}}</b></h6>
            <h6>Respostas incorretas: <b class="text-danger">{{NOT_CORRECT_ANSWER}}</b></h6>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex'
    import { onMounted, computed, defineAsyncComponent } from 'vue'

    const EnvironmentConcludedLoadingComponent = defineAsyncComponent(() =>
        import('./../../LoadingComponents/EnvironmentConcludedLoading.vue')
    )

    export default {
        setup() {
            const STORE = useStore()
            const QUESTION = computed(() => STORE.state.gameSettingsModule.QUESTION)
            const CORRECT_ANSWER = computed(() => STORE.state.gameSettingsModule.ENVIRONMENT_CONCLUDED.CORRECT)
            const NOT_CORRECT_ANSWER = computed(() => STORE.state.gameSettingsModule.ENVIRONMENT_CONCLUDED.NOT_CORRECT)

            onMounted(() => {
                STORE.commit('setLoading', true)
                STORE.dispatch('getEnvironmentConcluded', QUESTION.value.id).then((resp) => {
                    STORE.commit('setLoading', false)
                })
            })

            return {
                CORRECT_ANSWER,
                NOT_CORRECT_ANSWER,
                QUESTION
            }
        },
        components: {
            EnvironmentConcludedLoadingComponent
        }
    }
</script>

<style scoped>
    .environment_concluded_container {
        background-color: white;
        min-height: 85vh;
        padding-top: 18vh;
        /* display: flex;
        align-items: center; */
    }
</style>