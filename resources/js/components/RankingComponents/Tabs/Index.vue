<template>
    <div class="tabs_container">
        <div class="tabs_targets">
            <button @click="TABS_FUNC(1)" :class="{'active': TABS === 1}">Total</button>
            <button @click="TABS_FUNC(2)" :class="{'active': TABS === 2}">Jogos</button>
            <button @click="TABS_FUNC(3)" :class="{'active': TABS === 3}">Desafios</button>
        </div>
        <div class="tabs_screens">
            <template v-if="TABS === 1">
                <OverallComponent/>
            </template>
            <template v-if="TABS === 2">
                <MatchComponent/>
            </template>
            <template v-if="TABS === 3">
                <ChallengesComponent/>
            </template>
        </div>
    </div>
</template>

<script> 
    import { defineAsyncComponent, ref, watch } from 'vue'
    import { useStore } from 'vuex'

    const OverallComponent = defineAsyncComponent(() => import('./Overall.vue'))
    const MatchComponent = defineAsyncComponent(() => import('./Match.vue'))
    const ChallengesComponent = defineAsyncComponent(() => import('./Challenges.vue'))
    
    export default {
        setup(props, { emit }) {
            const STORE = useStore()
            const TABS = ref(2)

            const TABS_FUNC = (payload) => {
                TABS.value = payload

                emit('tabs', payload)
            }

            return {
                TABS,
                TABS_FUNC
            }
        },
        components: {
            OverallComponent,
            MatchComponent,
            ChallengesComponent
        }
    }
</script> 

<style scoped>
    .tabs_container {
        background-color: #fff;
        margin-top: 10px;
        /* padding-top: 20px; */
        min-height: 65%;
    }
    .tabs_targets {
        display: flex;
        justify-content: space-evenly;
        /* padding-bottom: 10px; */
        border-bottom: 1px solid #ccc;
        padding: 10px 0;
    }
    .tabs_targets button {
        width: 27.5%;
        border-radius: 20px;
        min-height: 40px;
        font-size: 15px;
    }
    .tabs_targets button.active {
        background-color: #21b7f1;
        color: #fff;
    }
</style>