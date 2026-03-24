import { Box, Flex, Spinner, Text } from '@chakra-ui/react';
import { ReportsCard } from '@components/Reports/ReportsCard/ReportsCard.tsx';
import { useDashboardContext } from '@hooks/useDashboard/useDashboard';
import styles from './Reports.module.css';

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
      <Box
        p={4}
        border="1px solid"
        borderColor="red.200"
        borderRadius="md"
        w="full"
        bg="bg.error"
      >
        <Text color="red.700">
          Error loading reports. Please try again later.
        </Text>
      </Box>
    );
  }

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
