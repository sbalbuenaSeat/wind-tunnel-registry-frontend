import { Button, Icon } from '@chakra-ui/react';
import { loginWithGoogle } from '@services/authService/auth.service';
import { FcGoogle } from 'react-icons/fc';

export const LoginButton = () => {
  return (
    <Button
      onClick={loginWithGoogle}
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
