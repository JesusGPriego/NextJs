import { FC, PropsWithChildren, useEffect, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { Entry, EntryStatus } from '@/interfaces';
import { entriesApi } from '../../../api';
export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [],
};
export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description });

    dispatch({
      type: '[Entry] - Add-Entry',
      payload: data,
    });
  };

  const updateEntry = async (
    id: string,
    newStatus: EntryStatus,
    description?: string
  ) => {
    // find Entry
    const entryIndex = state.entries.findIndex((entry) => entry._id === id);
    const entryToUpdate = state.entries[entryIndex];
    // update Entry
    try {
      await entriesApi.put<Entry>(`/entries/${id}`, {
        description: description || entryToUpdate.description,
        status: newStatus,
      });
      entryToUpdate.status = newStatus;
      description && (entryToUpdate.description = description);
      // update state aka dispatch
      dispatch({ type: '[Entry] - Update-Entry' });
    } catch (error) {
      console.log({ error });
    }
  };

  const getEntries = () => {
    return [];
  };

  const refreshEntries = async () => {
    try {
      const { data } = await entriesApi.get<Entry[]>('/entries');
      dispatch({ type: '[Entry] - Refresh-Entry', payload: data });
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    refreshEntries();
  }, []);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addEntry,
        getEntries,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
