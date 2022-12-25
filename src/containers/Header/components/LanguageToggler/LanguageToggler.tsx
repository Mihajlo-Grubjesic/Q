import { Button } from '../../../../components/Button/Button';
import i18n from '../../../../i18n/config';

export const LanguageToggler = (): JSX.Element => {
  return (
    <Button
      onClick={() =>
        i18n.language === 'en'
          ? i18n.changeLanguage('es')
          : i18n.changeLanguage('en')
      }>
      🇬🇧 🇪🇸
    </Button>
  );
};
