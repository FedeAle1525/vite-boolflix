<script>
export default {
  props: {
    language: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
  <span class="language" v-if="language === 'en'">
    <span>Lingua:</span>
    <img src="/images/gb.png" alt="">
  </span>
  <span class="language" v-else-if="language === 'es'">
    <span>Lingua:</span>
    <img src="/images/es.png" alt="">
  </span>
  <span class="language" v-else-if="language === 'it'">
    <span>Lingua:</span>
    <img src=" /images/it.png" alt="">
  </span>
  <span class="language" v-else-if="language === 'ja'">
    <span>Lingua:</span>
    <img src="/images/jp.png" alt="">
  </span>
  <span class="language" v-else>
    <span>Lingua:</span>
    {{ language }}
  </span>
</template>

<style lang="scss" scoped>
.language>span {
  color: aqua;
  text-decoration: underline;
}
</style>