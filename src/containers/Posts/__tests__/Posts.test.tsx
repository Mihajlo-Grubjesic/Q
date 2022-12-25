import { vi } from 'vitest';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithThemeAndRouter } from '../../../utils/renderWithThemeAndRouter';

import { CommentsMock } from '../../../mocks/comments';
import { PostsMock } from '../../../mocks/posts';
import { UsersMock } from '../../../mocks/users';
import { combinePostsData } from '../../../utils';
import Posts from '../Posts';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));
describe('Posts', () => {
  const posts = combinePostsData({
    posts: PostsMock,
    users: UsersMock,
    comments: CommentsMock,
  });
  it('renders posts and test click on post redirection', () => {
    const { container } = renderWithThemeAndRouter(<Posts posts={posts} />);

    const clickedPostIdMock = 3;
    const clickedPostMock = posts.find((post) => post.id === clickedPostIdMock);
    fireEvent.click(screen.getByText(clickedPostMock?.title ?? ''));
    expect(window.location.pathname).toEqual(`/posts/${clickedPostMock?.id}`);

    expect(container).toMatchSnapshot();
  });

  it('test posts no results filter action', async () => {
    renderWithThemeAndRouter(<Posts posts={posts} />);
    const searchPostInput = screen.getByRole('textbox');

    fireEvent.change(searchPostInput, {
      target: { value: 'No existing username' },
    });
    await waitFor(() => {
      expect(screen.getByText('No results')).toBeInTheDocument();
    });
  });
});
