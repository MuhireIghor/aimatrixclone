import React from 'react'

const Input = ({type,placeHolder,value,handleChange}) => {
  return (
<input className='bg-primarycolor outline-none w-full  placeholder-linkColor' type={type} value={value} onChange={handleChange} placeholder={placeHolder} />
  )
}

export default Input