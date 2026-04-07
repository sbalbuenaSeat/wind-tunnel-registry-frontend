import { useState } from 'react';
import { Separator } from '@chakra-ui/react';
import { EntriesCard } from '@components/Entries/EntriesCard/EntriesCard.tsx';
import { EntriesList } from '@components/Entries/EntriesList/EntriesList.tsx';
import { EntriesSkeleton } from '@components/Entries/EntriesSkeleton/EntriesSkeleton.tsx';
import { ConfirmDialog } from '@components/ui/confirm-dialog.tsx';
import { useDashboardContext } from '@hooks/useDashboard/useDashboard.ts';
import styles from './EntriesList/EntriesList.module.css';

export const Entries = () => {
  const {
    entries,
    isEntriesLoading,
    entriesError,
    deleteEntry,
    isDeletingEntry,
  } = useDashboardContext();

  const [openModalDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<string | null>(null);

  const handleDeleteDialog = (open: boolean, entryId?: string | null) => {
    setOpenDeleteModal(open);
    setSelectedEntry(entryId ?? null);
  };

  const confirmDelete = async () => {
    if (!selectedEntry) return;

    await deleteEntry(selectedEntry);
    handleDeleteDialog(false);
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
              onEdit={() => console.log('Edit', entry.id)}
              onDelete={() => handleDeleteDialog(true, entry.id)}
              date={entry.date}
            />
          </EntriesCard>
        ))}
      </EntriesList>

      <ConfirmDialog
        open={openModalDeleteModal}
        onOpenChange={(details) => {
          if (!details.open) handleDeleteDialog(false);
        }}
        title="Delete entry"
        description="Are you sure you want to delete this entry? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        onConfirm={confirmDelete}
        onCancel={() => handleDeleteDialog(false)}
        isLoading={isDeletingEntry}
        colorPalette="red"
      />
    </>
  );
};
