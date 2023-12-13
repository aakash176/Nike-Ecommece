import React from 'react'
import { products } from '../constants';
import PopularShoeCard from './PopularShoeCard';

const PopularProducts = () => {
  return (
    <section id='products' className="flex flex-col">
      <div className='flex flex-col gap-5'>
        <h2 className="text-8xl max-sm:text-4xl font-bold font-palanquin">
          Our <span className="text-coral-red">Popular </span> Products
        </h2>
        <p className='font-palanquin lg:w-full justify-center text-slate-gray mb-3 '>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>
      <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:grid-cols-3'>
        {
          products.map((prod) => (
            <PopularShoeCard item={prod} />
          ))
        }
      </div>
    </section>
  );
}

export default PopularProducts