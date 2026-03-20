import { Button, Icon } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '@/hooks/useAuth';

export const LoginButton = () => {
  useAuth();

  return (
    <Button
      onClick={() => null}
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
      <Icon as={FcGoogle} boxSize={5} />
      Continue with google
    </Button>
  );
};
