import { getClassNames } from '@services/utils/getClassNames';
import styles from './ReportsCard.module.css';

export interface ReportsCardProps {
  label: string;
  value: number;
  type?: 'individual' | 'shared' | 'total';
  timeParts: { num: string; unit: string }[];
}

export const ReportsCard = ({
  label,
  type = 'total',
  timeParts,
}: ReportsCardProps) => {
  const containerClasses = getClassNames({
    [styles.statCard]: true,
    [styles[type]]: true,
  });

  return (
    <div className={containerClasses}>
      <div className={styles.label}>{label}</div>
      <div className={styles.valueContainer}>
        <span className={styles.value}>
          {timeParts.map((part) => (
            <span key={part.num} className={styles.valueGroup}>
              <span className={styles.valueNum}>{part.num}</span>
              <span className={styles.unit}>{part.unit}</span>
            </span>
          ))}
        </span>
      </div>
    </div>
  );
};
