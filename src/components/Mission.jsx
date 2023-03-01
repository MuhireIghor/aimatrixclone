import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const Mission = () => {
    return (
        <div className='w-full space-y-12 py-4 mt-6 '>
            <div className='flex'>
                <div className='flex flex-col w-full flex flex-col justify-center items-center space-y-4'>
                    <p className='text-linkColor text-sm font-medium'>NEWSLETTER FOR G'S</p>
                    <div>
                        <p className='font-bold text-5xl text-linkColor flex justify-center '>WEEKLY KNOWLEDGE EXCLUSIVELY FOR G'S.</p>
                    </div>
                    <div className='w-1/4 border-2 border-linkColor p-4 flex justify-between items-center flex'>
                        <input className='text-linkColor bg-primarycolor outline-none border-none placeholder-linkColor w-5/6' placeholder='Email' />
                        <BsArrowRight className='text-linkColor' />
                    </div>
                </div>
            </div>
            <div className='w-full h-[0.8px] bg-linkColor my-4' />
        </div>
    )
}

export default Mission