"use client"
import { cards, images } from '@/data/data';
import Image from 'next/image';
import React, { useState } from 'react'
import {BsChevronLeft, BsChevronRight} from 'react-icons/bs'
import CategoryCard from '../Category/CategoryCard';

const Banner = () => {
    

    const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-40 md:h-80 px-0 md:px-10 ">
      <button className="absolute mx-2 md:mx-10 left-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full" onClick={prevSlide}>
      <p className='text-3xl text-white'><BsChevronLeft/></p>
      </button>
      <div className='flex justify-center items-center overflow-hidden h-80 '>
      <Image
        src={images[currentIndex]}
        alt="Slider Image"
        className="w-full h-full object-contain md:object-cover object-top"
        height={500}
        width={1000}
      />
      </div>
      
      <button className="absolute mx-2 md:mx-10 right-0 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full" onClick={nextSlide}>
      <p className='text-3xl text-white'><BsChevronRight/></p>
      </button>
       
    </div>
  );

  }

export default Banner