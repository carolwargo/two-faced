import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import Consult from "../../../assets/images/Consult.png"
import Support from "../../../assets/images/Support.png"
import Train from "../../../assets/images/Train.png"
import "../ServiceCarousel/style.css"

function MyCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 4);
    }, 3000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item>
    <img src={Support} alt='support-button' />
    {/* Add your design content here */}
  </Carousel.Item>
  <Carousel.Item>
    <img src={Consult} alt='consult-button' />
    {/* Add your consulting content here */}
  </Carousel.Item>
  <Carousel.Item>
    <img src={Train} alt='train-button' />
    {/* Add your support content here */}
  </Carousel.Item>
  <Carousel.Item>
   
    {/* Add your support content here */}
  </Carousel.Item>
</Carousel>

  );
}

export default MyCarousel;
