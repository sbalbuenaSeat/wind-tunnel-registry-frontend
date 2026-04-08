import { Avatar } from '@chakra-ui/react';
import { getInitials } from '@components/UserMenu/userAvatar/UserAvatar.helpers.ts';
import { useAuth } from '@hooks/useAuth/useAuth.ts';

export const UserAvatar = () => {
  const { name } = useAuth();

  return (
    <Avatar.Root size="sm">
      <Avatar.Fallback name={name}>{getInitials(name)}</Avatar.Fallback>
    </Avatar.Root>
  );
};
