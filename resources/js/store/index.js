import { createStore } from 'vuex'
import axios from 'axios'
import toast from './modules/toast'
import router from '../router'

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

// Create a new store instance.
const store = createStore({
    modules: {
        toast
    },
    state () {
        return {
            user: {
                loggedIn: false,
                details: JSON.parse(localStorage.getItem('user_details')) ?? null
            },
            token: localStorage.getItem('token') ?? null,
            LOADING: false,
            UNIT_TYPE_IDS: [],
            TEMPERATURES: [],
            VOLUMES: [],
            UNIT_CONVERSION_RESPONSES: []
        }
    },
    mutations: {
        setLoading(state, payload) {
            state.LOADING = payload
        },
        setUserDetails(state, payload) {
            state.user.loggedIn = true

            state.user.details = payload?.user
            state.token = payload?.access_token

            localStorage.setItem('token', payload?.access_token)
            localStorage.setItem('user_details', JSON.stringify(payload?.user))
        },
        setUnauthenticated() {
            localStorage.removeItem('token')
            localStorage.removeItem('user_details')
            router.push('/')
        },
        setSystemInfo(state, payload) {
            state.TEMPERATURES = payload?.Temperature
            state.VOLUMES = payload?.Volume
            state.UNIT_TYPE_IDS = payload?.UnitTypeIds
            state.UNIT_CONVERSION_RESPONSES = payload?.UnitConversionResponse
        }
    },
    actions: {
        login({commit, dispatch}, payload ) {
            return new Promise((resolve, reject) => {
                axios.post(process.env.MIX_API_URL + 'login', payload)
                .then((resp) => {
                    commit('setUserDetails', resp?.data?.data)
                    dispatch('successToast', resp?.data?.msg)

                    router.push('/dashboard')

                    resolve(resp?.data)
                })
                .catch((err) => {
                    if(err?.response?.data?.msg) dispatch('errorToast', err?.response?.data?.msg)

                    if(err?.response?.data?.errors && Object.keys(err?.response?.data?.errors).length > 0)
                        for (const key in err?.response?.data?.errors) {
                            if (err?.response?.data?.errors.hasOwnProperty.call(err?.response?.data?.errors, key)) {
                                const element = err?.response?.data?.errors[key][0];
                                dispatch('errorToast', element)
                            }
                        }
                    
                })
            });
        },
        logout({commit, dispatch} ) {
            return new Promise((resolve, reject) => {
                axios.post(process.env.MIX_API_URL + 'logout')
                .then((resp) => {
                    dispatch('successToast', resp?.data?.msg)
                    resolve(true)
                })
                .catch((err) => {
                    if(err?.response?.data?.msg) dispatch('errorToast', err?.response?.data?.msg)

                    if(err?.response?.data?.errors && Object.keys(err?.response?.data?.errors).length > 0)
                        for (const key in err?.response?.data?.errors) {
                            if (err?.response?.data?.errors.hasOwnProperty.call(err?.response?.data?.errors, key)) {
                                const element = err?.response?.data?.errors[key][0];
                                dispatch('errorToast', element)
                            }
                        }
                })
                .finally(() => {
                    commit('setUnauthenticated')
                })
            });
        },
        systemInfo({commit, dispatch}) {
            return new Promise((resolve, reject) => {
                axios.get(process.env.MIX_API_URL + 'system')
                .then((resp) => {
                    commit('setSystemInfo', resp?.data?.data)
                    resolve(true)
                })
                .catch((err) => {
                 
                })
                .finally(() => {
                    
                })
            });
        },
        unitConversion({commit, dispatch}, payload ) {
            return new Promise((resolve, reject) => {
                axios.post(process.env.MIX_API_URL + 'system', payload)
                .then((resp) => {
                    // commit('setUserDetails', resp?.data?.data)
                    dispatch('successToast', resp?.data?.msg)
                    
                    resolve(resp?.data)
                })
                .catch((err) => {
                    if(err?.response?.data?.msg) dispatch('errorToast', err?.response?.data?.msg)

                    if(err?.response?.data?.errors && Object.keys(err?.response?.data?.errors).length > 0)
                        for (const key in err?.response?.data?.errors) {
                            if (err?.response?.data?.errors.hasOwnProperty.call(err?.response?.data?.errors, key)) {
                                const element = err?.response?.data?.errors[key][0];
                                dispatch('errorToast', element)
                            }
                        }
                    
                    reject(true)
                })
                .finally((fn) => {
                    dispatch('systemInfo')
                })
            });
        }
    },
    getters: {
        auth(state) {
            return state.user
        }
    }
})

export default store;