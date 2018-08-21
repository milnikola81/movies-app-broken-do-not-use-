<template>
    <div>
        <div class="wrapper">
        <h1 style="padding-top: 1rem; padding-bottom: 1rem"><strong>App Movies | Vue Project</strong></h1>
        <div class="post" v-for="(movie, index) in movies" :key="index">
            <h2 style="margin-bottom: 2rem">{{movie.title}}</h2>
            <p style="color: #999999; margin-bottom: 2rem">Published on {{movie.releaseDate}}</p>
            <p style="color: #999999; margin-bottom: 2rem">Genre {{movie.genre}}</p>
            <p style="color: #999999; margin-bottom: 2rem">Director {{movie.director}}</p>
        </div>
    </div>
    </div>
</template>

<script>
import { movies } from '../services/Movies'

export default {
    data () {
        return {
            movies: []
        }
    },
    created () {
        movies.getAll()
        .then((response) => {
            this.movies = response.data
        })
    }
    
}
</script>

