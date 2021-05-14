import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../assets/images/menu.svg';
import { ReactComponent as CloseIcon } from '../assets/images/close.svg';

const Navbar = () => {
  const initial = '<MK/>';
  const [isOpen, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        isOpen ? 'h-52 ' : 'h-20'
      } flex flex-wrap px-8 w-screen fixed bg-gray-100  sm:h-20 z-10`}
    >
      <div className="flex-1 flex justify-between my-6 ">
        <div className="w-2 h-32 ">
          <p className="text-xl">{initial}</p>
        </div>
        <div className="">
          <div className="w-6 ml-24 sm:hidden" onClick={closeMenu}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </div>
          <div
            className={`text-center ml-8 sm:block uppercase space-x-4 font-extralight text-lg  ${
              isOpen ? 'flex flex-col   px-0' : 'hidden'
            }`}
            onClick={() => setOpen(false)}
          >
            <NavLink
              className="ml-8 md:border-b border-gray-100 hover:border-yellow-600 "
              activeClassName="is-active text-yellow-600"
              exact
              to="/"
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              className="md:border-b border-gray-100 hover:border-yellow-600"
              activeClassName="is-active text-yellow-600"
              to="/portfolio"
              onClick={() => setOpen(false)}
            >
              Portfolio
            </NavLink>
            <NavLink
              className=" md:border-b border-gray-100 hover:border-yellow-600"
              activeClassName="is-active  text-yellow-600"
              to="/resume"
              onClick={() => setOpen(false)}
            >
              Resume
            </NavLink>
            <NavLink
              className="md:border-b border-gray-100 hover:border-yellow-600"
              activeClassName="is-active  text-yellow-600"
              to="/blogs"
              onClick={() => setOpen(false)}
            >
              Blogs
            </NavLink>
            <NavLink
              className="md:border-b border-gray-100 hover:border-yellow-600"
              activeClassName="is-active  text-yellow-600"
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
