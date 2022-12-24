import { useEffect, useState } from 'react';
import { API_URL } from '../constants/api';
import { combinePostsData } from '../utils';

export const usePosts = () => {
  const [posts, setPosts] = useState(null);
  const [users, setUsers] = useState(null);
  const [comments, setComments] = useState(null);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        setLoading(true);
        const postsResponse = await fetch(`${API_URL}/posts`);
        const usersResponse = await fetch(`${API_URL}/users`);
        const commentsResponse = await fetch(`${API_URL}/comments`);

        const posts = await postsResponse.json();
        const users = await usersResponse.json();
        const comments = await commentsResponse.json();
        setPosts(posts);
        setUsers(users);
        setComments(comments);
      } catch (err) {
        if (err instanceof Error) setError(err.message);
        setError('Unexpected network error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (posts && users && comments) {
    const postsData = combinePostsData({ posts, users, comments });
    return { postsData, error, loading };
  }
  return { postsData: [], error, loading };
};
