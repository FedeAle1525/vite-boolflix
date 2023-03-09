<script>
import Language from './Language.vue';
import Image from './Image.vue'
import Vote from './Vote.vue'


export default {

  props: {
    film: {
      type: Object,
      required: true
    }
  },

  components: {
    Language,
    Image,
    Vote
  },

}
</script>

<template>
  <div class="card">

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
  color: aqua;
  text-decoration: underline;
}
</style>