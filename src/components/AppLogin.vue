<template>
    <div>
        <br>
        <h1>Login</h1>
        <br>

        <form id="loginForm" @submit.prevent>
            <div class="form-group">
                <label>Email</label> <br>
                <input v-model="email" class="form-control" id="email" type="email" placeholder="enter email...">
            </div>

            <div class="form-group">
                <label>Password</label> <br>
                <input v-model="password" class="form-control" id="password" type="password" placeholder="enter password...">
            </div>

            <p v-if="error" style="color: red">{{error}}</p>

            <button @click="login" class="btn btn-success" type="submit">Login</button>

        </form>           
    </div>
</template>

<script>
import { authService } from '../services/Auth'
import { eventBus } from '../main'

export default {
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login() {
            authService.login(this.email, this.password)
            .then((response) => {
                eventBus.$emit('changeState', true)               
                this.$router.push('movies')
            })
            .catch(error => {
                //console.log(error.response.data)
                this.error = error.response.data.error
            })
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            // access to component instance via `vm`
            if(authService.isAuthenticated()) {
                vm.$router.push('movies')
            }
            else {
                next()
            }
        })
    },
}
</script>

<style scoped>

form {
    max-width: 40%;
    margin: 0 auto;
}

</style>


