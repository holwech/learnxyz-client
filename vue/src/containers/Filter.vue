<template>
  <md-whiteframe id="filter-frame">
    <md-toolbar class="md-transparent">Filter</md-toolbar>
    <md-list>

      <md-list-item v-for="(discipline, key) in disciplines" :key="key">
        <md-icon>add</md-icon>
        <span>{{ key }}</span>
        <md-list-expand>
          <md-list>
            <md-list-item v-for="subDiscipline in discipline" :key="subDiscipline">
              <md-checkbox>{{ subDiscipline }}</md-checkbox>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </md-whiteframe>
</template>

<script>
import disciplines from '../static/disciplines'

export default {
  data () {
    return {
      disciplines: disciplines
    }
  }
}

</script


<style scoped>
#filter-frame {
  width: 100%;
}

</style>
