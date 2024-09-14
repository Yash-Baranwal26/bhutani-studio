import './App.css';
import React, { Suspense, lazy } from 'react';


const PopupForm = lazy(() => import('./Component/PopupForm'))
const Header = lazy(() => import('./Component/Header'))
const Section = lazy(() => import('./Component/Section'))
const About = lazy(() => import('./Component/About'));
const Form = lazy(() => import('./Component/Form'));
const Amenities = lazy(() => import('./Component/Amenities'));
const Gallery = lazy(() => import('./Component/Gallery'));
const Plan = lazy(() => import('./Component/Plan'));
const Footer = lazy(() => import('./Component/Footer'));
const WhatsAppIcon = lazy(() => import('./Component/WhatsAppIcon'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>} >
      <PopupForm/>
      <Header/>
      <Section/>
      <About/>
      <Form/>
      <Amenities/>
      <Gallery/>
      <Plan/>
      <Footer/>
      <WhatsAppIcon/>
    </Suspense>
  );
}

export default App;
