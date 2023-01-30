import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <div className='col-span-2 bg-indigo-200 h-[calc(100vh-25px)] p-5 rounded-lg'>
      <ul className='flex gap-3  flex-col h-full'>
        <li>Admin Dashboard</li>
        <li>
          <Link to='/dashboard'>Product List</Link>
        </li>
        
        <li className='mt-auto'>
          <Link to='/'> Back to Home </Link>
        </li>
      </ul>
    </div>
        </div>
    );
};

export default Sidebar;