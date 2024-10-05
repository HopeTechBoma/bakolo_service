import React from 'react';
import ItemCarousel from '../components/Carousel';

const Hospital = () => {
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return (
    <div>
      <ItemCarousel items={items} />
    </div>
  );
};

export default Hospital;
