<template>
  <ul>
    <li v-for="item in filteredList">{{ item }}</li>
    <md-spinner md-indeterminate v-if="loading"></md-spinner>
  </ul>
</template>

<script>
export default {
  name: 'searchable-list',
  props: ['search', 'items', 'loading'],
  data () {
    return {
    }
  },
  computed: {
    filteredList: function () {
      return this.items.filter((item) => {
        return item.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

li {
  border: 1px solid black;
  padding: 3px;
  margin: 5px auto;
  width: 100px;
  list-style-type: none;
}

a {
  color: #42b983;
}
</style>
