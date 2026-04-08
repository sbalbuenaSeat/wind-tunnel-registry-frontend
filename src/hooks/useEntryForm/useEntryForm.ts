import { useEffect } from 'react';
import {
  buildEntryPayload,
  entryFormDefaultValues,
  getEntryFormValues,
} from '@components/Entries/EntryFormDialog/EntryFormDialog.helpers.ts';
import { type EntryFormValues } from '@components/Entries/EntryFormDialog/EntryFormDialog.types.ts';
import { type Entry } from '@services/entriesService/entries.service.types.ts';
import { useForm } from 'react-hook-form';
import { type EntryFormMode } from '@/context/DashboardUIContext/DashboardUIContext.types.ts';

type UseEntryFormParams = {
  open: boolean;
  mode: EntryFormMode;
  entry: Entry | null;
  onSubmit: (payload: ReturnType<typeof buildEntryPayload>) => Promise<void>;
};

export const useEntryForm = ({
  open,
  mode,
  entry,
  onSubmit,
}: UseEntryFormParams) => {
  const form = useForm<EntryFormValues>({
    defaultValues: entryFormDefaultValues,
    mode: 'onChange',
  });

  const { reset, handleSubmit, trigger } = form;

  useEffect(() => {
    if (!open) return;

    reset(getEntryFormValues(mode === 'edit' ? entry : null));

    void trigger();
  }, [open, mode, entry, reset, trigger]);

  const submitForm = handleSubmit(async (values) => {
    await onSubmit(buildEntryPayload(values));
  });

  return {
    ...form,
    submitForm,
  };
};
