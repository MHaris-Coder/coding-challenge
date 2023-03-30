<template>
    <div class="row">
        <div class="col-8 mt-4 mb-3">
            <h2 class="dashboard-heading">Classificação</h2>
        </div>
        <div class="col-4 mt-4 mb-3 text-right">
            <router-link class="dashboard-link" to="/challenges">Ver todos</router-link>
        </div>
    </div>
    <div class="container-fluid cards-container">
        <div class="row">
            <div class="col-12 single-card-parent">
                <div class="container">
                    <div class="row card-row">
                        <div class="col-3 profile-image-column">
                            <div class="profile-parent">
                                <img class="w-100" :src="baseUrl + 'images/profile-icon.png'" />
                                <div class="ranking-image">
                                    <img class="w-100" :src="baseUrl + 'images/2nd.png'" />
                                </div>
                            </div>
                        </div>
                        <div class="col-7 profile-text">
                            <h2>Total</h2>
                            <h4>{{USER?.organization?.name?.charAt(0).toUpperCase() + USER?.organization?.name?.slice(1)}}</h4>
                        </div>
                        <div class="col-2 profile-star-rating">
                            <i class="fa fa-star rating-numb-icon" aria-hidden="true"></i>
                            <h4>{{OVERALL_RANK}}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-8 mt-4 mb-3">
            <h2 class="dashboard-heading">Jogos</h2>
        </div>
        <div class="col-4 mt-4 mb-3 text-right">
            <router-link class="dashboard-link" to="/matches">Ver todos</router-link>
        </div>
    </div>
    <div class="container-fluid cards-container-id">
        <div class="row">
            <template v-if="USER_GAME_LASTEST_RECORD?.length > 0">
                <template v-for="(USER_GAME, INDEX) in USER_GAME_LASTEST_RECORD">
                    <template v-if="INDEX < 3">
                        <div class="col-12 single-card-parent-id">
                            <div class="container">
                                <div class="row card-row">
                                    <div class="col-3 profile-image">
                                        <img class="w-100" :src="baseUrl + 'images/placeholder.jpg'" />
                                    </div>
                                    <div class="col-7 profile-text-id">
                                        <h2>ID 000{{USER_GAME?.id}}</h2>
                                        <h4>{{USER_GAME?.date}}</h4>
                                    </div>
                                    <div class="col-2 profile-star-rating">
                                        <i class="fa fa-star rating-numb-icon" aria-hidden="true"></i>
                                        <h4>{{USER_GAME?.rank}}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </template>
            </template>
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
        const USER = computed(() => STORE.state.user.details)
        const USER_GAME_LASTEST_RECORD = computed(() => STORE.state.USER_GAME_LASTEST_RECORD)
        const OVERALL_RANK = computed(() => STORE.state.OVERALL_RANK)

        return {
            USER,
            USER_GAME_LASTEST_RECORD,
            OVERALL_RANK
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

.cards-container {
    border: 1px solid rgba(0, 0, 0, .125);
    border-bottom: none;
    border-radius: 5px;
}
.cards-container-id{
    border-radius: 5px;
    margin-bottom: 10px;
}
.card-row{
    align-items: center;
    justify-content: space-evenly;
    padding: 5px 0;
}

.single-card-parent {
    border-bottom: 1px solid rgba(0, 0, 0, .125);
    padding: 5px 0;

}
.single-card-parent-id {
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: 5px;
    padding: 5px 0;
    margin-bottom: 10px;

}
.single-card-parent .container{
    margin: 0;
    max-width: 100%;
}

.profile-image {
    max-width: 60px;
    padding: 0 0 0 7px;
    border-radius: 100px;
}
.profile-image img{
    border-radius: 100px;
}

.profile-text {
padding: 0 0 0 7px;
}
.profile-text h2{
    font-size: 17px;
    font-weight: 900;
}
.profile-text h4{
    font-size: 15px;
    font-weight: 100;
    margin: 0;
}
.profile-text-id h2{
    font-size: 16px;
    font-weight: 900;
}
.profile-text-id h4{
    font-size: 14px;
    font-weight: 100;
}
.rating-numb-icon{
    color:#fdb714;
    font-size: 12px;
}

.profile-star-rating{
    padding: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.profile-star-rating h4{
    font-size: 15px;
    font-weight: 100;
    margin: 0;
}
.col-3.profile-image-column {
    max-width: 60px;
    padding: 0 0 0 7px;
}
.profile-parent {
    position: relative;
}

.ranking-image {
    position: absolute;
    bottom: -5;
    right: -5;
    width: 25px;
}
</style>