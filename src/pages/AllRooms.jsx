import React, { useState } from "react";
import { facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import { CiLocationOn } from "react-icons/ci";

const CheckInOut = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-start cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, label)}
      />
      {label}
    </label>
  );
};

const RadioButton = ({ label, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={(e) => onChange(label)}
      />
      {label}
    </label>
  );
};
const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Bed", "Family suite"];

  const priceRanges = ["$0 - $100", "$100 - $200", "$200 - $300", "$300+"];

  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
  ];

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
              className="max-h-56 md:w-1/2 rounded-xl mt-10 shadow-lg object-cover cursor-pointer"
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
              {/*room amenities*/}
              <div className="flex items-center gap-4 mt-3 mb-6 flex-wrap">
                {room.amenities.map((item, index) => (
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70 "
                    key={index}
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-5 h-5"
                    />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>
              {/*room pice*/}
              <p className="text-xl font-medium to-gray-700">
                ${room.pricePerNight} /night
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* filters*/}
      <div className="bg-white w-80 border border-gray-300 text-gray-700 max-lg:mb-8 min-lg:mt-16">
        <div
          className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300${openFilters && "border-b"}`}
        >
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xs cursor-pointer">
            <span
              onClick={() => setOpenFilters(!openFilters)}
              className="lg:hidden"
            >
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <span className="hidden lg:block">CLEAR</span>
          </div>
        </div>
        <div
          className={`${openFilters ? "h-auto" : "h-0 lg:h-auto"} overflow-hidden transform transition-all duration-700`}
        >
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
            {roomTypes.map((room, index) => (
              <CheckInOut key={index} label={room} />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckInOut key={index} label={range} />
            ))}
          </div>
          <div className="px-5 pt-5 pb-7">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} label={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
