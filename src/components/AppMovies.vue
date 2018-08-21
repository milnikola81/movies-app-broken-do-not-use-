<template>
    <div>
        <ul>
            <MovieRow v-for="(movie, index) in movies" :key="index" :movie = "movie" />
            <MovieSearch :movies = "movies" @searchMovie="filteredMovies"/>
        </ul>
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
            })
        })
    },
    methods: {
        // filteredMovies(value) {
        //     console.log(value)
        // }
        // filteredMovies: function() {
        //     return this.movies.filter((movie) => {
        //         return movie.title.toLowerCase().match(this.search)
        //     });
        // }
    }
    
}
</script>

