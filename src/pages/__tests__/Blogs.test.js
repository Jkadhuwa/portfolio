import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Blogs from '../Blogs';
import blogsApi from '../../apis/blogsApi';
import mockData from '../__mocks__/blogsMock';

describe('Test Blogs Component', () => {
  it('Should render the resume page correctly', async () => {
    const { getByText } = render(<Blogs />);
    expect(
      getByText(
        /No Blogs found at the moment, something good is cooking. Please come back later!!!/i
      )
    ).toBeInTheDocument();
  });

  it('Should call getBlogs function', async () => {
    const blogs = jest.spyOn(blogsApi, 'getBlogs');
    blogs.mockImplementation();
    blogsApi.getBlogs();
    expect(blogs).toHaveBeenCalledTimes(1);
  });

  it('Should call getBlogs function and get All blogs', async () => {
    const blogs = jest.spyOn(blogsApi, 'getBlogs');
    blogs.mockReturnValue(mockData);
    const data = blogsApi.getBlogs();
    const { getAllByRole } = render(<Blogs />);
    const heading = getAllByRole('heading');
    expect(data).toHaveLength(2);
    expect(heading[0].textContent).toBe(' What is Lorem Ipsum?');
  });
});
