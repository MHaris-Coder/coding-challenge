<template>
    <div class="wrapper">
        <header>
            <div class="common_screen_header">
                <div class="container-fluid">
                    <div class="row game-score-row justify-content-center align-items-center">
                        <div class="row w-100 justify-content-between align-items-center">
                            <!-- <div class="col-2">
                                <button @click="$store.dispatch('prevSummaryScreen')" type="button" class="border-0 outline-0 bg-transparent">
                                <img :src="baseUrl + 'images/header-icons/back-arrow.png'" />
                            </button>
                            </div> -->
                            <div class="col-9 pr-0">
                                <div class="titles">
                                    <h2 class="text-center">{{ CHOOSABLE_NEIGHBOURHOOD?.neighbourhood?.name }}</h2>
                                </div>
                            </div>
                            <div class="col-3 pl-0">
                                <div class="text-right">
                                    <button @click="$store.dispatch('prevSummaryScreen')" class="target_anchor"> Guardar </button>
                                    <!-- <button @click="createNeedsInNeighbourhoodFunc()" class="target_anchor"> Salvar </button> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="common_screen_header_seperator"></div>
        </header>
        <section class="neighbourhood_need">
            <div class="bg-white">
                <div class="container-fluid">
                    <div class="row align-items-center mb-3">
                        <div class="col-10">
                            <div v-if="CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM?.game_need?.length > 0" class="need_circles">
                                <div v-for="(_need, index) in CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM?.game_need"
                                    v-bind:key="index" @click="needProjectFunc(_need, index)" class="need_circle border"
                                    :class="{ 'border-primary': _need.selected }">
                                    <!-- <img class="img-fluid" :src="baseUrl + 'images/needs-icons/5.png'" /> -->
                                    <img class="img-fluid" :src="baseUrl + 'assets/needs/' + _need?.need?.icon"
                                        @error="event => event.target.src = baseUrl + 'images/placeholder.jpg'" />
                                    <!-- <small>{{_need?.need?.name}}</small> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="text-right">
                                <button @click="needScreenToggleFunc()" class="target_anchor">
                                    <span class="fa-thin fa-plus fa-2x"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="need_boxes" v-if="IS_SHOW_NEED_SCREEN">
                    <template v-for="(NEED, index) in NEEDS" v-bind:key="index">
                        <div @click="chooseNeedFunc(index)" class="need_box" :class="{ 'border-primary': NEED.selected }">
                            <div class="circle">
                                <div class="image">
                                    <img :src="baseUrl + 'assets/needs/' + NEED?.icon"
                                        @error="event => event.target.src = baseUrl + 'images/placeholder.jpg'" />
                                    <img src="" />
                                </div>
                            </div>
                            <div class="text">
                                <p class="mt-3 mb-0">
                                    {{ NEED?.name }}
                                </p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <div class="need_projects">
                <div class="needs_projects-fade">
                    <div class="container-fluid need_projects_heading">
                        <h4 class="text-left">Completaste alguma necessidade neste bairro?</h4>
                        <p class="text-left ml-0">Clica na necessidade e escolhe o projeto. <br/>Adiciona o número de apoios alcançado.</p>
                    </div>
                    <swiper v-if="IS_SLIDES" ref="swiperRef" :slidesPerView="1.2" :centeredSlides="true"
                        :spaceBetween="15" :pagination="true" :navigation="true" class="mySwiper" @swiper="onSwiper"
                        @slideChange="onSlideChange">
                        <swiper-slide v-for="(slide, index) in SLIDES" v-bind:key="index">
                            <div class="swiper_slide">
                                <div class="swiper_slide_head">

                                    <h4 v-if="slide?.project_like == null"><i class="fa fa-thumbs-up mr-2"
                                            aria-hidden="true"></i>0</h4>
                                    <h4 v-else> <i class="fa fa-thumbs-up mr-2"
                                            aria-hidden="true"></i>{{ slide?.project_like?.likes }}</h4>
                                </div>
                                <img :src="baseUrl + 'assets/projectWithNeed/' + slide?.image"
                                    @error="event => event.target.src = baseUrl + 'images/placeholder.jpg'" />
                                <!-- <img class="image-fluid" :src="baseUrl + 'images/splash-logo.png'"> -->
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </section>
        <div class="project_likes_space"></div>
        <footer class="project_likes">
            <div class="container-fluid">
                <h4>Apoios</h4>
                <div class="need_circles">
                    <button v-for="(LIKE, index) in LIKES" class="need_circle" :class="{ 'active': LIKE.selected }"
                        @click="likeFunc(LIKE)">
                        {{ LIKE.count }}
                    </button>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import { ref, onMounted, defineAsyncComponent } from 'vue'
import { mapState, useStore } from 'vuex'

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Pagination, Navigation, Scrollbar, A11y } from 'swiper/core';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Pagination, Navigation, Scrollbar, A11y]);
const store = useStore()

// let NEEDS = []
let ACTIVE_SLIDE_INDEX = ref(0)

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        // const onSwiper = (swiper) => {
        //     console.log('___swiper', swiper);
        //     swiperRef.value = swiper

        // };
        // const onSlideChange = (slideValue) => {
        //     ACTIVE_SLIDE_INDEX.value = slideValue?.activeIndex
        //     console.log('getCurrentActiveSlideGameNeedProjectLikeFunc', this)
        // };
        return {
            // onSwiper,
            // onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        }
    },
    created() {
        this.NEEDS = JSON.parse(JSON.stringify(this.$store.state.NEEDS))
        this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM = JSON.parse(JSON.stringify(this.CHOOSABLE_NEIGHBOURHOOD))
    },
    mounted() {
        if (Object.keys(this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM?.game_need).length > 0) {
            this.needProjectFunc(this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM?.game_need[0], 0)
        }

        this.activeLikeFunc(this.getCurrentActiveSlideGameNeedProjectLikeFunc())
        ACTIVE_SLIDE_INDEX.value = 0

    },
    methods: {
        onSlideChange: function (slideValue) {
            ACTIVE_SLIDE_INDEX.value = slideValue?.activeIndex
            this.activeLikeFunc(this.getCurrentActiveSlideGameNeedProjectLikeFunc())
        },

        resetAllSelectedNeedFunc: function () {
            for (const key in this.NEEDS) {
                if (Object.hasOwnProperty.call(this.NEEDS, key)) {
                    this.NEEDS[key].selected = false
                }
            }
        },
        resetAllLikesFunc: function () {
            for (const key in this.LIKES) {
                if (Object.hasOwnProperty.call(this.LIKES, key)) {
                    this.LIKES[key].selected = false
                }
            }
        },



        //NEED ADDED IN NEIGHBOURHOOD FUNCTIONALITY START
        needScreenToggleFunc: function () {
            this.IS_SHOW_NEED_SCREEN = !this.IS_SHOW_NEED_SCREEN
            this.resetAllSelectedNeedFunc()

        },
        chooseNeedFunc: async function (index) {
            console.log(this.NEEDS, this.$store.state.NEEDS)

            this.resetAllSelectedNeedFunc()
            this.NEEDS[index].selected = await !this.NEEDS[index].selected

            this.createNeedsInNeighbourhoodFunc()
        },
        alreadySelectedNeedsFunc: function () {
            if (typeof this.NEEDS == 'object' && Object.keys(this.NEEDS).length > 0) {
                let result = Object.values(this.NEEDS).filter(function (value) {
                    return value?.selected == true
                })
                result = result[0]
                return result;
            }
        },
        createNeedsInNeighbourhoodFunc: function () {
            let payload = {
                choosable_neighbourhood: this.CHOOSABLE_NEIGHBOURHOOD,
                need: this.alreadySelectedNeedsFunc()
            }
            this.$store.dispatch('createNeedsInNeighbourhood', payload)
        },
        //NEED ADDED IN NEIGHBOURHOOD FUNCTIONALITY END



        alreadySelectedGameNeedsFunc: function () {
            if (typeof this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM.game_need == 'object' && Object.keys(this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM.game_need).length > 0) {
                let result = Object.values(this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM.game_need).filter(function (value) {
                    return value?.selected == true
                })
                result = result[0]
                return result;
            }
        },

        needProjectFunc: async function (_need, index) {

            this.IS_SLIDES = false
            ACTIVE_SLIDE_INDEX.value = 0

            for (const key in this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM.game_need) {
                if (Object.hasOwnProperty.call(this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM.game_need, key)) {
                    this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM.game_need[key].selected = false
                }
            }


            let CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM_ID = this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM?.id
            if (Object.keys(this.GAME_NEIGHBOURHOOD).length > 0) {
                for (const iterator of this.GAME_NEIGHBOURHOOD) {
                    console.log('iterator', iterator)
                    if (iterator?.id == CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM_ID) {
                        this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM = JSON.parse(JSON.stringify(iterator))
                    }
                }
            }
            this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM.game_need[index].selected = true
            this.SLIDES = await this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM.game_need[index].need_project

            //SET THE LIKES ACCORDING TO PROJECT WISE
            for (const iterator of this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM.game_need[index].need_project) {
                for (const _iterator of this.CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM.game_need[index].project_like) {
                    if (_iterator?.need_project_id == iterator?.id) {
                        iterator.project_like = _iterator
                    }
                }
            }

            //Active the like links
            this.activeLikeFunc(this.getCurrentActiveSlideGameNeedProjectLikeFunc())
            this.IS_SLIDES = true
        },

        getCurrentActiveSlideGameNeedProjectLikeFunc: function () {
            let alreadySelectedGameNeeds = this.alreadySelectedGameNeedsFunc()
            // let currentActiveSlideGameNeedProjectLike = alreadySelectedGameNeeds?.need?.need_project[ACTIVE_SLIDE_INDEX.value]
            let currentActiveSlideGameNeedProjectLike = alreadySelectedGameNeeds?.need_project[ACTIVE_SLIDE_INDEX.value]
            return currentActiveSlideGameNeedProjectLike?.project_like
        },

        //HANDLED THE LIKES FUNCTIONALITY
        activeLikeFunc(curr_like) {
            this.resetAllLikesFunc()

            for (const key in this.LIKES) {
                if (Object.hasOwnProperty.call(this.LIKES, key) && this.LIKES[key].count == curr_like?.likes) {
                    this.LIKES[key].selected = true
                }
            }
        },
        likeFunc: function (like) {
            this.resetAllLikesFunc()

            console.log('this.alreadySelectedGameNeedsFunc()', this.alreadySelectedGameNeedsFunc())

            let alreadySelectedGameNeeds = this.alreadySelectedGameNeedsFunc()
            let currentActiveGameNeedId = alreadySelectedGameNeeds?.id
            // let currentActiveSlideGameNeedProject = alreadySelectedGameNeeds?.need?.need_project[ACTIVE_SLIDE_INDEX.value]
            let currentActiveSlideGameNeedProject = alreadySelectedGameNeeds?.need_project[ACTIVE_SLIDE_INDEX.value]


            let payload = {
                likes: like?.count,
                game_neighbourhood_id: this.CHOOSABLE_NEIGHBOURHOOD?.id,
                game_need_id: currentActiveGameNeedId,
                need_project_id: currentActiveSlideGameNeedProject?.id

            }

            this.$store.dispatch('createOrUpdateProjectLike', payload)
                .then((resp) => {
                    currentActiveSlideGameNeedProject.project_like = resp
                    this.activeLikeFunc(this.getCurrentActiveSlideGameNeedProjectLikeFunc())
                })

        }
    },
    watch: {

    },
    computed: {
        ...mapState({
            CHOOSABLE_NEIGHBOURHOOD: state => state.gameSettingsModule.CHOOSABLE_NEIGHBOURHOOD_FOR_NEED_AND_ITS_PROJECTS,
            GAME_NEIGHBOURHOOD: state => state.gameSettingsModule.USER_GAME.game_neighbourhood
        })
    },
    data() {
        return {
            NEEDS: [],
            IS_SHOW_NEED_SCREEN: false,
            SLIDES: [],

            LIKES: [{ count: 1 }, { count: 2 }, { count: 3 }, { count: 4 }, { count: 5 }, { count: 6 }, { count: 7 }, { count: 8 }],
            ACTIVE_SLIDE_INDEX_: 0,
            swiperRef: null,

            CHOOSABLE_NEIGHBOURHOOD_LIST_ITEM: [],

            IS_SLIDES: true
        }
    }
}
</script>
<style scoped>
.titles h2 {
    word-wrap: break-word;
    font-size: 16px;
}

.game-score-row {
    padding-top: 10px
}
</style>