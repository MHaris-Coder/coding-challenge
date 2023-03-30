<template>
    <div class="container-fluid cards-container">
        <div class="row container-padding-control">
            <template v-if="CHALLENGES?.length > 0">
                <template v-for="CHALLENGE in CHALLENGES">
                    <div class="col-12 single-card-parent">
                        <div class="container">
                            <div class="row card-row">
                                <div class="col-3 profile-image">
                                    <img class="w-100" :src="baseUrl + 'images/profile-icon.png'" />
                                </div>
                                <div class="col-7 profile-text">
                                    <h2>{{CHALLENGE?.organization_name}}</h2>
                                    <h4>Posição #{{CHALLENGE?.rank}} / {{CHALLENGE?.correct_count}} Perguntas</h4>
                                </div>
                                <div class="col-2 profile-star-rating">
                                    <!-- <i class="fa fa-star rating-numb-icon" aria-hidden="true"></i> -->
                                    <h4>{{CHALLENGE?.ranking_percentage}} %</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>

<script>
    import { computed } from 'vue'
    import { useStore } from 'vuex'
    
    export default {
        setup() {
            const STORE = useStore()
            const CHALLENGES = computed(() => STORE.state.rankingsModule.RANKING?.challenges)

            return {
                CHALLENGES
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
.card-row{
    align-items: center;
    justify-content: space-between;
    padding: 5px;
}

.single-card-parent {
    border-bottom: 1px solid rgba(0, 0, 0, .125);
    padding: 5px 0;

}
.single-card-parent .container{
    margin: 0;
    max-width: 100%;
    border: 1px solid #ccc;
    border-radius: 12px;
}

.profile-image {
    max-width: 60px;
    padding: 0 0 0 7px;
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
.rating-numb-icon{
    color:#fdb714;
    font-size: 12px;
}

.profile-star-rating{
    padding: 0;
    /* display: flex;
    justify-content: space-around;
    align-items: center; */
    white-space: nowrap;
}
.profile-star-rating h4{
    text-align: center;
    font-size: 15px;
    font-weight: 100;
    border: 1px solid #e9e9e9;
    margin: 0;
    padding: 2px 5px;
    border-radius: 100px;
}
.container-padding-control{
    padding: 20px !important;
}
</style>