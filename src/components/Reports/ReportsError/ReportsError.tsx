import { Box, Text } from '@chakra-ui/react';

export const ReportsError = () => {
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
};
