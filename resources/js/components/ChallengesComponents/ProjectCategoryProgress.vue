<template>
    <div class="row">
        <div class="col-8 mt-4 mb-3">
            <h2 class="dashboard-heading">Desafios</h2>
        </div>
        <div class="col-4 mt-4 mb-3 text-right">
            <router-link class="dashboard-link" to="/challenges">Ver todos</router-link>
        </div>
    </div>
    <div class="container-fluid">
        <div class="row flex-nowrap overflow-auto">
            <template v-if="QUESTION_CATEGORIES?.length > 0">
                <template v-for="QUESTION_CATEGORY in QUESTION_CATEGORIES">
                    <div class="col-4 text-center">
                        <div class="d-flex justify-content-center">
                            <div class="parent-circle">
                                <div>
                                    <CircleProgress 
                                        :size="80"
                                        :percent="QUESTION_CATEGORY?.attemptPercentage"
                                        :border-bg-width="5"
                                        :border-width="5"
                                        :fill-color="'#4fbb69'"
                                    />
                                </div>
                                <div class="border-progress">
                                    <div class="inner-image">
                                        <img 
                                            :src="baseUrl + 'assets/questionCategories/' + QUESTION_CATEGORY.icon"
                                            @error="event => event.target.src = baseUrl + 'images/placeholder.jpg'" 
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <h4 class="mt-2 progress-text-heading">
                            {{QUESTION_CATEGORY?.title}}
                        </h4>
                    </div>
                </template>
            </template>
            <!-- <div class="col-4 text-center">
                <div class="d-flex justify-content-center">
                    <div class="parent-circle">
                        <div>
                            <CircleProgress :size="80" :percent="35" :border-bg-width="5" :border-width="5" />
                        </div>
                        <div class="border-progress">
                            <div class="inner-image" :style="'background: url(' + baseUrl + 'images/Desafio_pic.png)'">

                            </div>
                        </div>
                    </div>

                </div>
                <h4 class="mt-2 progress-text-heading">Desafio 1</h4>
            </div>
            <div class="col-4 text-center">
                <div class="d-flex justify-content-center">
                    <div class="parent-circle">
                        <div>
                            <CircleProgress :size="80" :percent="35" :border-bg-width="5" :border-width="5" />
                        </div>
                        <div class="border-progress">
                            <div class="inner-image" :style="'background: url(' + baseUrl + 'images/Desafio_pic.png)'">

                            </div>
                        </div>
                    </div>

                </div>
                <h4 class="mt-2 progress-text-heading">Desafio 1</h4>
            </div>
            <div class="col-4 text-center">
                <div class="d-flex justify-content-center">
                    <div class="parent-circle">
                        <div>
                            <CircleProgress :size="80" :percent="35" :border-bg-width="5" :border-width="5" />
                        </div>
                        <div class="border-progress">
                            <div class="inner-image" :style="'background: url(' + baseUrl + 'images/Desafio_pic.png)'">

                            </div>
                        </div>
                    </div>

                </div>
                <h4 class="mt-2 progress-text-heading">Desafio 1</h4>
            </div> -->
        </div>
    </div>
</template>

<script>
    import "vue3-circle-progress/dist/circle-progress.css";
    import CircleProgress from "vue3-circle-progress";
    import { computed } from 'vue';
    import { useStore } from "vuex";

    export default {
        components: {
            CircleProgress
        },
        setup() {
            const STORE = useStore()
            const QUESTION_CATEGORIES = computed(() => STORE.state.challengesModule.QUESTION_CATEGORIES)

            return {
                QUESTION_CATEGORIES
            }
        }
    }
</script>
<style scoped>
    .dashboard-heading {
        font-size: 19px;
        font-weight: 900;
        letter-spacing: 1px;
    }

    .dashboard-link {
        color: #88cfde;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 1px;
    }

    .parent-circle {
        height: 80px;
        width: 80px;
        position: relative
    }

    .border-progress {
        height: 80px;
        width: 80px;
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .inner-image {
        height: 50px;
        width: 50px;
        border-radius: 50px;
        overflow: hidden;
    }
    .inner-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .progress-text-heading{
        font-size: 16px;
        font-weight: 700;

    }
</style>