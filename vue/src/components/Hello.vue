<template>
  <div class="main">
  <input v-model="search" placeholder="edit me">
    <div>
      {{ search }}
    </div>
    <searchable-list :search="search"></searchable-list>
  </div>
</template>

<script>
import searchableList from './Searchable-list.vue'

export default {
  name: 'hello',
  data () {
    return {
      search: '',
      words: [
        {name: 'banana'},
        {name: 'orange'},
        {name: 'potato'},
        {name: 'kiwi'}
      ]
    }
  },
  computed: {
    searchResult: function () {
      return this.words.filter((word) => {
        return word.name.toLowerCase().indexOf(this.search.toLowerCase()) >= 0
      })
    }
  },
  components: {
    searchableList
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
