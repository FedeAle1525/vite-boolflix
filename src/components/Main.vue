<script>
import CardFilm from './CardFilm.vue';

export default {

  components: {
    CardFilm
  }
}
</script>

<template>
  <main>
    <div class="container">
      <div class="grid">
        <CardFilm />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  padding: 20px 0;
  background-color: rgb(48, 48, 48);
  color: white;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px 10px;
}
</style>