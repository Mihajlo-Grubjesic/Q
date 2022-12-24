import { useState } from "react";
import { Card } from "../../components/Card/Card";
import {
  CardsWrapper,
  ContentWrapper,
} from "../../components/Card/styled/Card";
import { Input } from "../../components/Input/Input";
import { PostData } from "../../types";
import { PostsSearch } from "./components/PostsList/PostsList";

interface Props {
  posts: PostData[];
}

export const Posts = ({ posts }: Props): JSX.Element => {
  const [filteredPosts, setFilteredPosts] = useState([...posts]);

  const handlePostSearch = (searchTerm: string) => {
    if (searchTerm === "") {
      setFilteredPosts(posts);
    } else {
      const filterPosts = filteredPosts.filter((post) =>
        post.username.toLowerCase().includes(searchTerm.toLowerCase())
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
      <CardsWrapper>
        {filteredPosts.map((post) => (
          <Card
            title={post.title}
            subtitle={post.username}
            key={post.id}
            content={
              <ContentWrapper>
                {post.comments.map((comment) => (
                  <p key={comment}>* {comment}</p>
                ))}
              </ContentWrapper>
            }
          />
        ))}
      </CardsWrapper>
    </>
  );
};
