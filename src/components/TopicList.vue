<template>
  <div
    class="accordion"
    role="tablist"
  >
    <b-card
      v-for="(values, key) in disciplines"
      :key="key"
      no-body
      class="mb-1"
    >
      <b-card-header
        v-b-toggle:[key]
        header-tag="header"
        class="accordion-header p-1"
        role="tab"
      >
        {{ key }} {{ test }}
      </b-card-header>
      <b-collapse
        :id="key"
        visible
        accordion="my-accordion"
        role="tabpanel"
      >
        <b-card-body>
          <b-form-group>
            <b-form-checkbox
              v-for="value in values"
              :key="value"
              v-model="selected"
              :value="value"
              :name="value"
            >
              {{ value }}
            </b-form-checkbox>
          </b-form-group>
        </b-card-body>
      </b-collapse>
    </b-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import disciplines from '@/settings/disciplines';
import { defineComponent, Ref, ref } from '@vue/composition-api';

export default defineComponent({
    name: 'TopicList',
    props: {
        accordionName: {
            type: String,
            default: ''
        },
        test: {
            type: String,
            default: ''
        }
    },
    setup(props) {
        const selected: Ref<string[]> = ref([]);
        return {
            disciplines,
            selected
        };
    }
});
</script>

<style lang="scss">
.accordion-header {
    text-align: center;
    cursor: pointer;
}
</style>