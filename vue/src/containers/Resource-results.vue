<template>
  <md-whiteframe id="resource-list">
    <md-tabs v-on:change="tabChange">
      <md-tab id="videos" md-label="Videos">
        <resultList :items="filteredList" :loading="loading"></resultList>
      </md-tab>

      <md-tab id="website" md-label="Websites">
        <resultList :items="filteredList" :loading="loading"></resultList>
      </md-tab>

      <md-tab id="pdfs" md-label="PDFs">
        <resultList :items="filteredList" :loading="loading"></resultList>
      </md-tab>

      <md-tab id="books" md-label="Books">
        <resultList :items="filteredList" :loading="loading"></resultList>
      </md-tab>

      <md-tab id="pictures" md-label="Pictures" md-tooltip="This is the pictures tab!">
        <resultList :items="filteredList" :loading="loading"></resultList>
      </md-tab>
    </md-tabs>
  </md-whiteframe>
</template>

<script>
import resultList from '@/components/Results-list'
export default {
  name: 'Resource-results',
  components: {
    resultList
  },
  data () {
    return {
      currentTab: 0
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
    tabChange (tab) {
      if (tab !== this.currentTab) {
        this.currentTab = tab
        let tabNames = ['video', 'website', 'pdf', 'books', 'pictures']
        this.$store.dispatch('resources/loadResources', {
          topicId: this.$route.params.topicId,
          tab: tabNames[tab]
        })
      }
    }
  },
  created: function () {
    this.$store.dispatch('resources/loadResources', {
      topicId: this.$route.params.topicId
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
