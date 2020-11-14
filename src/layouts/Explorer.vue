<template>
  <div id="main-wrapper">
    <Toolbar>
      <LoginButton />
    </Toolbar>
    <b-container id="main-container">
      <b-row align-h="center" style="margin-bottom: 50px;">
        <b-col cols="4">
          <TopicList></TopicList>
        </b-col>
        <b-col cols="6">
          <b-form-input v-model="searchInput" size="lg" placeholder="Search does not work yet" />
        </b-col>
      </b-row>
      <b-row align-h="center" class="result-explore-main">
        <b-col cols="8">
          <b-spinner
            v-if="getEntriesLoading"
            label="Loading..."
            size="lg"
            style="width: 3rem; height: 3rem;"
          />
          <b-card
            v-for="entry in entries"
            v-else
            :key="entry.id"
            :title="entry.title"
            class="result-explore"
          >
            <b-card-text>
              {{ entry.description }}
              {{ entry.createdBy }}
            </b-card-text>

            <b-button
              v-if="canDelete(entry.createdBy)"
              v-b-modal.delete-entry
              variant="outline-dark"
              style="margin-left: 5px"
              @click="openDeleteModal(entry.id)"
            >Delete</b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-modal id="delete-entry" v-model="showModal" title="Delete item" hide-footer>
        <p>Are you sure?</p>
        <b-button
          variant="danger"
          class="float-right"
          :disabled="deleteEntryLoading"
          style="margin-left:5px;"
          @click="deleteEntry"
        >Delete</b-button>
        <b-button class="float-right" :disabled="deleteEntryLoading" @click="showModal = false">Cancel</b-button>
        <b-spinner v-if="deleteEntryLoading" class="float-right" variant="primary" style="margin: 5px;" />
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
import { defineComponent, inject, onMounted, ref } from '@vue/composition-api';
import Auth from '@/utils/Auth';
import { useDeleteEntry, useGetEntries } from '@/utils/Api';

export default defineComponent({
  components: {
    LoginButton,
    Toolbar,
    TopicList
  },
  setup() {
    let disciplines = ref(disciplineList);
    let searchInput = ref('');
    let selectedDelete = ref('');
    let entries = ref();
    let showModal = ref(false);
    const auth = inject('auth') as Auth;
    const { deleteEntry, deleteEntryLoading } = useDeleteEntry(auth, selectedDelete);
    let { getEntries, getEntriesLoading } = useGetEntries(auth, entries);

    const openDeleteModal = (entryId: string) => {
      const selectedDelete = ref(entryId);
    };

    const canDelete = (id: string) => {
      return auth.idToken && auth.idToken.uniqueId === id;
    };

    onMounted(() => {
      getEntries();
    });

    return {
      openDeleteModal,
      searchInput,
      canDelete,
      onMounted,
      getEntries,
      getEntriesLoading,
      deleteEntry,
      deleteEntryLoading,
      entries,
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