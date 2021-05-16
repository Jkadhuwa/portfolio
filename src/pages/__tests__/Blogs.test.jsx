import React from 'react';
import { waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Blogs from '../Blogs';
import configureMockStore from 'redux-mock-store';
import { render } from '../../redux/__mocks__/testUtils';
import blogsApi from '../../apis/blogsApi';
import mockData from '../__mocks__/blogsMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('Test Blogs Component', () => {
  let store;
  it('Should call getBlogs function', async () => {
    const blogs = jest.spyOn(blogsApi, 'getBlogs');
    blogsApi.getBlogs();
    expect(blogs).toHaveBeenCalledTimes(1);
  });

  it('Should display loading img', async () => {
    store = mockStore({
      Blogs: {
        loading: true,
      },
    });
    const { getByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Blogs />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() =>
      expect(getByRole('img')).toHaveAttribute('src', 'spinner.gif')
    );
  });
  it('Should Display Message Correctly', async () => {
    store = mockStore({
      Blogs: {
        loading: false,
        status: 'error',
        message: 'No Blogs found at the moment.',
      },
    });
    const { getByText } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Blogs />
        </Provider>
      </BrowserRouter>
    );
    await waitFor(() =>
      expect(getByText(/No Blogs found at the moment./i)).toBeInTheDocument()
    );
  });

  it('Should Display all Blogs Correctly', async () => {
    store = mockStore({
      Blogs: {
        loading: false,
        blogs: mockData.blogs,
      },
    });
    const { getAllByRole } = render(
      <BrowserRouter>
        <Provider store={store}>
          <Blogs />
        </Provider>
      </BrowserRouter>
    );
    expect(getAllByRole('heading')).toHaveLength(2);
  });
});
