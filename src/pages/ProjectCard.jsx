import React from 'react';
import PropTypes from 'prop-types';

function ProjectCard({ projects, id }) {
  const stackMap = {
    all: 0,
    webdev: 1,
    devops: 2,
  };
  return (
    <article className="flex flex-wrap px-8 items-center content-start">
      {id
        ? projects
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
            ))
        : projects.map((project, i) => (
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
  );
}

ProjectCard.propTypes = {
  projects: PropTypes.array,
  id: PropTypes.string,
};

export default ProjectCard;
