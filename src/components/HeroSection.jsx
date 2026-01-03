import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
const HeroSection = () => {
    return (
        <div className='text-center'>

            <div className='flex flex-col gap-7 my-10'>
                <span className='mx-auto px-4 py-2  rounded-full bg-gray-100 text-[#F83002] font-medium'>Jobs, Stacked Right for You 🫵</span>
                <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#7B2CBF]'>Dream Jobs</span></h1>
                <p>JobStack connects ambitious professionals with top employers, making job discovery and hiring faster, smarter, and easier.</p>
                <div className=' flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center mx-auto gap-4'>
                    <input
                        type="text"
                        placeholder="Find your dream jobs"
                        style={{
                            border: "none",
                            outline: "none",
                            background: "transparent",
                        }}
                        className="w-full bg-transparent border-none outline-none "
                    />

                    <Button className='rounded-r-full h-12 w-15 bg-[#7B2CBF] hover:bg-[#5A189A]'>
                        <Search />
                    </Button>

                </div>
            </div>

        </div>
    )
}

export default HeroSection
