import { ReportsCard } from '@components/Reports/ReportsCard/ReportsCard.tsx';
import { ReportsError } from '@components/Reports/ReportsError/ReportsError.tsx';
import { ReportsLoading } from '@components/Reports/ReportsLoading/ReportsLoading.tsx';
import { useDashboardContext } from '@hooks/useDashboard/useDashboard';
import styles from './Reports.module.css';

export const Reports = () => {
  const { reports, isLoading, error } = useDashboardContext();

  if (isLoading) return <ReportsLoading />;

  if (error) return <ReportsError />;

  return (
    <div className={styles.reportsContainer}>
      <div className={styles.cardsGrid}>
        {reports?.cards?.map((card) => (
          <ReportsCard key={card.label} {...card} />
        ))}
      </div>
    </div>
  );
};
