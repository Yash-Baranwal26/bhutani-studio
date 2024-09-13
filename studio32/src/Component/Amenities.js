import React from 'react'
import { FaDumbbell,FaBed, FaSwimmer, FaShoppingBag, FaShippingFast } from "react-icons/fa";
import { FaFilm } from "react-icons/fa6";

export default function Amenities() {
    const facilities = [
        { icon: <FaDumbbell size={50}/> , label: 'Gym', } ,
    {icon: <FaBed size={50}/> , label: 'Luxury Rooms' },
    {icon: <FaSwimmer size={50}/> , label: 'Swimming pool' },
    {icon: <FaShoppingBag size={50}/> , label: 'Shoping stop' },
    {icon: <FaShippingFast size={50}/> , label: 'Better Connectivity' },
    {icon: <FaFilm size={50}/> , label: 'Entertainment Zone' }
    ]

  return (
    <div className="pt-3 px-4 md:px-8 bg-gray-300" id='amenities'>
      <div className="text-center mb-8">
        {/* <h2 className="text-4xl sm:text-5xl md:text-8xl font-extrabold text-[#F5F5F5] relative inline-block z-10" id='amenities'>
        Amenities
        </h2> */}
        <h2 className="text-5xl font-bold text-center pt-5 underline">
          Amenities
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center justify-center p-4 m-2 shadow-lg rounded-full transition-all duration-500 ease-in-out 
                ${index % 2 === 0 ? 'bg-gray-200' : 'bg-[#C38EB4]'} 
                hover:bg-[#E8BCB9] hover:shadow-xl`}
          >
            <div className="transition-transform transform group-hover:translate-y-[-5px] duration-300">
              {facility.icon}
            </div>
            <p className="mt-4 text-lg font-semibold text-black transition-colors duration-300 group-hover:text-white">
              {facility.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
