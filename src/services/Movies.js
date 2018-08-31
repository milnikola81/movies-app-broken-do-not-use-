import axios from 'axios'
// importujem axios

export default class Movies {
    constructor () {
      axios.defaults.baseURL = 'http://localhost:8000/api/'
      // definisem default url na koji ce se nastavljati http requesti
    }

    getAll() {
        return axios.get('movies')
    }

    // add(movie) {
    //     return axios.post('movies', movie)
    // }
    // getMovie(id) {
    //     return axios.get(`movies/${id}`)
    // }
    // deleteMovie(movie) {
    //     return axios.delete(`movies/${movie.id}`)
    // }
    // edit(movie) {
    //     return axios.put(`movies/${movie.id}`, movie)
    // }
}

export const movies = new Movies ()