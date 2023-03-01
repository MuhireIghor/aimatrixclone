import React from 'react';
import { Link } from 'react-router-dom';

const Notfoundpage = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-primarycolor'>
      <div className='space-y-4'>
        <p className='text-linkColor text-3xl '>404 Page Not Found</p>
        <Link to="/" className='text-linkColor flex justify-center font-semibold'>Navigate Back to Home</Link>

      </div>

    </div>
  )
}

export default Notfoundpage