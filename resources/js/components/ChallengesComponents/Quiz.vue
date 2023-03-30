<template>
    <div class="container-fluid">
        <ChallengesQuizLoadingComponent v-if="$store.state.LOADING"/>
        
        <div v-else>
            <div class="question_circle_container">
                <div class="question_circle">
                    {{count}}
                </div>
            </div>
            <div class="question_container">
                <div class="question_box_placeholder" v-bind:class="{'active': is_selected}">
                    <div class="straws right"></div>
                    <div class="straws left"></div>
                </div>
                <div class="question_box">
                    <div class="question">
                        <h6>Environment</h6>
                        <p class="mb-0">{{QUESTION?.questions_title}}</p>
                    </div>
                </div>
            </div>
            <div class="answer_container">
                <button
                    v-if="is_selected" 
                    v-for="ANSWER in QUESTION?.answer"
                    class="answer_target"
                    :class="[
                        ANSWER?.result == 'correct' ? 'correct' : '',
                        ANSWER?.result == 'not_correct' ? 'not_correct' : '',
                    ]"
                    :data-answer="ANSWER">
                    {{ANSWER?.title}}
                </button>
                <button
                    v-else
                    v-for="ANSWER in QUESTION?.answer"
                    class="answer_target"
                    @click="selectAnswer(ANSWER)">
                    {{ANSWER?.title}}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState, useStore } from 'vuex'
    import { onMounted, defineAsyncComponent, computed } from 'vue'
    
    const ChallengesQuizLoadingComponent = defineAsyncComponent(() =>
        import('./../loadingComponents/ChallengesQuizLoading.vue')
    )
    
    export default {
        props: {
            QUESTION: Object
        },
        setup() {

            onMounted(() => {
                // STORE.commit('setLoading', true)
                // STORE.dispatch('getRandomQuestion').then((resp) => {
                //     STORE.commit('setLoading', false)
                // })
            })

            return {
                
            }
        },
        components: {
            ChallengesQuizLoadingComponent
        },
        data() {
            return {
                count: 1,
                is_selected: false,
                is_correct: true
            }
        },
        methods: {
            resetAllQuestionAnswerSelectedFunc: function() {
                for (const key in this.QUESTION?.answer) {
                    if (Object.hasOwnProperty.call(this.QUESTION?.answer, key)) {
                        this.QUESTION.answer[key].result = false                        
                    }
                }
            },
            setSelectedResult(answer) {
                for (const key in this.QUESTION?.answer) {
                    if (this.QUESTION?.answer[key].is_correct) {
                        if(answer?.is_correct) {
                            this.QUESTION.answer[key].result = 'correct'
                            
                            this.$emit('alertMessageType', 'success')
                        }
                        else {
                            this.QUESTION.answer[key].result = 'not_correct'
                            this.$emit('alertMessageType', 'error')
                        }
                    }
                }
            },
            async selectAnswer(answer) {
                this.is_selected = true
                this.setSelectedResult(answer)
                // await this.resetAllQuestionAnswerSelectedFunc()
                
                let payload = {
                    question_category_id: this.QUESTION?.question_category_id,
                    question_id: this.QUESTION?.id,
                    answer_id: answer?.id
                }                
                this.$emit('selectAnswer', this.is_selected)
                this.$emit('createChallengesQuiz', payload)

                // this.$store.dispatch('createChallengesQuiz', payload)
            }
        },
        computed: {
            ...mapState({
                

            })
        },
    }
</script>

<style scoped>
    .question_container {
        position: relative;
        /* background-color: #fff; */
        /* margin: 15px 0; */
        /* padding: 25px; */
        /* z-index: 999; */
    }
    .question_container .question_box {
        background-color: #fff;
        padding: 25px;
        position: relative;
        min-height: 150px;
        display: flex;
        align-items: center;
    }
    .question_container .question_box .question {width: 100%;}
    .question_container .question_box .question h6 {
        font-size: 1em;
        font-weight: 900;
        text-align: center;
    }
    .question_container .question_box .question p {
        font-size: 1em;
        line-height: 18px;
        text-align: center;
    }
    .question_circle_container {
        display: flex;
        justify-content: center;
        position: relative;
        top: 20px;
        margin-top: 15px;
    }
    .question_circle_container .question_circle {
        background-color: #b355a3;
        height: 50px;
        width: 50px;
        border-radius: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2em;
        color: #fff;
        font-weight: 500;
        z-index: 99;
    }
    .question_box_placeholder {
        position: absolute;
        width: 100%;
        left: 0;
        top: 0;
    }
    .straws {
        background-color: #d5e1e5;
        width: 100%;
        height: 150px;
        position: absolute;
        transition: all 0.3s ease;
    }
    .straws.left {
        left: 0;
        transform: rotate(5deg);
        top: 0;
    }
    .straws.right {
        right: 0;
        transform: rotate(-5deg);
        top: 0;
    }
    .question_box_placeholder.active .straws.left {
        transform: rotate(10deg);
    }
    .question_box_placeholder.active .straws.right {
        transform: rotate(-10deg);
    }
    .answer_container {
        margin: 50px 0 100px 0;
    }
    .answer_container .answer_target {
        text-align: center;
        background-color: #fff;
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1em;
        font-weight: 600;
        margin-bottom: 15px;
        width: 100%;
        border-width: 1px;
        border-style: solid;
        border-radius: 10px;
    }
    .not_correct {
        border-color: #e11414;
        background-color: #ffd7d7!important;
        color: #e11414;
    }
    .correct {
        border-color: #198500;
        background-color: #def9d8!important;
        color: #198500;
    }
</style>