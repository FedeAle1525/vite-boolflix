<script>
import store from '../store';

export default {

  data() {
    return {
      store
    }
  },

  props: {
    serie: {
      type: Object,
      required: true
    }
  },

  computed: {
    getGenreIds() {
      return this.serie.genre_ids;
    },

    getGenresList() {
      return this.store.genresSeries;
    },

    genresList() {
      const genresSerieList = [];

      this.getGenreIds.forEach(genSerie => {
        this.getGenresList.forEach(genList => {
          if (genSerie === genList.id) {
            genresSerieList.push(genList.name);
          }
        })
      });

      // console.log('Lista Generi Serie:', genresSerieList);

      return genresSerieList;
    }
  },
}
</script>

<template>
  <span class="genres">Generi:</span>
  <ul class="list-genres" v-if="genresList.length !== 0">
    <li v-for="genre in genresList"> {{ genre }}</li>
  </ul>
  <span class="no-genres" v-else>Non Presenti</span>
</template>

<style lang="scss">
.genres {
  color: steelblue;
  text-decoration: underline;
  margin-top: 10px;
}

.list-genres {
  list-style-type: circle;
  padding-left: 25px;
}

.no-genres {
  text-transform: uppercase;
}
</style>