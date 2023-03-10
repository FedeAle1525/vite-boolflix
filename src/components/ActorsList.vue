<script>
export default {
  props: {
    actors: {
      type: Array,
      required: true
    }
  }
}
</script>

<template>
  <span class="actors">Attori Principali:</span>
  <ul class="list-actors" v-if="actors.length !== 0">
    <li v-for="actor in actors" :key="actor.id"> {{ actor.original_name }}</li>
  </ul>
  <span class="no-actors" v-else>Non Presenti</span>
</template>


<style lang="scss" scoped>
.actors {
  color: palevioletred;
  text-decoration: underline;
  margin-top: 10px;
}

.list-actors {
  list-style-type: circle;
  padding-left: 25px;
}

.no-actors {
  text-transform: uppercase;
}
</style>