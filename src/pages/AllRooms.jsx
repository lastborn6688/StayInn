import React from "react";
import { facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import { CiLocationOn } from "react-icons/ci";

const AllRooms = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div className="">
        <div className="flex flex-col items-start text-left">
          <h1 className="text-4xl md:text-[40px] font-playfair text-gray-700">
            Hotel Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our wide range of luxurious hotel rooms designed
            to provide you with the ultimate comfort and relaxation.
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div
            className="flex flex-col md:flex-row items-start gap-6 border-b border-gray-300 last:pb-30 last:border-0"
            key={room._id}
          >
            <img
              onClick={() => {
                navigate(`/room/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel image"
              title="View Room Detail"
              className="max-h-56 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-800">{room.hotel.city}</p>
              <p
                onClick={() => {
                  navigate(`/room/${room._id}`);
                  scrollTo(0, 0);
                }}
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">{room.reviews}</p>
              </div>
              <div className="flex items-center gap-1 text-gray-800 mt-2 text-sm">
                <CiLocationOn />
                <span>{room.hotel.address}</span>
              </div>
              <div className="">
                {room.amenities.map((item, index) => (
                  <div>
                  <img
                    src={facilityIcons[item]}
                    alt={item}
                    className="w-5 h-5"
                  />
                  <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* filters*/}
      <div className=""></div>
    </div>
  );
};

export default AllRooms;
