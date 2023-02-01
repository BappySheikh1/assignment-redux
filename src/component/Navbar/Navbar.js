import React from "react";
import { Link } from "react-router-dom";
import { IoIosListBox } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='h-14 bg-indigo-100 rounded-full m-2 max-w-7xl mx-auto px-5'>
    
      <div className="navbar ">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">Star Tech</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
    <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        
    </ul>
  </div>
</div>
    </nav>
  );
};

export default Navbar;
