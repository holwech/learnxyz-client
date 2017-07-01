<template>
  <md-whiteframe id="resource-list">
    <md-tabs v-on:change="tabChange">
      <md-tab v-for="label in labels" :key="label" :md-label="label">
        <resultList :items="filteredList" :loading="loading"></resultList>
      </md-tab>

    </md-tabs>
  </md-whiteframe>
</template>

<script>
import resultList from '@/components/Results-list'
import labels from '../static/resources-tabs'
export default {
  name: 'Resource-results',
  components: {
    resultList
  },
  data () {
    return {
      currentTab: 0,
      labels: labels
    }
  },
  computed: {
    noResult () {
      return this.$store.state.resources.noResult
    },
    loading () {
      return this.$store.state.resources.loading
    },
    filteredList () {
      let search = this.$store.getters.search
      return this.$store.state.resources.resources.filter(function (url) {
        if (url.title.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
            url.url.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
          return url
        }
      })
    }
  },
  methods: {
    getTopicId () {
      return this.$route.params.topicId
    },
    tabChange (selectedTab) {
      if (selectedTab !== this.currentTab) {
        this.currentTab = selectedTab
        this.$store.dispatch('resources/clearData')
        this.$store.dispatch('resources/loadResources', {
          topicId: this.$route.params.topicId,
          type: labels[selectedTab]
        })
      }
    }
  },
  created: function () {
    this.$store.dispatch('resources/loadResources', {
      topicId: this.$route.params.topicId,
      type: this.labels[this.currentTab]
    })
  },
  destroyed () {
    this.$store.dispatch('resources/clearData')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-list {
  width: 100%;
}

#resource-list {
  width: 100%;
}
</style>
