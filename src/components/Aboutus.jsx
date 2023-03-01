import React from 'react'
import { Link } from 'react-router-dom'
import { BsDiscord, BsInstagram, BsTwitter } from 'react-icons/bs'
import { aboutLinks } from '../data/utils'

const Aboutus = () => {
    return (
        <div className='w-full space-y-12'>
            <div className='flex justify-between px-4'>
                {/* about us */}
                <div className='px-8 space-y-4 basis-1/2'>
                    <p className='text-linkColor text-3xl font-bold'>ABOUT US</p>
                    <div className='flex flex-col space-y-3'>
                        {aboutLinks.map((link, index) => {
                            return (
                                <Link to={link} key={index} className='font-semibold text-linkColor hover:underline decoration'>
                                    {link}
                                </Link>
                            )
                        })}

                    </div>
                </div>
                {/* our mission */}
                <div className='flex basis-1/2'>
                    <div className='space-y-4'>
                        <p className='text-linkColor text-3xl font-bold '>Our Mission</p>
                        <p className='text-linkColor text-lg tracking-wider'>Matrix AI Movement empowers individuals with digital tools and resources to thrive. We offer courses and job opportunities in tech and marketing, encouraging personal growth and development to become your own boss.</p>
                    </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='flex justify-between gap-12 '>
                    <BsInstagram className='text-linkColor text-xl' />
                    <BsTwitter className='text-linkColor text-xl' />
                    <BsDiscord className='text-linkColor text-xl' />
                </div>
            </div>
            <div className='w-full h-[0.5px] bg-linkColor' />
        </div>
    )
}

export default Aboutus