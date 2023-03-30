<style scoped>
.footer-bottom{
    position: fixed;
    background: white;
    bottom: 0;
}
.col-6 img{
    max-width: 40px;
    max-height: 50px;
    width: 100%;
}
</style>
<template>
<div class="container-fluid footer-bottom">
    <div class="row pt-2 pb-2 text-center">
        <div class="col-6">
            <router-link to="/dashboard">
                <!-- For active tab -->
                <img v-if="$route.path == '/dashboard'" :src="baseUrl + 'images/chat-icon.png'" />
                <img v-else :src="baseUrl + 'images/chat-plain-icon.png'" />
            </router-link>
        </div>
        <!-- <div class="col-3">
            For Active Tab
            <img :src="baseUrl + 'images/stats-plain-icon.png'" />
            <img :src="baseUrl + 'images/manage-icon.png'" />
        </div>
        <div class="col-3">
            <img :src="baseUrl + 'images/docs-icon.png'" />
            For Active tab
            <img :src="baseUrl + 'images/docs-plain-icon.png'" />
        </div> -->
        <div class="col-6">
            <router-link to="/profile">
                <!-- For active tab -->
                <img v-if="$route.path == '/profile'" :src="baseUrl + 'images/profile-plain-icon.png'" />
                <img v-else :src="baseUrl + 'images/profile-icon.png'" />
            </router-link>
        </div>
    </div>
</div>
</template>

<script>

</script>
