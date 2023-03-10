<script>
import store from '../store';

export default {

  data() {
    return {
      store,
      searchName: ''
    }
  },

  methods: {
    setQueryName() {
      this.store.queryName = this.searchName;
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

  watch: {
    searchName() {
      if (this.searchName === '') {
        this.store.films = '';
        this.store.series = '';
      }
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <h2>BoolFlix</h2>

      <div class="search">
        <input type="text" placeholder="Ricerca per Nome" v-model="searchName" @keyup.enter="setQueryName()">
        <input type="button" value="Ricerca" @click="setQueryName()">
      </div>

      <div class="filters">

        <div class="serie-tv">
          <span>Serie TV</span>
          <select id="">
            <option value="" hidden>Filtra per Genere</option>
            <option value="none">Nessun Genere</option>
            <option :value="genre.name" v-for="(genre, i) in getGenresSeries" :key="i"> {{ genre.name }}</option>
          </select>
        </div>

        <div class="films">
          <span>Film</span>
          <select id="">
            <option value="" hidden>Filtra per Genere</option>
            <option value="none">Nessun Genere</option>
            <option :value="genre.name" v-for="(genre, i) in getGenresFilms" :key="i"> {{ genre.name }}</option>
          </select>
        </div>

      </div>
    </div>


  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: rgb(111, 111, 111);
  color: yellow;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.search {
  display: flex;
  align-items: center;
  gap: 15px;

  select {
    padding: 0 5px;
  }

  input {
    line-height: 20px;
    padding: 0 5px;
  }
}

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