import { useParams } from "react-router-dom";
import { ContentWrapper } from "../../components/Card/styled/Card";
import { CardDetails } from "../../components/CardDetails/CardDetails";
import { PostData } from "../../types";

interface Props {
  posts: PostData[];
}

export const PostDetails = ({ posts }: Props): JSX.Element => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id.toString() === postId);
  return (
    <CardDetails
      title={post?.title}
      subtitle={post?.username}
      content={
        <ContentWrapper>
          {post?.comments.map((comment) => (
            <p key={comment}>* {comment}</p>
          ))}
        </ContentWrapper>
      }
    />
  );
};
