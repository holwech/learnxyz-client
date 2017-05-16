
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
    <md-layout md-flex="33" md-flex-medium="50" md-flex-xsmall="100" v-for="item in filteredList" :key="item">
      <md-card class="result-card">
        <md-card-header>
          <router-link :to="{ name: 'urlSearch', params: { topic: item.topic }}">
            <div class="md-title">{{ item.topic }}</div>
          </router-link>
          <div class="md-subhead">{{ item.discipline }}</div>
        </md-card-header>

        <md-card-actions>
          <md-button>Action</md-button>
          <md-button>Action</md-button>
        </md-card-actions>

        <md-card-content>
          {{ item.description }}
        </md-card-content>
      </md-card>
    </md-layout>
  </md-layout>
</template>

<script>
export default {
  name: 'Word-search-main',
  data () {
    return {
      topics: []
    }
  },
  props: ['search'],
  computed: {
    filteredList: function () {
      return this.topics.filter((topic) => {
        if (topic.topic.toLowerCase().indexOf(this.search.toLowerCase()) >= 0 ||
            topic.description.toLowerCase().indexOf(this.search.toLowerCase()) >= 0) {
          return topic
        }
      })
    }
  },
  watch: {
    search: function () {
      const api = `http://localhost:3000/topics`
      this.axios.get(api).then(response => {
        this.topics = response.data
      }).catch(error => {
        console.log('AJAX FAILED: ' + error)
      })
    }
  },
  created: function () {
    const api = `http://localhost:3000/topics`
    this.axios.get(api).then(response => {
      this.topics = response.data
    }).catch(error => {
      console.log('AJAX FAILED: ' + error)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.result-card {
  width: 100%;
  margin-bottom: 16px;
}
</style>
