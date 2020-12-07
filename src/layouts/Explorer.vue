<template>
  <div id="main-wrapper">
    <b-container id="main-container">
      <b-row
        align-h="center"
        style="margin-bottom: 50px;"
      >
        <b-col cols="4">
          <TreeView :data="disciplines" />
        </b-col>
        <b-col cols="6">
          <b-form-input
            v-model="searchInput"
            size="lg"
            placeholder="Search does not work yet"
            style="margin-bottom:50px;"
          />
          <b-row
            align-h="center"
          >
            <b-spinner
              v-if="getEntriesLoading"
              label="Loading..."
              size="lg"
              style="width: 3rem; height: 3rem;"
            />
            <div v-else-if="entries.length == 0">
              No resources found.
            </div>
            <ResourceCompact
              v-for="entry in entries"
              v-else
              :key="entry.id"
              :entry="entry"
            />
          </b-row>
        </b-col>
      </b-row>
      <b-modal
        id="delete-entry"
        v-model="showModal"
        title="Delete item"
        hide-footer
      >
        <p>Are you sure?</p>
        <b-button
          variant="danger"
          class="float-right"
          :disabled="deleteEntryLoading"
          style="margin-left:5px;"
          @click="deleteEntry"
        >
          Delete
        </b-button>
        <b-button
          class="float-right"
          :disabled="deleteEntryLoading"
          @click="showModal = false"
        >
          Cancel
        </b-button>
        <b-spinner
          v-if="deleteEntryLoading"
          class="float-right"
          variant="primary"
          style="margin: 5px;"
        />
      </b-modal>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import LoginButton from '@/components/LoginButton.vue';
import Toolbar from '@/layouts/Toolbar.vue';
import disciplineList from '@/settings/disciplines';
import TopicList from '@/components/TopicList.vue';
import { defineComponent, inject, onMounted, reactive, ref } from '@vue/composition-api';
import Auth from '@/utils/Auth';
import { useDeleteEntry, useGetEntries } from '@/utils/Api';
import TreeView from '@/components/TreeView.vue';
import SaveDialog from '@/components/SaveDialog.vue';
import HelpDialog from '@/components/HelpDialog.vue';
import ResourceCompact from '@/components/ResourceCompact.vue';
import Router from 'vue-router';

export default defineComponent({
  components: {
    HelpDialog,
    LoginButton,
    Toolbar,
    TopicList,
    TreeView,
    SaveDialog,
    ResourceCompact
  },
  setup() {
    let disciplines = ref(disciplineList);
    let searchInput = ref('');
    let selectedDelete = ref('');
    let showModal = ref(false);
    let entries = ref([]);
    const auth = inject('auth') as Auth;
    const router = inject('router') as Router;
    const { deleteEntry, deleteEntryLoading } = useDeleteEntry(auth, selectedDelete);
    let { getEntries, getEntriesLoading } = useGetEntries(auth);

    const openDeleteModal = (entryId: string) => {
      const selectedDelete = ref(entryId);
    };

    onMounted(async () => {
      entries.value = await getEntries();
      console.log(entries.value);
    });

    return {
      disciplines,
      openDeleteModal,
      searchInput,
      onMounted,
      entries,
      getEntriesLoading,
      deleteEntry,
      deleteEntryLoading,
      showModal
    };
  }
});
</script>


<style lang="scss">
.result-explore {
  margin-bottom: 20px;
}

.result-explore-main {
  text-align: center;
  .result-explore {
    text-align: left;
  }
}
</style>