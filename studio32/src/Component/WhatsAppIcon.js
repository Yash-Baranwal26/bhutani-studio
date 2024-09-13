// src/Components/WhatsAppIcon.js
import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import './WhatsAppIcon.css';

const WhatsAppIcon = () => {
  return (
    <a href="https://wa.me/+917042316503" target="_blank" rel="noopener noreferrer" className="whatsapp-icon">
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppIcon;
