import { vi } from 'vitest';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithThemeAndRouter } from '../../../utils/renderWithThemeAndRouter';

import { CommentsMock } from '../../../mocks/comments';
import { PostsMock } from '../../../mocks/posts';
import { UsersMock } from '../../../mocks/users';
import { combinePostsData } from '../../../utils';
import PostDetails from '../PostDetails';

const mockUseParams = vi.fn().mockReturnValue({
  postId: '1',
});

vi.mock('react-router-dom', async () => {
  const actual: object = await vi.importActual('react-router-dom');
  return { ...actual, useParams: () => mockUseParams() };
});

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe('PostDetails', () => {
  it('renders post details', () => {
    const posts = combinePostsData({
      posts: PostsMock,
      users: UsersMock,
      comments: CommentsMock,
    });
    const { container } = renderWithThemeAndRouter(
      <PostDetails posts={posts} />,
    );
    expect(container).toHaveTextContent('Post 1');
    const backButton = screen.getByRole('button', {
      name: /goBack/i,
    });
    expect(backButton).toBeInTheDocument();
    fireEvent.click(backButton);
    expect(window.location.pathname).toEqual('/posts');
    expect(container).toMatchSnapshot();
  });
});
