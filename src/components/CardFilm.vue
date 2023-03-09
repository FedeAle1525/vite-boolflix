<script>
import Language from './Language.vue';
import Image from './Image.vue'


export default {

  props: {
    film: {
      type: Object,
      required: true
    }
  },

  components: {
    Language,
    Image
  },

  computed: {

    convertVote() {
      const vote = this.film.vote_average;
      const voteConverted = Math.floor(vote / 2);
      return voteConverted;
    }
  }

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

    <span class="vote">
      <span class="label">Voto:</span>
      <img src="/images/star-filled.png" v-for="n in convertVote">
      <img src="/images/star-empty.png" v-for="n in (5 - convertVote)">
      <!-- <span> {{ convertVote }}</span> -->
    </span>
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
.original-title>span,
.vote>label {
  color: aqua;
  text-decoration: underline;
}

.vote>img {
  width: 20px;
}
</style>