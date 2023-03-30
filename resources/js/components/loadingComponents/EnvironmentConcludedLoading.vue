<template>
    <div class="loading_container">
        <div class="container">
            <div class="row">
                <div class="col-8 offset-2 mb-4">
                    <free-style-shimmer
                        is-loading="true"
                        height="30px"
                        width="100%"
                        color="#d5e1e5"
                    />
                </div>
                <div class="col-6 offset-3 mb-2">
                    <free-style-shimmer
                        is-loading="true"
                        height="15px"
                        width="100%"
                        color="#d5e1e5"
                    />  
                </div>
                <div class="col-6 offset-3">
                    <free-style-shimmer
                        is-loading="true"
                        height="15px"
                        width="100%"
                        color="#d5e1e5"
                    />  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .loading_container {
        /* margin-top: 25px; */
    }
</style>