import React from 'react';
import {BsArrowRight} from 'react-icons/bs';
import {links } from '../data/utils';

const AdvertTab = () => {
   
  return (
    <div className='w-full  bg-greencolor flex flex-col items-center py-2 '>
        <div className='flex gap-4'>
<p className='font-semibold text-xl tracking-wider text-textcolor'>THE LEGENDARY COURSES COLLECTION  </p>
<button><BsArrowRight className='text-textcolor'/></button>
        </div>
    </div>
  )
}

export default AdvertTab