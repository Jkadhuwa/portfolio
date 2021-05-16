import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../redux/actions/projectActions';
import PortfolioButtons from '../components/PortfolioButtons';
import Spinner from '../components/Spinner';
import NotFound from './404';
import Divider from '../components/Divider';
import PropTypes from 'prop-types';
import ProjectCard from './ProjectCard';

function ProjectOverview({ match }) {
  const id = match.params.categoryId;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProjects());
  }, []);

  const { loading, projects, message } = useSelector((state) => state.Projects);

  if (loading) return <Spinner />;
  if (!projects) return <NotFound message={message} />;

  return (
    <section className="mt-36 p-2 min-h-screen text-xl font-extralight sm:p-8 z-20 sm:mt-28 ">
      <article className="flex px-8">
        <PortfolioButtons match={match} />
      </article>
      <article>
        <Divider />
      </article>
      <article>
        <ProjectCard projects={projects} id={id} />
      </article>
    </section>
  );
}

ProjectOverview.propTypes = {
  match: PropTypes.object,
};
export default ProjectOverview;
