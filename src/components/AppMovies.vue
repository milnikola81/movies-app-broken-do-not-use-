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
                <MovieRow v-for="(movie, index) in filteredMovies" :key="index" :movie = "movie" :selectedMoviesComputed = "selectedMoviesComputed" @selectRow="selectMovies"/>
            </tbody>
        </table>
        <MovieSearch :movies = "movies" @searchMovie="filterMovies"/>
        <p v-if="selectedMoviesComputed.length > 0">You have chosen {{selectedMoviesComputed.length}} movies.</p>
        <button @click="selectAll">Select All</button>
        <button  @click="deselectAll">Deselect All</button>
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
            selectedMovies: [],
            // allSelected: false
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
        },
        selectAll() {
            this.selectedMovies = []
            for(var i = 0; i < this.movies.length; i++) {
                this.selectedMovies.push(this.movies[i])
            }
        },
        deselectAll() {
            this.selectedMovies = []
        }
    },
    computed: {
        selectedMoviesComputed: function() {
            return this.selectedMovies;
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


