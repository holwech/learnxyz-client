<template>
  <md-layout md-flex-small="100" md-flex="80">
    <md-whiteframe id="menu">
      <md-tabs>
        <md-tab id="url" md-label="Add URL">
          <form novalidate @submit.stop.prevent="submit">
            <md-input-container :class="{'md-input-invalid': errors.has('url') }">
              <label>Url</label>
              <md-input v-validate="'required|url'" data-vv-delay="1000" data-vv-name="url" :has-error="errors.has('url')" type="text"></md-input>
              <span class="md-error" v-show="errors.has('url')">{{ errors.first('url') }}</span>
            </md-input-container>
            <md-input-container :class="{'md-input-invalid': errors.has('title') }">
              <label>Title</label>
              <md-input v-validate="'required'" data-vv-delay="1000" data-vv-name="title" :has-error="errors.has('title')" type="text"></md-input>
              <span class="md-error" v-show="errors.has('title')">{{ errors.first('description') }}</span>
            </md-input-container>
            <md-input-container :class="{'md-input-invalid': errors.has('description') }">
              <label>Description</label>
              <md-textarea v-validate="'required'" data-vv-delay="1000" data-vv-name="description" :has-error="errors.has('description')" type="text"></md-textarea>
              <span class="md-error" v-show="errors.has('description')">{{ errors.first('description') }}</span>
            </md-input-container>
          </form>
        </md-tab>

        <md-tab id="topic" md-label="Add topic">
          <form novalidate @submit.stop.prevent="submit">
            <md-input-container :class="{'md-input-invalid': errors.has('title') }">
              <label>Title</label>
              <md-input v-validate="'required'" data-vv-delay="1000" data-vv-name="title" :has-error="errors.has('title')" type="text"></md-input>
              <span class="md-error" v-show="errors.has('title')">{{ errors.first('description') }}</span>
            </md-input-container>
            <md-input-container :class="{'md-input-invalid': errors.has('description') }">
              <label>Description</label>
              <md-textarea v-validate="'required'" data-vv-delay="1000" data-vv-name="description" :has-error="errors.has('description')" type="text"></md-textarea>
              <span class="md-error" v-show="errors.has('description')">{{ errors.first('description') }}</span>
            </md-input-container>
          </form>
        </md-tab>
      </md-tabs>
    </md-whiteframe>
  </md-layout>
</template>

<script>
export default {
  methods: {
    submit: function () {
      console.log('Changed!')
    }
  },
  created: () => {
    this.ws = new WebSocket('ws://localhost:3000/ws')
    this.ws.onmessage = function (event) {
      console.log(event.data)
    }
  }
}
</script>

<style scoped>
#input-card {
  width: 100%;
}

#menu {
  width: 100%;
}
</style>
