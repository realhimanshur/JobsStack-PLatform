import React from 'react'
import { Link } from 'react-router-dom'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { LogOut, User2 } from 'lucide-react'



const Navbar = () => {
    const user = false
    return (
        <div className='relative mb-20'>
            <div className='bg-[#240046] w-full fixed top-0 z-100  text-white'>

                <div className='flex items-center justify-between mx-auto max-w-7xl h-16'>
                    <div>
                        <h1 className='text-2xl font-bold'>Jobs<span className='text-[#C77DFF]'>Stack</span></h1>
                    </div>
                    <div className='flex items-center gap-20'>
                        <ul className='flex gap-10'>
                            <li className='hover:text-[#C77DFF] cursor-pointer'><Link to="/">Home</Link></li>
                            <li className='hover:text-[#C77DFF] cursor-pointer'><Link to="/jobs">Jobs</Link></li>
                            <li className='hover:text-[#C77DFF] cursor-pointer'><Link to="/about">About Us</Link></li>
                        </ul>
                        {
                            !user ? (
                                <div className='flex items-center'>
                                    <Link to="/login">
                                        <Button className="bg-transparent border-0 cursor-pointer hover:bg-transparent hover:text-[#C77DFF]" >Login</Button>
                                    </Link>
                                    <Link to="/signup">
                                        <Button className="bg-[#7B2CBF] cursor-pointer hover:text-[#C77DFF] hover:bg-transparent">Signup</Button>
                                    </Link>
                                </div>
                            ) : (
                                <Popover>
                                    <PopoverTrigger>
                                        <Avatar className='cursor-pointer'>
                                            <AvatarImage className='invert-100 hover:invert-75' src="src/assets/icons/profile.svg" alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-80 my-3">
                                        <div className='flex items-center space-y-2 gap-4'>
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <h4 className='font-medium'>User Name</h4>
                                                <p className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing... </p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col my-2'>
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <User2 />
                                                <Button variant="link">View Profile</Button>
                                            </div>
                                            <div className='flex w-fit items-center gap-2 cursor-pointer'>
                                                <LogOut />
                                                <Button variant="link">Logout</Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            )
                        }

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar
