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
  <md-whiteframe id="url-list">
    <md-tabs>
      <md-tab id="movies" md-label="Movies">
        <urlSearchResults :items="filteredList" :loading="loading"></urlSearchResults>
      </md-tab>

      <md-tab id="music" md-label="Music">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>

      <md-tab id="books" md-label="Books">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>

      <md-tab id="pictures" md-label="Pictures" md-tooltip="This is the pictures tab!">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
      </md-tab>
    </md-tabs>
  </md-whiteframe>
</template>

<script>
import urlSearchResults from '@/components/Url-search-results.vue'
export default {
  name: 'Url-search-main',
  components: {
    urlSearchResults
  },
  computed: {
    noResult () {
      return this.$store.state.topics.noResult
    },
    loading () {
      return this.$store.state.topics.loading
    },
    filteredList: function () {
      let search = this.$store.getters.search
      return this.$store.state.urls.urls.filter(function (url) {
        if (url.title.toLowerCase().indexOf(search.toLowerCase()) >= 0 ||
            url.url.toLowerCase().indexOf(search.toLowerCase()) >= 0) {
          return url
        }
      })
    }
  },
  methods: {
    getTopic () {
      return this.$route.params.topic
    }
  },
  created: function () {
    this.$store.dispatch('urls/loadUrls')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-list {
  width: 100%;
}

#url-list {
  width: 100%;
}
</style>
