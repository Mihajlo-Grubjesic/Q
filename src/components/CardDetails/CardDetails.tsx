import { ROUTES } from "../../constants/routes";
import { Button } from "../Button/Button";
import { CardSubtitle, CardTitle } from "../Card/styled/Card";
import { NavigationLink } from "../Link/Link";
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
      <NavigationLink to={ROUTES.POSTS}>
        <Button>← Go Back</Button>
      </NavigationLink>
    </>
  );
};
