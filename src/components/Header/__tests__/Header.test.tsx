import { render } from '@testing-library/react';

import Header from '../index.tsx';

describe('Header', () => {
  it('should render correctly', () => {
    const screen = render(<Header />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});