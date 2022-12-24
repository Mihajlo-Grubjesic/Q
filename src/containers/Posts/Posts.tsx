import { useEffect, useState } from 'react';
import { Card } from '../../components/Card/Card';
import {
  CardsWrapper,
  ContentWrapper,
} from '../../components/Card/styled/Card';
import { Input } from '../../components/Input/Input';
import { NavigationLink } from '../../components/Link/Link';
import { ROUTES } from '../../constants/routes';
import { useDebounce } from '../../hooks/useDebounce';
import { PostData } from '../../types';
import { NoPostsResults, PostsSearch } from './components/PostsList/PostsList';

interface Props {
  posts: PostData[];
}

export const Posts = ({ posts }: Props): JSX.Element => {
  const [filteredPosts, setFilteredPosts] = useState(posts);
  const [searchTerm, setSearchTerm] = useState('');

  const handlePostSearch = (searchTerm: string) => {
    setSearchTerm(searchTerm);
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm === '') {
      setFilteredPosts(posts);
    } else {
      const filterPosts = posts.filter((post) =>
        post.username.toLowerCase().includes(debouncedSearchTerm.toLowerCase()),
      );
      setFilteredPosts(filterPosts);
    }
  }, [debouncedSearchTerm]);

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
        {filteredPosts.map(({ id, title, username, comments }) => (
          <NavigationLink to={`${ROUTES.POSTS}/${id}`} key={id}>
            <Card
              title={title}
              subtitle={username}
              content={
                <ContentWrapper>
                  {comments.map((comment, index) => (
                    <p key={index}>● {comment}</p>
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
