import React from 'react';
import Card from '../../components/Card';
// import mockData from '../../constants/mockData.json';
import makeRequest from '../../utils/makeRequest';
import { GET_BLOG_DATA, UPDATE_BLOG_DATA } from '../../constants/apiEndPoints';

import './HomePage.css';

import { BlogPostContext } from '../../contexts/BlogPostContext';
// import { BlogPostProvider } from '../../contexts/BlogPostContext';

const HomePage = () => {
  // const [data, setData] = React.useState<any[]>([]);
  const { data, setData } = React.useContext(BlogPostContext);

  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA).then((res) => {
    // makeRequest('http://localhost:8080/blog-posts', 'GET').then((res) => {

      console.log(res);
      setData(res);
      //console.log(data);
      //data.length > 0 && console.log(data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  // React.useEffect(()=>{
  //   console.log(data);
  // }, [data]);
  // useeffect to update the data
  // React.useEffect(() => {
  //   const interval = setInterval(() => {
  //     makeRequest(GET_BLOG_DATA).then((res) => {
  //       console.log(res);
  //       setData(res.data);
  //     }).catch((err) => {
  //       console.log(err);
  //     });
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, data);
  

  // wait for the data to be fetch

  // mockData.forEach((post, idx) => {
  //   if (!post.image.startsWith('/assets/images/')) 
  //     mockData[idx].image = '/assets/images/' + post.image;
  //   //console.log(imgPath);
  //   //console.log(post.image);
  // });

  return (
    <div className='body-padding home-page'>
        
      {
        // data.length > 0?
        // (data && data.length > 1)?
        (data != null && data.length > 1)?
        // data.length > 0?
          data.map((post, idx) => (
            // <Card key={idx} image={post.image} date={post.date} readingTime={post.readingTime} title={post.title} claps={post.claps} liked={post.liked} description={post.description} />
            <Card key={idx} {...post} />
          )): <div>Loading...</div>

      
      }
    </div>
  );
};

export default HomePage;