import React from 'react'

const AllRooms = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className="">
      <div className="flex flex-col items-start text-left">
        <h1 className='text-4xl md:text-[40px] font-playfair text-gray-700'>Hotel Rooms</h1>
        <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Take advantage of our wide range of luxurious hotel rooms designed to provide you with the ultimate comfort and relaxation.</p>
      </div>
      </div>

      <div className="">
        {/*filters*/}
      </div>
    </div>
  )
}

export default AllRooms
