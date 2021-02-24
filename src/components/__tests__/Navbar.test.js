import React from 'react';
import { render, waitFor, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

describe('Test Navbar Component', () => {
  const history = createMemoryHistory();
  it('Should render the NotFoundPage correctly', async () => {
    const setOpen = jest.fn();
    const { getByText } = render(
      <Router history={history}>
        <Navbar onClick={setOpen} />
      </Router>
    );
    await waitFor(() => fireEvent.click(getByText('About')));
    expect(setOpen).toBeCalledTimes(0);
  });
});
