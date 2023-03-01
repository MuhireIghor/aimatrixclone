import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { links } from '../data/utils'

const Navbar = () => {
    const [activeref, setActiveref] = useState("");
    const handleNavigate = (link) => {
        setActiveref(link);
    }
    return (
        <div className='w-full flex justify-center'>
            <div className='flex gap-6'>
                {links.map((link, index) => {
                    return (
                        <Link key={index} to={link.reference} onClick={() => handleNavigate(link.reference)} className={` text-linkColor text-md hover:underline decoration:1 ${activeref == link.reference && 'underline decoration-1'}`} >{link.name}</Link>
                    )
                })}
            </div>

        </div>
    )
}

export default Navbar