<template>
  <b-spinner
    v-if="getEntryLoading"
    label="Loading..."
    size="lg"
    style="width: 3rem; height: 3rem;"
  />
  <div v-else>
    <b-card
      :title="entry.title"
      class="result-explore"
    >
      <b-card-text>
        {{ entry.description }}
        {{ entry.givenName }}
        {{ entry.createdAt }}
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
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref } from '@vue/composition-api';
import { SaveDialogFormTemplate } from '@/models/SaveDialogForm';
import Auth from '@/utils/Auth';
import { useDeleteEntry, useGetEntry } from '@/utils/Api';
import Router from 'vue-router';

export default defineComponent({
  name: 'ResourceView',
  setup() {
    let selectedDelete = ref('');
    let entry = ref({});
    const auth = inject('auth') as Auth;
    const router = inject('router') as Router;
    const { deleteEntry, deleteEntryLoading } = useDeleteEntry(auth, selectedDelete);
    let { getEntry, getEntryLoading } = useGetEntry(auth, router.currentRoute.params.id);

    onMounted(async () => {
      entry.value = await getEntry();
      console.log(entry.value);
      console.log(getEntryLoading);
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
    };
  }
});
</script>