import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

window.scrollTo = jest.fn();

describe('Renders Main component ', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  it('Renders <App/> component correctly ', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Passionate about tech/i)).toBeInTheDocument();
  });
  it('Renders navbar correctly', () => {
    render(<App />);
    expect(document.querySelector('a').getAttribute('href')).toBe('/');
  });
});
