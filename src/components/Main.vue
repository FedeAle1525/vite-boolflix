<script>
import axios from 'axios';
import store from '../store';
import CardFilm from './CardFilm.vue';

export default {

  components: {
    CardFilm
  },

  data() {
    return {
      store
    }
  },

  methods: {
    searchFilms() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=088f7fa18f717fff2fc5bf18e9e57aab', {
        params: {
          api_key: store.apiKey,
          language: store.language,
          query: store.queryName,
          page: store.page,
          include_adults: store.adults
        }
      })
        .then((resp) => {
          this.store.films = resp.data.results;
          console.log(resp.data.results);
        })
    }
  },

  computed: {
    queryName() {
      return this.store.queryName
    }
  },

  watch: {
    queryName() {
      this.searchFilms();
    }
  }

  // mounted() {
  //   this.searchFilms();
  // }

}
</script>

<!-- Parte HTML -->
<template>
  <main>
    <div class="container">
      <div class="grid">
        <CardFilm v-for="film in store.films" :key="film.id" :film="film" />
      </div>
    </div>
  </main>
</template>

<!-- Parte CSS -->
<style lang="scss" scoped>
main {
  padding: 20px 0;
  background-color: rgb(48, 48, 48);
  color: white;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 10px;
}
</style>