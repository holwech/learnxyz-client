import { Ref, ref } from 'vue';
import Auth from './Auth';

export function useDeleteEntry(auth: Auth, selectedDelete: Ref<string>) {
  let deleteEntryLoading = ref(false);
  const deleteEntry = async () => {
    deleteEntryLoading.value = true;
    const res = await auth.query(
      process.env.VUE_APP_URL + '/api/recording/' + selectedDelete,
      {
        scopes: [
          process.env.VUE_APP_SCOPE_WRITE,
          process.env.VUE_APP_SCOPE_READ
        ]
      },
      'DELETE',
      null,
      true
    );
    deleteEntryLoading.value = false;
    return res;
  };
  return { deleteEntry, deleteEntryLoading };
}


export function useGetEntries(auth: Auth, entries: any) {
  let getEntriesLoading = ref(false);
  const getEntries = async () => {
    getEntriesLoading.value = true;
    let response = await auth.query(
      process.env.VUE_APP_URL + '/api/metadata',
      {
        scopes: [
          process.env.VUE_APP_SCOPE_WRITE,
          process.env.VUE_APP_SCOPE_READ
        ]
      },
      'GET',
      null,
      false
    );

    let entries = await response.json();
    getEntriesLoading.value = false;
  };
  return {
    getEntries,
    getEntriesLoading
  };
}