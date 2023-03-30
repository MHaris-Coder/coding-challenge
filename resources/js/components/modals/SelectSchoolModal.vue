<template>
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
                                        <div class="card border-left-0 border-right-0 border-bottom-0">
                                            <div class="card-header bg-transparent" data-toggle="collapse"
                                                :href="'#collapse_' + INDEX">
                                                <a class="card-link d-flex align-items-center">
                                                    <label class="mb-0">
                                                        Schools
                                                    </label>
                                                    <i class="fa fa-chevron-down ml-auto"></i>
                                                </a>
                                            </div>
                                            <!-- :class="{'show': INDEX === 0}" -->
                                            <div :id="'collapse_' + INDEX" class="collapse" data-parent="#accordion">
                                                <div class="card-body school-collapse">
                                                    <a @click="PROJECT_CONTENT_FUNC(INDEX, _INDEX)">
                                                        <div class="inner-card">
                                                            <label class="mb-0">
                                                                School Name
                                                            </label>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card border-left-0 border-right-0 border-bottom-0">
                                            <div class="card-header bg-transparent" data-toggle="collapse"
                                                :href="'#collapse_2' + INDEX">
                                                <a class="card-link d-flex align-items-center">
                                                    <label class="mb-0">
                                                        Zone
                                                    </label>
                                                    <i class="fa fa-chevron-down ml-auto"></i>
                                                </a>
                                            </div>
                                            <!-- :class="{'show': INDEX === 0}" -->
                                            <div :id="'collapse_2' + INDEX" class="collapse" data-parent="#accordion">
                                                <div class="card-body school-collapse">
                                                    <a @click="PROJECT_CONTENT_FUNC(INDEX, _INDEX)">
                                                        <div class="inner-card">
                                                            <label class="mb-0">
                                                                Zone 1
                                                            </label>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-play-btn">
                            <button class="choose-neighbourhoods-next-btn" data-dismiss="modal" aria-label="Close">Apply
                                Filtrar</button>
                            <!-- @click="clearAllGameSettings()" -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {

    }
}
</script>
<style scoped>
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