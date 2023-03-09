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

    <Image :finalPath="film.backdrop_path" />

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
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid white;


  .title {
    font-weight: bold;
  }

  .original-title {
    font-style: italic;
  }
}

.title>span,
.original-title>span {
  color: aqua;
  text-decoration: underline;
}
</style>