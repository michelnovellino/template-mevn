import Vue from 'vue';
import VueRouter from "vue-router";
import VueJWT from 'vuejs-jwt';
import App from './App.vue';

import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'


Vue.use(VueRouter);

Vue.use(VueJWT);

import TaskList from './components/taskList.vue';


const routes = [
    { name:'TaskList', path: '/', component: TaskList }
  ]


// configure router
const router = new VueRouter({
 mode:'history',
 routes: routes
});

//assets


new Vue(
    Vue.util.extend({router},  App)
).$mount('#app');