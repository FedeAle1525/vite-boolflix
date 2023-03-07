<script>
export default {

}
</script>

<template>
  <div class="container">
    <h2>BoolFlix</h2>

    <div class="search">
      <input type="text" placeholder="Ricerca per Nome">
      <input type="button" value="Ricerca">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
}

.search {
  display: flex;
  align-items: center;
  gap: 15px;

  input {
    line-height: 20px;
    padding: 0 5px;
  }
}
</style>