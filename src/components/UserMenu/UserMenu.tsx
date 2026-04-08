import { Box, HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { MenuActions } from '@components/UserMenu/MenuActions/MenuActions.tsx';
import {
  MenuContent,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@components/ui/menu';
import { useAuth } from '@hooks/useAuth/useAuth.ts';
import { LuMenu, LuUser } from 'react-icons/lu';
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

        <MenuContent minW="200px" p="2">
          <Box px="2" py="2">
            <HStack gap="2" align="center">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxSize="8"
                borderRadius="full"
                bg="bg.muted"
                color="fg.muted"
                flexShrink={0}
              >
                <LuUser size={16} />
              </Box>

              <VStack align="start" gap="0" minW={0}>
                <Text fontSize="xs" color="fg.muted" lineHeight="1.2">
                  Signed in as
                </Text>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  lineHeight="1.2"
                  truncate
                  maxW="120px"
                >
                  {name}
                </Text>
              </VStack>
            </HStack>
          </Box>

          <MenuSeparator />

          <MenuActions />
        </MenuContent>
      </MenuRoot>
    </div>
  );
};
