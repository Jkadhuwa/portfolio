import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFoundPage from '../404';

describe('Test NotFoundPage Component', () => {
  it('Should render the NotFoundPage correctly', () => {
    const { getByText } = render(<NotFoundPage />);
    expect(getByText(/404! Page Not Found/i)).toBeInTheDocument();
  });
});
