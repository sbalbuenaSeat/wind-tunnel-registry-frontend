import { ReportsCardSkeleton } from '@components/Reports/ReportsCard/ReportsCardSkeleton/ReportsCardSkeleton.tsx';
import styles from '../Reports.module.css';

export const ReportsLoading = () => {
  return (
    <div className={styles.reportsContainer}>
      <div className={styles.cardsGrid}>
        <ReportsCardSkeleton />
        <ReportsCardSkeleton />
        <ReportsCardSkeleton />
      </div>
    </div>
  );
};
