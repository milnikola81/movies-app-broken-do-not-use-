<template>
    <!-- <tr v-background="selected"> -->
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
        <td>
            <button type="button" class="btn btn-success" v-if="!selectedMoviesComputed.includes(movie)" @click="selectRow(movie)">Select</button>
            <button type="button" class="btn btn-success" v-else disabled>Select</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['movie', 'selectedMoviesComputed'],
    data() {
        return {
            selected: false
        }
    },
    methods: {
        selectRow(movie) {
            this.$emit('selectRow', movie)
            this.selected = true
        }
    }
}
</script>

