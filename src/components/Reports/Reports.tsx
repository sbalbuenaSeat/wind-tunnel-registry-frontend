import { ReportsCard } from '@components/Reports/ReportsCard/ReportsCard.tsx';
import { ReportsError } from '@components/Reports/ReportsError/ReportsError.tsx';
import { ReportsLoading } from '@components/Reports/ReportsLoading/ReportsLoading.tsx';
import { useDashboardData } from '@hooks/useDashboard/useDashboard';
import styles from './Reports.module.css';

export const Reports = () => {
  const { reports, isReportsLoading, reportsError } = useDashboardData();

  if (isReportsLoading) return <ReportsLoading />;

  if (reportsError) return <ReportsError />;

  return (
    <div className={styles.reportsContainer}>
      {reports?.cards?.map((card) => (
        <ReportsCard key={card.label} {...card} />
      ))}
    </div>
  );
};
