<template>
  <div>
    right-store中的{{ num }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        num: this.$store.state.num
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>