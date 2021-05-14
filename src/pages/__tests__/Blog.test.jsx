import React from 'react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { render } from '../../redux/__mocks__/testUtils';
import { MemoryRouter, Route } from 'react-router-dom';
import Blog from '../Blog';
import blogsApi from '../../apis/blogsApi';
import mockData from '../__mocks__/blogsMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test Blog Component', () => {
  let store;
  const id = '6075e2d344cb5b06d1a521a5';
  it('Should call getBlogById function', async () => {
    const blog = jest.spyOn(blogsApi, 'getBlogById');
    blogsApi.getBlogById(id);
    expect(blog).toHaveBeenCalledTimes(1);
  });

  it('Should Error Message', async () => {
    const id = '6075e2d344cb5b06d1a521a56';
    store = mockStore({
      Blogs: {
        loading: false,
        blogs: mockData.blogs,
      },
    });

    const { getAllByRole } = render(
      <MemoryRouter initialEntries={[`/blogs/${id}`]}>
        <Route path="/blogs/:id">
          <Provider store={store}>
            <Blog />
          </Provider>
        </Route>
      </MemoryRouter>
    );

    expect(getAllByRole('heading')[0].textContent).toBe('404 | Not Found');
  });

  it('Should return the blog with the specific id', async () => {
    const id = '6075e2d344cb5b06d1a521a5';
    store = mockStore({
      Blogs: {
        loading: true,
        blogs: mockData.blogs,
      },
    });
    const { getAllByRole } = render(
      <MemoryRouter initialEntries={[`/blogs/${id}`]}>
        <Route path="/blogs/:id">
          <Provider store={store}>
            <Blog />
          </Provider>
        </Route>
      </MemoryRouter>
    );
    expect(getAllByRole('heading')[0].textContent).toBe('What is Lorem Ipsum?');
  });

  it('Should return the blog with the specific id', async () => {
    const id = '6075e2d344cb5b06d1a521a5';
    store = mockStore({
      Blogs: {
        loading: true,
        blogs: [],
      },

      Blog: {
        loading: true,
        blog: mockData.blog,
      },
    });
    const { getAllByRole } = render(
      <MemoryRouter initialEntries={[`/blogs/${id}`]}>
        <Route path="/blogs/:id">
          <Provider store={store}>
            <Blog />
          </Provider>
        </Route>
      </MemoryRouter>
    );
    expect(getAllByRole('heading')[0].textContent).toBe('What is Lorem Ipsum?');
  });
});
