import { Skeleton, Stack } from '@chakra-ui/react';
import styles from '../ReportsCard.module.css';

export const ReportsCardSkeleton = () => {
  return (
    <div className={styles.reportsCard}>
      <Skeleton height="24px" width="60%" mb="4px" />
      <Stack direction="row" align="baseline" gap="4px">
        <Skeleton height="36px" width="80px" />
        <Skeleton height="20px" width="30px" />
      </Stack>
    </div>
  );
};
