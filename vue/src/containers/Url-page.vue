<template>
  <md-card id='main-card'>
    <md-card-media v-if="isYoutube()">
      <youtube :video-id="getYoutubeID()" :player-width="1280" player-height="750"></youtube>
    </md-card-media>
    <md-card-header>
      <a :href="item.url"><div class="md-title">{{ item.title }}</div></a>
      <div class="md-subhead">{{ item.url }}</div>
    </md-card-header>

    <md-card-content>
      {{ item.description }}
    </md-card-content>
  </md-card>
</template>

<script>
import URI from 'urijs'
export default {
  data () {
    return {
      item: {}
    }
  },
  methods: {
    isYoutube () {
      if (this.item.url) {
        let uri = new URI(this.item.url)
        console.log(uri.domain())
        if (uri.domain() === 'youtube.com') {
          console.log('IS YOUTUBE')
          return true
        } else {
          return false
        }
      }
    },
    getYoutubeID () {
      let uri = new URI(this.item.url)
      return uri.search(true).v
    },
    ready (player) {
      this.player = player
    },
    playerWidth () {
      if (window.innerWidth > 1500) {
        return 1280
      } else if (window.innerWidth > 1280) {
        return 1000
      }
    }
  },
  beforeCreate () {
    const api = `http://localhost:3000/urls?id=${this.$route.params.urlId}`
    this.axios.get(api).then(response => {
      this.item = response.data[0]
    }).catch(error => {
      console.log('AJAX FAILED: ' + error)
    })
  }
}
</script>

<style scoped>
#main-card {
  width: 1000px;
}

</style>
