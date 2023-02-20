import { render } from '@testing-library/react';
import Footer from '../index.tsx';

describe('Footer', () => {
  it('should render correctly', () => {
    const screen = render(<Footer />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});