import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../components/Spinner';
import NotFound from './404';
import PortfolioButtons from '../components/PortfolioButtons';
import Divider from '../components/Divider';

const ProjectCategoryPage = ({ match }) => {
  const id = match.params.categoryId;
  const stackMap = {
    all: 0,
    webdev: 1,
    devops: 2,
  };
  const { loading, projects } = useSelector((state) => state.Projects);
  if (loading) return <Spinner />;

  if (!projects.length) return <NotFound />;
  return (
    <section className="mt-36 p-2 min-h-screen text-xl font-extralight sm:p-8 sm:mt-28">
      <article className="flex px-8 ">
        <PortfolioButtons match={match} />
      </article>
      <article>
        <Divider />
      </article>
      <article className="flex flex-wrap px-8 content-start">
        {projects
          .filter((project) => project.projectCategory == stackMap[id])
          .map((filteredProjects, i) => (
            <div
              key={i}
              className="flex-1 flex-wrap h-36 p-2 w-60 mb-2 border rounded hover:shadow-md sm:mt-2 sm:w-60 sm:h-56 sm:p-8 mr-4 md:w-64 lg:w-80 xl:w-96 "
            >
              <div className="">{filteredProjects.name}</div>
              <div className="w-60 md:w-60 h-14 overflow-hidden">
                {filteredProjects.description}
              </div>
            </div>
          ))}
      </article>
    </section>
  );
};

ProjectCategoryPage.propTypes = {
  match: PropTypes.object,
};
export default ProjectCategoryPage;
