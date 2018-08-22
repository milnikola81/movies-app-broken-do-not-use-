<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th>
                        Title
                    </th>
                    <th>
                        Director
                    </th>
                    <th>
                        Release Date
                    </th>
                    <th>
                        Genre
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="filteredMovies.length === 0">
                    <td colspan="5">
                        There are no movies matching your search term
                    </td>
                </tr>
                <MovieRow v-for="(movie, index) in filteredMovies" :key="index" :movie = "movie" @selectRow="selectMovies"/>
            </tbody>
        </table>
        <MovieSearch :movies = "movies" @searchMovie="filterMovies"/>
        <p v-if="selectedMovies.length > 0">You have chosen {{selectedMovies.length}} movies.</p>
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
            filteredMovies: [],
            selectedMovies: []
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
        },
        selectMovies(movie) {
            this.selectedMovies.push(movie)
        }
    }
}
</script>

<style scoped>
table {
    max-width: 60%;
    margin: 0 auto;
}
</style>


