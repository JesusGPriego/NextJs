import { Entry } from '@/interfaces';
import { EntriesState } from './';

type EntriesActionType =
  | { type: '[Entry] - Add-Entry'; payload: Entry }
  | { type: '[Entry] - Update-Entry' };

export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case '[Entry] - Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload],
      };
    case '[Entry] - Update-Entry':
      return {
        ...state,
        entries: [...state.entries],
      };
    default:
      return state;
  }
};