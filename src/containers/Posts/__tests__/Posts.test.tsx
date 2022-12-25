import { fireEvent, screen } from '@testing-library/react';
import { renderWithThemeAndRouter } from '../../../utils/renderWithThemeAndRouter';
import { vi } from 'vitest';

import { CommentsMock } from '../../../mocks/comments';
import { PostsMock } from '../../../mocks/posts';
import { UsersMock } from '../../../mocks/users';
import { combinePostsData } from '../../../utils';
import Posts from '../Posts';

describe('Posts', () => {
  it('renders posts', () => {
    const posts = combinePostsData({
      posts: PostsMock,
      users: UsersMock,
      comments: CommentsMock,
    });
    const { container } = renderWithThemeAndRouter(<Posts posts={posts} />);

    const clickedPostIdMock = 3;
    const clickedPostMock = posts.find((post) => post.id === clickedPostIdMock);
    fireEvent.click(screen.getByText(clickedPostMock?.title ?? ''));
    expect(window.location.pathname).toEqual(`/posts/${clickedPostMock?.id}`);

    expect(container).toMatchSnapshot();
  });
});
