import { Card } from "../../components/Card/Card";
import { CardsWrapper } from "../../components/Card/styled/Card";

export const Posts = () => {
  return (
    <CardsWrapper>
      {[...Array(40).keys()].map(() => (
        <Card
          title="Title"
          subtitle="Subtitle"
          content={<div>This is card content</div>}
        />
      ))}
    </CardsWrapper>
  );
};
