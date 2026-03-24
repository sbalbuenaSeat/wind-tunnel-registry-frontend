import { IconButton, Text } from '@chakra-ui/react';
import { ColorModeIcon, useColorMode } from '@components/ui/color-mode';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from '@components/ui/menu';
import { useLogout } from '@hooks/useLogout/useLogout.ts';
import { LuLogOut, LuMenu } from 'react-icons/lu';

export const MenuActions = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { handleLogout } = useLogout();

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <IconButton variant="ghost" aria-label="User menu" size="sm">
          <LuMenu />
        </IconButton>
      </MenuTrigger>
      <MenuContent minW="150px">
        <MenuItem
          value="theme"
          onClick={(e) => {
            e.preventDefault();
            toggleColorMode();
          }}
        >
          <ColorModeIcon />
          <Text>{colorMode === 'light' ? 'Dark Theme' : 'Light Theme'}</Text>
        </MenuItem>
        <MenuSeparator />
        <MenuItem value="logout" onClick={handleLogout} color="red.500">
          <LuLogOut />
          <Text>Logout</Text>
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};
