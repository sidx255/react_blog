
import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import ClapBtn from '../index.tsx';
import mockData from '../../../constants/mockData.json';

// tests for IconButton component
describe('Clap', () => {
  it('should render clap', () => {
    // should render clap
    const data = mockData[0];
    const { container } = render(<ClapBtn {...data} />);
    expect(container.getElementsByClassName('card-actions-icon').length).toBe(1);
  });
});

