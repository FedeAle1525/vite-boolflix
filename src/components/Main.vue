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
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: store.apiKey,
          language: store.language,
          query: store.queryName,
          page: store.page,
          include_adults: store.adults
        }
      }).then((resp) => {
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
      <section class="films">
        <h3 v-if="(store.films.length !== 0)">Films</h3>
        <div class="grid">
          <CardFilm v-for="film in store.films" :key="film.id" :film="film" />
        </div>
      </section>
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

.films {
  // text-align: center;

  h3 {
    font-size: 32px;
    margin-bottom: 20px;
    color: sandybrown;
    text-align: center;
  }
}
</style>