<template>
    <div>
        <nav class="navbar navbar-light" style="background-color: #e3f2fd;">
            <a class="navbar-brand" href="/">Movies</a>
            <router-link to="/add">Add movie</router-link>
            <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
            <button v-else @click="logout">Logout</button>
        </nav>
    </div>
</template>

<script>
import { authService } from '../services/Auth'
import { eventBus } from '../main'

export default {
    data() {
        return {
            isAuthenticated: authService.isAuthenticated()
        }
    },
    methods: {
        logout() {
            authService.logout()
            this.isAuthenticated = false
            this.$router.push("/login");
        }
    },
    created() {
        eventBus.$on("changeState", state => {
            this.isAuthenticated = state;
        });
    },
}
</script>

