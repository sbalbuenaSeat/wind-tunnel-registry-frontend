import { Outlet, Link as RouterLink } from 'react-router-dom';
import { Button, Link as ChakraLink, Heading, Icon } from '@chakra-ui/react';
import { EntryFormDialog } from '@components/Entries/EntryFormDialog/EntryFormDialog.tsx';
import { UserMenu } from '@components/UserMenu/UserMenu.tsx';
import { ColorModeButton } from '@components/ui/color-mode';
import { useAuth } from '@hooks/useAuth/useAuth.ts';
import { useDashboardData } from '@hooks/useDashboard/useDashboard.ts';
import { useDashboardUI } from '@hooks/useDashboardUI/useDashboardUI.ts';
import {
  type CreateEntryPayload,
  type UpdateEntryPayload,
} from '@services/entriesService/entries.service.types.ts';
import { LuPlus } from 'react-icons/lu';
import styles from './Layout.module.css';

export const Layout = () => {
  const { isAuthenticated } = useAuth();
  const { createEntry, updateEntry, isCreatingEntry, isUpdatingEntry } =
    useDashboardData();

  const {
    isEntryFormOpen,
    entryFormMode,
    selectedEntry,
    openCreateEntryModal,
    closeEntryFormModal,
  } = useDashboardUI();

  const handleSubmit = async (
    payload: CreateEntryPayload | UpdateEntryPayload,
  ) => {
    if (entryFormMode === 'create') {
      await createEntry(payload as CreateEntryPayload);
      closeEntryFormModal();
      return;
    }

    if (!selectedEntry) return;

    await updateEntry({
      id: selectedEntry.id,
      payload: payload as UpdateEntryPayload,
    });
    closeEntryFormModal();
  };

  return (
    <div className={styles.layoutContainer}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <ChakraLink asChild variant="plain">
            <RouterLink to="/">
              <Heading size={{ base: 'sm', md: 'md' }}>
                Wind Tunnel Logbook
              </Heading>
            </RouterLink>
          </ChakraLink>

          <div className={styles.navRight}>
            {isAuthenticated && (
              <Button
                onClick={openCreateEntryModal}
                size={{ base: 'xs', sm: 'sm', md: 'md' }}
                px={{ base: 2.5, sm: 3, md: 4 }}
                minW={{ base: 'auto', md: 'unset' }}
              >
                <Icon as={LuPlus} boxSize={{ base: 4, md: 4.5 }} />
                <span className={styles.createButtonText}>New entry</span>
              </Button>
            )}

            {isAuthenticated ? <UserMenu /> : <ColorModeButton />}
          </div>
        </div>
      </nav>

      <main className={styles.mainContainer}>
        <Outlet />
      </main>

      <EntryFormDialog
        open={isEntryFormOpen}
        mode={entryFormMode}
        entry={selectedEntry}
        onOpenChange={(details) => {
          if (!details.open) closeEntryFormModal();
        }}
        onSubmit={handleSubmit}
        isLoading={isCreatingEntry || isUpdatingEntry}
      />
    </div>
  );
};
