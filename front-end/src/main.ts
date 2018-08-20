import Vue from "vue";
import App from "./App.vue";

import router from "./router/index";
import store from './store/index';
import Snotify from 'vue-snotify';

Vue.use(Snotify, {
    toast: {
        timeout: 2000,
        closeOnClick: true,
        pauseOnHover: false,
        showProgressBar: false,
    }
});

const vue = new Vue({
    router,
    store,
    el: "#app",
    render: h => h(App)
});

export default vue;
