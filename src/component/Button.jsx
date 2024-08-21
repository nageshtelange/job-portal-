import React from 'react'

function Button({OnClickHandler,value,title}) {
  return (
    <button onClick={OnClickHandler} value={value} className='px-4 py-2 border text-base hover:bg-blue hover:text-white'>
        {title}
    </button>
  )
}

export default Button