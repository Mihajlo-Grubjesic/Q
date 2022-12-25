import { ThemeToggler } from './components/ThemeToggler/ThemeToggler';
import { LanguageToggler } from './components/LanguageToggler/LanguageToggler';
import { HeaderWrapper } from './styled/Header';
import { withMessage } from '../../components/HOC/withMessage';

interface Props {
  onToggleTheme: () => void;
  message?: string;
}

const Header = ({ onToggleTheme, message = '' }: Props): JSX.Element => {
  console.log(`${message} Header`);

  return (
    <HeaderWrapper>
      <LanguageToggler />
      <ThemeToggler onToggleTheme={onToggleTheme} />
    </HeaderWrapper>
  );
};

export default withMessage(Header);
