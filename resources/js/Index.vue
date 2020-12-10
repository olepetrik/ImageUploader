<template>
    <div id="main">
        <header id="header">
            <template v-if="this.$auth.check()">
                <navigationMenu></navigationMenu>
            </template>
        </header>
        <div id="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import navigationMenu from './components/Menu.vue'
import Login from "./Pages/Login";
import Register from "./Pages/Register";

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
export default {
    data() {
        return {
            loggedIn: false
        }
    },
    created() {
        if (!this.$auth.check() && this.$router.currentRoute.name !== 'register' && this.$router.currentRoute.name !== 'login') {
            this.$router.push('/login')
        }
    },
    components: {
        navigationMenu,
        Login,
        Register
    }
}
</script>
<style>
body {
    margin: 0;
    width: 100%;
    height: 100vh;
    font-family: "Exo", sans-serif;
    color: #fff;
    background: linear-gradient(-45deg, #ffd1, #fd7e14c4, #fdb493db, #fbb06fc9);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
}

@keyframes gradientBG {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

</style>
