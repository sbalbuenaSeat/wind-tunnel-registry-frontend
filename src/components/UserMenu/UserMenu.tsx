import { HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { MenuActions } from '@components/UserMenu/MenuActions/MenuActions.tsx';
import { UserAvatar } from '@components/UserMenu/userAvatar/userAvatar.tsx';
import {
  MenuContent,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@components/ui/menu';
import { useAuth } from '@hooks/useAuth/useAuth.ts';
import { LuMenu } from 'react-icons/lu';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const { name } = useAuth();

  return (
    <div className={styles.userMenuContainer}>
      <MenuRoot>
        <MenuTrigger asChild>
          <IconButton variant="ghost" aria-label="User menu" size="sm">
            <LuMenu />
          </IconButton>
        </MenuTrigger>

        <MenuContent minW="220px" p="2">
          <HStack px="2" py="2" gap="3" align="center">
            <UserAvatar />

            <VStack align="start" gap="0" minW={0}>
              <Text fontSize="xs" color="fg.muted" lineHeight="1.2">
                Signed in as
              </Text>
              <Text
                fontSize="sm"
                fontWeight="semibold"
                lineHeight="1.2"
                truncate
                maxW="140px"
              >
                {name}
              </Text>
            </VStack>
          </HStack>

          <MenuSeparator />

          <MenuActions />
        </MenuContent>
      </MenuRoot>
    </div>
  );
};
