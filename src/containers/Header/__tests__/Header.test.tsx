import { vi } from 'vitest';
import { renderWithThemeAndRouter } from '../../../utils/renderWithThemeAndRouter';
import Header from '../Header';

describe('Header', () => {
  it('renders header', () => {
    const { container } = renderWithThemeAndRouter(
      <Header onToggleTheme={() => vi.fn()} />,
    );
    expect(container).toMatchSnapshot();
  });
});
