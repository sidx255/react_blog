import React from 'react';
import ClapBtn from '../Clap';
import { getFormattedDateFromUtcDate } from '../../utils/utcDate';

import './Card.css';

export default function Card({
  image, date, reading_time, title, claps, liked, description, imgAlt = '',
}: {
  image: string; date: string; reading_time: string; 
  imgAlt?: string; title: string; claps: number; liked: boolean; 
  description: string;
}) {
  const [isLiked, setIsLiked] = React.useState(liked);

  const heartSrc = isLiked
    ? '/assets/icons/heart-red.svg'
    : '/assets/icons/heart-black.svg';

  return (
    <div className='card'>
      <img src={image} alt={imgAlt} className='card-img' />
      <p className='card-meta-info card-padding'>
        <span>{reading_time}</span>
        <span>{getFormattedDateFromUtcDate(date)}</span>
      </p>
      <h3 className='card-title card-padding'>{title}</h3>
      <p className='card-content card-padding'>{description}</p>

      <div className='vertical-spacer'></div>

      <hr className='card-margin' />
      <div className='card-padding card-actions'>
        <div className='card-actions'>
          <ClapBtn iconPath='/assets/icons/clapping.svg' />
          <span>{claps}</span>
        </div>

        <div className='card-actions'>
          <ClapBtn data-testid='heart'
            iconPath={heartSrc}
            onClick={(e: React.MouseEvent) => {
              console.log(e);
              setIsLiked(!isLiked);
            }}
          />
        </div>
      </div>
    </div>
  );
}
