import { useState } from 'react';
import { Separator } from '@chakra-ui/react';
import { EntriesCard } from '@components/Entries/EntriesCard/EntriesCard.tsx';
import { EntriesList } from '@components/Entries/EntriesList/EntriesList.tsx';
import { EntriesSkeleton } from '@components/Entries/EntriesSkeleton/EntriesSkeleton.tsx';
import { ConfirmDialog } from '@components/ui/confirm-dialog.tsx';
import { useDashboardData } from '@hooks/useDashboard/useDashboard.ts';
import { useDashboardUI } from '@hooks/useDashboardUI/useDashboardUI.ts';
import { type Entry } from '@services/entriesService/entries.service.types.ts';
import styles from './EntriesList/EntriesList.module.css';

export const Entries = () => {
  const {
    entries,
    isEntriesLoading,
    entriesError,
    deleteEntry,
    isDeletingEntry,
  } = useDashboardData();

  const { openEditEntryModal } = useDashboardUI();

  const [entryToDelete, setEntryToDelete] = useState<Entry | null>(null);

  const closeDeleteDialog = () => {
    setEntryToDelete(null);
  };

  const confirmDelete = async () => {
    if (!entryToDelete) return;

    await deleteEntry(entryToDelete.id);
    closeDeleteDialog();
  };

  if (isEntriesLoading) {
    return <EntriesSkeleton />;
  }

  if (entriesError) {
    return <div className={styles.error}>Error loading entries</div>;
  }

  if (!entries?.length) {
    return (
      <EntriesList>
        <div className={styles.empty}>No flights registered yet.</div>
      </EntriesList>
    );
  }

  return (
    <>
      <EntriesList>
        {entries.map((entry) => (
          <EntriesCard key={entry.id}>
            <EntriesCard.Header>
              <EntriesCard.Type type={entry.type} />
              <EntriesCard.Minutes minutes={entry.minutes} />
            </EntriesCard.Header>

            <Separator aria-hidden="true" />

            <EntriesCard.Content>
              <EntriesCard.Note note={entry.note ?? ''} />
            </EntriesCard.Content>

            <Separator aria-hidden="true" />

            <EntriesCard.Footer
              onEdit={() => openEditEntryModal(entry)}
              onDelete={() => setEntryToDelete(entry)}
              date={entry.date}
            />
          </EntriesCard>
        ))}
      </EntriesList>

      <ConfirmDialog
        open={!!entryToDelete}
        onOpenChange={(details) => {
          if (!details.open) closeDeleteDialog();
        }}
        title="Delete entry"
        description="Are you sure you want to delete this entry? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirmDelete}
        onCancel={closeDeleteDialog}
        isLoading={isDeletingEntry}
        colorPalette="red"
      />
    </>
  );
};
