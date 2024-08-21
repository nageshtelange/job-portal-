import React from 'react'
import Inputfield from './Inputfield'

function JobPosting({handleChange}) {
    const now = new Date();
    //console.log(now)
    const twentyFourHoursAgo = new Date(now - 24 * 60 * 60 * 1000);
    const sevenDaysAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
    const thirtyDaysAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);
    // console.log(twentyFourHoursAgo)
    //convert date to string
    const twentyFourHoursAgoDate = twentyFourHoursAgo.toISOString().slice(0, 10);
    const sevenDaysAgoDate = sevenDaysAgo.toISOString().slice(0, 10);
    const thirtyDaysAgoDate = thirtyDaysAgo.toISOString().slice(0, 10);
   // console.log(twentyFourHoursAgoDate)
  return (
    <div>
        <h4 className='text-lg font-medium mb-3'>Job Posting Date</h4>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="location" // Consistent name for grouping
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All Time
        </label>
        <Inputfield
         handleChange={handleChange}
         value={twentyFourHoursAgoDate }
         title="Last 24 hours"
         name="test"
        />
        <Inputfield
         handleChange={handleChange}
         value={sevenDaysAgoDate }
         title="Last 7 days"
         name="test"
        />
        <Inputfield
         handleChange={handleChange}
         value={thirtyDaysAgoDate}
         title="Last month"
         name="test"
        />
        </div>
  )
}

export default JobPosting