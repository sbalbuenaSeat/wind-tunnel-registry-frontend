import { formatMinutes } from '@services/utils/formatMinutes';
import { getClassNames } from '@services/utils/getClassNames';
import styles from './ReportsCard.module.css';

export interface ReportsCardProps {
  label: string;
  value: number;
  type?: 'individual' | 'shared' | 'total';
}

export const ReportsCard = ({
  label,
  value,
  type = 'total',
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
          {formatMinutes(value)
            .split(' ')
            .map((part, index) => {
              const unit = part.slice(-1);
              const num = part.slice(0, -1);
              return (
                <span key={`${unit}-${index}`} className={styles.valueGroup}>
                  <span className={styles.valueNum}>{num}</span>
                  <span className={styles.unit}>{unit}</span>
                </span>
              );
            })}
        </span>
      </div>
    </div>
  );
};
