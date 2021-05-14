import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../redux/actions/projectActions';
import PortfolioButtons from '../components/PortfolioButtons';
import Spinner from '../components/Spinner';
import NotFound from './404';
import Divider from '../components/Divider';
import PropTypes from 'prop-types';

function ProjectOverview({ match }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const { loading, projects } = useSelector((state) => state.Projects);

  if (loading) return <Spinner />;
  if (!projects.length) return <NotFound />;

  return (
    <section className="mt-36 p-2 min-h-screen text-xl font-extralight sm:p-8 z-20 sm:mt-28 ">
      <article className="flex px-8">
        <PortfolioButtons match={match} />
      </article>
      <article>
        <Divider />
      </article>
      <article className="flex flex-wrap px-8 items-center content-start">
        {projects.map((project, i) => (
          <div
            key={i}
            className="flex-1 flex-wrap h-36 p-2 w-60 mb-2 border rounded hover:shadow-md sm:mt-2 sm:w-60 sm:h-56 sm:p-8 mr-4 md:w-64 lg:w-80 xl:w-96 "
          >
            <div className="">{project.name}</div>
            <div className="w-60 md:w-60 h-14 overflow-hidden">
              {project.description}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}

ProjectOverview.propTypes = {
  match: PropTypes.object,
};
export default ProjectOverview;
