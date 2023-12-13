import React from 'react'

const ServiceCard = ({data}) => {
  return (
    <div className='w-1/3 max-sm:w-[90%] shadow-3xl hover:shadow-4xl cursor-pointer h-[300px] m-5 rounded-3xl flex justify-center flex-col gap-5'>
        <div className='bg-coral-red text-xl w-[40px] h-[40px] rounded-full flex justify-center mx-5'>
            <img className='' src={data.imgURL}/>
        </div>
        <h2 className='text-3xl font-bold mx-5 font-palanquin'>{data.label}</h2>
        <p className='text-slate-gray flex-wrap mx-5'>{data.subtext}</p>
    </div>
  )
}

export default ServiceCard