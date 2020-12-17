<template>
  <div>
    <Toolbar>
      <b-button
        v-b-modal.modal-save-dialog
        variant="light"
        class="editor-button"
      >
        <b-icon
          icon="plus-circle"
          variant="dark"
        />
      </b-button>
      <SaveDialog modal-id="modal-save-dialog" />
      <LoginButton />
    </Toolbar>
    <HelpDialog />
    <b-container id="main-container">
      <b-row
        align-h="center"
        style="margin-bottom: 50px;"
      >
        <b-col cols="8">
          <b-spinner
            v-if="getEntryLoading"
            label="Loading..."
            size="lg"
            style="width: 3rem; height: 3rem;"
          />
          <b-card
            :title="entry.title"
            :sub-title="dateToDateString(entry.createdAt)"
            class="result-explore"
            v-else
          >
            <b-card-text>
              {{ entry.description }}
              {{ entry.givenName }}
            </b-card-text>

            <b-button
              v-if="canDelete(entry.createdBy)"
              v-b-modal.delete-entry
              variant="outline-dark"
              style="margin-left: 5px"
              @click="openDeleteModal(entry.id)"
            >
              Delete
            </b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from '@vue/composition-api';
import { SaveDialogFormTemplate } from '@/models/SaveDialogForm';
import Auth from '@/utils/Auth';
import { useDeleteEntry, useGetEntry } from '@/utils/Api';
import Router from 'vue-router';
import LoginButton from '@/components/LoginButton.vue';
import Toolbar from '@/layouts/Toolbar.vue';
import SaveDialog from '@/components/SaveDialog.vue';
import HelpDialog from '@/components/HelpDialog.vue';
import { dateToDateString } from '@/utils/formatters';

export default defineComponent({
  name: 'ResourceView',
  components: {
    LoginButton,
    Toolbar,
    SaveDialog,
    HelpDialog
  },
  setup() {
    let selectedDelete = ref('');
    let entry = ref({});
    let date = ref();
    const auth = inject('auth') as Auth;
    const router = inject('router') as Router;
    const { deleteEntry, deleteEntryLoading } = useDeleteEntry(auth, selectedDelete);
    let { getEntry, getEntryLoading } = useGetEntry(auth, router.currentRoute.params.id);

    onMounted(async () => {
      entry.value = await getEntry();
    });

    const canDelete = (id: string) => {
      const auth = inject('auth') as Auth;
      return auth.idToken && auth.idToken.uniqueId === id;
    };

    return {
      onMounted,
      entry,
      getEntryLoading,
      deleteEntry,
      deleteEntryLoading,
      canDelete,
      dateToDateString
    };
  }
});
</script>