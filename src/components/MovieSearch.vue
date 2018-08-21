<template>
    <div>
        <input type="text" @input="searchMovie" placeholder="search movies..." />
    </div>
</template>

<script>
import { Movies } from '../services/Movies.js'

export default {
    props: ['movies'],
    data() {
        return {
            search: ''
        }
    },
    methods: {
        searchMovie(event) {
            // console.log(event.target.value)
            this.$emit('searchMovie', event.target.value)
        }
    }
    
}
</script>

