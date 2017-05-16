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
        <search v-on:searchInputChange="updateSearchInput"></search>
      </md-layout>
      <md-button class="md-icon-button">
        <md-icon>search</md-icon>
      </md-button>
      <router-link :to="{name: 'add'}">
        <md-button class="md-icon-button">
          <md-icon>add circle</md-icon>
        </md-button>
      </router-link>
    </md-toolbar>

    <side-nav ref="sideNav">
    </side-nav>

    <md-layout md-gutter="16">
      <md-layout md-gutter md-flex="20">
        <span></span>
      </md-layout>
      <md-layout md-gutter>
        <router-view :search="search"></router-view>
      </md-layout>
    </md-layout >
  </div>
</template>

<script>
import search from '@/components/Search.vue'
import sideNav from '@/containers/Side-nav.vue'

export default {
  name: 'Front-page',
  data () {
    return {
      search: ''
    }
  },
  components: {
    search,
    sideNav
  },
  methods: {
    updateSearchInput: function (search) {
      this.search = search
    },
    toggleSidenav () {
      this.$refs.sideNav.toggle()
    }
  }
}
</script>

<style scoped>
#main-search {
  margin-bottom: 20px;
}
</style>
