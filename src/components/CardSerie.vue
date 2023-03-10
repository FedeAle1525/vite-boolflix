<script>
import Language from './Language.vue';
import Image from './Image.vue';
import Vote from './Vote.vue';
import axios from 'axios';
import store from '../store';

export default {

  data() {
    return {
      store,
    }
  },

  props: {
    serie: {
      type: Object,
      required: true
    }
  },

  components: {
    Language,
    Image,
    Vote
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

      console.log('Lista Generi Serie:', genresSerieList);

      return genresSerieList;
    }
  },

  mounted() {
    this.genresList;
  }

}
</script>

<template>
  <div class="card">

    <Image :finalPath="serie.poster_path" class="card-img" />

    <div class="card-info">
      <span class="title">
        <span>Titolo:</span>
        "{{ serie.name }}"
      </span>
      <span class="original-title">
        <span>Titolo Originale:</span>
        "{{ serie.original_name }}"
      </span>

      <Language :language="serie.original_language" />

      <Vote :vote="serie.vote_average" />

      <span class="genres">Generi:</span>
      <ul class="list-genres" v-if="genresList.length !== 0">
        <li v-for="genre in genresList"> {{ genre }}</li>
      </ul>
      <span class="no-genres" v-else>Non Presenti</span>

    </div>

  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  border: 1px solid white;
}

.card:hover {

  .card-img {
    display: none;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    gap: 5px;

    .title {
      font-weight: bold;
    }

    .original-title {
      font-style: italic;
    }
  }
}

.card-info {
  display: none;
}

.title>span,
.original-title>span {
  color: greenyellow;
}

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