import { Skeleton, Stack } from '@chakra-ui/react';
import styles from '../ReportsCard.module.css';

export const ReportsCardSkeleton = () => {
  return (
    <div className={styles.reportsCard}>
      <Skeleton width="60%" className={styles.skeletonLabel} />
      <Skeleton width="80%" className={styles.skeletonDescription} />
      <Stack
        direction="row"
        align="baseline"
        gap="4px"
        justifyContent="center"
        width="100%"
      >
        <Skeleton width="50px" className={styles.skeletonValue} />
        <Skeleton width="20px" className={styles.skeletonUnit} />
      </Stack>
    </div>
  );
};
