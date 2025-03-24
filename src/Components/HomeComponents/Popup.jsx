import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Popup = ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative w-full max-w-3xl">
        <button
          className="absolute top-0 right-0 m-4 text-white text-2xl z-50"
          onClick={onClose}
        >
          <FaTimes />
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full z-40"
            src={videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Popup;