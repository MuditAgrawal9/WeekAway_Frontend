import React from 'react'
import {BsChatSquareDots} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
      <div className='flex items-center justify-center'>
            <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
            <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
        </div>
    </div>
  )
}

export default Footer
