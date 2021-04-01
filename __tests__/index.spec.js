import React from 'react';
import { render, screen } from '@testing-library/react';
import Index from '../pages/index';

describe('Index Page', () => {
  it('renders without crashing', () => {
    render(<Index />);
    expect(
      screen.getByRole('heading'),
    )
  });
});
