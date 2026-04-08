import { type Entry } from '@services/entriesService/entries.service.types.ts';
import { type EntryFormValues } from './EntryFormDialog.types.ts';

export const ENTRY_FORM_ID = 'entry-form';

export const entryFormDefaultValues: EntryFormValues = {
  type: 'INDIVIDUAL',
  date: new Date().toISOString().slice(0, 10),
  minutes: 15,
  note: '',
};

export const getEntryFormValues = (entry: Entry | null): EntryFormValues => {
  if (!entry) return entryFormDefaultValues;

  return {
    type: entry.type,
    date: entry.date,
    minutes: entry.minutes,
    note: entry.note ?? '',
  };
};

export const buildEntryPayload = (values: EntryFormValues) => ({
  type: values.type,
  date: values.date,
  minutes: Number(values.minutes),
  note: values.note.trim(),
});

export const entryFormRules = {
  type: {
    required: 'Type is required',
  },
  date: {
    required: 'Date is required',
  },
  minutes: {
    required: 'Minutes is required',
    valueAsNumber: true,
    min: {
      value: 1,
      message: 'Minutes must be greater than 0',
    },
  },
  note: {
    maxLength: {
      value: 300,
      message: 'Note cannot exceed 300 characters',
    },
  },
} as const;
