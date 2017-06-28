<!--
  Shows a list of items and hides items that do not match the search input

  PROPS: 
    search: string with a given search input
  EMITS:
    NONE
-->

<template>
  <div class="main">
    <md-toolbar id="main-search">
      <router-link :to="{name: 'main'}">
        <md-button class="md-icon-button">
          <md-icon>favorite</md-icon>
        </md-button>
      </router-link>
      <md-button class="md-icon-button" @click.native="toggleSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <md-layout md-flex="40">
        <search></search>
      </md-layout>
      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
      <router-link :to="{name: 'add', query: {topicId: topicId}}">
        <md-button class="md-icon-button">
          <md-icon>add circle</md-icon>
        </md-button>
      </router-link>
    </md-toolbar>

    <side-nav ref="sideNav">
    </side-nav>

    <md-layout md-gutter="16">
      <md-layout md-gutter md-flex="20">
        <filter-menu></filter-menu>
      </md-layout>
      <md-layout md-gutter id="main-content">
        <router-view @loading="updateLoadingState"></router-view>
      </md-layout>
    </md-layout >
  </div>
</template>

<script>
import search from '@/components/Search.vue'
import sideNav from '@/containers/Side-nav.vue'
import filterMenu from '@/containers/Filter-menu.vue'

export default {
  name: 'Front-page',
  data () {
    return {
      search: '',
      loading: true,
      ws: null
    }
  },
  components: {
    search,
    sideNav,
    filterMenu
  },
  methods: {
    toggleSidenav () {
      this.$refs.sideNav.toggle()
    },
    updateLoadingState (loading) {
      this.loading = loading
    }
  },
  computed: {
    topicId () {
      return this.$route.params.topicId
    }
  }
}
</script>

<style scoped>
#main-search {
  margin-bottom: 20px;
}

#main-content {
  padding-right: 16px;
}

.wrapper {
  width: 100%;
}
</style>
