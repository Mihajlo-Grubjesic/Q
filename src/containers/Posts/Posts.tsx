import { Card } from "../../components/Card/Card";
import {
  CardsWrapper,
  ContentWrapper,
} from "../../components/Card/styled/Card";
import { PostData } from "../../types";

interface Props {
  posts: PostData[];
}

export const Posts = ({ posts }: Props): JSX.Element => {
  return (
    <CardsWrapper>
      {posts.map((post) => (
        <Card
          title={post.title}
          subtitle={post.username}
          content={
            <ContentWrapper>
              {post.comments.map((comment) => (
                <p>* {comment}</p>
              ))}
            </ContentWrapper>
          }
        />
      ))}
    </CardsWrapper>
  );
};
