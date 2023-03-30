<template>
    <div class="vue-template">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xs-12 col-sm-12 col-md-8">
                    <form>
                        <div class="form-group">
                            <input type="email" v-model="formObj.email" placeholder="Email Address" class="form-control form-control-lg email-input" />
                        </div>
                        <div class="form-group">
                            <input type="password" v-model="formObj.pass" placeholder="Password"
                                class="form-control form-control-lg password-input" />
                        </div>
                        <button type="button" @click="login(formObj)"
                            class="btn btn-dark btn-lg btn-block login-btn">Enter</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {

        setup() {
            const formObj = {
                email: 'testuser@yopmail.com',
                pass: 1000
            };
            return { formObj }
        },
        methods: {
            ...mapActions([
                'login',
            ]),
        }
    }
</script>