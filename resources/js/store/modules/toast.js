import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css'

export default {
    state: {

    },
    getters: {

    },
    actions: {
        successToast({}, content) {
            createToast(content, {type: 'success'})
        },
        errorToast({}, content) {
            createToast(content, {type: 'danger'})
        }
    }
};