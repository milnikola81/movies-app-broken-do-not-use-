<template>
    <div>
        <br><br>
        <h1>Single movie</h1>
        <br><br>
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
                        Release date
                    </th>
                    <th>
                        Genre
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {{movie.title}}
                    </td>
                    <td>
                        {{movie.director}}
                    </td>
                    <td>
                        {{movie.releaseDate}}
                    </td>
                    <td>
                        {{movie.genre}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { movies } from '../services/Movies'

export default {
    data () {
        return {
            movie: {},
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            // access to component instance via `vm`
            movies.get(vm.$route.params.id)
            .then((response) => {
                vm.movie = response.data
            })
        })
    }

}
</script>

<style scoped>
table {
    max-width: 80%;
    margin: 0 auto;
}
</style>


