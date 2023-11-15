import {star} from '../assets/icons'
const PopularShoeCard = ({item}) => {
  return (
    <div className="flex flex-col w-full max-sm:w-full">
      <img src={item.imgURL} />
      <div className="flex mt-5 gap-2.5 justify-start">
        <img className="font-2xl" width={22} height={22} src={star} />
        <p>(4.5)</p>
      </div>
      <h3 className="font-palanquin my-2 font-bold font-2xl">{item.name}</h3>
      <p className='text-coral-red'>{item.price}</p>
    </div>
  );
}

export default PopularShoeCard