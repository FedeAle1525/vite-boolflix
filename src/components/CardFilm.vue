<script>
import Language from './Language.vue';
import Image from './Image.vue'
import Vote from './Vote.vue'
import ActorsList from './ActorsList.vue';
import axios from 'axios';
import store from '../store';


export default {

  data() {
    return {
      listActors: [],
      store
    }
  },

  props: {
    film: {
      type: Object,
      required: true
    }
  },

  components: {
    Language,
    Image,
    Vote,
    ActorsList
  },

  computed: {
    getFilmId() {
      return this.film.id;
    },

    filterGenre() {
      return this.store.filterGenreFilm;
    },

  },

  watch: {

    filterGenre() {
      this.isGenreIncluse();
    }

  },

  methods: {
    searchActors() {
      axios.get(`https://api.themoviedb.org/3/movie/${this.getFilmId}/credits`, {
        params: {
          api_key: this.store.apiKey,
          language: this.store.language
        }
      }).then((resp) => {

        resp.data.cast.forEach(person => {
          if (person.known_for_department === 'Acting' && (this.listActors.length < 5)) {
            this.listActors.push(person);
          }
        });

        // console.log(this.listActors);
      })
    },

    isGenreIncluse() {
      if (this.film.genre_ids.includes(this.filterGenre)) {
        console.log(true);
        console.log(this.film.genre_ids);
        console.log(this.filterGenre);
        return true;
      } else {
        console.log(false);
        console.log(this.film.genre_ids);
        console.log(this.filterGenre);
        return false;
      }
    }
  },


  mounted() {
    this.searchActors();
  },


}
</script>

<template>
  <div class="card" :class="isGenreIncluse() ? '' : 'hidden'">

    <Image :finalPath="film.poster_path" class="card-img" />

    <div class="card-info">

      <span class="title">
        <span>Titolo:</span>
        "{{ film.title }}"
      </span>
      <span class="original-title">
        <span>Titolo Originale:</span>
        "{{ film.original_title }}"
      </span>

      <Language :language="film.original_language" />

      <Vote :vote="film.vote_average" />

      <ActorsList :actors="listActors" />

    </div>


  </div>
</template>

<style lang="scss" scoped>
.card.hidden {
  display: none;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  border: 1px solid white;
  // height: 400px;

}

.card:hover {

  .card-img {
    display: none;
  }

  .card-info {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    // justify-content: center;
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
  color: aqua;
  text-decoration: underline;
}
</style>