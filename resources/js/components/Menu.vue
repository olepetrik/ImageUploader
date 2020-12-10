<template>
    <b-navbar type="dark" id="nav">
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <!--UNLOGGED-->
                <b-nav-item v-if="!$auth.check()" v-for="(route, key) in routes.unlogged" v-bind:key="route.path" class="nav-item">
                    <router-link  :to="{ name : route.path }" :key="key">
                        {{route.name}}
                    </router-link>
                </b-nav-item>
                <!--LOGGED USER-->
                <b-nav-item v-if="$auth.check()" v-for="(route, key) in routes.user" v-bind:key="route.path" class="nav-item">
                    <router-link  :to="{ name : route.path }" :key="key">
                        {{route.name}}
                    </router-link>
                </b-nav-item>
                <b-nav-item v-if="$auth.check()" v-for="(route, key) in routes.gallery" v-bind:key="route.path" class="nav-item">
                    <router-link  :to="{ name : route.path }" :key="key">
                        {{route.name}}
                    </router-link>
                </b-nav-item>
                <!--LOGOUT-->
                <b-nav-item v-if="$auth.check()" class="nav-item">
                    <a href="#" @click.prevent="$auth.logout()">Logout</a>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>
<script>

import {BNavbar, BCollapse, BNavbarNav, BNavItem} from 'bootstrap-vue'

export default {
    data() {
        return {
            routes: {
                // UNLOGGED
                unlogged: [
                    {
                        name: 'Register',
                        path: 'register'
                    },
                    {
                        name: 'Login',
                        path: 'login'
                    }
                ],
                // LOGGED USER
                user: [
                    {
                        name: 'Upload Images',
                        path: 'home'
                    }
                ],
                gallery: [
                    {
                        name: 'Gallery',
                        path: 'gallery'
                    }
                ]
            }
        }
    },
    components: {
        BNavbar,
        BCollapse,
        BNavbarNav,
        BNavItem
    },
    mounted() {
        //
    }
}
</script>
<style scoped>
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 66px;
    border-bottom: 1px solid rgba(51, 51, 51, 0.138);
}

.nav-link {
    font-size: 30px;
}

.nav-links li {
    list-style-type: none;
}

.nav-links a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.59);
    transition: 0.3s ease;
}

.nav-links a:hover {
    color: black;
}
</style>
