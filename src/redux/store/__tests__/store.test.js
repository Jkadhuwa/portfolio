import store from '../';

describe('Test Store', () => {
  const expectedState = {
    Blog: {
      loading: true,
    },
    Blogs: {
      loading: true,
    },
    Projects: {
      loading: true,
    },
    createdBlog: {},
  };

  it('Should return the Default State', () => {
    expect(store.getState()).toEqual(expectedState);
  });
});
