<!--
  Shows a list of items and hides items that do not match the search input

  PROPS: 
    search: string with a given search input
  EMITS:
    NONE
-->

<template>
  <div class="main">
    <md-toolbar>
      <md-button class="md-icon-button">
        <md-icon>menu</md-icon>
      </md-button>

    <search v-on:searchInputChange="updateSearchInput"></search>
      <md-button class="md-icon-button">
        <md-icon>favorite</md-icon>
      </md-button>
    </md-toolbar>
    <searchable-list :search="search" :items="fruits"></searchable-list>
  </div>
</template>

<script>
import searchableList from '@/components/Searchable-list.vue'
import search from '@/components/Search.vue'

export default {
  name: 'Front-page',
  data () {
    return {
      search: '',
      fruits: []
    }
  },
  components: {
    searchableList,
    search
  },
  methods: {
    updateSearchInput: function (search) {
      this.search = search
    }
  },
  watch: {
    search: function () {
      console.log('calling ajax')
      const api = `http://10.180.23.222:8080/fruits/`
      this.axios.get(api).then(response => {
        this.fruits = response.data.Fruits
      }).catch(error => {
        console.log(error.data)
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
