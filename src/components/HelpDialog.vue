<template>
  <b-modal
    :id="modalId"
    title="Help"
    ok-only
  >
    <b-list-group>
      <b-list-group-item>Click play/space to start recording</b-list-group-item>
      <b-list-group-item>Click reverse and then play to view recording</b-list-group-item>
      <b-list-group-item>Hold CTRL and click left mouse button to pan</b-list-group-item>
      <b-list-group-item>Scroll to zoom</b-list-group-item>
      <b-list-group-item>Click on drawing to remove it</b-list-group-item>
    </b-list-group>
  </b-modal>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

defineComponent({
  name: 'HelpDialog',
  props: {
    modelId: {
      type: String,
      default: ''
    }
  }
});
</script>
