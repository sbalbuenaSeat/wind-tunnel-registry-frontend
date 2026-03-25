import { Skeleton } from '@chakra-ui/react';
import { EntriesCardSkeleton } from '@components/Entries/EntriesCardSkeleton/EntriesCardSkeleton.tsx';
import styles from './EntriesSkeleton.module.css';

export const EntriesSkeleton = () => {
  return (
    <div className={styles.entriesSkeletonContainer}>
      <Skeleton height="32px" width="160px" borderRadius="md" />
      <div className={styles.entriesGrid}>
        <EntriesCardSkeleton />
        <EntriesCardSkeleton />
        <EntriesCardSkeleton />
        <EntriesCardSkeleton />
        <EntriesCardSkeleton />
      </div>
    </div>
  );
};
