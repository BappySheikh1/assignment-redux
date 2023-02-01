import React from "react";
import { Link } from "react-router-dom";
import { IoIosListBox } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className='h-14 bg-indigo-100 rounded-full m-2 max-w-7xl mx-auto px-5'>
      <ul className='h-full  mx-auto flex justify-between items-center gap-3 font-semibold text-indigo-900'>
        <h1>Star Tech</h1>

      

        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <Link to='/'>
          <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
            <IoIosListBox className='text-white' />
          </li>
        </Link>
       
      </ul>
    </nav>
  );
};

export default Navbar;
