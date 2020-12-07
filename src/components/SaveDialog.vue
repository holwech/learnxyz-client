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
    <b-form-group
      label="URL"
      label-for="save-url"
    >
      <b-form-input
        id="save-url"
        v-model="form.url.value"
      />
    </b-form-group>
    <b-button
      :variant="disableSave ? 'dark' : 'primary'"
      class="float-right"
      :disabled="disableSave"
      style="margin-left:5px;"
      @click="saveDialogForm"
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
      v-if="saveDialogFormLoading"
      class="float-right"
      variant="primary"
      style="margin: 5px;"
    />
  </b-modal>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { SaveDialogForm, SaveDialogFormTemplate } from '@/models/SaveDialogForm';
import { RecordStore } from '@/store/RecordStore';
import { useSaveDialogForm } from '@/utils/Api';
import { defineComponent, inject, reactive, ref, watch } from '@vue/composition-api';
import Auth from '@/utils/Auth';


export default  defineComponent({
  name: 'SaveDialog',
  props: {
    modalId: {
      type: String,
      default: ''
    }
  },
  setup() {
    const auth = inject('auth') as Auth;
    let showModal = ref(false);
    let disableSave = ref(true);
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
      },
      url: {
        value: '',
        rules: [rules.required, rules.min]
      }
    });

    watch(
      () => form,
      (form, prevForm) => {
        for (const [key, formValue] of Object.entries(form)) {
          for (const rule of formValue.rules) {
            if (rule(formValue.value) !== true) {
              disableSave.value = true;
              return;
            }
          }
        }
        disableSave.value = false;
      },
      {
        deep: true
      }
    );

    let { saveDialogForm, saveDialogFormLoading } = useSaveDialogForm(auth, form);

    watch(
      () => saveDialogFormLoading.value,
      (curr, prev) => {
        if (!saveDialogFormLoading.value) {
          showModal.value = false;
        }
      }
    );

    return {
      saveDialogForm,
      saveDialogFormLoading,
      form,
      disableSave,
      showModal
    };
  }
});

// private getId(url: string) {
//   const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
//   const match = url.match(regExp);

//   return (match && match[2].length === 11)
//     ? match[2]
//     : null;
// }
</script>
