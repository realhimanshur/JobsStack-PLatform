import React from 'react'
import { Button } from './ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel'

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack"
]

const CategoryCarousel = () => {
    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20 text-center">
                <CarouselContent>
                    {
                        category.map((cat, index) => (
                            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                                <Button className="rounded-full bg-[#7B2CBF] hover:bg-[#5A189A]">{cat}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious className="hover:bg-[#7B2CBF] hover:text-white"></CarouselPrevious>
                <CarouselNext className="hover:bg-[#7B2CBF] hover:text-white"></CarouselNext>
            </Carousel >
        </div >
    )
}

export default CategoryCarousel
