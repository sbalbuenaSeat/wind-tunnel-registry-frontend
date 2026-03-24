import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import { useAuth } from '@hooks/useAuth/useAuth';

export const Dashboard = () => {
  const { name } = useAuth();

  return (
    <VStack gap={6} align="start" py={10}>
      <Heading size="xl">Dashboard</Heading>
      <Box p={6} borderWidth="1px" borderRadius="lg" w="full">
        <Text fontSize="lg" mb={4}>
          Welcome to your dashboard{name && `, ${name}`}. Here you can manage
          your records.
        </Text>
      </Box>
    </VStack>
  );
};
