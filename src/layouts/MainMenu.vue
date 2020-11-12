<template>
  <div
    id="main-wrapper"
    class="wave-top"
  >
    <Toolbar>
      <router-link :to="{ name: 'Explorer' }">
        <b-btn variant="outline-light">
          Explore
        </b-btn>
      </router-link>
      <LoginButton />
    </Toolbar>
    <b-container id="main-container">
      <b-row>
        <b-col
          align-self="center"
          class="splash-text"
        >
          <h1 class="text-center">
            education redefined.
          </h1>
          <p class="text-center">
            The new way to create educational content
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          Hello
        </b-col>
      </b-row>
      <b-row>
        <b-col
          align-self="center"
          class="splash-text"
        >
          <h1 class="text-center">
            always sharp
          </h1>
          <p class="text-center">
            Create content with infinite resolution using Scalable Vector Graphics
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          align-self="center"
          class="splash-text"
        >
          <h1 class="text-center">
            interactive
          </h1>
          <p class="text-center">
            Let your students learn by doing
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          align-self="center"
          class="splash-text"
        >
          <h1 class="text-center">
            incrementally
          </h1>
          <p class="text-center">
            Go back later, fix mistakes, and improve your content incrementally
          </p>
        </b-col>
      </b-row>
    </b-container>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    ><path
      fill="#007bff"
      fill-opacity="1"
      d="M0,224L60,234.7C120,245,240,267,360,256C480,245,600,203,720,208C840,213,960,267,1080,288C1200,309,1320,299,1380,293.3L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
    /></svg>
  </div>
</template>

<script lang="ts">
import LoginButton from '@/components/LoginButton.vue';
import Toolbar from '@/layouts/Toolbar.vue';
import { Component, defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainMenu',
  components: {
    LoginButton,
    Toolbar
  }
});
</script>

<style lang="scss">
.board-button {
  margin-left: 5px;
}
</style>