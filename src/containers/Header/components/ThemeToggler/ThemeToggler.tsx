import { Button } from '../../../../components/Button/Button';

interface Props {
  onToggleTheme: () => void;
}

export const ThemeToggler = ({ onToggleTheme }: Props): JSX.Element => {
  return (
    <Button role="theme-toggler" onClick={onToggleTheme}>
      ☀️ 🌙
    </Button>
  );
};
