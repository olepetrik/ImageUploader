import 'es6-promise/auto'
import axios from 'axios'
import './bootstrap'
import Vue from 'vue'
// import VueAuth from '@websanova/vue-auth/dist/v2/vue-auth.esm';
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Index from './Index'
// import auth from './auth'
import router from './router'

//Bootstrap
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

//Font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faTwitter, faGoogle} from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook)
library.add(faTwitter)
library.add(faGoogle)
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Set Vue globally
window.Vue = Vue
// Set Vue router
Vue.router = router
Vue.use(VueRouter)
// Set Vue authentication
Vue.use(VueAxios, axios)
axios.defaults.baseURL = `${process.env.MIX_APP_URL}/api`

import auth                  from '@websanova/vue-auth/dist/v2/vue-auth.esm.js';
import driverAuthBearer      from '@websanova/vue-auth/dist/drivers/auth/bearer.esm.js';
import driverHttpAxios       from '@websanova/vue-auth/dist/drivers/http/axios.1.x.esm.js';
import driverRouterVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';
import driverOAuth2Google    from '@websanova/vue-auth/dist/drivers/oauth2/google.esm.js';
import driverOAuth2Facebook  from '@websanova/vue-auth/dist/drivers/oauth2/facebook.esm.js';

driverOAuth2Google.params.client_id = '547886745924-4vrbhl09fr3t771drtupacct6f788566.apps.googleusercontent.com';
driverOAuth2Facebook.params.client_id = '196729390739201';

Vue.use(auth, {
    plugins: {
        http: Vue.axios, // Axios
        // http: Vue.http, // Vue Resource
        router: Vue.router,
    },
    drivers: {
        auth: driverAuthBearer,
        http: driverHttpAxios,
        router: driverRouterVueRouter,
        oauth2: {
            google: driverOAuth2Google,
            facebook: driverOAuth2Facebook,
        }
    },
    options: {
        logoutData: {
          redirect: '/login'
        },
        rolesKey: 'type',
        notFoundRedirect: {name: 'user-account'},
    }
});

// Vue.use(VueAuth, auth)
// Load Index
Vue.component('index', Index)
const app = new Vue({
    el: '#app',
    router
});
