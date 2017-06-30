
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
    <md-layout v-if="noResult">
      <router-link :to="{name: 'add'}">
        <md-button class="md-raised md-accent">Add a topic</md-button>
      </router-link>
    </md-layout>
    <md-layout md-flex="33" md-flex-medium="50" md-flex-xsmall="100" v-for="item in filteredList" :key="item">
      <md-card class="result-card">
        <md-card-header>
          <router-link :to="{ name: 'resourceResults', params: { topicId: item.id }}">
            <div class="md-title">{{ item.topic }}</div>
          </router-link>
          <div class="md-subhead">{{ item.discipline }}</div>
        </md-card-header>

        <md-card-content>
          {{ item.description }}
        </md-card-content>
      </md-card>
    </md-layout>
    <md-spinner md-indeterminate v-if="loading"></md-spinner>
  </md-layout>
</template>

<script>

export default {
  name: 'Word-search-main',
  computed: {
    noResult () {
      return this.$store.state.topics.noResult
    },
    loading () {
      return this.$store.state.topics.loading
    },
    filteredList () {
      let search = this.$store.state.search
      return this.$store.state.topics.topics.filter(function (topic) {
        if (topic.topic.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
            topic.description.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
          return topic
        }
      })
    }
  },
  created: function () {
    this.$store.dispatch('topics/loadTopics')
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
