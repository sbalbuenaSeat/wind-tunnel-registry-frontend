export interface Entry {
  id: string;
  type: string;
  date: string;
  minutes: number;
  note?: string;
}

export interface CreateEntryPayload {
  type: string;
  minutes: number;
  date: string;
  note?: string;
}

export interface UpdateEntryPayload extends Partial<CreateEntryPayload> {}

export type EntriesResponse = Entry[];
