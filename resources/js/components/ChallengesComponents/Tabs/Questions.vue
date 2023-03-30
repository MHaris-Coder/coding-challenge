<template>
    <div>
        <template v-if="QUESTIONS?.length > 0">
            <template v-for="QUESTION in QUESTIONS">
                <CardComponent 
                    :title="QUESTION?.title" 
                    :description="QUESTION?.questions_title"
                    :icon="QUESTION?.icon"
                    :precentage="QUESTION?.attemptPercentage"
                    @click="NEXT_SCREEN_FUNC(QUESTION)"/>
            </template>
        </template>
        <template v-else>
            <p class="mb-0">No Record Found</p>
        </template>
    </div>
</template>

<script>
    import { defineAsyncComponent, computed } from 'vue';
    import { useStore } from 'vuex'
    
    const CardComponent = defineAsyncComponent(() => import('../Card.vue'))

    export default {
        setup(props, { emit }) {
            const STORE = useStore()

            const QUESTIONS = computed(() => STORE.state.challengesModule.QUESTIONS)
            const NEXT_SCREEN_FUNC = (QUESTION) => {
                emit('nextScreen', QUESTION)
            }

            return {
                STORE,
                QUESTIONS,
                NEXT_SCREEN_FUNC
            }
        },
        components: {
            CardComponent
        }
    }
</script>