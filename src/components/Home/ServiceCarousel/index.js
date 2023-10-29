import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../ServiceCarousel/style.css"

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <h3>Contract Work</h3>
        {/* Add your design content here */}
      </Carousel.Item>
      <Carousel.Item>
        <h3>Consulting</h3>
        {/* Add your consulting content here */}
      </Carousel.Item>
      <Carousel.Item>
        <h3>Training</h3>
        {/* Add your support content here */}
      </Carousel.Item>
      <Carousel.Item>
        <h3>Support</h3>
        {/* Add your support content here */}
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;
