import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink, Heading } from '@chakra-ui/react';
import { UserMenu } from '@components/UserMenu/UserMenu.tsx';
import { ColorModeButton } from '@components/ui/color-mode';
import { useAuth } from '@hooks/useAuth/useAuth.ts';
import styles from './Layout.module.css';

export const Layout = () => {
  const { isAuthenticated } = useAuth();

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
            {isAuthenticated ? <UserMenu /> : <ColorModeButton />}
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
