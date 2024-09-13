import React from 'react'
import './Section.css'

export default function Plan() {
  return (
    <div className='pt-[4.5rem] w-screen overflow-hidden '>
        <h2 className='text-4xl font-bold text-center pt-5 underline'>Floor Plan</h2>
      <div className='max-w-full'>
        <img src='images/floor-plan.jpg' alt='Animated GIF' className='section-img w-full h-auto object-cover'/>
      </div>
    </div>
  )
}
