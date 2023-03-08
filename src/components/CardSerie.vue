<script>
import Language from './Language.vue';
import store from '../store';


export default {

  props: {
    serie: {
      type: Object,
      required: true
    }
  },

  components: {
    Language
  },

  data() {
    return {
      store,
      urlImg: ''
    }
  },

  methods: {
    generateUrlImg() {
      const stringUrl = this.store.basePath + this.store.widthImg + this.serie.backdrop_path;
      return stringUrl;
    }
  }
}
</script>

<template>
  <div class="card">

    <div class="no-img" v-if="this.serie.backdrop_path === null">
      <span>NO IMAGE</span>
    </div>

    <img :src="generateUrlImg()" alt="" v-else>

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
      {{ serie.vote_average }}
    </span>
  </div>
</template>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid white;

  .no-img {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

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