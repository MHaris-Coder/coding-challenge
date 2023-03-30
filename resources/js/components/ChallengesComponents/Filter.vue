<template>
    <div>
        <!-- <div class="filter">
            <input type="text" placeholder="Filter" class="flex-grow-1" />
            <button>Filtrar</button>
        </div> -->
        <button type="button" class="filter-modal-open" data-toggle="modal" data-target="#filterModal">Filtro <i class="fa fa-angle-down" aria-hidden="true"></i></button>
        <!-- Modal -->
        <div class="modal fade" ref="FILTER_MODAL" id="filterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header header p-0">
                        <div class="col-4 text-left">
                            <img class="filter-modal-close-btn" data-dismiss="modal" aria-label="Close" :src="baseUrl + 'images/header-icons/cross-icon.png'" />
                        </div>
                        <div class="col-4">
                            <div class="title">
                                <h2 class="mb-0">Desafios</h2>
                            </div>
                        </div>
                        <div class="col-4 text-right">
                            <button type="button" class="filter-modal-close" data-dismiss="modal" aria-label="Close">Filtro <i class="fa fa-angle-up" aria-hidden="true"></i></button>
                        </div>
                    </div>
                    <div class="modal-body p-0">
                        <!-- <i class="fa fa-check float-right" aria-hidden="true"></i> -->
                        <template v-if="QUESTION_CATEGORIES?.length > 0">
                            <template v-for="QUESTION_CATEGORY in QUESTION_CATEGORIES">
                                <div class="col-12 filter-option">
                                    <p data-dismiss="modal" @click="FILTER_CATEGORY_FUNC(QUESTION_CATEGORY?.id)" class="mb-0">
                                        {{QUESTION_CATEGORY?.title}}
                                        <template v-if="FILTER_CATEGORY_ID == QUESTION_CATEGORY?.id">
                                            <i class="fa fa-check float-right" aria-hidden="true"></i>
                                        </template>
                                    </p>
                                </div>
                            </template>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { computed, ref, watch } from 'vue';
    import { useStore } from 'vuex';

    const refs = ref(null)

    export default {
        props: {
            questionCategoryIdForCheckmark: Number
        },
        setup(props, {emit}) {
            const STORE = useStore()
            const QUESTION_CATEGORIES = computed(() => STORE.state.challengesModule.QUESTION_CATEGORIES)
            const FILTER_CATEGORY_ID = ref(0)
            
            const FILTER_CATEGORY_FUNC = (question_category_id) => {
                FILTER_CATEGORY_ID.value = question_category_id
                emit('filterQuestionsByCategory', question_category_id)
            }

            watch(() => props.questionCategoryIdForCheckmark, (question_category_id) => {
                FILTER_CATEGORY_ID.value = question_category_id
            })

            return {
                STORE,
                QUESTION_CATEGORIES,
                FILTER_CATEGORY_ID,

                FILTER_CATEGORY_FUNC
            }
        },
        mounted() {
            refs.value = this.$refs
        }
    }
</script>

<style scoped>
    /* .filter {
        display: flex;
        border: 1px solid;
        min-height: 45px;
        border-radius: 10px;
        overflow: hidden;
        padding: 0 15px;
    }
    .filter button {
        background-color: transparent;
    } */

    .header {
        min-height: 50px;
        border-bottom: 0;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .header .icon {
        position: absolute;
        left: 15px;
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
    .filter-modal-close-btn{
        background-color: white;
        font-size: 17px;
    }
    #filterModal .modal-dialog{
        margin: 0 !important;
    }
    .filter-option{
        padding-top: 15px;
        padding-bottom:10px ;
        border-bottom: 1px solid rgba(0,0,0,.125);
        text-align: left;
    }
    .filter-option p{
        font-size: 16px;
    }
    .filter-option p i{
        color: #21b7f1;
    }
    .filter-modal-close{
        padding: 4px 8px;
        background-color: #21b7f1;
        color: white;
        border-radius: 50px;
    }
    .filter-modal-open{
        padding: 4px 8px;
        background-color: #efefef;
        border-radius: 50px;
        display: inline-flex;
        align-items: center;
        justify-content: space-between;
        min-width: 75px;
    }
</style>