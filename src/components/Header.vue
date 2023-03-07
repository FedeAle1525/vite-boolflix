<script>
import store from '../store';

export default {

  data() {
    return {
      store
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <h2>BoolFlix</h2>

      <div class="search">
        <input type="text" placeholder="Ricerca per Nome" v-model="store.queryName">
        <!-- <input type="button" value="Ricerca"> -->
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: rgb(111, 111, 111);
  color: yellow;
}

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