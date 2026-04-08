import { Field, Input, NativeSelect, Textarea, VStack } from '@chakra-ui/react';
import { FormDialog } from '@components/ui/form-dialog.tsx';
import { useEntryForm } from '@hooks/useEntryForm/useEntryForm.ts';
import { Controller } from 'react-hook-form';
import { ENTRY_FORM_ID, entryFormRules } from './EntryFormDialog.helpers.ts';
import {
  type EntryFormDialogProps,
  type EntryFormValues,
} from './EntryFormDialog.types.ts';

export const EntryFormDialog = ({
  open,
  mode,
  entry,
  isLoading = false,
  onSubmit,
  onOpenChange,
}: EntryFormDialogProps) => {
  const {
    control,
    register,
    submitForm,
    formState: { errors },
  } = useEntryForm({
    open,
    mode,
    entry,
    onSubmit,
  });

  return (
    <FormDialog
      open={open}
      onOpenChange={onOpenChange}
      onCancel={() => onOpenChange({ open: false })}
      title={mode === 'create' ? 'Create entry' : 'Edit entry'}
      submitText={mode === 'create' ? 'Create' : 'Save'}
      cancelText="Cancel"
      isLoading={isLoading}
      isSubmitDisabled={false}
      submitFormId={ENTRY_FORM_ID}
      contentProps={{ maxW: 'lg', w: 'full' }}
    >
      <form id={ENTRY_FORM_ID} onSubmit={submitForm}>
        <VStack gap="4" align="stretch">
          <Field.Root invalid={!!errors.type}>
            <Field.Label>Type</Field.Label>
            <Controller
              name="type"
              control={control}
              rules={entryFormRules.type}
              render={({ field }) => (
                <NativeSelect.Root>
                  <NativeSelect.Field
                    name={field.name}
                    value={field.value}
                    onBlur={field.onBlur}
                    ref={field.ref}
                    onChange={(event) =>
                      field.onChange(
                        event.target.value as EntryFormValues['type'],
                      )
                    }
                  >
                    <option value="INDIVIDUAL">Individual</option>
                    <option value="SHARED">Shared</option>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              )}
            />
            {errors.type && (
              <Field.ErrorText>{errors.type.message}</Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root invalid={!!errors.date}>
            <Field.Label>Date</Field.Label>
            <Input type="date" {...register('date', entryFormRules.date)} />
            {errors.date && (
              <Field.ErrorText>{errors.date.message}</Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root invalid={!!errors.minutes}>
            <Field.Label>Minutes</Field.Label>
            <Input
              type="number"
              min={1}
              {...register('minutes', entryFormRules.minutes)}
            />
            {errors.minutes && (
              <Field.ErrorText>{errors.minutes.message}</Field.ErrorText>
            )}
          </Field.Root>

          <Field.Root invalid={!!errors.note}>
            <Field.Label>Note</Field.Label>
            <Textarea {...register('note', entryFormRules.note)} />
            {errors.note && (
              <Field.ErrorText>{errors.note.message}</Field.ErrorText>
            )}
          </Field.Root>
        </VStack>
      </form>
    </FormDialog>
  );
};
