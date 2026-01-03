import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 hover:bg-[rgb(215,192,236)] hover:scale-105 hover:cursor-pointer transition duration-150 ease-in'>
            <div>
                <h1 className='text-lg font-medium'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, possimus!</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className="text-[#7B2CBF] font-bold" variant='secondary'>12 Positions</Badge>
                <Badge className="text-[#7B2CBF] font-bold" variant='secondary'>Part-Time</Badge>
                <Badge className="text-[#7B2CBF] font-bold" variant='secondary'>24 LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards
