'use client'
import React, { useState } from "react";

const Template = () => {
  const cards = ["Card 1", "Card 2", "Card 3"]; // Example cards
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (scrollAmount) => {
    setScrollPosition((prevPosition) => prevPosition + scrollAmount);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mt-4 mb-2">Card Viewer</h1>
      <div className="overflow-x-auto whitespace-no-wrap">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${scrollPosition}px)` }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-64 h-40 bg-gray-200 mr-4 inline-flex justify-center items-center"
            >
              {card}
            </div>
          ))}
        </div>
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => handleScroll(300)} // Adjust the scroll amount as needed
        >
          Next Card
        </button>
      </div>
    </div>
  );
};

export default Template;
