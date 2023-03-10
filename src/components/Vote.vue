<script>
export default {

  props: {
    vote: {
      type: Number,
      required: true
    }
  },

  computed: {

    convertVote() {
      const voteConverted = Math.floor(this.vote / 2);
      return voteConverted;
    }
  }
}
</script>

<template>
  <span class="vote">
    <span class="label">Voto:</span>
    <img src="/images/star-filled.png" v-for="n in convertVote" :key="n">
    <img src="/images/star-empty.png" v-for="n in (5 - convertVote)" :key="n + 5">
    <!-- <span> {{ convertVote }}</span> -->
  </span>
</template>

<style lang="scss" scoped>
.vote>.label {
  color: orangered;
  text-decoration: underline;
}

.vote>img {
  width: 20px;
}
</style>