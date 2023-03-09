<script>
import store from '../store';

export default {

  props: {
    finalPath: {
      type: String,
    }
  },

  data() {
    return {
      store,
    }
  },

  computed: {
    generateUrlImg() {
      const stringUrl = this.store.basePath + this.store.widthImg + this.finalPath;
      return stringUrl;
    }
  }
}
</script>

<template>
  <div class="no-img" v-if="finalPath === null">
    <span>NO IMAGE</span>
  </div>

  <img :src="generateUrlImg" alt="" v-else>
</template>

<style lang="scss" scoped>
.no-img {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>