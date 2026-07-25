import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const whatsappNumber = "9870519002";
const message = "Hello! I want to chat.";

export default function StickyWhatsApp() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="sticky-whatsapp"
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={40} aria-hidden="true" />
    </a>
  );
}
