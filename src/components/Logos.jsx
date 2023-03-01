import React,{useContext} from 'react';
import {FaSearch,FaCartPlus} from 'react-icons/fa';
import logo from '../assets/loge.webp'
import SearchProvider, { SearchContext } from '../contexts/SearchProvider';
const Logos = () => {
const {showSearch,openModal,closeModal}= useContext(SearchContext);
const handleModal = ()=>{
  openModal();
}

  return (
    <div className='w-full flex p-4 px-20 justify-center'>
      
        <div className='w-full flex justify-between '>
            <button onClick={handleModal} ><FaSearch className='text-textcolor text-icon' /></button>
            <img src={logo} className='w-12 h-12' />
            <button><FaCartPlus className='text-textcolor text-icon' /></button>
        </div>
    </div>
  )
}

export default Logos