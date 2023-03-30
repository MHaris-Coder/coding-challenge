<template>
    <section>
        <AlertMessageTypeComponent 
            :type="eventResponse"
            :exitAlert="isExitAlert"
            :need="alertNeed"
        />

        <!-- <button @click="activeAlertFunc('success')">Success Alert Message</button>
        <button @click="activeAlertFunc('error')">Success Alert Message</button> -->
        <!-- <button @click="exitAlertFunc()">exitAlertFunc</button> -->

        <div class="container-fluid game-setting-parent-bg">
            <div class="row pb-5">
                <div class="col-xs-12 col-sm-12 col-md-12">
                    <div class="game-summary">
                        <h4>Resumo do jogo</h4>
                        <h6>Total {{summary?.length}}</h6>
                    </div>
                    <template v-if="summary?.length > 0">
                        <div v-for="(_summary, index) in summary" v-bind:key="index" class="summary-card" :class="{'mt-4': (index != 0)}">
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
                                    <!-- <div class="summary-card-likes d-flex ml-auto">
                                        <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                                        <h6>{{_need?.project_like_count}}</h6>
                                    </div> -->
                                </div>
                            </template>

                        </div>
                    </template>
                    
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { defineAsyncComponent, ref, onMounted } from 'vue'

    const AlertMessageTypeComponent = defineAsyncComponent(() =>
        import('./../../Alerts/AlertMessageType.vue')
    )

    export default {
        setup(props) {
            const eventResponse = ref('')
            const isExitAlert = ref(0)
            const alertNeed = ref('')
            
            const activeAlertFunc = (payload) => {
                eventResponse.value = payload
            }

            const exitAlertFunc = () => {
                isExitAlert.value++
            }

            onMounted(() => {
                activeAlertFunc(props.alertMessageType)
            })
            

            return {
                //Variables
                eventResponse,
                isExitAlert,
                alertNeed,

                //Methods
                activeAlertFunc,
                exitAlertFunc
            }
        },
        props: {
            summary: Object,
            alertMessageType: String,
            exitAlertOnSkipTurn: Boolean
        },
        components: {
            AlertMessageTypeComponent
        },

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