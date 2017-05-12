<template>
  <md-layout md-flex-small="100" md-flex="80">
    <md-card id="input-card">
      <md-card-content>
        <form novalidate @submit.stop.prevent="submit">
          <md-input-container>
            <label>Title</label>
            <md-input ></md-input>
          </md-input-container>

          <md-input-container>
            <label>URL</label>
            <md-input></md-input>
          </md-input-container>

          <md-input-container>
            <label>Description</label>
            <md-textarea></md-textarea>
          </md-input-container>
        </form>
      </md-card-content>
    </md-card>
  </md-layout>
</template>

<script>
export default {
  methods: {
    submit: function () {
      const api = `http://localhost:3000/urls`
      this.axios.get(api).then(response => {
        this.urls = response.data
      }).catch(error => {
        console.log('AJAX FAILED: ' + error)
      })
    }
  }
}
</script>

<style scoped>
#input-card {
  width: 100%;
}
</style>
