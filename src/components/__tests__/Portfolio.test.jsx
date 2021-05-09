import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Portfolio from '../Portfolio';

describe('Test PortfolioButton Component', () => {
  afterEach(cleanup);
  it('Renders  correctly', () => {
    const match = {
      path: '/portfolio',
    };
    const { asFragment } = render(<Portfolio match={match} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
