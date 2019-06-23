import React from 'react';
import { Carousel } from 'antd-mobile';

const Com = ({ memberbannerlist }) => {
  console.log(hhh)
  return (
  <Carousel
    autoplay
    infinite
    style={{ display: 'inline-block', width: '100%', height: 200 }}
  >
    {memberbannerlist.map((val, index) => (
        <img
          src={ val.image.src }
          alt=""
          key=""
          style={{ width: '100%', verticalAlign: 'top' }}
        />
    ))}
  </Carousel>
)}

export default Com;