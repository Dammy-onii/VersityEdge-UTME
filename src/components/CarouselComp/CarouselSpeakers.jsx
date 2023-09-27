import React, { useState } from 'react';

import "./carousel.css"

const CarouselSpeakers = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel">
        <div className="speakersArrow">
            <div className="arrowCircle">
              <span onClick={prevSlide} class="material-symbols-outlined">arrow_back</span>
            </div>
            <div className="arrowCircle">
              <span  class="material-symbols-outlined" onClick={nextSlide}>arrow_forward</span>
            </div>
          </div>
      
      <div className="slide">
        {items[currentIndex]}
      </div>

      <div className="indicators">
        {items.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'active' : ''}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSpeakers;
