import { render } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders button', () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
