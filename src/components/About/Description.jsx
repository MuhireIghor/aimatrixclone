import React from 'react'
import { descphrases } from '../../data/utils'

const Description = () => {
    return (
        <div className='w-full flex justify-center'>
            <div className='w-2/4 bg-description p-12 space-y-4'>
                {
                    descphrases.map((phrase, index) => {
                        return (
                            <div key={index} className="">
                                <p className='text-linkColor font-semibold text-lg'>-{phrase}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Description