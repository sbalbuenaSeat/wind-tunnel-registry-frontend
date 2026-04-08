import { type Entry } from '@services/entriesService/entries.service.types.ts';
import { type DashboardUIState } from '@/context/DashboardUIContext/DashboardUIContext.types.ts';

export type DashboardUIAction =
  | { type: 'OPEN_CREATE_ENTRY' }
  | { type: 'OPEN_EDIT_ENTRY'; payload: Entry }
  | { type: 'CLOSE_ENTRY_FORM' };

export const initialDashboardUIState: DashboardUIState = {
  isEntryFormOpen: false,
  entryFormMode: 'create',
  selectedEntry: null,
};

export const dashboardUIReducer = (
  state: DashboardUIState,
  action: DashboardUIAction,
): DashboardUIState => {
  switch (action.type) {
    case 'OPEN_CREATE_ENTRY':
      return {
        ...state,
        isEntryFormOpen: true,
        entryFormMode: 'create',
        selectedEntry: null,
      };

    case 'OPEN_EDIT_ENTRY':
      return {
        ...state,
        isEntryFormOpen: true,
        entryFormMode: 'edit',
        selectedEntry: action.payload,
      };

    case 'CLOSE_ENTRY_FORM':
      return {
        ...state,
        isEntryFormOpen: false,
        entryFormMode: 'create',
        selectedEntry: null,
      };

    default:
      return state;
  }
};
