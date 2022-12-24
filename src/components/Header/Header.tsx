import { ThemeToggler } from '../ThemeToggler/ThemeToggler';
import { HeaderWrapper } from './styled/Header';
import { withMessage } from '../HOC/withMessage';

interface Props {
  onToggleTheme: () => void;
  message?: string;
}

const Header = ({ onToggleTheme, message = '' }: Props): JSX.Element => {
  console.log(`${message} Header`);

  return (
    <HeaderWrapper>
      <ThemeToggler onToggleTheme={onToggleTheme} />
    </HeaderWrapper>
  );
};

export default withMessage(Header);
