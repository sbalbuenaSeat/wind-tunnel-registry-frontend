import { Button, Heading, Text } from '@chakra-ui/react';
import { DashboardButton } from '@components/DashboardButton/DashboardButton.tsx';
import { LoginButton } from '@components/LoginButton/LoginButton.tsx';
import { useAuth } from '@hooks/useAuth/useAuth.ts';
import styles from './Home.module.css';

export const Home = () => {
  const { isAuthenticated, loading } = useAuth();

  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentStack}>
        <Heading as="h1" size="4xl" fontWeight="bold" letterSpacing="tight">
          Wind Tunnel Logbook
        </Heading>
        <Text fontSize="xl" color="fg.muted" maxW="lg">
          Track your wind tunnel flight time, add individual sessions, shared
          sessions and stay updated on your progress.
        </Text>
        <div className={styles.buttonWrapper}>
          {!loading &&
            (isAuthenticated ? <DashboardButton /> : <LoginButton />)}
          {loading && <Button loading />}
        </div>
      </div>
    </div>
  );
};
