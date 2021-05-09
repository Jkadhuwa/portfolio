import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Divider from '../Divider';

describe('Test Divider Component', () => {
  afterEach(cleanup);
  it('Should render the HR line correctly', async () => {
    const { getByRole } = render(<Divider />);
    const separator = getByRole('separator');
    expect(separator).toHaveStyle('color: rgb(117, 116, 112); width: 23.6rem;');
  });
});
