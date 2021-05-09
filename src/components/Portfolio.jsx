import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProjectOverview from '../pages/ProjectsOverview';
import ProjectCategoryPage from '../pages/ProjectCategoryPage';

function Portfolio({ match }) {
  return (
    <Router>
      <Switch>
        <Route exact path={`${match.path}`} component={ProjectOverview} />

        <Route
          exact
          path={`${match.path}/:categoryId`}
          component={ProjectCategoryPage}
        />
      </Switch>
    </Router>
  );
}
Portfolio.propTypes = {
  match: PropTypes.object,
};

export default Portfolio;
