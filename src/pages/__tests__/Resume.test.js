import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Resume from '../Resume';

describe('Test Resume Component', () => {
  it('Should render the resume page correctly', async () => {
    const { getByText } = render(<Resume />);
    expect(
      getByText(/Kabarak University, Nakuru-Kenya. Jan-03-2014 to Dec-22-2017/i)
    ).toBeInTheDocument();
  });

  it('Should render all headings', async () => {
    const { getAllByRole } = render(<Resume />);
    const heading = getAllByRole('heading');
    expect(heading.length).toBe(11);
  });
  it('Should the first heading', async () => {
    const { getAllByRole } = render(<Resume />);
    const heading = getAllByRole('heading');
    expect(heading[0].textContent).toBe('Skills');
  });
  it('Should render all articles', async () => {
    const { getAllByRole } = render(<Resume />);
    const heading = getAllByRole('article');
    expect(heading.length).toBe(4);
  });
});
