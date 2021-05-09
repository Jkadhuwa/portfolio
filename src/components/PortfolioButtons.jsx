import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

function PortfolioButtons({ match: { path } }) {
  const pathname = path.split('/:')[0];

  return (
    <div className="grid gap-y-7 sm:flex justify-center justify-evenly text-base">
      <div>
        <NavLink
          to={`${pathname}`}
          className="shadow-inner text-center border bg-gray-100 rounded py-2 px-4 hover:text-yellow-600 text-gray-500 mr-2 "
          activeClassName="is-active text-yellow-600"
          exact
        >
          SHOW ALL
        </NavLink>
      </div>
      <div className="">
        <NavLink
          to={`${pathname}/webdev`}
          className="shadow-inner text-center border bg-gray-100 rounded py-2 px-2 hover:text-yellow-600 text-gray-500 mr-2"
          activeClassName="is-active text-yellow-600"
          exact
        >
          WEB DEVELOPMENT
        </NavLink>
      </div>
      <div className="">
        <NavLink
          to={`${pathname}/devops`}
          className="shadow-inner text-center border bg-gray-100 rounded py-2 px-2 hover:text-yellow-600 text-gray-500 "
          activeClassName="is-active text-yellow-600"
          exact
        >
          DEVOPS
        </NavLink>
      </div>
    </div>
  );
}
PortfolioButtons.propTypes = {
  match: PropTypes.object,
};

export default PortfolioButtons;
