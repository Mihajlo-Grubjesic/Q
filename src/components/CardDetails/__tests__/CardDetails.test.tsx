import { render, screen } from '@testing-library/react';
import { CardDetails } from '../CardDetails';

describe('CardDetails', () => {
  it('renders card details', () => {
    const { container } = render(
      <CardDetails title="title" subtitle="subtitle" />,
    );
    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('subtitle')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
