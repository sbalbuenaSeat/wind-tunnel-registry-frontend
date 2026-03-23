import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink, Heading, Text, Flex } from '@chakra-ui/react';
import { ColorModeButton } from '@components/ui/color-mode';
import { useAuth } from '@/hooks/useAuth';
import styles from './Layout.module.css';

export const Layout = () => {
  const { isAuthenticated, name } = useAuth();

  return (
    <div className={styles.layoutContainer}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <ChakraLink asChild variant="plain">
            <RouterLink to="/">
              <Heading size="md">Wind Tunnel Logbook</Heading>
            </RouterLink>
          </ChakraLink>
          <div className={styles.navRight}>
            {isAuthenticated && name && (
              <Flex align="center" gap={2}>
                <Text fontSize="sm" fontWeight="medium" color="fg.muted">
                  Hi, {name}
                </Text>
              </Flex>
            )}
            <ColorModeButton />
          </div>
        </div>
      </nav>
      <main className={styles.mainContainer}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
