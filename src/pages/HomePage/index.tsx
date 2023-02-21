import React from 'react';
import Card from '../../components/Card';
// import mockData from '../../constants/mockData.json';
// import makeRequest from '../../utils/makeRequest';
import axios from 'axios';

import './HomePage.css';

const HomePage = () => {
  const [data, setData] = React.useState<any[]>([]);

  React.useEffect(() => {
    axios.get('http://localhost:8080/blog-posts').then((res) => {
      console.log(res);
      setData(res.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  console.log(data);

  // mockData.forEach((post, idx) => {
  //   if (!post.image.startsWith('/assets/images/')) 
  //     mockData[idx].image = '/assets/images/' + post.image;
  //   //console.log(imgPath);
  //   //console.log(post.image);
  // });
    
  return (
    <div className='body-padding home-page'>
      {data.map((post, idx) => (
        // <Card key={idx} image={post.image} date={post.date} readingTime={post.readingTime} title={post.title} claps={post.claps} liked={post.liked} description={post.description} />
        <Card key={idx} {...post} />
      ))}
    </div>
  );
};

export default HomePage;