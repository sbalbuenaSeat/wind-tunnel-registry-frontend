import { type Entry } from '@services/entriesService/entries.service.types.ts';

export type EntryFormMode = 'create' | 'edit';

export type DashboardUIState = {
  isEntryFormOpen: boolean;
  entryFormMode: EntryFormMode;
  selectedEntry: Entry | null;
};

export interface DashboardUIContextType {
  isEntryFormOpen: boolean;
  entryFormMode: EntryFormMode;
  selectedEntry: Entry | null;
  openCreateEntryModal: () => void;
  openEditEntryModal: (entry: Entry) => void;
  closeEntryFormModal: () => void;
}
