import { Entries } from '@components/Entries/Entries';
import { Reports } from '@components/Reports/Reports';

export const Dashboard = () => {
  return (
    <div data-testid="dashboard-page">
      <Reports />
      <Entries />
    </div>
  );
};
