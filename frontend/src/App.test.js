import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
jest.mock('axios', () => ({
  get: jest.fn(),
}));

test('renders the application header', () => {
  render(
    <MemoryRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <App />
    </MemoryRouter>,
  );

  expect(
    screen.getByRole('heading', {
      name: /keep projects moving with one calm, powerful workspace/i,
    }),
  ).toBeInTheDocument();
});
