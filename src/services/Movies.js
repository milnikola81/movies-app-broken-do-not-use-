import axios from 'axios'
// importujem axios

export default class Movies {
    constructor () {
      axios.defaults.baseURL = 'http://localhost:3000/api/'
      // definisem default url na koji ce se nastavljati http requesti
    }

    getAll() {
        return axios.get('movies')
    }
}

export const movies = new Movies ()