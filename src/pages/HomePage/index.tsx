import React from 'react';
import Card from '../../components/Card';
import mockData from '../../constants/mockData.json';
import imgPath from '../../assets/images/*.png';

import './HomePage.css';

const HomePage = () => {
  mockData.forEach((post, idx) => {
    if (!post.image.startsWith('/assets/images/')) 
      mockData[idx].image = '/assets/images/' + post.image;
    //console.log(imgPath);
    //console.log(post.image);
  });
    
  return (
    <div className='body-padding home-page'>
      {mockData.map((post, idx) => (
        <Card key={idx} {...post} />
      ))}
    </div>
  );
};

export default HomePage;