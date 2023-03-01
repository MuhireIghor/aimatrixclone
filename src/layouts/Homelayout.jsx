import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'
import { MdOutlineCancel } from 'react-icons/md'
import AdvertTab from '../components/AdvertTab'
import Logos from '../components/Logos'
import Maincomponent from '../components/Maincomponent'
import Navbar from '../components/Navbar'
import { SearchContext } from '../contexts/SearchProvider'
import goBack from '../assets/goback.webp'
import Mission from '../components/Mission'
import Aboutus from '../components/Aboutus'
import Partners from '../components/Partners'

const Homelayout = () => {
    const { showSearch, openModal, closeModal } = useContext(SearchContext);
    const handleClose = () => {
        closeModal();
    }

    return (
        <div className='bg-primarycolor h-full w-full'>
            {
                showSearch ? (
                    <div className='w-full flex-col items-center h-screen space-y-4 overflow-y-hidden'>
                        <div className=' flex flex-1 items-center w-full justify-center  gap-4 h-1/3 '>
                            {/* search box */}
                            <div className='border-2 border-linkColor p-4 flex justify-between w-3/4 '>
                                <input type={'email'} placeholder="Search" className='text-linkColor placeholder-linkColor w-11/12 bg-primarycolor outline-none border-none ' />
                                <button ><FaSearch className='text-linkColor text-[20px]' /></button>
                            </div>
                            <button onClick={handleClose}>
                                <MdOutlineCancel className='text-2xl text-linkColor' />
                            </button>
                        </div>
                        {/* banner */}
                        <div className='flex flex-col relative w-full items-center h-2/3 '>
                            <img src={goBack} className='w-5/6 absolute ' />
                            <div className='w-full bg-linkColor z-20 h-full opacity-50'></div>

                        </div>

                    </div>
                ) : (
                    <>
                        <AdvertTab />
                        <div className='py-8 flex-col space-y-12'>
                            <Logos />
                            <Navbar />
                        </div>
                        <Outlet />
                        <Mission />
            <Aboutus />
            <div>
                <Partners />
            </div>
                    </>
                )
            }
        </div>
    )
}
export default Homelayout