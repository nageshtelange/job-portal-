import React from 'react'
import Button from './Button'
import Inputfield from './Inputfield'

function Salary({handleChange,handleClic}) {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Salary</h4>
        <div className='mb-4'>
            <Button OnClickHandler={handleClic} value="" title="Hourly"/>
            <Button OnClickHandler={handleClic} value="Monthly" title="Monthly"/>
            <Button OnClickHandler={handleClic} value="Yearly" title="Yearly"/>
        </div>
        <div>
        <label className="sidebar-label-container">
          <input
            type="radio"
            name="location" // Consistent name for grouping
            value=""
            onChange={handleChange}
          />
          <span className="checkmark"></span>All
        </label>
        <Inputfield
         handleChange={handleChange}
         value={30}
         title="< 30000k"
         name="test"
        />
        <Inputfield
         handleChange={handleChange}
         value={50}
         title="< 50000k"
         name="test"
        />
        <Inputfield
         handleChange={handleChange}
         value={80}
         title="< 80000k"
         name="test"
        />
        <Inputfield
         handleChange={handleChange}
         value={100}
         title="< 1000000k"
         name="test"
        />
        </div>
    </div>
  )
}

export default Salary