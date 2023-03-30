<template>
    <div>
        <MyHeader/>
            <slot />
        <MyFooter/>
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue'
    
    const MyHeader = defineAsyncComponent(() => 
        import('./../components/header-layout/Header-logo.vue')
    )
    const MyFooter = defineAsyncComponent(() => 
        import('./../components/footer-layout/footer-navigation.vue')
    )
    
    export default {
        components: {
            MyHeader,
            MyFooter
        },
        setup() {
            return {
                
            }
        },
    
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>