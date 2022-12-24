import { CardWrapper, CardSubtitle, CardTitle } from './styled/Card';

interface CardProps {
  title: string;
  subtitle: string;
  content?: JSX.Element;
}

export const Card = ({ title, subtitle, content }: CardProps): JSX.Element => {
  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardSubtitle>{subtitle}</CardSubtitle>
      {content}
    </CardWrapper>
  );
};
