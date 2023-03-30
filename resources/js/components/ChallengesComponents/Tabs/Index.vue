<template>
    <div class="tabs_container">
        <div class="tabs_targets">
            <button @click="TABS_FUNC(true)" :class="{'active': TABS === true}">Categorias</button>
            <button @click="TABS_FUNC(false)" :class="{'active': TABS === false}">Perguntas</button>
        </div>
        <div class="tabs_screens">
            <template v-if="TABS">
                <CategoriesComponent @setQuestionsFilterByCategory="SET_QUESTIONS_FILTER_BY_CATEGORY_FUNC"/>
            </template>
            <template v-else>
                <QuestionsComponent @nextScreen="NEXT_SCREEN_FUNC"/>
            </template>
        </div>
    </div>
</template>

<script> 
    import { defineAsyncComponent, ref, watch } from 'vue'
    import { useStore } from 'vuex'

    const CategoriesComponent = defineAsyncComponent(() => import('./Categories.vue'))
    const QuestionsComponent = defineAsyncComponent(() => import('./Questions.vue'))
    
    export default {
        setup(props, { emit }) {
            const store = useStore()
            const TABS = ref(true)

            const TABS_FUNC = (payload) => {
                if(payload)
                TABS.value = payload
                else
                    store.dispatch('challenges').then(async () => {
                        TABS.value = await false 
                    })
            }

            const SET_QUESTIONS_FILTER_BY_CATEGORY_FUNC = (question_category_id) => {
                store.dispatch('questionsFilterByCategory', question_category_id).then(async () => {
                    TABS.value = await false 
                })

                emit('setCheckmarkAccordingToFilter', question_category_id)
            }

            const NEXT_SCREEN_FUNC = (QUESTION) => {
                emit('nextScreen', QUESTION)
            }

            watch(() => props.questionCategoryId, (question_category_id) => {
                SET_QUESTIONS_FILTER_BY_CATEGORY_FUNC(question_category_id)
            })

            return {
                TABS,
                TABS_FUNC,
                SET_QUESTIONS_FILTER_BY_CATEGORY_FUNC,
                NEXT_SCREEN_FUNC
            }
        },
        components: {
            CategoriesComponent,
            QuestionsComponent
        },
        props: {
            questionCategoryId: Number
        }
    }
</script> 

<style scoped>
    .tabs_container {
        background-color: #fff;
    }
    .tabs_targets {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
    }
    .tabs_targets button {
        width: 50%;
        border-radius: 20px;
        min-height: 40px;
        font-size: 15px;
    }
    .tabs_targets button.active {
        background-color: #21b7f1;
        color: #fff;
    }
</style>