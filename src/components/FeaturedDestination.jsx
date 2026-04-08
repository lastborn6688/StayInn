import React from 'react'
import { roomsDummyData } from '../assets/assets'
import Hotelcard from './Hotelcard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

const FeaturedDestination = () => {

    const navigate = useNavigate()

  return (
    <div className='text-gray-700 flex flex-col items-center px-6 md:px-16 lg:px-16 bg-slate-50'>

        <Title title='Featured Destination' subtitle='Discover, compare, and book the perfect stay anywhere in the world with ease and confidence.' />

      <div className="flex flex-wrap items-center justify-center gap-6 mt-20">
        {roomsDummyData.slice(0,4).map((room, index) =>(
            <Hotelcard key={room._id} room={room} index={index} />
        ))}
      </div>
      <button className="my-16 px-4 py-2 border border-gray-300 bg-[rgb(206,176,135)] text-white font-medium rounded hover:bg-[rgb(206,176,135)]/70 transition-colors cursor-pointer" onClick={() => {navigate('/rooms'); scrollTo(0,0)}}>
        View All Destinations
      </button>
    </div>
  )
}

export default FeaturedDestination
