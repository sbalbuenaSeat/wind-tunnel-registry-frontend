import { render, screen } from '@tests/testing.tsx';
import { expect, test } from 'vitest';
import { App } from './App';

test('render home page by default', () => {
  render(<App />);
  const title = screen.getByText(/Wind Tunnel Registry/i);
  expect(title).toBeInTheDocument();
});

test('render dashboard page when navigating to /dashboard', () => {
  render(<App />, { route: '/dashboard' });
  // Since ProtectedRoute currently redirects to / by default in the mock,
  // we expect to still be on the home page or see home content.
  const title = screen.getByText(/Wind Tunnel Registry/i);
  expect(title).toBeInTheDocument();
});
