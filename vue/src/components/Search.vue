<!--
  Search bar component that returns a string every time the current input
  changes.

  PROPS: NONE
  EMITS:
   searchInputChange: string with current search input
-->

<template>
  <md-input-container class="md-flex">
    <md-input v-model="search" :change="inputChange()"></md-input>
  </md-input-container>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'search',
  data () {
    return {
      search: ''
    }
  },
  methods: {
    inputChange: _.debounce(
      function () {
        this.$store.dispatch({
          type: 'updateSearch',
          search: this.search,
          pathName: this.$route.name
        })
      },
      300
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
