import { Entry, EntryStatus } from '@/interfaces';
import { createContext } from 'react';
interface EntriesProps {
  entries: Entry[];
  addEntry: (description: string) => void;
  getEntries: () => string[];
  updateEntry: (id: string, newStatus: EntryStatus) => void;
}
export const EntriesContext = createContext({} as EntriesProps);
