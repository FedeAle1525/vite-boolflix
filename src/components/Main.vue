<script>
export default {

}
</script>

<template>
  <main>
    <div class="container">
      <div class="grid">
        <div class="card">
          <span class="title">Titolo</span>
          <span class="original-title">Titolo Originale</span>
          <span class="language">Lingua</span>
          <span class="vote">Voto</span>
        </div>
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