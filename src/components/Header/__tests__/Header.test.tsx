import { render } from '@testing-library/react';

import Header from '../index.tsx';

describe('Header', () => {
  it('should render correctly', () => {
    const screen = render(<Header />);
    console.log(' ');
    expect(screen.asFragment()).toMatchSnapshot();
  });
});