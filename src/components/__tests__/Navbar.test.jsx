import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

describe('Test Navbar Component', () => {
  it('Should render the NotFoundPage correctly', async () => {
    const setOpen = jest.fn();
    const { getByText } = render(
      <StaticRouter>
        <Navbar onClick={setOpen} />
      </StaticRouter>
    );
    await waitFor(() => fireEvent.click(getByText('About')));
    expect(setOpen).toBeCalledTimes(0);
  });

  it('Should render all Linkscorrectly', async () => {
    const { getAllByRole } = render(
      <StaticRouter>
        <Navbar />
      </StaticRouter>
    );
    const link = getAllByRole('link');
    expect(link[0].textContent).toBe('About');
  });
});
