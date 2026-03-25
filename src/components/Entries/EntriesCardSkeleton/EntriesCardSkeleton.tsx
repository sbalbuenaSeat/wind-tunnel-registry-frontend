import { Flex, Separator, Skeleton } from '@chakra-ui/react';
import styles from '../EntriesCard/EntriesCard.module.css';

export const EntriesCardSkeleton = () => {
  return (
    <div className={styles.entriesCard}>
      <div className={styles.header}>
        <Skeleton height="24px" width="80px" borderRadius="full" />
        <Skeleton height="20px" width="60px" />
      </div>
      <Separator aria-hidden="true" />
      <div className={styles.content}>
        <Skeleton height="16px" flex="1" />
      </div>
      <Separator aria-hidden="true" />
      <Flex justify="space-between" align="center" gap="3" mt="auto">
        <Skeleton height="16px" width="100px" />
        <Flex gap="1">
          <Skeleton height="32px" width="32px" borderRadius="md" />
          <Skeleton height="32px" width="32px" borderRadius="md" />
        </Flex>
      </Flex>
    </div>
  );
};
