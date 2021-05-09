import React from 'react';
import { waitFor } from '@testing-library/react';
import { render } from '../../redux/__mocks__/testUtils';
import { StaticRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import ProjectsOverview from '../ProjectsOverview';
import mockData from '../__mocks__/projectsMock';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Test ProjectOverview Component', () => {
  let store;
  const match = {
    path: '/portfolio',
  };
  it('Should display Spinner Image correctly', async () => {
    store = mockStore({
      Projects: {
        loading: true,
      },
    });
    const { getByRole } = render(
      <Provider store={store}>
        <ProjectsOverview match={match} />
      </Provider>
    );
    await waitFor(() =>
      expect(getByRole('img')).toHaveAttribute('src', 'spinner.gif')
    );
  });

  it('Should Display Message Correctly', async () => {
    store = mockStore({
      Projects: {
        loading: false,
        projects: [],
      },
    });
    const { getAllByRole } = render(
      <Provider store={store}>
        <ProjectsOverview match={match} />
      </Provider>
    );
    expect(getAllByRole('heading')[0].textContent).toBe('404 | Not Found');
  });

  it('Should Display all Projects Correctly', async () => {
    store = mockStore({
      Projects: {
        loading: false,
        projects: mockData,
      },
    });
    const { getAllByRole } = render(
      <StaticRouter>
        <Provider store={store}>
          <ProjectsOverview match={match} />
        </Provider>
      </StaticRouter>
    );
    expect(getAllByRole('article')).toHaveLength(3);
  });
});
