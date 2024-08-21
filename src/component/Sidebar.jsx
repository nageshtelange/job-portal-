import React from 'react';
import Location from './Location'; // Make sure the path is correct
import Salary from './Salary';
import JobPosting from './JobPosting';

const Sidebar = ({ handleChange , handleClick}) => {
  return (
    <div className='space-y-5'>
      <h3 className='text-lg font-bold mb-2'>Filter</h3>
      <Location handleChange={handleChange} /> {/* Pass handleChange here */}
      <Salary handleChange={handleChange} handleClick={handleClick}/>
      <JobPosting handleChange={handleChange}/>
    </div>
  );
}

export default Sidebar;
