import { Heading, Text } from '@chakra-ui/react';
import { LoginButton } from '@components/LoginButton/LoginButton';
import styles from './Home.module.css';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.contentStack}>
        <Heading as="h1" size="4xl" fontWeight="bold" letterSpacing="tight">
          Wind Tunnel Registry
        </Heading>
        <Text fontSize="xl" color="fg.muted" maxW="lg">
          Accede de forma segura para gestionar tus registros de túnel de
          viento.
        </Text>
        <div className={styles.buttonWrapper}>
          <LoginButton />
        </div>
      </div>
    </div>
  );
};
