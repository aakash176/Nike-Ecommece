import React from 'react'

const Button = ({label, iconURL, width}) => {
  return (
    <button className='flex gap-2 justify-center
    items-center text-lg text-white leading-none font-montserrat
     bg-coral-red px-7 py-4 rounded-full border border-coral-red max-sm:w-[150px] max-sm:px-2 max-sm:py-2'>
        {label}
        {
        iconURL && 
        <img className='w-5 h-5 ml-2 rounded-full' src={iconURL} />
        }
    </button>
  );
}

export default Button