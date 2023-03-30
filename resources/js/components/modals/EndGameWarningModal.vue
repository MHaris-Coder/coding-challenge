<template>
    <div class="modal modal-cstm fade" id="EndGameAlert" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog m-0" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="parent-modal-play">
                        <div class="modal-play-icon mb-3">
                            <img class="image-fluid" :src="baseUrl + 'images/WarningAlertTriangle.png'" />  
                        </div>
                        <div class="modal-play-text mb-3">
                            <h4>Terminar jogo?</h4>
                            <p class="mb-4">Tens a certeza? Se carregares em sim, irás ativar o cálculo da pontuação do jogo. Se carregares em não, podes editar as tuas ações.</p>
                        </div>
                        <div class="modal-play-btn">
                            <div class="container">
                                <div class="row">
                                    <div class="col-6">
                                        <button class="modal-play-cancel-btn end-game-no-btn" data-dismiss="modal" aria-label="Close">Não</button>
                                    </div>
                                    <div class="col-6">
                                        <button @click="$store.dispatch('updateGameSettings')" class="choose-neighbourhoods-next-btn" data-dismiss="modal" aria-label="Close">Sim!</button>
                                    </div>
                                </div>
                            </div>
                            <!-- @click="clearAllGameSettings()" -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    import { mapActions } from 'vuex'
    
    export default {
        components: {
            
        },
        setup() {
            return {
    
            }
        },
        mounted() {
    
        },
        methods: {
            ...mapActions([
                'createGameSettings',
                'clearAllGameSettings'
            ])
        }
    }
</script>

<style scoped>
.end-game-no-btn{
    padding: 6px !important;
    color: red;
    border-color: red;
    margin: 0 !important;
    height: auto !important;
}
</style>