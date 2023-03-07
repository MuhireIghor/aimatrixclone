import React, { useState } from 'react'
import Input from './Input'

const Form = () => {
    const [formData, setFormData] = useState({});
    const handleChange = (e)=>{
     const {name,value} = e.target;
     setFormData((prev)=>(
        {...prev,[name]:value}
     ))   
    }

    return (
        <div className='w-full flex justify-center'>
            <div className='w-5/6 space-y-4'>
                {/* Name and email */}
                <div className='flex w-full justify-between gap-2'>
                    {/* name */}
                    <div className='basis-1/2 border border-linkColor w-1/2 p-4'>
                        <Input className='w-full  text-linkColor ' placeHolder={"Name"} type={"text"} value={formData.name} name="name" handleChange={()=>handleChange()}/>
                    </div>
                    {/* email */}
                    <div className='basis-1/2 border border-linkColor w-1/2 p-4'>
                        <Input className='w-full bg-primarycolor text-linkColor' placeHolder={"Email *"} type={"email"} value={formData.email} name="email" handleChange={()=>handleChange()}/>
                    </div>

                </div>
                {/* phone number */}
                <div className='flex w-full border border-linkColor p-4'>
                    <Input className='w-full bg-primarycolor text-linkColor' placeHolder={"Phone Number"} type={"tel"} value={formData.phoneNo} name="phoneNo" handleChange={()=>handleChange()}/>
                </div>
                {/* comment */}
                <div className='flex w-full border border-linkColor p-4'>
                    <textarea className='w-full bg-primarycolor text-linkColor outline-none placeholder-linkColor' placeholder={"Comment"} type={"text"} value={formData.comment} name="comment" />
                </div>
            </div>
        </div>
    )
}

export default Form;