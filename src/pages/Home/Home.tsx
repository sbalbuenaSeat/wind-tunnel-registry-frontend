import { Heading, Text } from '@chakra-ui/react';
import { LoginButton } from '@components/LoginButton/LoginButton.tsx';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentStack}>
        <Heading as="h1" size="4xl" fontWeight="bold" letterSpacing="tight">
          Wind Tunnel Registry
        </Heading>
        <Text fontSize="xl" color="fg.muted" maxW="lg">
          Track your wind tunnel flight time, add individual sessions, shared
          sessions and stay updated on your progress.
        </Text>
        <div className={styles.buttonWrapper}>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};
