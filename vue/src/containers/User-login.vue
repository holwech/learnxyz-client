<template>
  <md-layout md-flex-small="100" md-flex="80">
    <md-whiteframe id="menu">
      <md-tabs v-if="!success && !loading">
        <md-tab id="create-user" md-label="Create user">
          <form novalidate @submit.stop.prevent="submitCreateUser">
            <md-input-container :class="{'md-input-invalid': errors.has('username') }">
              <label>Username</label>
              <md-input
                v-model="userdata.username"
                v-validate="'required'"
                data-vv-delay="1000" data-vv-name="username"
                :has-error="errors.has('username')"
                type="text">
              </md-input>
              <span class="md-error" v-show="errors.has('username')"> {{ errors.first('username') }}
              </span>
            </md-input-container>
            
            <md-input-container :class="{'md-input-invalid': errors.has('email') }">
              <label>Email</label>
              <md-input
                v-model="userdata.email"
                v-validate="'required'"
                data-vv-delay="1000" data-vv-name="email"
                :has-error="errors.has('email')"
                type="text">
              </md-input>
              <span class="md-error" v-show="errors.has('email')"> {{ errors.first('email') }}
              </span>
            </md-input-container>
            
            <md-input-container :class="{'md-input-invalid': errors.has('password') }">
              <label>Password</label>
              <md-input
                v-model="userdata.password"
                v-validate="'required'"
                data-vv-delay="1000" data-vv-name="password"
                :has-error="errors.has('password')"
                type="password" >
              </md-input>
              <span class="md-error" v-show="errors.has('password')"> {{ errors.first('password') }}
              </span>
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
import disciplines from '../static/disciplines'
import labels from '../static/resources-tabs'

export default {
  data () {
    return {
      disciplines: disciplines,
      labels: labels,
      success: false,
      loading: false,
      responseMessage: '',
      tags: '',
      userdata: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    submitCreateUser (event) {
      this.loading = true
      const api = `http://localhost:8091/topics/get`
      console.log('Api is ' + api)
      this.axios.post(api, {
        params: {
          ...this.userdata
        }
      }).then(response => {
        this.userdata = {}
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
