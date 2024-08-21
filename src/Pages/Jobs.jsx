import React from 'react'

function Jobs({result}) {
  return (
    <div>
      <div>
      <h3 className='text-lg font-bold md:2'>{result.length} Jobs</h3>
      </div>
      {result}
     </div>
  )
}

export default Jobs
