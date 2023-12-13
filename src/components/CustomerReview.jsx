import { reviews } from '../constants'
import Review from './Review'
const CustomerReview = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-5">
      <h2 className="text-4xl font-bold font-palanquin">What Our <span className="text-coral-red">Customers</span> Say?</h2>
      <p className="text-slate-gray flex-wrap max-w-lg info-text">Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      <div className='mt-10 flex max-sm:flex-col'>
        {
          reviews.map((rev) => (
            <Review data={rev}/>
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReview