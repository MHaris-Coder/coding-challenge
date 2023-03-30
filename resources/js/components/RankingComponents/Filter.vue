<template>
    <div class="filter">
        <input v-model="ORGANIZATION_NAME" type="text" placeholder="Pesquisar" class="flex-grow-1" />
        <button @click="ORGANIZATION_FILTER">
            <i class="fa fa-search"></i>
        </button>
        <!-- <button>
            <i class="fa fa-sliders" data-toggle="modal" data-target="#SelectSchool" aria-hidden="true"></i>
        </button> -->
        <!-- <SelectSchoolModal/> -->
    </div>
    <div class="modal modal-cstm fade" id="SelectSchool" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog m-0" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="parent-modal-play">
                        <div class="container">
                            <div class="row">
                                <div class="col-12 justify-content-center">
                                    <div class="filter-image">
                                        <img :src="baseUrl + 'images/Select-school-filter.png'" />
                                    </div>
                                </div>
                                <div class="col-12 p-0">
                                    <div id="accordians">
                                        <template v-if="ORGANIZATION_TYPES?.length > 0">
                                            <template v-for="(ORGANIZATION_TYPE, INDEX) in ORGANIZATION_TYPES">
                                                <div class="card border-left-0 border-right-0 border-bottom-0">
                                                    <div class="card-header bg-transparent" data-toggle="collapse"
                                                        :href="'#collapse_' + INDEX">
                                                        <a class="card-link d-flex align-items-center">
                                                            <label class="mb-0">
                                                                {{ORGANIZATION_TYPE?.name}}
                                                            </label>
                                                            <i class="fa fa-chevron-down ml-auto"></i>
                                                        </a>
                                                    </div>
                                                    <!-- :class="{'show': INDEX === 0}" -->
                                                    <div :id="'collapse_' + INDEX" class="collapse" data-parent="#accordion">
                                                        <div class="card-body school-collapse">
                                                            <template v-if="ORGANIZATION_TYPE?.organization?.length > 0">
                                                                <template v-for="ORGANIZATION in ORGANIZATION_TYPE?.organization">
                                                                    <a @click="SET_ORG_RANKING_FILTER_FUNC(ORGANIZATION)">
                                                                        <div class="inner-card">
                                                                            <label class="mb-0">
                                                                                {{ORGANIZATION?.name}}
                                                                            </label>
                                                                        </div>
                                                                    </a>
                                                                </template>
                                                            </template>
                                                        </div>
                                                    </div>  
                                                </div>
                                            </template>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-play-btn">
                            <button @click="RANKING_FILTER_FUNC" class="choose-neighbourhoods-next-btn" data-dismiss="modal" aria-label="Close">Filtrar</button>
                            <!-- @click="clearAllGameSettings()" -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent, computed, ref, watch, watchEffect } from 'vue'
    import { mapState, useStore } from 'vuex'

    const SelectSchoolModal = defineAsyncComponent(() =>
        import('../modals/SelectSchoolModal.vue')
    )

    export default {
        setup() {
            const STORE = useStore()
            const ORGANIZATION_ID = ref(0)
            const ORGANIZATION_NAME = ref('')
            const ORGANIZATION_TYPES = computed(() => STORE.state.rankingsModule.ORGANIZATION_TYPES)
            const SET_ORG_RANKING_FILTER_FUNC = (ORGANIZATION) => {
                ORGANIZATION_ID.value = ORGANIZATION?.id
            }
            const RANKING_FILTER_FUNC = () => {
                STORE.dispatch('ranking', {organization_id: ORGANIZATION_ID.value})
            }
            const ORGANIZATION_FILTER = () => {
                STORE.dispatch('ranking', {organization_name: ORGANIZATION_NAME.value})
            }

            watch(() => ORGANIZATION_NAME.value, (value) => {
                if(value == '') {
                    ORGANIZATION_FILTER()
                }
            })
            
            return {
                ORGANIZATION_TYPES,
                ORGANIZATION_NAME,
                
                SET_ORG_RANKING_FILTER_FUNC,
                RANKING_FILTER_FUNC,
                ORGANIZATION_FILTER
            }
        },
        components: {
            SelectSchoolModal
        }
    }
</script>

<style scoped>
    .filter {
        margin: 20px 10px;
        background-color: white;
        display: flex;
        min-height: 45px;
        border-radius: 10px;
        overflow: hidden;
        padding: 0 15px;
        outline: none;
        border: 1px solid #cccccc ;
    }
    .filter input{
        font-size: 15px;
    }
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #cccccc;
        opacity: 1; /* Firefox */
      }
      
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #cccccc;
      }
      
      ::-ms-input-placeholder { /* Microsoft Edge */
        color: #cccccc;
      }
    .filter button {
        background-color: transparent;

    }
    .filter button i{
        transform: rotate(90deg);
        font-size: 20px;
        color: #cccccc;
    }

    .setting-icon {
        transform: rotate(90deg);
        font-size: 20px;
        color: #21b7f1;
    }

    .filter-image {
        text-align: center;
        margin-top: 30px;
        margin-bottom: 10px;
    }
    .filter-image img{
        min-width: 90px;
    }

    .card-body.school-collapse {
        padding: 0.75rem 1.25rem;
        font-size: 15px;
    }
    .card-link{
        font-size: 15px;
    }
</style>