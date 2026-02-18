import React from 'react'

const Footer = () => {
  return (
    <div className='font-bold text-md flex mt-60'>
        <div>
          Made by @codrops  
          <div className='text-sm font-normal'>© {new Date().getFullYear()} All rights reserved</div>
        </div>
        <div className='ml-auto'>All demos</div>
    </div>
  )
}

export default Footer