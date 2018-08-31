<template>
    <div>
        <h1>Add movie</h1>

        <form id="addCarForm" @submit.prevent>
            <div class="form-group">
                <label>Title</label> <br>
                <input  class="form-control" id="title" v-model="newMovie.title" type="text" placeholder="movie title..." required>
            </div>

            <div class="form-group">
                <label>Director</label> <br>
                <input  class="form-control" id="director" v-model="newMovie.director" type="text" placeholder="director..." required>
            </div>

            <div class="form-group">
                <label>Image</label> <br>
                <input  class="form-control" id="image" v-model="newMovie.imageUrl" type="url" placeholder="image url..." required>
            </div>

            <div class="form-group">
                <label>Duration</label> <br>
                <input  class="form-control" id="duration" v-model="newMovie.duration" type="number" placeholder="duration..." required>
            </div>

            <div class="form-group">
                <label>Release year</label> <br>
                <input  class="form-control" id="year" v-model="newMovie.releaseDate" type="text" placeholder="release year..." required>
            </div>

            <div class="form-group">
                <label>Genre</label> <br>
                <input  class="form-control" id="genre" v-model="newMovie.genre" type="text" placeholder="genre..." required>
            </div>

            <button class="btn btn-success" @click="addMovie(newMovie)" type="submit">Add movie</button>
            <input class="btn btn-danger" type="reset" value="Reset" />
            <br>         

        </form><br><br><br>
    </div>
</template>

<script>
import { movies } from '../services/Movies'

export default {
    data() {
        return {
            newMovie: {}
        }
    },
    methods: {
        addMovie(newMovie) {
            // console.log(errors)
            movies.add(newMovie)
            .then((response) => {
                this.$router.push('movies')
            })
            .catch(error => {
            console.log(error.response.data.errors)
            })
            // .catch(err => console.log(err))
            // checks if data is submitted, then redirects route (this way required in inputs works)
        }
    }
}
</script>

<style scoped>
form {
    max-width: 40%;
    margin: 0 auto;
}
button {
    margin-right: 2rem;
}
</style>


