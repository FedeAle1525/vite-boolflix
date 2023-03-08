<script>
import Language from './Language.vue';
import Image from './Image.vue'



export default {

  props: {
    serie: {
      type: Object,
      required: true
    }
  },

  components: {
    Language,
    Image
  },

  methods: {

    convertVote() {
      const vote = this.serie.vote_average;
      const voteConverted = Math.floor(vote / 2);
      return voteConverted;
    }
  }

}
</script>

<template>
  <div class="card">

    <Image :finalPath="serie.backdrop_path" />

    <span class="title">
      <span>Titolo:</span>
      "{{ serie.name }}"
    </span>
    <span class="original-title">
      <span>Titolo Originale:</span>
      "{{ serie.original_name }}"
    </span>

    <Language :language="serie.original_language" />

    <span class="vote">
      <span>Voto:</span>
      {{ convertVote() }}
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

span>span {
  color: greenyellow;
  text-decoration: underline;
}
</style>