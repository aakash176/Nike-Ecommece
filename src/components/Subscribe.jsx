import React from 'react'
import Button from './Button'

const Subscribe = () => {
  return (
    <section id='contact-us' className='flex flex-col max-container max-lg:flex-col gap-10 justify-between item-center'>
      <h2 className='text-4xl font-bold font-palanquin leading-[68px] flex justify-center'>Sign Up for <span className='text-coral-red'>Updates</span> & Newsletter 
      </h2>
      <div className='lg:max-w-[40%] w-full flex items-center border-slate-500 border rounded-full max-sm:flex-col gap-5 p-2.5'>
        <input type='text' className='input' placeholder='subscribe@nike.com' />
        <div className='flex max-sm:w-full max-sm:justify-end items-center'>
          <Button label={'Sign Up'} />
        </div>
      </div>
    </section>
  )
}

export default Subscribe