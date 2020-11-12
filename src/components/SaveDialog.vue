<template>
  <b-modal
    :id="modalId"
    v-model="showModal"
    title="Save"
    hide-footer
  >
    <b-form-group
      label="Title"
      label-for="save-title"
    >
      <b-form-input
        id="save-title"
        v-model="form.title.value"
      />
    </b-form-group>

    <b-form-group
      label="Description"
      label-for="save-description"
    >
      <b-form-textarea
        id="save-description"
        v-model="form.description.value"
        placeholder="Enter a description..."
        rows="3"
        max-rows="6"
      />
    </b-form-group>
    <b-button
      :variant="disableSave ? 'dark' : 'primary'"
      class="float-right"
      :disabled="disableSave"
      style="margin-left:5px;"
      @click="save"
    >
      Save
    </b-button>
    <b-button
      class="float-right"
      @click="showModal = false"
    >
      Cancel
    </b-button>
    <b-spinner
      v-if="recordStore.loading"
      class="float-right"
      variant="primary"
      style="margin: 5px;"
    />
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { SaveDialogForm } from '@/models/SaveDialogForm';
import { RecordStore } from '@/store/RecordStore';
import { defineComponent, inject, reactive, watch } from 'vue';
import Auth from '@/utils/Auth';

interface SaveDialogFormElement {
  value: string;
  rules: Array<(v: string) => any>;
}

interface SaveDialogFormTemplate {
  title: SaveDialogFormElement;
  description: SaveDialogFormElement;
}

export default defineComponent({
  props: {
    modalId: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    let showModal = false;
    let recordStore = RecordStore;
    let disableSave = true;
    const auth = inject('auth') as Auth;
    let rules = {
      required: (v: string) => !!v || 'Required.',
      min: (v: string) => v.length >= 4 || 'Min 4 characters',
      emailMatch: () => 'The email and password you entered do not match'
    };
    let form: SaveDialogFormTemplate = reactive({
      title: {
        value: '',
        rules: [rules.required, rules.min]
      },
      description: {
        value: '',
        rules: [rules.required, rules.min]
      }
    });

    watch(form, (val, oldVal) => {
      for (const [key, formValue] of Object.entries(val)) {
        for (const rule of formValue.rules) {
          if (!rule(formValue.value)) {
            disableSave = true;
            return;
          }
        }
      }
      disableSave = false;
    }, { deep: true });

    watch(recordStore.loading, (val, oldVal) => {
      if (!recordStore.loading) {
        showModal = false;
      }
    }, { deep: true });

    const save = () => {
      RecordStore.Save({
        auth: auth,
        formData: {
          title: form.title.value,
          description: form.description.value
        }
      });
    };

    return {
      showModal,
      recordStore,
      disableSave,
      save,
      form
    };
  },
  methods: {
    close(): void {
      this.$emit('close');
    },
  }
});
</script>
