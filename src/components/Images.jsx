import React from 'react'

function Images({ url, desc = ''}) {
  return (
      <div className='flex-2 p-2 '>
          <img src={url} alt={desc} />
    </div>
  )
}

export default Images