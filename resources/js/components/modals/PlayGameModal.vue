<template>
    <div class="modal modal-cstm fade" id="letsplay" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog m-0" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="parent-modal-play">
                        <div class="modal-play-icon mb-1">
                            <img class="image-fluid" :src="baseUrl + 'images/success.png'" />  
                        </div>
                        <div class="modal-play-text">
                            <h4>Sucesso!</h4>
                            <div class="mb-4">
                                <p>Para começares o jogo, confirma se todo o setup está concluído. Os bairros em jogo são os que apareceram aqui?O número de recursos atribuídos a cada bairro está correto? As necessidades definidas estão corretas?Se sim, então cada jogador compra 5 cartas e carrega em Começar!</p>
                            </div>
                        </div>
                        <div class="modal-play-btn">
                            <button @click="createGameSettings($store.state.gameSettingsModule.FORM_GAME_SETTINGS)" class="choose-neighbourhoods-next-btn" data-dismiss="modal" aria-label="Close">Começar!</button>
                            <button class="modal-play-cancel-btn" data-dismiss="modal" aria-label="Close">Cancelar</button>
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