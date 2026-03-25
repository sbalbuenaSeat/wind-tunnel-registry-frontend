export type EntryType = 'INDIVIDUAL' | 'SHARED' | 'DEFAULT';

export interface Entry {
  id: string;
  type: EntryType;
  date: string;
  minutes: number;
  note?: string;
}

export interface CreateEntryPayload {
  type: EntryType;
  minutes: number;
  date: string;
  note?: string;
}

export interface UpdateEntryPayload extends Partial<CreateEntryPayload> {}

export type EntriesResponse = Entry[];
