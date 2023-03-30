<template>
    <div class="container-fluid game-setting-head-parent-bg">
        <div class="d-flex w-100">
            <div class="close-icon" v-if="step === 1 || step === 6">
                <!-- <router-link to="/dashboard" >
                    <img :src="baseUrl + 'images/header-icons/cross-icon.png'" />
                </router-link> -->
                <a @click="resetAndGoToDashboard()" href="javascript:void(0);" title="" >
                    <img :src="baseUrl + 'images/header-icons/cross-icon.png'" />
                </a>
            </div>
            <div class="close-icon" v-else>
                <img @click="$store.dispatch('prevStep')" :src="baseUrl + 'images/header-icons/back-arrow.png'" />    
            </div>

            <div class="text-on-header">
                <h2>{{title}}</h2>
                <p>{{subTitle}}</p>
            </div>
            
            <!-- <div class="blank-div">
            </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        components: {
            
        },
        props: {
            title: String,
            subTitle: String,
            step: Number
        },
        setup() {
            return {
                
            }
        },
        mounted() {
            
        },
        methods: {
            resetAndGoToDashboard() {
                this.$store.dispatch('clearAllGameSettings').then(async () => {
                    await this.$router.push('/dashboard')
                })
            }
        }
    }
</script>
