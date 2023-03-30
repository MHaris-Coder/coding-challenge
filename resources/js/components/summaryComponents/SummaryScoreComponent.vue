<style scoped>
    /* body {
        background-color: #f0f1f1;
    } */
    
    /* #app {
        overflow: auto;
        margin-bottom: 100px;
    } */
    .header {
        min-height: 70px;
        background-color: #fff;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header .icon {
        position: absolute;
        left: 15px;
        top: 15px;
    }
    .header .title {
        flex: 1;
        text-align: center;
    }
    .header .title h2 {
        margin-bottom: 0;
        font-size: 17px;
        font-weight: 700;
    }
    .header .title p {
        margin-bottom: 0;
    }
    .cstm-container{
        padding-bottom: 90px;
    }
</style>
<template>
    <header>
        <div class="header">
            <div class="icon">
                <a @click="$store.commit('setPrevSummaryScreen', {screen: 1})" href="javascript:void(0);">
                    <img :src="baseUrl + 'images/header-icons/cross-icon.png'" />
                </a>
            </div>
            <div class="title">
                <h2>ID 000{{USER_GAME?.id}}</h2>
                <p>Turno {{USER_GAME?.game_turn[0]?.turn}}</p>
            </div>
        </div>
    </header>
    <section>
        <div class="container-fluid ">
            <div class="row cstm-container">
                <div class="col-xs-12 game-score-board-parent-bg pt-3 pb-3 col-sm-12 col-md-12 d-flex justify-content-between">
                    <div class="game-score-board-image-parent ">
                        <img class="game-score-board-image" :src="baseUrl + 'images/Group17309.png'">
                        <div class="game-score-under-image-text">
                            <h4>Data do jogo</h4>
                            <p>{{DATE}}</p>
                        </div>
                    </div>
                    <div class="game-score-board-percentage">
                        <div class="game-score-board-percentage-text">
                            <h2>{{FINAL_SCORE}}</h2>
                            <p>Resultado Final</p>
                        </div>
                        <div class="game-score-board-percentage-text">
                            <h2>{{POPULATION}}%</h2>
                            <p>População Alcançada</p>
                        </div>
                        <div class="game-score-board-percentage-text">
                            <!-- <h2>
                                {{RANK}}<template v-if="RANK === 1">st</template><template v-if="RANK === 2">nd</template><template v-if="RANK !== 1 && RANK !== 2">th</template>
                            </h2> -->
                            <h2>
                                {{RANK}}°
                            </h2>
                            <p>Classificação</p>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 mt-3">
                    <div class="game-score-card-parent d-flex">
                        <div class="game-score-watch-icon">
                            <img class="game-score-board-image" :src="baseUrl + 'images/stop-watch.png'">
                        </div>
                        <div class="game-score-watch-text">
                            <p>Tempo de jogo</p>
                            <h2>{{GAME_TIME.HOURS}}h {{GAME_TIME.MINUTES}}m {{GAME_TIME.SECONDS}}s</h2>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 mt-3">
                    <div class="game-scores-card d-flex">
                        <table class="w-100">
                            <tbody>
                                <tr>
                                    <td class="game-score-table-label game-score-table-title">Bairros</td>
                                    <td class="game-score-table-value game-score-table-title-number">{{GAME_NEIGHBOURHOODS?.length}}</td>
                                </tr>
                                <template v-if="GAME_NEIGHBOURHOODS?.length > 0">
                                    <template v-for="(GAME_NEIGHBOURHOOD, INDEX) in GAME_NEIGHBOURHOODS" v-bind:key="INDEX">
                                        <tr>
                                            <td class="game-score-table-label">{{GAME_NEIGHBOURHOOD?.neighbourhood?.name}}</td>
                                            <td class="game-score-table-value">{{GAME_NEIGHBOURHOOD?.total_neighbourhood_points}} pts</td>
                                        </tr>
                                    </template>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 mt-3">
                    <div class="game-scores-card d-flex">
                        <table class="w-100">
                            <tbody>
                                <tr>
                                    <td class="text-left game-score-table-title">Necessidades Colmatadas</td>
                                    <td class="text-right game-score-table-title-number">{{TOTAL_NEEDS_POINTS?.length}}</td>
                                </tr>
                                <template v-if="TOTAL_NEEDS_POINTS?.length > 0">
                                    <template v-for="(TOTAL_NEEDS_POINT, INDEX) in TOTAL_NEEDS_POINTS" v-bind:key="INDEX">
                                        <tr>
                                            <td class="game-score-table-label">{{TOTAL_NEEDS_POINT?.name}}</td>
                                            <td class="game-score-table-value">{{TOTAL_NEEDS_POINT?.points}} pts</td>
                                        </tr>
                                    </template>
                                </template>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <footer>
        <div class="summary-footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <button data-toggle="modal" data-target="#EndGameAlert" class="choose-neighbourhoods-next-btn">Acabar jogo</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </footer>
    <PlayGameModal />
    <EndGameAlert/>
</template>

<script>
    import { defineAsyncComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    const PlayGameModal = defineAsyncComponent(() =>
        import('./../modals/PlayGameModal.vue')
    )
    const EndGameAlert = defineAsyncComponent(() =>
    import('./../modals/EndGameWarningModal.vue')
)

    export default {
        components: {
            PlayGameModal,
            EndGameAlert
        },
        setup() {
            const store = useStore()
            const GAME_TIME = computed(() => store.state.gameSettingsModule.GAME_TIME)
            const GAME_NEIGHBOURHOODS = computed(() => store.state.gameSettingsModule.USER_GAME?.game_neighbourhood)

            const FINAL_SCORE = computed(() => store.state.gameSettingsModule.SCORE_RESULT?.final_score)
            const DATE = computed(() => store.state.gameSettingsModule.SCORE_RESULT?.date)
            const TOTAL_NEEDS_POINTS = computed(() => store.state.gameSettingsModule.SCORE_RESULT?.total_needs_points)
            const POPULATION = computed(() => store.state.gameSettingsModule.SCORE_RESULT?.population)
            const RANK = computed(() => store.state.gameSettingsModule.RANK)
            const USER_GAME = computed(() => store.state.gameSettingsModule.USER_GAME)

            return {
                GAME_TIME,
                FINAL_SCORE,
                DATE,
                GAME_NEIGHBOURHOODS,
                TOTAL_NEEDS_POINTS,
                POPULATION,
                RANK,
                USER_GAME
            }
        },

        mounted() {
            this.$store.dispatch('calcRanking', {score: this.FINAL_SCORE, date: this.DATE})
        },
        methods: {

        }
    }
</script>