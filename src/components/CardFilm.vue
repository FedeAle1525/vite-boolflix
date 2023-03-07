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
      <span>Titolo: </span>
      "{{ film.title }}"
    </span>
    <span class="original-title">
      <span>Titolo Originale: </span>
      "{{ film.original_title }}"
    </span>
    <span class="language">
      <span>Lingua: </span>
      {{ film.original_language }}
    </span>
    <span class="vote">
      <span>Voto: </span>
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