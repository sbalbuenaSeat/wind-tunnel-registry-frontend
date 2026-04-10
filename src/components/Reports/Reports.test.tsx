import { Reports } from '@components/Reports/Reports.tsx';
import { within } from '@testing-library/react';
import { render, screen } from '@tests/testing.tsx';
import { describe, expect, it } from 'vitest';

describe('ReportsCard', () => {
  describe('when render', () => {
    it.each([
      {
        testId: 'reports-card-total',
        label: 'Total',
        description: 'Total time accumulated in the wind tunnel.',
        values: ['2', 'h', '30', 'min'],
      },
      {
        testId: 'reports-card-individual',
        label: '1-on-1',
        description: 'Flights performed with an instructor.',
        values: ['1', 'h', '30', 'min'],
      },
      {
        testId: 'reports-card-shared',
        label: 'Group',
        description: 'Flights performed with other skydivers.',
        values: ['1', 'h'],
      },
    ])('should render $label, $description card correctly ', async ({
      testId,
      label,
      description,
      values,
    }) => {
      render(<Reports />);

      const card = await screen.findByTestId(testId);
      const cardQueries = within(card);

      expect(cardQueries.getByText(label)).toBeInTheDocument();
      expect(cardQueries.getByText(description)).toBeInTheDocument();

      values.forEach((value) => {
        expect(cardQueries.getByText(value)).toBeInTheDocument();
      });
    });
  });
});
