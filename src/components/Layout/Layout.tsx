import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Link as ChakraLink, Heading } from '@chakra-ui/react';
import { ColorModeButton } from '@components/ui/color-mode';
import styles from './Layout.module.css';

export const Layout = () => {
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
