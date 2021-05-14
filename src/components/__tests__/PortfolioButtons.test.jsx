import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { StaticRouter } from 'react-router-dom';
import PortfolioButtons from '../PortfolioButtons';

describe('Test PortfolioButton Component', () => {
  afterEach(cleanup);
  it('Should Display Buttons Correctly', async () => {
    const match = {
      path: '/portfolio',
    };
    const { asFragment } = render(
      <StaticRouter>
        <PortfolioButtons match={match} />
      </StaticRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
