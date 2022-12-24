import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { ContentWrapper } from '../../components/Card/styled/Card';
import { CardDetails } from '../../components/CardDetails/CardDetails';
import { NavigationLink } from '../../components/Link/Link';
import { ROUTES } from '../../constants/routes';
import { PostData } from '../../types';

interface Props {
  posts: PostData[];
}

export const PostDetails = ({ posts }: Props): JSX.Element => {
  const { postId } = useParams();
  const post = posts.find((post) => post.id.toString() === postId);
  const { title = '', username = '', comments = [] } = post ?? {};
  return (
    <>
      <CardDetails
        title={title}
        subtitle={username}
        content={
          <ContentWrapper>
            {comments.map((comment: string) => (
              <p key={comment}>● {comment}</p>
            ))}
          </ContentWrapper>
        }
      />
      <NavigationLink to={ROUTES.POSTS}>
        <Button>← Go Back</Button>
      </NavigationLink>
    </>
  );
};
