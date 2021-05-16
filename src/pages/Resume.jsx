import React from 'react';

const Resume = () => {
  return (
    <section className="w-9/12 align-self-center min-h-screen mb-80 font-extralight">
      <article
        className="grid h-screen w-screen mb-24"
        style={{
          backgroundImage:
            'url(https://res.cloudinary.com/uninet/image/upload/v1621090970/hvsu2wj6myasf5a5r7ih.jpg)',
        }}
        alt="background"
      >
        <div className="-ml-0 text-white font-extralight w-24  md: mt-24 ml-24 w-80  ">
          <p className="ml-24 text-2xl">
            Have a look at my detailed resume or download a PDF version of the same.
          </p>
        </div>
        <div className="mt-50 ml-24">
          <button
            className="flex border border-gray-400 p-2 text-white text-xl font-extralight
           rounded shadow   hover:border-yellow-600 focus:outline-none"
          >
            <img
              src="https://res.cloudinary.com/uninet/image/upload/v1621096978/inttxs84jwu8yszxrsxc.png"
              className="h-7 animate-bounce z-0 "
            />
            Download Resume
          </button>
        </div>
      </article>
      <article className=" ml-12 flex flex-wrap flex-col  md:ml-24 ">
        <div className="text-3xl h-0.5">
          <h2>Skills</h2>
        </div>
        <div className="ml-4 mt-12 text-lg lg:ml-80 space-y-2">
          <ul className="mb-8 space-y-2 md:grid grid-cols-2 gap-2 text-xl">
            <div>
              <li>React.js</li>
              <li>Node.js</li>
              <li>Ansible</li>
              <li>Shell Scripting</li>
              <li>Javascript</li>
              <li>Sass</li>
              <li>Mongodb</li>
              <li>PostgreSQL</li>
              <li>MySQL</li>
              <li>Tailwindcss</li>
            </div>
            <div>
              <li>BEM Naming Methodology</li>
              <li>Version Control system (GIT)</li>
              <li>Agile Methodology</li>
              <li>Test-Driven Development</li>
              <li>CI/CD</li>
            </div>
          </ul>
        </div>
      </article>
      <article className=" ml-12 flex flex-wrap md:flex-col lg:ml-24 ml-2">
        <div className="text-3xl h-0.5">
          <h2>Work Experience</h2>
        </div>
        <div className="ml-4 mt-12 text-xl md:ml-80 mt-4">
          <div>
            <h4 className="text-2xl font-normal">Software Engineer.</h4>
            <h5 className="text-xl font-light whitespace-normal mb-2">
              Andela Rwanda Limited, Kigali-Rwanda. July,2019 - April,2020.
            </h5>

            <p className="text-xl  whitespace-normal">
              Collaborated with other engineers from different Andela Campuses to
              work on projects both for the company and its partners.
            </p>
          </div>
        </div>
        <div className="ml-4 mt-4 text-xl lg:ml-80">
          <div className="whitespace-normal">
            <h4 className="text-2xl font-normal">DevOps Engineer.</h4>
            <h5 className="text-xl mt-4 font-light mb-2">
              Tecflax Solutions Limited,Nairobi-Kenya. September, 2018 - June,2019.
            </h5>
            <p className="text-xl font-extralight ">
              Collaborated with other engineers around the world to come up with
              solutions for assigned tasks, Designed Shell scripts to manage
              web-server and Ansible playbooks to automate processes like
              configuration, application deployment and task management in
              web-servers.
            </p>
          </div>
        </div>
      </article>
      <article className="ml-12 mt-4 flex flex-wrap flex-col justify-items-center md:ml-24">
        <div className="text-3xl h-0.5">
          <h2>Education</h2>
        </div>
        <div className="ml-4 mt-4 lg:ml-80">
          <div className="mt-8 ">
            <h3 className="text-2xl font-normal">Andela Bootcamp.</h3>
            <h4 className="text-xl font-light mb-2">
              Andela Rwanda Limited, Kigali-Rwanda. May,2019
            </h4>
            <p className="text-xl font-extarlight">
              Learnt full-stack web development using Javascript, and usage of Git
              workflow, usage of Agile methodology for project management and
              different technologies and methods like TDD, CI/CD.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-normal ">
              Bachelor of Science in Computer Science.
            </h3>
            <h4 className="text-xl font-light mb-2">
              Kabarak University, Nakuru-Kenya. Jan-03-2014 to Dec-22-2017
            </h4>
            <p className="text-xl font-extarlight">
              Majored in Software and Software Development. Managed to score a Second
              Class Honors upper Division.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Resume;
