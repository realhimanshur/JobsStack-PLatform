import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'


const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant='outline' className='rounded-full  w-8 h-8 ' ><Bookmark /></Button>
            </div>

            <div>
                <div className='flex items-center gap-2 my-2'>
                    <Button className='p-1' size='icons' variant='outline'>
                        <Avatar className=''>
                            <AvatarImage className='w-10' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1mRyRqVpd2F7BJp1zntLaMiaygf-oZrN_bw&s' />
                        </Avatar>
                    </Button>
                    <div>
                        <h1 className='font-medium text-lg'>Company Name</h1>
                        <p className='text-sm text-gray-500'>India</p>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-lg my-2'>Title</h1>
                    <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non asperiores nulla, quae voluptatibus culpa cum sequi sed maiores sint, hic voluptate rerum natus velit praesentium aspernatur soluta modi eius tenetur!</p>
                </div>
                <div className='flex items-center gap-2 mt-4'>
                    <Badge className="text-[#7B2CBF] font-bold" variant='secondary'>12 Positions</Badge>
                    <Badge className="text-[#7B2CBF] font-bold" variant='secondary'>Part-Time</Badge>
                    <Badge className="text-[#7B2CBF] font-bold" variant='secondary'>24 LPA</Badge>
                </div>
                <div className='flex items-center gap-4 mt-4'>
                    <Button variant='secondary' className='  hover:bg-gray-200'>Details</Button>
                    <Button className='bg-[#7B2CBF] hover:bg-[#240046] cursor-pointer'>Apply Now</Button>
                </div>
            </div>
        </div>
    )
}

export default Job
