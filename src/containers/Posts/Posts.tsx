import { useState } from 'react';
import { Card } from '../../components/Card/Card';
import {
  CardsWrapper,
  ContentWrapper,
} from '../../components/Card/styled/Card';
import { Input } from '../../components/Input/Input';
import { NavigationLink } from '../../components/Link/Link';
import { ROUTES } from '../../constants/routes';
import { PostData } from '../../types';
import { NoPostsResults, PostsSearch } from './components/PostsList/PostsList';

interface Props {
  posts: PostData[];
}

export const Posts = ({ posts }: Props): JSX.Element => {
  const [filteredPosts, setFilteredPosts] = useState([...posts]);

  const handlePostSearch = (searchTerm: string) => {
    if (searchTerm === '') {
      setFilteredPosts(posts);
    } else {
      const filterPosts = posts.filter((post) =>
        post.username.toLowerCase().includes(searchTerm.toLowerCase()),
      );
      setFilteredPosts(filterPosts);
    }
  };

  return (
    <>
      <PostsSearch>
        <Input
          onChange={(e) => handlePostSearch(e.target.value)}
          placeholder="Search posts by username"
        />
      </PostsSearch>
      {filteredPosts.length === 0 && (
        <NoPostsResults>No results</NoPostsResults>
      )}
      <CardsWrapper>
        {filteredPosts.map((post) => (
          <NavigationLink to={`${ROUTES.POSTS}/${post.id}`} key={post.id}>
            <Card
              title={post.title}
              subtitle={post.username}
              content={
                <ContentWrapper>
                  {post.comments.map((comment, index) => (
                    <p key={index}>* {comment}</p>
                  ))}
                </ContentWrapper>
              }
            />
          </NavigationLink>
        ))}
      </CardsWrapper>
    </>
  );
};
