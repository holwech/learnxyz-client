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
      <md-avatar>
        <img :src="getFavion(item.url)" alt="People">
      </md-avatar>
      <div class="md-list-text-container">
        <router-link :to="{ name: 'urlPage', params: { topicId: $route.params.topicId, urlId: item.id }}">
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
</template>

<script>
export default {
  name: 'Url-search-results',
  data () {
    return {
      urls: []
    }
  },
  props: ['items', 'loading'],
  methods: {
    getFavion (url) {
      return 'https://www.google.com/s2/favicons?domain=' + url
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.custom-list {
  width: 100%;
}

</style>
