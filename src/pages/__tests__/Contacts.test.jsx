import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Contact from '../Contact';

describe('Test Contacts Component', () => {
  it('Should render the contacts page correctly', async () => {
    const { getByText } = render(<Contact />);
    expect(getByText(/Get in touch/i)).toBeInTheDocument();
  });

  it('Should call handleChange function', async () => {
    const { getByPlaceholderText } = render(<Contact />);
    const name_input = getByPlaceholderText('Name');
    const email_input = getByPlaceholderText('Email');
    userEvent.type(email_input, 'JoeDoe@gmail.com');
    userEvent.type(name_input, 'Joe Doe');
    expect(name_input).toHaveValue('Joe Doe');
    expect(email_input).toHaveValue('JoeDoe@gmail.com');
  });

  it('Should call handleSubmit function', async () => {
    const { getByRole, getByPlaceholderText } = render(<Contact />);
    const name_input = getByPlaceholderText('Name');
    const email_input = getByPlaceholderText('Email');
    const message_input = getByPlaceholderText('Message');
    userEvent.type(email_input, 'JoeDoe@gmail.com');
    userEvent.type(name_input, 'Joe Doe');
    userEvent.type(message_input, 'Here we go again');

    const submit = jest.spyOn(console, 'log');
    submit.mockImplementation();
    const submitBtn = getByRole('button');
    userEvent.click(submitBtn);
    screen.debug();
    expect(submit).toHaveBeenCalledTimes(1);
  });
});
