<template>
  <md-whiteframe id="filter-frame">
    <md-toolbar class="md-transparent">Filter</md-toolbar>
    <md-list>

      <md-list-item>
        <md-icon>add</md-icon>
        <span>Arts</span>

        <md-list-expand>
          <md-list>
            <md-list-item>
              <md-checkbox>Performing arts</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Visual arts</md-checkbox>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>

      <md-list-item>
        <md-icon>add</md-icon>
        <span>Humanities</span>
        <md-list-expand>
          <md-list>
            <md-list-item>
              <md-checkbox>Geography</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>History</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Languages and literature</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Philosophy</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Theology</md-checkbox>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>

      <md-list-item>
        <md-icon>add</md-icon>
        <span>Social Sciences</span>

        <md-list-expand>
          <md-list>
            <md-list-item>
              <md-checkbox>Economics</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Law</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Political science</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Psychology</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Sociology</md-checkbox>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>

      <md-list-item>
        <md-icon>add</md-icon>
        <span>Natural Sciences</span>

        <md-list-expand>
          <md-list>
            <md-list-item>
              <md-checkbox>Biology</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Chemistry</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Earth and spaces sciences</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Mathematics</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Physics</md-checkbox>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>

      <md-list-item>
        <md-icon>add</md-icon>
        <span>Applied sciences</span>

        <md-list-expand>
          <md-list>
            <md-list-item>
              <md-checkbox>Agriculture and agricultural sciences</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Computer science</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Engineering and technology</md-checkbox>
            </md-list-item>

            <md-list-item>
              <md-checkbox>Medicine and health sciences</md-checkbox>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>
  </md-whiteframe>
</template>


<style scoped>
#filter-frame {
  width: 100%;
}

</style>
