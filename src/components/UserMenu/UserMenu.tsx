import { MenuActions } from '@components/UserMenu/MenuActions/MenuActions.tsx';
import { UserName } from '@components/UserMenu/UserName/UserName.tsx';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  return (
    <div className={styles.userMenuContainer}>
      <UserName />
      <MenuActions />
    </div>
  );
};
