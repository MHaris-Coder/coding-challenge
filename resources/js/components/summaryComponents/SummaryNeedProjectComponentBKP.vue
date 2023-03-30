<template>
    <div class="wrapper">
        <header>
            <div class="common_screen_header">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col">
                            <button @click="$store.dispatch('prevSummaryScreen')" type="button" class="border-0 outline-0 bg-transparent">
                                <img :src="baseUrl + 'images/header-icons/back-arrow.png'" />
                            </button>
                        </div>
                        <div class="col">
                            <div class="titles">
                                <h2 class="text-center">{{CHOOSABLE_NEIGHBOURHOOD?.neighbourhood?.name}}</h2>
                            </div>
                        </div>
                        <div class="col">
                            <div class="text-right">
                                <button @click="createNeedsInNeighbourhoodFunc()" class="target_anchor"> Salvar </button>
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
                            <div v-if="CHOOSABLE_NEIGHBOURHOOD?.game_need?.length > 0" class="need_circles">
                                <div 
                                    v-for="(_need, index) in CHOOSABLE_NEIGHBOURHOOD?.game_need"
                                    v-bind:key="index"
                                    @click="needProjectFunc(_need, index)"
                                    class="need_circle border"
                                    :class="{'border-primary': _need.selected}">
                                    <img class="img-fluid" :src="baseUrl + 'images/needs-icons/5.png'" />
                                    <!-- <small>{{_need?.need?.name}}</small> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="text-right">
                                <button @click="needScreenFunc()" class="target_anchor">
                                    <span class="fa-thin fa-plus fa-2x"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="need_boxes" v-if="IS_SHOW_NEED_SCREEN">
                    <template v-for="(NEED, index) in NEEDS" v-bind:key="index">
                        <div @click="chooseNeedFunc(index)" class="need_box" :class="{'border-primary': NEED.selected}">
                            <div class="circle">
                                <div class="image">
                                    <img src="" />
                                </div>
                            </div>
                            <div class="text">
                                <p class="mt-3 mb-0">
                                    {{NEED?.name}}
                                </p>
                            </div>
                        </div>
                    </template>
                </div>
            </div>

            <div class="need_projects">
                <div class="mt-auto">
                    <swiper 
                        ref="swiperRef" 
                        :slidesPerView="1.2" 
                        :centeredSlides="true"
                        :spaceBetween="15"
                        :pagination="true" 
                        :navigation="true" 
                        class="mySwiper"
                        @swiper="onSwiper"
                        @slideChange="onSlideChange"
                        @update="onUpdateSwiper"
                    >
                        <swiper-slide v-for="(slide, index) in SLIDES" v-bind:key="index">
                            <div class="swiper_slide">
                                <div class="text-light w-100 text-center">
                                    <h4 v-if="slide?.project_like == null">0</h4>
                                    <h4 v-else>{{slide?.project_like?.likes}}</h4>
                                </div>
                                <img class="image-fluid" :src="baseUrl + 'images/splash-logo.png'">
                            </div>
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </section>
        <footer class="project_likes">
            <div class="container-fluid">
                <h4>Likes</h4>
                <div class="need_circles">
                    <button 
                        v-for="(LIKE, index) in LIKES" 
                        class="need_circle"
                        :class="{'active': LIKE.selected}"
                        @click="likeFunc(LIKE)">
                            {{LIKE.count}}
                    </button>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import { ref, onMounted, defineAsyncComponent } from 'vue'
    import { mapState } from 'vuex'

    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import SwiperCore, {Pagination,Navigation, Scrollbar, A11y} from 'swiper/core';

    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    
    SwiperCore.use([Pagination,Navigation, Scrollbar, A11y]);

    let NEEDS = []
    let ACTIVE_SLIDE_INDEX = ref(0)
    
    export default {
        components: {
            Swiper,
            SwiperSlide,
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
            this.NEEDS = { ...this.$store.state.NEEDS }
        },
        mounted() {
            if(Object.keys(this.CHOOSABLE_NEIGHBOURHOOD?.game_need).length > 0){
                this.needProjectFunc(this.CHOOSABLE_NEIGHBOURHOOD?.game_need[0], 0)
            }
            
            this.activeLikeFunc(this.getCurrentActiveSlideGameNeedProjectLikeFunc())
        },
        methods: {
            onSwiper: (_swiper) => {
                

            },
            onSlideChange: function(slideValue) {
                ACTIVE_SLIDE_INDEX.value = slideValue?.activeIndex
                this.activeLikeFunc(this.getCurrentActiveSlideGameNeedProjectLikeFunc())
            },
            needScreenFunc: function() {
                this.resetAllSelectedNeedFunc()
                this.IS_SHOW_NEED_SCREEN = !this.IS_SHOW_NEED_SCREEN
            },
            chooseNeedFunc: function(index) {
                this.resetAllSelectedNeedFunc()
                this.NEEDS[index].selected = !this.NEEDS[index].selected
            },
            resetAllSelectedNeedFunc: function() {
                for (const key in this.NEEDS) {
                    if (Object.hasOwnProperty.call(this.NEEDS, key)) {
                        this.NEEDS[key].selected = false                        
                    }
                }
            },
            alreadySelectedNeedsFunc: function() {
                if(typeof this.NEEDS == 'object' && Object.keys(this.NEEDS).length > 0) {
                    let result = Object.values(this.NEEDS).filter(function(value) {
                        return value?.selected == true
                    })
                    result = result[0]
                    return result;
                }
            },
            createNeedsInNeighbourhoodFunc: function() {
                let payload = {
                    choosable_neighbourhood: this.CHOOSABLE_NEIGHBOURHOOD,
                    need: this.alreadySelectedNeedsFunc()
                }
                this.$store.dispatch('createNeedsInNeighbourhood', payload)
            },
            needProjectFunc: function(_need, index) {

                // this.SLIDES = _need?.need?.need_project
                this.SLIDES = _need?.need_project

                for (const key in this.CHOOSABLE_NEIGHBOURHOOD.game_need) {
                    if (Object.hasOwnProperty.call(this.CHOOSABLE_NEIGHBOURHOOD.game_need, key)) {
                        this.CHOOSABLE_NEIGHBOURHOOD.game_need[key].selected = false                        
                    }
                }
                // _need.selected = true
                this.CHOOSABLE_NEIGHBOURHOOD.game_need[index].selected = true 

                for (const iterator of _need?.need_project) {
                    for (const _iterator of _need?.project_like) {
                        if(_iterator?.need_project_id == iterator?.id) {
                            iterator.project_like = _iterator
                        }
                    }
                    
                }
                console.log('_need', _need)

                //Active the like links
                this.activeLikeFunc(this.getCurrentActiveSlideGameNeedProjectLikeFunc())

                
            },
            alreadySelectedGameNeedsFunc: function() {
                if(typeof this.CHOOSABLE_NEIGHBOURHOOD.game_need == 'object' && Object.keys(this.CHOOSABLE_NEIGHBOURHOOD.game_need).length > 0) {
                    let result = Object.values(this.CHOOSABLE_NEIGHBOURHOOD.game_need).filter(function(value) {
                        return value?.selected == true
                    })
                    result = result[0]
                    return result;
                }
            },
            getCurrentActiveSlideGameNeedProjectLikeFunc: function() {
                let alreadySelectedGameNeeds = this.alreadySelectedGameNeedsFunc()
                // let currentActiveSlideGameNeedProjectLike = alreadySelectedGameNeeds?.need?.need_project[ACTIVE_SLIDE_INDEX.value]
                let currentActiveSlideGameNeedProjectLike = alreadySelectedGameNeeds?.need_project[ACTIVE_SLIDE_INDEX.value]
                return currentActiveSlideGameNeedProjectLike?.project_like
            },
            resetAllLikesFunc: function() {
                for (const key in this.LIKES) {
                    if (Object.hasOwnProperty.call(this.LIKES, key)) {
                        this.LIKES[key].selected = false                        
                    }
                }
            },
            //This function just handle the activate/deactivate of likes 
            activeLikeFunc(curr_like) {
                this.resetAllLikesFunc()

                for (const key in this.LIKES) {
                    if (Object.hasOwnProperty.call(this.LIKES, key) && this.LIKES[key].count == curr_like?.likes) {
                        this.LIKES[key].selected = true                        
                    }
                }
            },
            likeFunc: function(like) {
                this.resetAllLikesFunc()

                let alreadySelectedGameNeeds = this.alreadySelectedGameNeedsFunc()
                let currentActiveGameNeedId = alreadySelectedGameNeeds?.id
                // let currentActiveSlideGameNeedProject = alreadySelectedGameNeeds?.need?.need_project[ACTIVE_SLIDE_INDEX.value]
                let currentActiveSlideGameNeedProject = alreadySelectedGameNeeds?.need_project[ACTIVE_SLIDE_INDEX.value]

                
                let payload = {
                    game_neighbourhood_id: this.CHOOSABLE_NEIGHBOURHOOD?.id,
                    game_need_id: currentActiveGameNeedId,
                    need_project_id: currentActiveSlideGameNeedProject?.id,
                    likes: like?.count
                }

                this.$store.dispatch('createOrUpdateProjectLike', payload)
                            .then((resp) => {
                                currentActiveSlideGameNeedProject.project_like = resp
                                
                                // for (const key in this.CHOOSABLE_NEIGHBOURHOOD.game_need) {
                                //     if (Object.hasOwnProperty.call(this.CHOOSABLE_NEIGHBOURHOOD.game_need, key)) {
                                //         if(this.CHOOSABLE_NEIGHBOURHOOD.game_need[key].selected == true) {
                                //             this.CHOOSABLE_NEIGHBOURHOOD.game_need[key].need_project[ACTIVE_SLIDE_INDEX.value].project_like = resp
                                //         }                        
                                //     }
                                // }
                                
                                console.log('this.CHOOSABLE_NEIGHBOURHOOD?.game_need', this.CHOOSABLE_NEIGHBOURHOOD?.game_need)
                                this.activeLikeFunc(this.getCurrentActiveSlideGameNeedProjectLikeFunc())

                                // if(Object.keys(this.GAME_NEIGHBOURHOOD).length > 0){
                                //     for (const iterator of this.GAME_NEIGHBOURHOOD) {
                                //         console.log('iterator', iterator)
                                //         if(iterator?.id == this.CHOOSABLE_NEIGHBOURHOOD?.id) {
                                //             this.$store.commit('setNeighbourhoodForNeedAndItsProjects', iterator)
                                //         }
                                //     }
                                // }
                            })

                // console.log('currentActiveGameNeedId', currentActiveGameNeedId)
                // console.log('currentActiveSlideGameNeedProject', currentActiveSlideGameNeedProject?.id)
                // console.log('like', like?.count)
                // console.log('CHOOSABLE_NEIGHBOURHOOD', this.CHOOSABLE_NEIGHBOURHOOD?.id)
            },
            onUpdateSwiper() {
                console.log('this.swiperRef', this.swiperRef)
                
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
                IS_SHOW_NEED_SCREEN: false,
                SLIDES: [],
                
                LIKES: [{count: 1},{count: 2},{count: 3},{count: 4},{count: 5},{count: 6},{count: 7},{count: 8}],
                ACTIVE_SLIDE_INDEX_: 0,
                swiperRef: null
            }
        }
    }
</script>