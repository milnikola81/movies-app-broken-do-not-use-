<template>
    <div>
        <ul>
            <MovieRow v-for="(movie, index) in filteredMovies" :key="index" :movie = "movie" />
            <MovieSearch :movies = "movies" @searchMovie="filterMovies"/>
        </ul>
        <!-- <button @click="showMovies">Show</button> -->
    </div>
</template>

<script>
import { movies } from '../services/Movies'
import MovieRow from '../components/MovieRow.vue'
import MovieSearch from '../components/MovieSearch.vue'

export default {
    components: {
        MovieRow,
        MovieSearch
    },
    data () {
        return {
            movies: [],
            filteredMovies: []
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            // access to component instance via `vm`
            movies.getAll()
            .then((response) => {
                vm.movies = response.data
                vm.filteredMovies = response.data
            })
        })
    },
    methods: {
        filterMovies(value) {
            this.filteredMovies = this.movies.filter(movie => movie.title.toLowerCase().match(value));
        }
    }
}
</script>

