import styles from './EntriesList.module.css';
import { type EntriesListProps } from './EntriesList.types.ts';

export const EntriesList = ({ children }: EntriesListProps) => {
  return (
    <div className={styles.entriesContainer}>
      <h2 className={styles.title}>Flight Log</h2>
      <div className={styles.entriesGrid}>{children}</div>
    </div>
  );
};
