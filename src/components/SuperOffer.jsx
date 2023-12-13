import React from 'react'
import { offer } from '../assets/images'
import Button from './Button'
const SuperOffer = () => {
  return (
    <section className='flex max-lg:flex-col-reverse items-center gap-20 max-container w-full'>
      <div className='flex-1 w-full'>
        <img className='object-contain' src={offer} width={1000} height={1000}/>
      </div>
      <div className="flex flex-col mt-1">
        <h3 className="text-8xl font-bold font-palanquin capitalize md:text-4xl max-sm:text-4xl">
          <span className="text-coral-red"> Special </span>
          Offer
        </h3>
        <p className="font-palanquin info-text lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='font-palanquin mt-6 info-text lg:max-w-lg'>Our dedication to detail and excellence ensures your satisfaction</p>
        <div className='flex gap-5 w-full mt-3'>
          <Button className='' label={"View Details"}/>
          <button className='p-5 rounded-full shadow-3xl hover:shadow-4xl border-yellow-600 font-palanquin text-lg max-sm:p-3'>Learn more</button>
        </div>
      </div>
    </section>
  )
}

export default SuperOffer