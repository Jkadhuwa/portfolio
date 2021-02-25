import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as FacebookIcon } from '../assets/images/facebook.svg';
import { ReactComponent as TwitterIcon } from '../assets/images/twitter.svg';
import { ReactComponent as LinkedinIcon } from '../assets/images/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/images/github.svg';

function Footer() {
  return (
    <footer className="md:flex justify-center bg-gray-800 h-80 ">
      <section className="mx-auto text-white mt-8 ">
        <article className="flex justify-center mt-8  text-2xl">
          <div className="space-x-8">{'<MK/>'} Musinda Kadhuwa.</div>
        </article>
        <article className="flex justify-center mt-8 ">
          <div className="grid grid-cols-1 text-left md:flex uppercase space-x-8 ">
            <NavLink className="hover:text-yellow-600 ml-8 md:ml-0" exact to="/">
              About
            </NavLink>
            <NavLink className="hover:text-yellow-600 " to="/portfolio">
              Portfolio
            </NavLink>
            <NavLink className="hover:text-yellow-600" to="/resume">
              Resume
            </NavLink>
            <NavLink className="hover:text-yellow-600" to="/blogs">
              Blogs
            </NavLink>
            <NavLink className="hover:text-yellow-600" to="/contact">
              Contact
            </NavLink>
          </div>
        </article>
        <article className="mt-8">
          <div className="flex justify-center space-x-4">
            <a
              href="https://www.facebook.com/msinda.kadhuwa"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-white rounded-full w-7 h-7"
            >
              {<FacebookIcon className="my-1 mx-2" />}
            </a>
            <a
              href="https://twitter.com/jkadhuwa"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-white rounded-full w-7 h-7"
            >
              {<TwitterIcon className="mx-2 my-1  w-4 h-5" />}
            </a>
            <a
              href="https://www.linkedin.com/in/kadhuwa-musinda-a39346123/"
              rel="noreferrer noopener"
              className="bg-white rounded-full w-7 h-7"
            >
              {<LinkedinIcon className="mx-2 my-1 w-3 h-4" />}
            </a>
            <a
              href="https://github.com/Jkadhuwa"
              className="bg-white rounded-full w-7 h-7"
              target="_blank"
              rel="noreferrer noopener"
            >
              {<GithubIcon className="mx-2 my-1" />}
            </a>
          </div>
        </article>
        <article className="mt-8">
          <div className=" flex justify-center">
            {'Copyright © '}
            Musinda Kadhuwa {new Date().getFullYear()}
          </div>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
