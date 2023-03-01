import React from 'react';
import aboutBg from '../../assets/AboutImg.png'
import Description from './Description';

const Aboutus = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-full space-y-8'>
                {/* image */}
                <div className='w-full'>
                    <img src={aboutBg} />
                </div>
                {/* about us header */}
                <div className='w-full flex justify-center'>
                    <div className='space-y-8 w-3/4'>
                    <p className='text-linkColor font-bold text-5xl tracking-widest flex justify-center'>ABOUT US</p>
                    <div>
                    <p className='text-linkColor tracking-widest flex justify-center items-center text-lg font-semibold'>Discover the Power of Matrix AI Movement: Our Story and Mission to Empower You with </p>
                    <p className='text-linkColor tracking-widest flex justify-center items-center text-lg font-semibold'>Training, Tools and E-commerce Store</p>
                    </div>
                    </div>
                </div>
                <div className='w-full'>
                    <Description />
                </div>

            </div>
        </div>
    )
}

export default Aboutus