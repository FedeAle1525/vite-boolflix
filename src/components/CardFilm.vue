<script>
export default {

}
</script>

<template>
  <div class="card">
    <span class="title">Titolo</span>
    <span class="original-title">Titolo Originale</span>
    <span class="language">Lingua</span>
    <span class="vote">Voto</span>
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
</style>