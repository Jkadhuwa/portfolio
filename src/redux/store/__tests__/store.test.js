import store from '../';

describe('Test Store', () => {
  const expectedState = {
    Blog: {
      blog: {},
      loading: true,
    },
    Blogs: { blogs: [], loading: true },
    Projects: { loading: true, projects: [] },
    createdBlog: {},
  };
  it('Should return the Default State', () => {
    expect(store.getState()).toEqual(expectedState);
  });
});
