<template>
  <md-layout md-flex-small="100" md-flex="80">
    <md-whiteframe id="menu">
      <md-tabs v-if="!success && !loading">
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
          <form novalidate @submit.stop.prevent="submitTopic">
            <md-input-container :class="{'md-input-invalid': errors.has('topic') }">
              <label>Topic</label>
              <md-input
                v-model="topicData.topic"
                v-validate="'required'"
                data-vv-delay="1000" data-vv-name="topic"
                :has-error="errors.has('topic')"
                type="text">
              </md-input>
              <span class="md-error" v-show="errors.has('topic')"> {{ errors.first('topic') }}
              </span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('discipline') }">
              <label>Discipline</label>
              <md-input
                v-model="topicData.discipline"
                v-validate="'required'"
                data-vv-delay="1000"
                data-vv-name="discipline"
                :has-error="errors.has('discipline')"
                type="text">
              </md-input>
              <span class="md-error" v-show="errors.has('discipline')"> {{ errors.first('discipline') }}
              </span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('subDiscipline') }">
              <label>Field</label>
              <md-input
                v-model="topicData.subDiscipline"
                v-validate="'required'"
                data-vv-delay="1000"
                data-vv-name="subDiscipline"
                :has-error="errors.has('subDiscipline')"
                type="text">
              </md-input>
              <span class="md-error" v-show="errors.has('subDiscipline')">{{ errors.first('subDiscipline') }}</span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('field') }">
              <label>Field</label>
              <md-textarea
                v-model="topicData.field"
                v-validate="'required'"
                data-vv-delay="1000"
                data-vv-name="field"
                :has-error="errors.has('field')"
                type="text">
              </md-textarea>
              <span class="md-error" v-show="errors.has('field')">{{ errors.first('field') }}</span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('description') }">
              <label>Description</label>
              <md-textarea
                v-validate="'required'"
                data-vv-delay="1000"
                data-vv-name="description"
                :has-error="errors.has('description')"
                type="text">
              </md-textarea>
              <span class="md-error" v-show="errors.has('description')">{{ errors.first('description') }}</span>
            </md-input-container>

            <md-button class="md-raised md-primary" type="submit">Send</md-button>
          </form>
        </md-tab>
      </md-tabs>
      <md-layout>
        <md-icon class="md-size-4x" v-if="success">done</md-icon>
        <h2>
          {{ responseMessage }}
        </h2>
        <md-spinner md-indeterminate v-if="loading"></md-spinner>
      </md-layout>
    </md-whiteframe>
  </md-layout>
</template>

<script>
import URI from 'urijs'

export default {
  data () {
    return {
      success: false,
      loading: false,
      responseMessage: '',
      topicData: {
        topic: '',
        discipline: '',
        subDiscipline: '',
        field: '',
        description: ''
      }
    }
  },
  methods: {
    submitTopic (event) {
      this.loading = true
      let uri = new URI('http://localhost:8091/topics/add')
      uri.search({...this.topicData})
      const api = uri.toString()
      console.log('Api is ' + api)
      this.axios.get(api).then(response => {
        console.log(response.data)
        if (response.data.Response === 'Success') {
          this.success = true
          this.responseMessage = response.data.Description
        }
        this.loading = false
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

#menu {
  width: 100%;
}
</style>
