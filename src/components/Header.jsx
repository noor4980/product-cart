import React from 'react'

function Header() {
  return (
      <div className="relative h-32 bg-cyan-300">
          <img src="/assets/images/bg-header-desktop.svg"
              className='absolute inset-0 w-full h-full object-cover '
              alt="Header Background"/>
    </div>
  )
}

export default Header