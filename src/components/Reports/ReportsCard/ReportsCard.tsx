import React from 'react';
import { type ReportsCardProps } from '@components/Reports/ReportsCard/ReportsCard.types.ts';
import { getClassNames } from '@services/utils/getClassNames';
import styles from './ReportsCard.module.css';

export const ReportsCard = ({
  label,
  description,
  type = 'total',
  timeParts,
}: ReportsCardProps) => {
  const containerClasses = getClassNames({
    [styles.reportsCard]: true,
    [styles[type]]: true,
  });

  return (
    <div className={containerClasses}>
      <div className={styles.reportsCardLabel}>{label}</div>

      <div className={styles.reportsCardDescription}>{description}</div>

      <div className={styles.reportsCardValueContainer}>
        {timeParts.map((part) => (
          <React.Fragment key={part.value}>
            <span className={styles.reportsCardValueNum}>{part.value}</span>
            <span className={styles.reportsCardUnit}>{part.unit}</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
