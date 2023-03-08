<script>
export default {

  props: {
    film: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <div class="card">
    <span class="title">
      <span>Titolo:</span>
      "{{ film.title }}"
    </span>
    <span class="original-title">
      <span>Titolo Originale:</span>
      "{{ film.original_title }}"
    </span>
    <span class="language" v-if="film.original_language === 'en'">
      <span>Lingua:</span>
      <img src="/images/gb.png" alt="">
    </span>
    <span class="language" v-else-if="film.original_language === 'es'">
      <span>Lingua:</span>
      <img src="/images/es.png" alt="">
    </span>
    <span class="language" v-else-if="film.original_language === 'it'">
      <span>Lingua:</span>
      <img src=" /images/it.png" alt="">
    </span>
    <span class="language" v-else-if="film.original_language === 'ja'">
      <span>Lingua:</span>
      <img src="/images/jp.png" alt="">
    </span>
    <span class="language" v-else>
      <span>Lingua:</span>
      {{ film.original_language }}
    </span>
    <span class="vote">
      <span>Voto:</span>
      {{ film.vote_average }}
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
  color: aqua;
  text-decoration: underline;
}
</style>