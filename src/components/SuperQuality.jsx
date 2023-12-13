import React from 'react'
import {shoe8} from '../assets/images'
import Button from './Button'
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex sm:w-full max-sm:flex-col">
      <div className="flex flex-col sm:w-3/4 ">
        <h3 className="text-8xl font-bold font-palanquin capitalize mt-10 md:text-4xl max-sm:text-4xl">
          We Provide you
          <span className="text-coral-red"> Super Quality </span>
          shoes.
        </h3>
        <p className="font-palanquin info-text lg:max-w-lg mt-10">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='font-palanquin mt-6 info-text lg:max-w-lg'>Our dedication to detail and excellence ensures your satisfaction.</p>
        <div className='flex gap-5 w-full mt-10'>
          <Button label={"View Details"}/>
          <button className='p-5 rounded-full shadow-3xl hover:shadow-4xl border-yellow-600'>Learn more</button>

        </div>
      </div>
      <div className='md:mt-10'>
        <img src={shoe8} />
      </div>
    </section>
  );
}

export default SuperQuality