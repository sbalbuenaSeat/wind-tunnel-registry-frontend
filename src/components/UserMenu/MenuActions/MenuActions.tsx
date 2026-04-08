import { Text } from '@chakra-ui/react';
import { ColorModeIcon, useColorMode } from '@components/ui/color-mode';
import { MenuItem, MenuSeparator } from '@components/ui/menu';
import { useLogout } from '@hooks/useLogout/useLogout.ts';
import { LuLogOut } from 'react-icons/lu';

export const MenuActions = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { handleLogout } = useLogout();

  return (
    <>
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

      <MenuItem
        value="logout"
        onClick={handleLogout}
        color="red.600"
        _dark={{ color: 'red.400' }}
      >
        <LuLogOut />
        <Text>Logout</Text>
      </MenuItem>
    </>
  );
};
