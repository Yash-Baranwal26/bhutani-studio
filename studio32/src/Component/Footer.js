import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      className="bg-gray-900 text-gray-400 py-10 px-5 md:px-20"
      id="footer"
    >
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start">
          <img className="logo mb-4" src="images/nav-logo.png" alt="Logo" />
        </div>

        {/* Middle Section */}
        <div className="w-full md:w-1/3 flex flex-col justify-center items-center text-center md:text-left">
          <p className="font-bold text-2xl text-white mb-2">Contact Us</p>
          <a href="tel:+919990190505" className="text-4xl font-bold">9990190505</a>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center text-center">
          <p className="text-white mb-2 font-bold text-2xl">Follow Us On</p>
          <a
            href="https://www.instagram.com/estatexlandbase?igshid=Zm53ejUyZjZ1c3N6"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="ml-2"
          >
            <FaInstagram className="text-2xl hover:text-pink-400 transition-colors cursor-pointer text-white" />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center">
        <p>
          Marketed By - This site is for information purpose only and should not
          be treated as the official information. RERA
          NO:RC/HARERA/GGM/2203/1798/2023/216 Project Registration No :- 
          DLRERA2024P0003. All rights for logo & images are reserved
          to the developer. Thank you for visiting our website. This disclaimer
          ("Disclaimer") is applicable to this website and all microsites and
          websites owned by us. By using or accessing this website you agree
          with the Disclaimer without any qualification or limitation. © 2024
          OMAXE. A luxury commercial property of the highest standards being developed in
          Dwarka
        </p>
      </div>
      <p className="text-center">Disclaimer - <Link to='/policy' className="text-gray-400 hover:text-gray-500">Privacy Policy</Link></p>
    </footer>
  );
}
