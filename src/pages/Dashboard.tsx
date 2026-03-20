import { Box, Heading, Text, VStack } from '@chakra-ui/react';

function Dashboard() {
  return (
    <VStack gap={6} align="start" py={10}>
      <Heading size="xl">Dashboard</Heading>
      <Box p={6} borderWidth="1px" borderRadius="lg" w="full">
        <Text fontSize="lg" mb={4}>
          Bienvenido a tu panel de control. Aquí podrás gestionar tus registros.
        </Text>
      </Box>
    </VStack>
  );
}

export default Dashboard;
