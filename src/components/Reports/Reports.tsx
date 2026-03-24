import { Flex, Spinner } from '@chakra-ui/react';
import { useDashboardContext } from '@hooks/useDashboard/useDashboard';
import styles from './Reports.module.css';
import { ReportsCard } from './ReportsCard/ReportsCard';

export const Reports = () => {
  const { reports, isLoading, error } = useDashboardContext();

  if (isLoading) {
    return (
      <Flex justify="center" align="center" w="full" py={10}>
        <Spinner size="xl" color="blue.500" />
      </Flex>
    );
  }

  if (error) {
    return (
      <div className={styles.errorBox}>
        <div className={styles.errorText}>
          Error loading reports. Please try again later.
        </div>
      </div>
    );
  }

  const cards = reports?.cards ?? [];

  return (
    <div className={styles.reportsContainer}>
      <div className={styles.cardsGrid}>
        {cards.map((card) => (
          <ReportsCard key={card.label} {...card} />
        ))}
      </div>
    </div>
  );
};
