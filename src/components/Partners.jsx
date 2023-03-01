import React from 'react';
import Amex from './icons/Amex';
import ApplePay from './icons/ApplePay';
import MasterCard from './icons/MasterCard';
import Paypal from './icons/Paypal';
import Visa from './icons/Visa';

const Partners = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-11/12 flex justify-between items-center py-8 '>
            <div className='basis-1/3'>
                <p className='text-linkColor'>&copy; 2023, MatrixAIMovement</p>
            </div>
            <div className='flex gap-12 items-center justify-between basis-1/3'>
                <div className='p-1 px-3 rounded bg-[#006fcf]'><Amex width={40} height={20} /></div>
                <div className='p-1 px-3 rounded bg-white'><ApplePay height={20} width={20} /></div>
                <div className='p-1 px-3 rounded bg-white'><MasterCard height={20} width={20} /></div>
                <div className='p-1 px-3 rounded bg-white'><Paypal height={20} width={20} /></div>
                <div className='p-1 px-3 rounded bg-white'><Visa height={20} width={20} /></div>
            </div>
            <div className='basis-1/3'></div>
            </div>
        </div>
    )
}

export default Partners