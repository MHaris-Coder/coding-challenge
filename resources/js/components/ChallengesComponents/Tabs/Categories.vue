<template>
    <div>
        <template v-if="QUESTION_CATEGORIES?.length > 0">
            <template v-for="QUESTION_CATEGORY in QUESTION_CATEGORIES">
                <CardComponent 
                    :title="QUESTION_CATEGORY?.title" 
                    :description="QUESTION_CATEGORY?.description"
                    :icon="QUESTION_CATEGORY?.icon"
                    :precentage="QUESTION_CATEGORY?.attemptPercentage"
                    :attemptAsPerUser="QUESTION_CATEGORY?.attemptQuestionAsPerUser"
                    @click="$emit('setQuestionsFilterByCategory', QUESTION_CATEGORY?.id)"
                />
            </template>
        </template>
    </div>
</template>

<script>
    import { defineAsyncComponent, computed } from 'vue';
    import { useStore } from 'vuex'
    const CardComponent = defineAsyncComponent(() => import('../Card.vue'))

    export default {
        setup() {
            const STORE = useStore()
            const QUESTION_CATEGORIES = computed(() => STORE.state.challengesModule.QUESTION_CATEGORIES)

            return {
                STORE,
                QUESTION_CATEGORIES
            }
        },
        components: {
            CardComponent
        }
    }
</script>