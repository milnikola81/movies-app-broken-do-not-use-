<template>
    <tr v-background="selected">
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
            <button v-if="!selected" @click="selectRow(movie)">Select</button>
            <button v-else disabled>Select</button>
        </td>
    </tr>
</template>

<script>
export default {
    props: ['movie'],
    data() {
        return {
            selected: false
        }
    },
    methods: {
        selectRow(movie) {
            this.$emit('selectRow', movie)
            //console.log(movie)
            this.selected = true
        }
    }
}
</script>

