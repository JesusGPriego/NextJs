import { FC, PropsWithChildren, useReducer } from 'react';
import { EntriesContext } from './EntriesContext';
import { entriesReducer } from './entriesReducer';
import { Entry, EntryStatus } from '@/interfaces';
import { v4 as uuidV4 } from 'uuid';

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidV4(),
      description: 'pending task',
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidV4(),
      description: 'in progress task',
      status: 'in-progress',
      createdAt: Date.now() - 1000,
    },
    {
      _id: uuidV4(),
      description: 'completed task',
      status: 'completed',
      createdAt: Date.now() - 100000,
    },
  ],
};
export const EntriesProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  const addEntry = (description: string) => {
    const newEntry: Entry = {
      _id: uuidV4(),
      description: description,
      createdAt: Date.now(),
      status: 'pending',
    };
    dispatch({ type: '[Entry] - Add-Entry', payload: newEntry });
  };

  const updateEntry = (id: string, newStatus: EntryStatus) => {
    // find Entry
    const entryIndex = state.entries.findIndex((entry) => entry._id === id);
    const entryToUpdate = state.entries[entryIndex];
    // update Entry
    entryToUpdate.status = newStatus;
    // update state aka dispatch
    dispatch({ type: '[Entry] - Update-Entry' });
  };

  const getEntries = () => {
    return [];
  };

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
