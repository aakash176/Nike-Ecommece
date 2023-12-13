import React from 'react'
import { services } from '../constants'
import ServiceCard from './ServiceCard'
const Services = () => {
  return (
    <section className='w-[90%] md:w-full max-sm:grid max-sm:grid-cols-1  flex'>
      {
        services.map((service) => (
          <ServiceCard data={service} />
        ))
      }
    </section>
  )
}

export default Services