import React from 'react'
import { star } from '../assets/icons'
const Review = ({data}) => {
  return (
    <div className='my-5 flex flex-col justify-center items-center gap-5'>
        <img className='rounded-full' src={data.imgURL} width={100} />
        <p className='flex-wrap text-slate-gray info-text max-w-lg'>{data.feedback}</p>
        <div className='flex gap-2'>
            <img className="font-2xl" width={22} height={22} src={star} />
            <p>({data.rating})</p>
        </div>
        <h1 className='text-black text-2xl font-bold font-palanquin'>{data.customerName}</h1>
    </div>
  )
}

export default Review