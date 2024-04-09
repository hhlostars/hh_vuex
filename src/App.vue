<template>
  <div>
    <left-cmp></left-cmp>
    <right-cmp></right-cmp>
  </div>
</template>

<script>
  import leftCmp from './components/leftCmp.vue'
  import rightCmp from './components/rightCmp.vue'
  export default {
    components: {
      leftCmp,
      rightCmp
    }
  }
</script>

<style lang="scss" scoped>

</style>