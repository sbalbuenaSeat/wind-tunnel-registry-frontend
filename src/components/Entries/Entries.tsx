import { Separator } from '@chakra-ui/react';
import { EntriesCard } from '@components/Entries/EntriesCard/EntriesCard.tsx';
import { useDashboardContext } from '@hooks/useDashboard/useDashboard.ts';
import styles from './Entries.module.css';

export const Entries = () => {
  const { entries, isEntriesLoading, entriesError } = useDashboardContext();

  if (isEntriesLoading) {
    return <div className={styles.loading}>Cargando entradas...</div>;
  }

  if (entriesError) {
    return <div className={styles.error}>Error al cargar las entradas</div>;
  }

  return (
    <div className={styles.entriesContainer}>
      <h2 className={styles.title}>Mis Entradas</h2>
      {!entries || entries.length === 0 ? (
        <div className={styles.empty}>No tienes entradas registradas.</div>
      ) : (
        <div className={styles.entriesGrid}>
          {entries.map((entry) => (
            <EntriesCard key={entry.id}>
              <EntriesCard.Header>
                <EntriesCard.Type type={entry.type} />
                <EntriesCard.Date date={entry.date} />
              </EntriesCard.Header>
              <Separator />
              <EntriesCard.Content>
                <EntriesCard.Minutes minutes={entry.minutes} />
                <Separator />
                {entry.note && <EntriesCard.Note note={entry.note} />}
              </EntriesCard.Content>
            </EntriesCard>
          ))}
        </div>
      )}
    </div>
  );
};
