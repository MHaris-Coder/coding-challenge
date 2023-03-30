<template>
    <div class="modal fade" id="playquiz" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog m-0" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div>
                        <div class="row mb-3">
                            <div class="col-3">
                                <free-style-shimmer
                                    :is-loading="$store.state.LOADING"
                                    height="50px"
                                    width="50px"
                                    color="#d5e1e5"
                                    border-radius="50px"
                                    
                                />
                            </div>
                            <div class="col-9">
                                <div class="mb-2">
                                    <free-style-shimmer
                                        :is-loading="$store.state.LOADING"
                                        height="15px"
                                        width="60%"
                                        color="#d5e1e5"
                                    />
                                </div>
                                <div>
                                    <free-style-shimmer
                                        :is-loading="$store.state.LOADING"
                                        height="15px"
                                        width="65%"
                                        color="#d5e1e5"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mb-2">
                            <free-style-shimmer
                                :is-loading="$store.state.LOADING"
                                height="50px"
                                width="100%"
                                color="#d5e1e5"
                            />
                        </div>
                        <div>
                            <free-style-shimmer
                                :is-loading="$store.state.LOADING"
                                height="50px"
                                width="100%"
                                color="#d5e1e5"
                            />
                        </div>
                    </div>
                    <div v-if="!$store.state.LOADING" class="parent-modal-play">
                        <div class="d-flex mb-3">
                        <!-- <div class="row mb-3" style="align-items: center;"> -->
                            <!-- <div class="col-3 pr-0"> -->
                                <div class="modal-play-icon mr-2">
                                    <div class="img-container">
                                        <img :src="baseUrl + 'assets/questionCategories/' + QUESTION?.question_category?.icon"
                                        @error="event => event.target.src = baseUrl + 'images/placeholder.jpg'" />
                                    </div>
                                    <!-- <img style="width:50px; height:50px;" class="image-fluid" :src="baseUrl + 'images/Desafio_pic.png'" />   -->
                                </div>
                            <!-- </div> -->
                            <!-- <div class="col-9"> -->

                                
                                <div class="modal-play-text">
                                    <h4 class="text-left">Recompensa de {{ QUESTION?.question_category?.title }}</h4>
                                    <p class="text-left ml-0">Adicionar um voto a um projeto que foi iniciado</p>
                                </div>
                            <!-- </div> -->
                        <!-- </div> -->
                        </div>
                        <div class="modal-play-btn">
                            <button @click="$emit('startQuiz')" class="choose-neighbourhoods-next-btn" data-dismiss="modal" aria-label="Close">Arriscar e responder</button>
                            <button @click="$emit('skipTurn')" class="modal-play-cancel-btn" data-dismiss="modal" aria-label="Close">Passar e continuar a jogar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, useStore } from 'vuex'
    import { computed } from 'vue'
     
    export default {
        components: {
            
        },
        setup() {
            const STORE = useStore()
            const QUESTION = computed(() => STORE.state.gameSettingsModule.QUESTION)
            return {
                QUESTION
            }
        },
        mounted() {
    
        },
        methods: {
            ...mapActions([
                'letsPlay',
            ])
        }
    }
</script>