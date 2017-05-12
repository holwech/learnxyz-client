<!--
  Search bar component that returns a string every time the current input
  changes.

  PROPS: NONE
  EMITS:
   searchInputChange: string with current search input
-->

<template>
  <md-input-container class="md-flex">
    <md-input v-model="search" :change="inputChange"></md-input>
  </md-input-container>
</template>

<script>
export default {
  name: 'search',
  data () {
    return {
      search: ''
    }
  },
  computed: {
    inputChange: function () {
      this.$emit('searchInputChange', this.search)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
