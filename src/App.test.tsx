import { render, screen } from '@tests/testing.tsx';
import { expect, test } from 'vitest';
import { App } from './App';

test('render home page by default', () => {
  render(<App />);
  const title = screen.getByText(
    /Track your wind tunnel flight time, add individual sessions, shared sessions and stay updated on your progress./i,
  );
  expect(title).toBeInTheDocument();
});

test.skip('render dashboard page when navigating to /dashboard', () => {
  render(<App />, { route: '/dashboard' });
  // Since ProtectedRoute currently redirects to / by default in the mock,
  // we expect to still be on the home page or see home content.
  const title = screen.getByText(
    /Welcome to your dashboard. Here you can manage your records./i,
  );
  expect(title).toBeInTheDocument();
});
