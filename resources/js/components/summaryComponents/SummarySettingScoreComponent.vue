<template>
    <header>
        <div class="setting_score_header">
            <label class="mb-0">Adicionar pontuação</label>
        </div>
    </header>
    <section class="setting_score_wrapper">
        <div class="container-fluid">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="game-summary">
                        <h4>ID {{$store.state.gameSettingsModule.USER_GAME?.id}}</h4>
                        <h6>Total {{summary.length}}</h6>
                    </div>
                    <template v-if="summary?.length > 0">
                        <div 
                            v-for="(_summary, index) in summary" 
                            v-bind:key="index" 
                            class="summary-card" 
                            :class="{'mt-4': (index != 0)}"
                            @click="needProjects(_summary)"
                        >
                            <div class="summary-card-heading">
                                <h4>{{_summary?.neighbourhood.name}}</h4>
                                <h6 class="mb-0">{{_summary?.resource?.no_of_resources}} Recursos</h6>
                            </div>
                            <!-- <img class="w-100" :src="baseUrl + 'images/6.png'"> -->
                            <div class="neighbourhood_image">
                                <img 
                                    :src="baseUrl + 'assets/neighbourhoods/' + _summary?.neighbourhood?.icon"
                                    @error="event => event.target.src = baseUrl + 'images/placeholder.jpg'"    
                                />
                            </div>
                            <template v-if="_summary?.game_need?.length > 0">
                                <div v-for="_need in _summary?.game_need" class="d-flex summary-card-details">
                                    <div class="summary-card-profile-image">
                                        <!-- <img class="image-fluid" :src="baseUrl + 'images/needs-icons/5.png'"> -->
                                        <img 
                                            :src="baseUrl + 'assets/needs/' + _need?.need?.icon"
                                            @error="event => event.target.src = baseUrl + 'images/placeholder.jpg'"    
                                        />
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
    </section>
    <footer>
        <div class="summary-footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                        <button @click="$store.dispatch('nextSummaryScreen', {screen: 3})" class="choose-neighbourhoods-next-btn">Confirmar</button>
                        <!-- <button @click="$store.dispatch('calcRanking', {score: final_score})" class="choose-neighbourhoods-next-btn">Confirmar</button> -->
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import { defineAsyncComponent, computed } from 'vue'
    import { useStore } from 'vuex'
    
    
    export default {
        components: {
            
        },
    
        setup() {
            const store = useStore()
            const summary = computed(() => store.state.gameSettingsModule.USER_GAME?.game_neighbourhood)
            const final_score = computed(() => store.state.gameSettingsModule.SCORE_RESULT?.final_score)
            return {
                summary,
                final_score
            }
        },
    
        mounted() {
    
        },
        methods: {
            needProjects(payload) {
                this.$store.commit('setNeighbourhoodForNeedAndItsProjects', payload)
                this.$store.dispatch('nextSummaryScreen')
            }
        }
    }
</script>

<style scoped>
    .neighbourhood_image {
        height: 100px;
    }
    .neighbourhood_image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>