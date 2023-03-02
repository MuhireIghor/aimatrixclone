import React from 'react';
import '../styles/Loader.css';

const LoadingPage = () => {
  return (
    <div className='w-full h-screen flex bg-primarycolor items-center justify-center '>
      <div className='space-y-12'>
      <div className='loader'></div>
      <p className='text-linkColor text-lg tracking-wider animate-pulse flex justify-center'>Loading</p>

      </div>

    </div>
  )
}

export default LoadingPage