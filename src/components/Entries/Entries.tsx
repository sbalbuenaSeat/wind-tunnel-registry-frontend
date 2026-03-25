import { Separator } from '@chakra-ui/react';
import { EntriesCard } from '@components/Entries/EntriesCard/EntriesCard.tsx';
import { useDashboardContext } from '@hooks/useDashboard/useDashboard.ts';
import styles from './Entries.module.css';

export const Entries = () => {
  const { entries, isEntriesLoading, entriesError } = useDashboardContext();

  if (isEntriesLoading) {
    return <div className={styles.loading}>Loading entries...</div>;
  }

  if (entriesError) {
    return <div className={styles.error}>Error loading entries</div>;
  }

  return (
    <div className={styles.entriesContainer}>
      <h2 className={styles.title}>My Entries</h2>
      {!entries || entries.length === 0 ? (
        <div className={styles.empty}>You have no registered entries.</div>
      ) : (
        <div className={styles.entriesGrid}>
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
                onDelete={() => console.log('Delete', entry.id)}
                date={entry.date}
              />
            </EntriesCard>
          ))}
        </div>
      )}
    </div>
  );
};
