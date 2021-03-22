import React from 'react';
import { render, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Blogs from '../Blogs';
import blogsApi from '../../apis/blogsApi';
import mockData from '../__mocks__/blogsMock';

describe('Test Blogs Component', () => {
  afterEach(cleanup);
  it('Should call getBlogs function', async () => {
    const blogs = jest.spyOn(blogsApi, 'getBlogs');
    blogsApi.getBlogs();
    expect(blogs).toHaveBeenCalledTimes(1);
  });

  it('Should call getBlogs function and get All blogs', async () => {
    const blogs = jest.spyOn(blogsApi, 'getBlogs');
    blogs.mockResolvedValue({ data: mockData });
    const { data } = await blogsApi.getBlogs();
    const { getAllByRole } = render(
      <BrowserRouter>
        <Blogs />
      </BrowserRouter>
    );
    expect(data.blogs).toHaveLength(2);
    await waitFor(() =>
      expect(getAllByRole('heading')[0].textContent).toBe(' What is Lorem Ipsum?')
    );
  });
  it('Should render the resume page correctly', async () => {
    const blogs = jest.spyOn(blogsApi, 'getBlogs');
    blogs.mockResolvedValue({ data: { blogs: [] } });
    await blogsApi.getBlogs();
    const { getByText } = render(<Blogs />);
    await waitFor(() =>
      expect(
        getByText(
          /No Blogs found at the moment, something good is cooking. Please come back later!!!/i
        )
      ).toBeInTheDocument()
    );
  });
});
