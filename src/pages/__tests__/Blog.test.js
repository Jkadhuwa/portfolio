import React from 'react';
import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Blog from '../Blog';
import blogsApi from '../../apis/blogsApi';
import mockData from '../__mocks__/blogsMock';

describe('Test Blog Component', () => {
  const id = '6075e2d344cb5b06d1a521a5';
  it('Should call getBlogById function', async () => {
    const blog = jest.spyOn(blogsApi, 'getBlogById');
    blogsApi.getBlogById(id);
    expect(blog).toHaveBeenCalledTimes(1);
  });

  it('Should call getBlogById function and get a single blog', async () => {
    const blog = jest.spyOn(blogsApi, 'getBlogById');
    blog.mockResolvedValue({ data: mockData });
    const { data } = await blogsApi.getBlogById(id);
    const { getAllByRole } = render(
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    );
    await waitForElementToBeRemoved(() => screen.getByRole('img'));
    expect(data.blog).toBe(mockData.blog);
    await waitFor(() =>
      expect(getAllByRole('heading')[0].textContent).toBe(
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,'
      )
    );
  });
});
