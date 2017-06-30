<template>
  <md-layout md-flex-small="100" md-flex="80">
    <md-whiteframe id="menu">
      <md-tabs v-if="!success && !loading">
        <md-tab id="resource" md-label="Add Resource" v-if="$route.query.topicId">
          <form novalidate @submit.stop.prevent="submitResource">
            <md-input-container :class="{'md-input-invalid': errors.has('title') }">
              <label>Title</label>
              <md-input
                v-model="resourceData.title"
                v-validate="'required'"
                data-vv-delay="1000" data-vv-name="title"
                :has-error="errors.has('title')"
                type="text">
              </md-input>
              <span class="md-error" v-show="errors.has('title')"> {{ errors.first('title') }}
              </span>
            </md-input-container>
            
            <md-input-container :class="{'md-input-invalid': errors.has('url') }">
              <label>URL</label>
              <md-input
                v-model="resourceData.url"
                v-validate="'required'"
                data-vv-delay="1000" data-vv-name="url"
                :has-error="errors.has('url')"
                type="text">
              </md-input>
              <span class="md-error" v-show="errors.has('url')"> {{ errors.first('url') }}
              </span>
            </md-input-container>
            
            <md-input-container :class="{'md-input-invalid': errors.has('description') }">
              <label>Description</label>
              <md-textarea
                v-model="resourceData.description"
                v-validate="'required'"
                data-vv-delay="1000" data-vv-name="description"
                :has-error="errors.has('description')"
                type="text">
              </md-textarea>
              <span class="md-error" v-show="errors.has('description')"> {{ errors.first('description') }}
              </span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('tags') }">
              <label>Tags (split with commas)</label>
              <md-textarea
                v-model="tags"
                v-validate="'required'"
                data-vv-delay="1000" data-vv-name="tags"
                :has-error="errors.has('tags')"
                type="text">
              </md-textarea>
              <span class="md-error" v-show="errors.has('tags')"> {{ errors.first('tags') }}
              </span>
            </md-input-container>

            <md-input-container>
              <label>Type</label>
              <md-select id="type" v-model="resourceData.type">
                <md-option value="Video">Video</md-option>
                <md-option value="Website">Website</md-option>
                <md-option value="PDF">PDF</md-option>
                <md-option value="Books">Books</md-option>
                <md-option value="Image">Image</md-option>
              </md-select>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('relatedTopicId') }">
              <label>Topic ID</label>
              <md-input
                v-model="resourceData.relatedTopicId"
                v-validate="'required'"
                data-vv-delay="1000" data-vv-name="relatedTopicId"
                :has-error="errors.has('relatedTopicId')"
                disabled
                type="text">
              </md-input>
              <span class="md-error" v-show="errors.has('relatedTopicId')"> {{ errors.first('relatedTopicId') }}
              </span>
            </md-input-container>
            <md-button class="md-raised md-primary" type="submit">Send</md-button>
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
              <md-input
                v-model="topicData.field"
                v-validate="'required'"
                data-vv-delay="1000"
                data-vv-name="field"
                :has-error="errors.has('field')"
                type="text">
              </md-input>
              <span class="md-error" v-show="errors.has('field')">{{ errors.first('field') }}</span>
            </md-input-container>

            <md-input-container :class="{'md-input-invalid': errors.has('description') }">
              <label>Description</label>
              <span class="md-error" v-show="errors.has('description')">{{ errors.first('description') }}</span>
              <md-textarea
                v-model="topicData.description"
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
      tags: '',
      topicData: {
        topic: '',
        discipline: '',
        subDiscipline: '',
        field: '',
        description: ''
      },
      resourceData: {
        title: '',
        url: '',
        description: '',
        type: '',
        tags: [],
        relatedTopicId: ''
      }
    }
  },
  methods: {
    submitResource (event) {
      this.loading = true
      let uri = new URI('http://localhost:8091/resources/add')
      this.resourceData.tags = this.tags.split(',')
      uri.search({...this.resourceData})
      const api = uri.toString()
      console.log('Api is ' + api)
      this.axios.get(api).then(response => {
        if (response.data.Response === 'Success') {
          this.success = true
          this.responseMessage = response.data.Description
        }
        this.loading = false
      }).catch(error => {
        console.log('AJAX FAILED: ' + error)
      })
    },
    submitTopic (event) {
      this.loading = true
      let uri = new URI('http://localhost:8091/topics/add')
      uri.search({...this.topicData})
      const api = uri.toString()
      console.log('Api is ' + api)
      this.axios.post(api).then(response => {
        console.log(response.data)
        if (response.data.Response === 'Success') {
          this.success = true
          this.responseMessage = response.data.Description
        }
        this.loading = false
      }).catch(error => {
        console.log('AJAX FAILED: ' + error)
      })
    },
    tabChange (event) {
      console.log(event)
    }
  },
  created () {
    this.resourceData.relatedTopicId = this.$route.query.topicId
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
