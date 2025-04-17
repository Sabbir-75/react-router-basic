import React from 'react';
import { Link, NavLink } from 'react-router';
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className='myClass flex gap-7'>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/gallery'>Gallery</NavLink></li>
          <li><NavLink to='/loader'>Loader</NavLink></li>
          <li><NavLink to='/loaderfun'>LoaderFun</NavLink></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;