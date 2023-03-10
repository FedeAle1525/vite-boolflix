<script>
import store from '../store';

export default {

  data() {
    return {
      store
    }
  },

  computed: {
    getGenresSeries() {
      return this.store.genresSeries;
    },

    getGenresFilms() {
      return this.store.genresFilms;
    }
  },
}
</script>

<template>
  <div class="filters">

    <div class="films">
      <span>Film</span>
      <select id="" v-model="store.filterGenreFilm">
        <option value="" hidden>Filtra per Genere</option>
        <option value="none">Nessun Genere</option>
        <option :value="genre.id" v-for="(genre, i) in getGenresFilms" :key="i"> {{ genre.name }}</option>
      </select>
    </div>

    <div class="serie-tv">
      <span>Serie TV</span>
      <select id="" v-model="store.filterGenreSerie">
        <option value="" hidden>Filtra per Genere</option>
        <option value="none">Nessun Genere</option>
        <option :value="genre.id" v-for="(genre, i) in getGenresSeries" :key="i"> {{ genre.name }}</option>
      </select>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.filters {
  display: flex;
  gap: 20px;

  .serie-tv>span {
    margin-right: 10px;
    color: salmon;
    font-weight: bold;
  }

  .films>span {
    margin-right: 10px;
    color: sandybrown;
    font-weight: bold;
  }
}
</style>