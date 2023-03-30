<template>
    <div class="quiz_loading_container">
        <free-style-shimmer
            :is-loading="true"
            height="200px"
            width="100%"
            color="#d5e1e5"
        />

        <div class="quiz_buttons">
            <div class="quiz_button">
                <free-style-shimmer
                    :is-loading="true"
                    height="60px"
                    width="100%"
                    color="#d5e1e5"
                />
            </div>
            <div class="quiz_button">
                <free-style-shimmer
                    :is-loading="true"
                    height="60px"
                    width="100%"
                    color="#d5e1e5"
                />
            </div>
            <div class="quiz_button">
                <free-style-shimmer
                    :is-loading="true"
                    height="60px"
                    width="100%"
                    color="#d5e1e5"
                />
            </div>
            <div class="quiz_button">
                <free-style-shimmer
                    :is-loading="true"
                    height="60px"
                    width="100%"
                    color="#d5e1e5"
                />
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .quiz_loading_container {
        margin-top: 25px;
    }
    .quiz_buttons {
        margin-top: 50px;
    }
    .quiz_button {
        margin-bottom: 15px;
    }
</style>