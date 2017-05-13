<!--
  Shows a list of items and hides items that do not match the search input

  PROPS: 
    search: string with a given search input
  EMITS:
    NONE
    
  <ul>
    <li v-for="item in filteredList">{{ item }}</li>
  </ul>
-->

<template>
  <md-layout md-gutter="16">
    <md-layout class="result-card" md-flex="33" md-flex-medium="50" md-flex-xsmall="100" v-for="item in filteredList" :key="item">
      <md-card class="result-card">
        <md-card-header>
          <router-link :to="{ name: 'urlPage', params: { url: item.url }}">
            <div class="md-title">{{ item.title }}</div>
          </router-link>
          <div class="md-subhead">{{ item.url }}</div>
        </md-card-header>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>

        <md-card-content>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate pariatur in deleniti minus sint. Excepturi.
        </md-card-content>
      </md-card>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'Front-page',
  data () {
    return {
      urls: []
    }
  },
  props: ['search'],
  computed: {
    filteredList: function () {
      return this.urls.filter((url) => {
        if (url.title.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
            url.url.toLowerCase().indexOf(this.search.toLowerCase()) >= 0) {
          return url
        }
      })
    }
  },
  watch: {
    search: function () {
      const api = `http://localhost:3000/urls`
      this.axios.get(api).then(response => {
        this.urls = response.data
      }).catch(error => {
        console.log('AJAX FAILED: ' + error)
      })
    }
  },
  created: function () {
    const api = `http://localhost:3000/urls`
    this.axios.get(api).then(response => {
      this.urls = response.data
    }).catch(error => {
      console.log('AJAX FAILED: ' + error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
