import { Post, User, Comment, PostData } from "../types";

export const combinePostsData = ({
  posts,
  users,
  comments,
}: {
  posts: Post[];
  users: User[];
  comments: Comment[];
}): PostData[] => {
  return posts.map((post) => {
    const username =
      users.find((user) => user.id === post.userId)?.username ?? "";
    const postComments = comments
      .filter((comment) => comment.postId === post.id)
      .map((comment) => comment.body);
    return { ...post, username, comments: postComments };
  });
};
