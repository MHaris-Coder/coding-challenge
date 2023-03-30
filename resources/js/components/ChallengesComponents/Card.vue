<template>
    <div class="card">
        <div class="card-header">
            <div class="row align-items-center">
                <div class="col-8 d-flex align-items-center">
                    <div class="image">
                        <img :src="baseUrl + 'assets/questionCategories/' + icon"
                            @error="event => event.target.src = baseUrl + 'images/placeholder.jpg'" />
                    </div>
                    <h2>{{ title }}</h2>
                </div>
                <div class="col-4 pl-0">
                    <div class="rating-numb">
                        <div class="d-flex justify-content-around align-items-center">
                            <i class="fa fa-star rating-numb-icon" aria-hidden="true"></i>
                            <p class="rating-numb-text mb-0">{{(precentage > 0) ? precentage : 0}}%</p>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-1"></div> -->
            </div>
            <div>

            </div>
        </div>
        <div class="card-body">
            <p>{{ description }}</p>
            <div
            v-if="attemptAsPerUser != null" 
            class="mt-1 rating-ratio-parent" 
            :class="{'bg-success text-light': (attemptAsPerUser?.status == 'complete')}">
                <p class="rating-ratio mb-0 pl-2 pr-2" 
                >{{attemptAsPerUser?.result}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
        icon: String,
        precentage: String,
        attemptAsPerUser: Object
    },
    setup() {


        return {

        }
    }
}
</script>

<style scoped>
.card {
    /* min-height: 180px; */
    margin-bottom: 15px;
    padding: 10px 15px;
}

.card .card-header {
    padding: 0;
    background-color: transparent;
    border-bottom: 0;
    margin-bottom: 15px;
}

.card .card-body {
    padding: 0;
}

.card .card-header h2 {
    margin-bottom: 0;
    font-size: 17px;
    overflow-wrap: anywhere ;
}

.card .card-header .image {
    width: 40px;
    height: 40px;
    border-radius: 30px;
    overflow: hidden;
    margin-right: 15px;
    min-width: 40px;
}

.card .card-header .image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.card .card-body p {
    margin-bottom: 0;
    font-size: 14px;
}

.rating-numb {
    border: 1px solid #00000020;
    padding: 5px;
    border-radius: 50px;
}
.rating-ratio-parent{
    background-color: #efefef;
    width: max-content;
    padding: 5px;
    border-radius: 50px;
}

.rating-numb-icon {
    color: #fdb714;
    font-size: 17px;
}

.rating-numb-text {
    font-size: 16px !important;
}
.rating-ratio{
    font-size: 16px !important;
}
</style>