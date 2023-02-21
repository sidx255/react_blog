
// tests for Card component
import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import Card from '../index.tsx';
import mockData from '../../../constants/mockData.json';

describe('Card', () => {
  it('should render card', () => {
    // should render card
    const data = mockData[0];
    console.log(' ');
    const { container } = render(<Card {...data} />);
    expect(container.getElementsByClassName('card').length).toBe(1);
  });

  // const { container } = render(<Card {...data}/>);
  // const component = render(<Card {...data}/>);
  // console.log(component);

  // const heart = component.getByTestId('heart');
  // console.log(heart);

  // expect(container.getElementsByClassName('default').length).toBe(1);
  // liked false
  // fireEvent.click(heart);
  // expect(heart).toHaveAttribute('/assets/icons/heart-red.svg');
  // const screen = render(<Card {...data} />);
  // expect(screen.getByAltText('/assets/icons/heart-black.svg')).toBeTruthy();
});
