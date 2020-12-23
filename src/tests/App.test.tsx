import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../pages/Home';

test('renders home link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
