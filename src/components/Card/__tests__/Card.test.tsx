import { render, screen } from '@testing-library/react';
import { Card } from '../Card';

describe('Card', () => {
  it('renders card', () => {
    const { container } = render(<Card title="title" subtitle="subtitle" />);
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('subtitle')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
