<script>
import axios from 'axios';
import store from '../store';
import CardFilm from './CardFilm.vue';
import CardSerie from './CardSerie.vue'

export default {

  components: {
    CardFilm,
    CardSerie
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
        // resp.data.results.forEach(el => {
        //   const vote = el.vote_average;
        //   el.vote_average = this.convertVote(vote);
        //   // console.log(vote, el.vote_average);
        // });
        this.store.films = resp.data.results;
        // console.log(resp.data.results);
      }).catch((error) => {
        this.store.films = '';
      })
    },

    searchSeries() {
      axios.get('https://api.themoviedb.org/3/search/tv', {
        params: {
          api_key: store.apiKey,
          language: store.language,
          page: store.page,
          query: store.queryName,
          include_adults: store.adults
        }
      }).then((resp) => {
        // resp.data.results.forEach(el => {
        //   const vote = el.vote_average;
        //   el.vote_average = this.convertVote(vote);
        // });
        this.store.series = resp.data.results;
      }).catch((error) => {
        this.store.series = '';
      })
    },

    getGenresSeriesFromServer() {
      axios.get('https://api.themoviedb.org/3/genre/tv/list', {
        params: {
          api_key: this.store.apiKey,
          language: this.store.language
        }
      }).then((resp) => {
        this.store.genresSeries = resp.data.genres;
        // console.log('Generi Serie;', this.store.genresSeries);
      })
    },

    getGenresFilmsFromServer() {
      axios.get('https://api.themoviedb.org/3/genre/movie/list', {
        params: {
          api_key: this.store.apiKey,
          language: this.store.language
        }
      }).then((resp) => {
        this.store.genresFilms = resp.data.genres;
        // console.log('Generi Film;', this.store.genresFilms);
      })
    },

  },

  computed: {
    queryName() {
      return this.store.queryName
    },

    getFilms() {
      return this.store.films;
    },

    getSeries() {
      return this.store.series;
    }
  },

  watch: {
    queryName() {
      this.searchFilms();

      this.searchSeries();
    }
  },

  mounted() {
    this.getGenresSeriesFromServer();

    this.getGenresFilmsFromServer();
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
      <!-- Sezione Film -->
      <section class="films">
        <h3 v-if="(getFilms.length !== 0)">Films</h3>
        <div class="grid">
          <CardFilm v-for="film in getFilms" :key="film.id" :film="film" />
        </div>
      </section>

      <!-- Sezione Serie TV -->
      <section class="series">
        <h3 v-if="(getSeries.length !== 0)">Serie TV</h3>
        <div class="grid">
          <CardSerie v-for="serie in getSeries" :key="serie.id" :serie="serie" />
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
  grid-template-columns: repeat(5, 1fr);
  gap: 10px 10px;
}

.films {
  padding: 20px 20px;
  background-color: rgb(24, 36, 33);

  h3 {
    font-size: 32px;
    margin-bottom: 20px;
    color: sandybrown;
    text-align: center;
  }
}

.series {
  margin-top: 30px;
  padding: 20px 20px;
  background-color: rgb(24, 36, 33);

  h3 {
    font-size: 32px;
    margin-bottom: 20px;
    color: salmon;
    text-align: center;
  }
}
</style>