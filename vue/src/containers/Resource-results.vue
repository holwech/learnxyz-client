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
  <md-whiteframe id="resource-list">
    <md-tabs>
      <md-tab id="videos" md-label="Videos">
        <resultList :items="filteredList" :loading="loading"></resultList>
      </md-tab>

      <md-tab id="website" md-label="Websites">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      </md-tab>

      <md-tab id="pdfs" md-label="PDFs">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas.</p>
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
import resultList from '@/components/Results-list'
export default {
  name: 'Resource-results',
  components: {
    resultList
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
    }
  },
  created: function () {
    this.$store.dispatch('resources/loadUrls', this.$route.params.topicId)
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
