<template>
  <b-card
    :key="entry.id"
    :title="entry.title"
    :sub-title="dateToDateString(entry.createdAt)"
    class="compact-view"
    @click="openExpandeView"
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
</template>

<script lang="ts">
import { defineComponent, inject, PropType } from '@vue/composition-api';
import { SaveDialogFormTemplate } from '@/models/SaveDialogForm';
import Auth from '@/utils/Auth';
import Router from 'vue-router';
import Resource from '@/models/Resource';
import { dateToDateString } from '@/utils/formatters';

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
      openExpandeView,
      dateToDateString
    };
  }
});
</script>

<style lang="scss">
.compact-view {
  width: 100%;
  cursor: pointer;
}
</style>>
