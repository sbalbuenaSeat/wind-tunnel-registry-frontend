import { useNavigate } from 'react-router-dom';
import { Button } from '@chakra-ui/react';

export const DashboardButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate('/dashboard')}
      bg="white"
      color="gray.700"
      border="1px solid"
      borderColor="gray.200"
      _hover={{ bg: 'gray.50' }}
      _active={{ bg: 'gray.100' }}
      size="lg"
      rounded="md"
      boxShadow="sm"
    >
      Go to dashboard
    </Button>
  );
};
