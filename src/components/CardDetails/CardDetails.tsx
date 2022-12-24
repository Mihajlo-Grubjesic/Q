import { CardSubtitle, CardTitle } from "../Card/styled/Card";
import { CardDetailsWrapper } from "./styled/CardDetails";

interface CardDetailsProps {
  title?: string;
  subtitle?: string;
  content?: JSX.Element;
}

export const CardDetails = ({
  title = "",
  subtitle = "",
  content,
}: CardDetailsProps): JSX.Element => {
  return (
    <>
      <CardDetailsWrapper>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        {content}
      </CardDetailsWrapper>
    </>
  );
};
