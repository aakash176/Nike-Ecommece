import React from 'react'
import {shoe8} from '../assets/images'
import Button from './Button'
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex sm:w-full max-sm:flex-col">
      <div className="flex flex-col sm:w-3/4 mt-1">
        <h3 className="text-8xl font-bold font-palanquin capitalize md:text-4xl max-sm:text-4xl">
          We Provide you
          <span className="text-coral-red"> Super Quality </span>
          shoes.
        </h3>
        <p className="font-palanquin info-text lg:max-w-lg">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='font-palanquin mt-6 info-text lg:max-w-lg'>Our dedication to detail and excellence ensures your satisfaction</p>
        <Button label={"View Details"}/>
      </div>
      <div className='md:mt-10'>
        <img src={shoe8} />
      </div>
    </section>
  );
}

export default SuperQuality