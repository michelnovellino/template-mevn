import Vue from 'vue';

import App from './components/App.vue';

//assets

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'



new Vue({
    render: h => h(App)
}).$mount('#app');