import { apiFetch } from '@services/utils/apiFetch';
import {
  type CreateEntryPayload,
  type EntriesResponse,
  type Entry,
  type UpdateEntryPayload,
} from './entries.service.types';

export const getEntries = async (): Promise<EntriesResponse> => {
  return await apiFetch('/entries');
};

export const createEntry = async (
  payload: CreateEntryPayload,
): Promise<Entry> => {
  return await apiFetch('/entries', {
    method: 'POST',
    body: JSON.stringify(payload),
  });
};

export const updateEntry = async (
  id: string,
  payload: UpdateEntryPayload,
): Promise<Entry> => {
  return await apiFetch(`/entries/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(payload),
  });
};

export const deleteEntry = async (id: string): Promise<void> => {
  return await apiFetch(`/entries/${id}`, {
    method: 'DELETE',
  });
};
