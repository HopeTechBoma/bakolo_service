import React from 'react';
import { Carousel } from 'react-bootstrap';

const ItemCarousel = ({ items }) => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex justify-content-center">
            <h3>{item}</h3>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ItemCarousel;
