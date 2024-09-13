import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Gallery() {
  return (
    <div className='pt-3 bg-gray-300' id='gallery'>
        <div className="text-center">
        {/* <p className="text-8xl font-bold relative inline-block text-[100px] leading-[60px] text-[#F5F5F5] font-extrabold z-10 mt-3">
          Gallery
        </p> */}
        <h2 className="text-4xl font-bold text-center pt-5 underline">
          Gallery
        </h2>
      </div>

      <div className="mx-auto p-4">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {/* 1st image */}
          <div className="w-full overflow-hidden">
            <LazyLoadImage effect="blur" src="images/gallery1.jpg" alt="Amenity 1" className="w-full h-full object-cover rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl" />
          </div>

          {/* 2nd image spans two rows on medium screens and larger */}
          <div className="col-span-1 sm:row-span-2">
            <LazyLoadImage effect="blur" src="images/gallery2.jpg" alt="Amenity 2" className="w-full h-[50vh] md:h-[90vh] object-cover rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl" />
          </div>

          {/* 3rd image */}
          <div className="col-span-1">
            <LazyLoadImage effect="blur" src="images/gallery3.jpg" alt="Amenity 3" className="w-full h-full object-cover rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl" />
          </div>

          {/* 4th image */}
          <div className="col-span-1">
            <LazyLoadImage effect="blur" src="images/gallery4.jpg" alt="Amenity 4" className="w-full h-full object-cover rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl" />
          </div>

          {/* 5th image */}
          <div className="col-span-1">
            <LazyLoadImage effect="blur" src="images/gallery5.jpg" alt="Amenity 5" className="w-full h-full object-cover rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-xl" />
          </div>
        </div>
      </div>
    </div>
  )
}
