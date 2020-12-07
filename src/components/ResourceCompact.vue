<template>
  <b-card
    :key="entry.id"
    :title="entry.title"
    class="result-explore"
    @click="openExpandeView"
  >
    <b-card-text>
      hello
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
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from '@vue/composition-api';
import { SaveDialogFormTemplate } from '@/models/SaveDialogForm';
import Auth from '@/utils/Auth';
import Router from 'vue-router';
import Resource from '@/models/Resource';

export default defineComponent({
  name: 'ResourceCompact',
  props: {
    entry: {
      type: Object as PropType<Resource>,
      required: true
    }
  },
  setup(props) {
    const router = inject('router') as Router;
    const canDelete = (id: string) => {
      const auth = inject('auth') as Auth;
      return auth.idToken && auth.idToken.uniqueId === id;
    };

    const openExpandeView = () => {
      router.push({ name: 'ResourceView', params: { id: props.entry.id } });
    };

    return {
      canDelete,
      openExpandeView
    };
  }
});
</script>