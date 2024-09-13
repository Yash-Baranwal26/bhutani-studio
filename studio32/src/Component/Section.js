import React from 'react';
import './Section.css'

export default function Section() {
  return (
    <div className='pt-[4rem] w-screen overflow-hidden ' id='home'>
      <div className='max-w-full'>

        {/* Replace 'images/section.jpg' with your GIF file */}
        <img src='images/sectiongif.gif' alt='Animated GIF' className='section-img w-full h-auto object-cover'/>
      </div>
    </div>
  );
}