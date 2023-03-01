import React from 'react'
import Form from './Form'

const Contacts = () => {
  return (
    <div className='w-full h-auto space-y-12'>
      {/* title contact */}
      <div className='w-full flex justify-start pl-[480px]'>
        <p className='text-6xl font-bold text-linkColor tracking-widest'>Contact</p>
      </div>
      {/* form */}
      <div className='w-full flex justify-center'>
<Form />
      </div>

    </div>
  )
}

export default Contacts