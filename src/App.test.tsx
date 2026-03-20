import { render, screen } from '@tests/testing.tsx';
import { expect, test } from 'vitest';
import App from './App';

test('render home page by default', () => {
  render(<App />);
  const title = screen.getByText(/Vite \+ React \+ Chakra UI/i);
  expect(title).toBeInTheDocument();
});

test('render about page when navigating to /about', () => {
  render(<App />, { route: '/about' });
  const title = screen.getByText(/About Wind Tunnel Registry/i);
  expect(title).toBeInTheDocument();
});
