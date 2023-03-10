<script>
import Language from './Language.vue';
import Image from './Image.vue';
import Vote from './Vote.vue';
import GenresList from './GenresList.vue';
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
    Vote,
    GenresList
  },

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

      <GenresList :serie="serie" />

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
</style>