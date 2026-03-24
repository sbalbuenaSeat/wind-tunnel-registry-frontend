import { Text } from '@chakra-ui/react';
import { useAuth } from '@hooks/useAuth/useAuth.ts';

export const UserName = () => {
  const { name } = useAuth();

  return (
    <Text fontSize="sm" fontWeight="medium" color="fg.muted">
      Hi, {name}
    </Text>
  );
};
