<template>
    <div>
        <li>{{movie.title}}, {{movie.director}}, {{movie.releaseDate}}, {{movie.genre}}</li>
    </div>
</template>

<script>
export default {
    props: ['movie'] 
}
</script>

