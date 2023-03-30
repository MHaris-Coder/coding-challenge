<!-- <style>body {background-color: #f0f1f1;}</style> -->
<style scoped>
.summary_turn_container {height: 100vh;overflow: auto;}
</style>

<template>
     <!-- v-bind:class="{'animate__animated animate__slideInRight animate__delay-2s' : is_selected}" -->
    <div class="summary_turn_container">
        <div class="container-fluid game-setting-head-parent-bg">
            <div class="parent-div w-100 d-flex">
                <div class="close-icon">
                    <a @click="endQuiz()" v-if="startQuizSession" href="javascript:void(0);" title="" >
                        <img :src="baseUrl + 'images/header-icons/cross-icon.png'" />
                    </a>
                    <a v-else href="javascript:void(0);" title="" >
                        <img :src="baseUrl + 'images/header-icons/back-arrow.png'" />   
                    </a>
                </div>

                <div class="text-on-header">
                    <h2>Jogo {{$store.state.gameSettingsModule.USER_GAME?.id}}</h2>
                    <p>Turno {{$store.state.gameSettingsModule.CURRENT_TURN}}</p>
                </div>

                <div class="blank-div text-dark">
                    <div class="d-flex align-items-center justify-content-end">
                        <img class="mr-1" :src="baseUrl + 'images/stop-watch.png'" />
                        <label class="mb-0">
                            <b style="font-size: 14px;color: darkseagreen;">
                                {{(minutes_prefix) ? 0 : ''}}{{stopwatch.minutes}}:{{(seconds_prefix) ? 0 : ''}}{{stopwatch.seconds}} 
                            </b>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="game-setting-head-parent-space"></div>

        <template v-if="startQuizSession">
            <template v-if="(currentQuizScreen === 1)">
                <QuizComponent @selectAnswer="isSelectedAnswer" @alertMessageType="setAlertMessageType" />
            </template>
            <template v-if="(currentQuizScreen === 2)">
                <EnvironmentConcludedComponent/>
            </template>
        </template>
        <template v-else>
            <GameSummaryComponent 
                :summary="summary"
                :alertMessageType="alertMessageType"
                ref="child"
            />
            <!-- <section>
                <div class="container-fluid game-setting-parent-bg">
                    <div class="row pb-5">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <div class="game-summary">
                                <h4>Game Summary</h4>
                                <h6>Total {{summary.length}}</h6>
                            </div>
                            <template v-if="summary?.length > 0">
                                <div v-for="(_summary, index) in summary" v-bind:key="index" class="summary-card" :class="{'mt-4': (index != 0)}">
                                    <div class="summary-card-heading">
                                        <h4>{{_summary?.neighbourhood.name}}</h4>
                                        <h6 class="mb-0">{{_summary?.resource?.no_of_resources}} Recursos</h6>
                                    </div>
                                    <img class="w-100" :src="baseUrl + 'images/6.png'">
                                    <template v-if="_summary?.game_need?.length > 0">
                                        <div v-for="_need in _summary?.game_need" class="d-flex summary-card-details">
                                            <div class="summary-card-profile-image">
                                                <img class="image-fluid" :src="baseUrl + 'images/needs-icons/5.png'">
                                            </div>
                                            <div class="summary-card-profite-name">
                                                <h6>{{_need?.need?.name}}</h6>
                                            </div>
                                            <div class="summary-card-likes d-flex ml-auto">
                                                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                                <h6>{{_need?.project_like_count}}</h6>
                                            </div>
                                        </div>
                                    </template>

                                </div>
                            </template>
                            
                        </div>
                    </div>
                </div>
            </section> -->
        </template>
    </div>

    <footer>
        <template v-if="startQuizSession">
            <div v-if="is_selected" class="summary-footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <button v-if="currentQuizScreen === 1" @click="nextToEnvironmentConcludedScreen()" class="choose-neighbourhoods-next-btn">Próximo</button>
                            <button v-if="currentQuizScreen === 2" @click="backToTurnScreen()" class="choose-neighbourhoods-next-btn">Continuar</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="summary-footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12">
                            <!-- @click="nextTurn()" -->
                            <button @click="nextTurn()" data-toggle="modal" data-target="#playquiz" class="choose-neighbourhoods-next-btn">Próximo turno</button>
                            <button @click="finishTurn()" class="modal-play-cancel-btn">Terminar o jogo</button>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </footer>
    <GameTurnModalComponent @startQuiz="startQuiz()" @skipTurn="skipTurn()"/>
</template>

<script>
    import { computed, defineAsyncComponent, ref, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { useStopwatch } from 'vue-timer-hook';
    import moment from 'moment';

    const autoStart = true;
    const stopwatch = useStopwatch(autoStart);
    const child = ref(null)

    const GameTurnModalComponent = defineAsyncComponent(() =>
        import('./../modals/GameTurnModal.vue')
    )
    const GameSummaryComponent = defineAsyncComponent(() =>
        import('./summaryTurnComponents/GameSummary.vue')
    )
    const QuizComponent = defineAsyncComponent(() =>
        import('./summaryTurnComponents/Quiz.vue')
    )
    const EnvironmentConcludedComponent = defineAsyncComponent(() =>
        import('./summaryTurnComponents/EnvironmentConcluded.vue')
    )

    // const StopWatchComponent = defineAsyncComponent(() =>
    //     import('./../plugins/stopWatch.vue')
    // )

    export default {
        components: {
            GameTurnModalComponent,
            GameSummaryComponent,
            QuizComponent,
            EnvironmentConcludedComponent,
            // StopWatchComponent
        },
    
        setup() {
            const store = useStore()
            const summary = computed(() => store.state.gameSettingsModule.USER_GAME?.game_neighbourhood)
            const game_turn = computed(() => store.state.gameSettingsModule.USER_GAME?.game_turn)
            const currentQuizScreen = computed(() => store.state.gameSettingsModule.CURRENT_QUIZ_SCREEN)
            
            const autoStart = true;
            let timestamp = 0

            let stopwatch_resuming_time = store.state.gameSettingsModule.USER_GAME?.game_turn[0]?.end_time?.split(':')
            
            if(stopwatch_resuming_time?.length == 2)
            {
                var m = moment().utcOffset(0);
                m.set({hour:0, minute:parseInt(stopwatch_resuming_time[0]), second:parseInt(stopwatch_resuming_time[1]), millisecond:0})
                timestamp = Math.floor(m.valueOf()/1000.0)
            }

            // m.toISOString()
            // m.format().valueOf()

            // const stopwatch = useStopwatch(Math.floor(new Date().getTime()/1000.0));

            const stopwatch = useStopwatch(timestamp, autoStart);

            // const skipTurn = () => {
            //     child.exitAlertFunc()
            // }

            onMounted(() => {
                console.log('child', child.value)
            })

            return {
                summary,
                stopwatch,
                game_turn,
                currentQuizScreen,
                
                //Functions
                // skipTurn
            }
        },
    
        mounted() {
            if(this.game_turn?.length > 0) {
                //Set the turn, when turn records are available in the database
                // this.$store.commit('setNextTurn', {turn: this.game_turn[0]?.turn})

                this.$store.commit('setNextTurn', {turn: this.game_turn[0]?.turn + 1})
                this.startTime = this.game_turn[0]?.end_time

                console.log('this.startTime', this.startTime)
            }
            else {
                this.stopwatch
            }
        },
        methods: {
            nextTurn() {
                this.$store.commit('setLoading', true)
                
                // let startTime = '0:0'
                let endTime = this.stopwatch.minutes.value + ':' + this.stopwatch.seconds.value
                let payload = {}
                let turn = this.$store.state.gameSettingsModule.CURRENT_TURN

                // if(this.game_turn?.length > 0) {
                //     turn = turn + 1
                // }
                
                if(this.$store.state.gameSettingsModule.CURRENT_TURN == 1)
                {
                    payload = {
                        turn: turn,
                        start_time: this.startTime,
                        end_time: endTime,
                        time: moment.utc(moment(endTime, "mm:ss").diff(moment(this.startTime, "mm:ss"))).format("mm:ss")
                    }
                    this.allTurns.push(payload)
                }
                else {
                    
                    if(this.allTurns.length > 0) {
                        let index = this.allTurns.length - 1;
                        this.startTime = this.allTurns[index]?.end_time;
                    }

                    payload = {
                        turn: turn,
                        start_time: this.startTime,
                        end_time: endTime,
                        time: moment.utc(moment(endTime, "mm:ss").diff(moment(this.startTime, "mm:ss"))).format("mm:ss")
                    }

                    this.allTurns.push(payload)
                }


                
                this.$store.dispatch('getRandomQuestion')
                .then(async () => {
                    await this.$store.dispatch('nextTurn', payload)
                    await this.$store.commit('setLoading', false)
                })
            },
            finishTurn() {
                this.$store.commit('setGameTime', {
                    hours: this.stopwatch.hours.value,
                    minutes: this.stopwatch.minutes.value,
                    seconds: this.stopwatch.seconds.value
                })
                this.stopwatch.pause()
                // this.$store.dispatch('nextSummaryScreen')

                this.$store.dispatch('updateFinishTurn')
            },
            startQuiz() {
                this.startQuizSession = true
            },
            endQuiz() {
                this.$store.commit('setQuizScreen', 1)
                this.startQuizSession = false
            },
            isSelectedAnswer(data) {
                this.is_selected = data
            },
            nextToEnvironmentConcludedScreen() {
                this.$store.commit('setQuizScreen', 2)
            },
            backToTurnScreen() {
                this.is_selected = false
                this.endQuiz()
            },
            setAlertMessageType(payload) {
                this.alertMessageType = payload
            },
            skipTurn() {
                this.$refs.child.exitAlertFunc()
            }
        },
        data() {
            return {
                allTurns: [],
                startTime: '0:0',
                startQuizSession: false,
                is_selected: false,
                alertMessageType: '',
                minutes_prefix: false,
                seconds_prefix: false
            }
        },
        watch: {
            'stopwatch': {
                handler(newValue) {
                    
                    if(newValue?.minutes?.value > 9) {
                        this.minutes_prefix = false
                    }
                    else {
                        this.minutes_prefix = true
                    }

                    if(newValue?.seconds?.value > 9) {
                        this.seconds_prefix = false
                    }
                    else {
                        this.seconds_prefix = true
                    }
                },
                deep: true
            }
        }
    }
</script>