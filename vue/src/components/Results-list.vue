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
  <md-list class="custom-list md-triple-line">
    <md-list-item v-for="item in items" :key="item.url">
      <div>
        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-accent">star</md-icon>
        </md-button>
      </div>
      <md-avatar>
        <img :src="getFavion(item.url)" alt="People">
      </md-avatar>
      <div class="md-list-text-container">
        <router-link :to="{ name: 'urlPage', params: { topicId: $route.params.topicId, urlId: item.id }}">
          <span>{{ item.title }}</span>
        </router-link>
        <a :href="item.url"><span>{{ item.url }}</span></a>
        <p>{{ item.description }}</p>
        <md-layout md-gutter>
          <md-chip class="md-accent tag" v-for="tag in item.tags" :key="tag">{{ tag }}</md-chip>
        </md-layout>
      </div>
      <md-divider class="md-inset"></md-divider>
    </md-list-item>
    <md-layout v-if="noResult">
      <router-link :to="{name: 'add', query: {topicId: topicId}}">
        <md-button class="md-raised md-accent">Add a URL</md-button>
      </router-link>
    </md-layout>
    <md-spinner md-indeterminate v-if="loading"></md-spinner>
  </md-list>
</template>

<script>
export default {
  name: 'Results-list',
  props: ['items'],
  methods: {
    getFavion (url) {
      return 'https://www.google.com/s2/favicons?domain=' + url
    }
  },
  computed: {
    topicId () {
      return this.$route.params.topicId
    },
    noResult () {
      return this.$store.state.resources.noResult
    },
    loading () {
      return this.$store.state.resources.loading
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-list {
  width: 100%;
}

.tag {
  width: 100px;
}

</style>
