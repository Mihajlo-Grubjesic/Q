import { Button } from '../../../../components/Button/Button';

interface Props {
  onToggleTheme: () => void;
}

export const ThemeToggler = ({ onToggleTheme }: Props): JSX.Element => {
  return <Button onClick={onToggleTheme}>☀️ 🌙</Button>;
};
