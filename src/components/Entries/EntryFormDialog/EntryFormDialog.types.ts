import {
  type CreateEntryPayload,
  type Entry,
  type UpdateEntryPayload,
} from '@services/entriesService/entries.service.types.ts';
import { type EntryFormMode } from '@/context/DashboardUIContext/DashboardUIContext.types.ts';

export type EntryFormValues = {
  type: 'INDIVIDUAL' | 'SHARED';
  date: string;
  minutes: number;
  note: string;
};

export interface EntryFormDialogProps {
  open: boolean;
  mode: EntryFormMode;
  entry: Entry | null;
  isLoading?: boolean;
  onSubmit: (payload: CreateEntryPayload | UpdateEntryPayload) => Promise<void>;
  onOpenChange: (details: { open: boolean }) => void;
}
