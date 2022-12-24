import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { HeaderWrapper } from './styled/Header';

interface Props {
  onToggleTheme: () => void;
}

export const Header = ({ onToggleTheme }: Props): JSX.Element => {
  return (
    <HeaderWrapper>
      <ThemeToggler onToggleTheme={onToggleTheme} />
    </HeaderWrapper>
  );
};
