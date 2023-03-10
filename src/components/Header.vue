<script>
import Filters from './Filters.vue';
import store from '../store';

export default {

  data() {
    return {
      store,
      searchName: ''
    }
  },

  components: {
    Filters
  },

  methods: {
    setQueryName() {
      this.store.queryName = this.searchName;
    }
  },

  watch: {
    searchName() {
      if (this.searchName === '') {
        this.store.films = '';
        this.store.series = '';
      }
    }
  }
}
</script>

<template>
  <header>
    <div class="container">
      <h2>BoolFlix</h2>

      <div class="search">
        <input type="text" placeholder="Ricerca per Nome" v-model="searchName" @keyup.enter="setQueryName()">
        <input type="button" value="Ricerca" @click="setQueryName()">
      </div>

      <Filters />

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

  select {
    padding: 0 5px;
  }

  input {
    line-height: 20px;
    padding: 0 5px;
  }
}
</style>