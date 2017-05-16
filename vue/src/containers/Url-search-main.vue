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
    <md-list class="custom-list md-triple-line">
      <md-subheader class="md-inset">Today</md-subheader>
      <md-list-item v-for="item in filteredList" :key="item.url">
        <md-avatar>
          <img :src="getFavion(item.url)" alt="People">
        </md-avatar>
        <div class="md-list-text-container">
          <router-link :to="{ name: 'urlPage', params: { topic: item.topic, url: item.url }}">
            <span>{{ item.title }}</span>
          </router-link>
          <a :href="item.url"><span>{{ item.url }}</span></a>
          <p>{{ item.description }}</p>
        </div>
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>
        <md-divider class="md-inset"></md-divider>
      </md-list-item>
    </md-list>
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
  methods: {
    getFavion (url) {
      return 'https://www.google.com/s2/favicons?domain=' + url
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
.custom-list {
  width: 100%;
}
</style>
