<template>
  <md-layout md-flex-small="100" md-flex="80">
    <md-card id="input-card">
      <md-card-content>
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
      </md-card-content>
    </md-card>
  </md-layout>
</template>

<script>
export default {
  methods: {
    submit: function () {
      console.log('Changed!')
    }
  }
}
</script>

<style scoped>
#input-card {
  width: 100%;
}
</style>
